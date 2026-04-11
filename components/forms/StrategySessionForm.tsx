'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { cn } from '@/lib/utils'
import { buildCalendlyUrl } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

// ─── Constants ────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'pain_primer_v1'

const SYMPTOMS = [
  'Operations running on spreadsheets or manual processes',
  'Approvals happen over WhatsApp or email chains',
  'Different departments have different versions of the same data',
  'Monthly reporting takes 3 or more days to produce',
  'Cannot see what is happening across locations in real time',
  'Growing headcount without growing capacity',
  'Previous tech project failed or was abandoned',
  'Off-the-shelf software does not fit our specific workflows',
  'Key team members hold too much knowledge in their heads',
  'Customer complaints are increasing due to operational errors',
  'Finance and operations are not in sync',
  'New employees take too long to onboard and get up to speed',
  'Compliance or audit pressure to modernise records',
  'Board or investor pressure to demonstrate operational maturity',
  'We see clear AI opportunities but have no clear starting point',
]

const MOTIVATION_LABELS: Record<number, string> = {
  1: 'Just exploring',
  2: 'Early awareness',
  3: 'Interested but no urgency',
  4: 'Pain is real, timing is unclear',
  5: 'Actively evaluating',
  6: 'Ready to move in 3 months',
  7: 'Ready to move in 6 weeks',
  8: 'Urgent — this costs us every week',
  9: 'Urgent — we have budget and sign-off',
  10: 'Critical — this cannot wait',
}

// ─── Types ────────────────────────────────────────────────────────────────────

type Screen = 1 | 2 | 3 | 'result'

type RoutingBucket = 'hot' | 'warm' | 'ambivalent' | 'cold'

interface FormState {
  symptoms: string[]
  costText: string
  previousAttempts: string
  motivation: number
  firstname: string
  lastname: string
  email: string
  company: string
  jobtitle: string
  timeline: string
  budget: string
  source: string
}

const DEFAULT_STATE: FormState = {
  symptoms: [],
  costText: '',
  previousAttempts: '',
  motivation: 5,
  firstname: '',
  lastname: '',
  email: '',
  company: '',
  jobtitle: '',
  timeline: '',
  budget: '',
  source: '',
}

// ─── Validation ───────────────────────────────────────────────────────────────

const contactSchema = z.object({
  firstname: z.string().min(1, 'First name is required'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().min(1, 'Company name is required'),
})

// ─── Routing ─────────────────────────────────────────────────────────────────

function scoreToBucket(score: number): RoutingBucket {
  if (score >= 8) return 'hot'
  if (score >= 6) return 'warm'
  if (score >= 4) return 'ambivalent'
  return 'cold'
}

// ─── Component ───────────────────────────────────────────────────────────────

interface StrategySessionFormProps {
  className?: string
}

export function StrategySessionForm({ className }: StrategySessionFormProps) {
  const router = useRouter()
  const [screen, setScreen] = useState<Screen>(1)
  const [form, setForm] = useState<FormState>(DEFAULT_STATE)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bucket, setBucket] = useState<RoutingBucket | null>(null)
  const topRef = useRef<HTMLDivElement>(null)

  // ── Restore from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<FormState>
        setForm((prev) => ({ ...prev, ...parsed }))
      }
    } catch {
      // ignore parse errors
    }
  }, [])

  // ── Persist to localStorage on every change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(form))
    } catch {
      // ignore quota errors
    }
  }, [form])

  function scrollToTop() {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  function toggleSymptom(symptom: string) {
    setForm((prev) => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptom)
        ? prev.symptoms.filter((s) => s !== symptom)
        : [...prev.symptoms, symptom],
    }))
    if (errors.symptoms) setErrors((prev) => ({ ...prev, symptoms: undefined }))
  }

  // ── Screen navigation
  function goToScreen2() {
    if (form.symptoms.length === 0) {
      setErrors({ symptoms: 'Select at least one symptom to continue.' })
      return
    }
    setScreen(2)
    scrollToTop()
  }

  function goToScreen3() {
    if (!form.costText.trim()) {
      setErrors({ costText: 'Please describe the cost — even a rough estimate helps.' })
      return
    }
    setScreen(3)
    scrollToTop()
  }

  // ── Final submit
  async function handleSubmit() {
    const validation = contactSchema.safeParse(form)
    if (!validation.success) {
      const fieldErrors: typeof errors = {}
      for (const issue of validation.error.issues) {
        const key = issue.path[0] as keyof FormState
        fieldErrors[key] = issue.message
      }
      setErrors(fieldErrors)
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch('/api/strategy-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          symptoms: form.symptoms,
          cost_text: form.costText,
          previous_attempts: form.previousAttempts,
          motivation_score: form.motivation,
          firstname: form.firstname,
          lastname: form.lastname,
          email: form.email,
          company: form.company,
          jobtitle: form.jobtitle,
          timeline: form.timeline,
          budget: form.budget,
          source: form.source,
        }),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(data.error ?? 'Submission failed')
      }

      const data = (await res.json()) as { bucket: RoutingBucket }
      const resolvedBucket = data.bucket ?? scoreToBucket(form.motivation)
      setBucket(resolvedBucket)

      // Clear localStorage after successful submit
      try {
        localStorage.removeItem(STORAGE_KEY)
      } catch {
        /* ignore */
      }

      if (resolvedBucket === 'hot' || resolvedBucket === 'warm') {
        // Redirect to Calendly with pre-filled fields
        const calendlyUrl = buildCalendlyUrl(form.firstname, form.lastname, form.email)
        router.push(calendlyUrl)
      } else {
        setScreen('result')
        scrollToTop()
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      toast.error(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  // ── Progress indicator
  const currentStep = screen === 'result' ? 3 : (screen as number)

  return (
    <div ref={topRef} className={cn('w-full', className)}>
      {/* Progress bar */}
      {screen !== 'result' && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center gap-2 flex-1 last:flex-none">
                <div
                  className={cn(
                    'flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold shrink-0 transition-colors',
                    currentStep >= step
                      ? 'bg-[var(--color-brand-blue)] text-white'
                      : 'bg-surface-2 text-muted'
                  )}
                >
                  {currentStep > step ? <CheckCircle2 className="h-4 w-4" /> : step}
                </div>
                {step < 3 && (
                  <div
                    className={cn(
                      'flex-1 h-1 rounded-full transition-colors',
                      currentStep > step ? 'bg-[var(--color-brand-blue)]' : 'bg-surface-2'
                    )}
                  />
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-muted">
            {screen === 1 && 'Step 1 of 3 — What is the pain?'}
            {screen === 2 && 'Step 2 of 3 — What does it cost you?'}
            {screen === 3 && 'Step 3 of 3 — How urgent is this?'}
          </p>
        </div>
      )}

      {/* ── Screen 1: Symptoms ─────────────────────────────────────────────── */}
      {screen === 1 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-1">What is breaking in your operations?</h2>
            <p className="text-sm text-muted mb-5">
              Select all that apply. Be honest — we have heard them all.
            </p>

            <div className="grid grid-cols-1 gap-2">
              {SYMPTOMS.map((symptom) => {
                const checked = form.symptoms.includes(symptom)
                return (
                  <button
                    key={symptom}
                    type="button"
                    onClick={() => toggleSymptom(symptom)}
                    className={cn(
                      'flex items-start gap-3 p-4 rounded-xl border text-left text-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-blue)]',
                      checked
                        ? 'border-[var(--color-brand-blue)] bg-[var(--color-brand-blue)]/5 text-[var(--text)]'
                        : 'border-default bg-surface hover:bg-surface-2 text-secondary'
                    )}
                  >
                    <span
                      className={cn(
                        'mt-0.5 w-4 h-4 rounded border shrink-0 flex items-center justify-center transition-colors',
                        checked
                          ? 'bg-[var(--color-brand-blue)] border-[var(--color-brand-blue)]'
                          : 'border-default'
                      )}
                    >
                      {checked && (
                        <svg
                          className="w-3 h-3 text-white"
                          viewBox="0 0 12 12"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M2 6l3 3 5-5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    {symptom}
                  </button>
                )
              })}
            </div>

            {errors.symptoms && <p className="mt-3 text-sm text-red-500">{errors.symptoms}</p>}
          </div>

          <Button type="button" size="lg" className="w-full" onClick={goToScreen2}>
            Continue
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>

          <p className="text-xs text-muted text-center">
            Your answers are saved in your browser as you go.
          </p>
        </div>
      )}

      {/* ── Screen 2: Cost ─────────────────────────────────────────────────── */}
      {screen === 2 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-1">
              What does it cost you to stay as you are?
            </h2>
            <p className="text-sm text-muted mb-5">
              Think in real terms: headcount hours, missed revenue, delay costs, manual rework. Even
              a rough estimate helps us understand what we are solving for.
            </p>

            <label htmlFor="costText" className="block text-sm font-medium mb-2">
              If this problem is still unsolved 12 months from now, what happens?{' '}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              id="costText"
              value={form.costText}
              onChange={(e) => update('costText', e.target.value)}
              rows={5}
              placeholder="Example: We waste about 3 days every month stitching together reports. Our sales team loses 2 hours per day chasing approvals. We lost a client last quarter because of a dispatch error that would not happen with a proper system."
              className="w-full rounded-xl border border-default bg-surface px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] resize-none"
            />
            {errors.costText && <p className="mt-1 text-sm text-red-500">{errors.costText}</p>}
          </div>

          <div>
            <label htmlFor="previousAttempts" className="block text-sm font-medium mb-2">
              Have you tried to fix this before? What happened?{' '}
              <span className="text-muted font-normal">(optional)</span>
            </label>
            <textarea
              id="previousAttempts"
              value={form.previousAttempts}
              onChange={(e) => update('previousAttempts', e.target.value)}
              rows={3}
              placeholder="Previous vendors, internal builds, off-the-shelf tools, Odoo, SAP — anything. What broke?"
              className="w-full rounded-xl border border-default bg-surface px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] resize-none"
            />
          </div>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="flex-1"
              onClick={() => {
                setScreen(1)
                scrollToTop()
              }}
            >
              Back
            </Button>
            <Button type="button" size="lg" className="flex-1" onClick={goToScreen3}>
              Continue
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* ── Screen 3: Contact + Motivation ─────────────────────────────────── */}
      {screen === 3 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-1">Almost done. Who are we talking to?</h2>
            <p className="text-sm text-muted mb-5">
              We read every submission before the call. Adrian personally reviews these.
            </p>
          </div>

          {/* Contact fields */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstname" className="block text-sm font-medium mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstname"
                type="text"
                value={form.firstname}
                onChange={(e) => update('firstname', e.target.value)}
                className="w-full rounded-xl border border-default bg-surface px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]"
              />
              {errors.firstname && <p className="mt-1 text-sm text-red-500">{errors.firstname}</p>}
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm font-medium mb-2">
                Last Name
              </label>
              <input
                id="lastname"
                type="text"
                value={form.lastname}
                onChange={(e) => update('lastname', e.target.value)}
                className="w-full rounded-xl border border-default bg-surface px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Work Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              className="w-full rounded-xl border border-default bg-surface px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company <span className="text-red-500">*</span>
              </label>
              <input
                id="company"
                type="text"
                value={form.company}
                onChange={(e) => update('company', e.target.value)}
                className="w-full rounded-xl border border-default bg-surface px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]"
              />
              {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
            </div>
            <div>
              <label htmlFor="jobtitle" className="block text-sm font-medium mb-2">
                Role / Title
              </label>
              <input
                id="jobtitle"
                type="text"
                value={form.jobtitle}
                onChange={(e) => update('jobtitle', e.target.value)}
                className="w-full rounded-xl border border-default bg-surface px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                When are you hoping to start?
              </label>
              <select
                id="timeline"
                value={form.timeline}
                onChange={(e) => update('timeline', e.target.value)}
                className="w-full rounded-xl border border-default bg-surface px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]"
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP</option>
                <option value="3_months">Within 3 months</option>
                <option value="3_6_months">3 to 6 months</option>
                <option value="exploring">Just exploring</option>
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium mb-2">
                Budget range
              </label>
              <select
                id="budget"
                value={form.budget}
                onChange={(e) => update('budget', e.target.value)}
                className="w-full rounded-xl border border-default bg-surface px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]"
              >
                <option value="">Select budget</option>
                <option value="scoping_only">RM 15K / USD 15K — Scoping Sprint only</option>
                <option value="ztl_essential">RM 180K / USD 55K (ZTL Essential)</option>
                <option value="ztl_growth">RM 280K / USD 85K (ZTL Growth)</option>
                <option value="ztl_scale">RM 380K / USD 115K (ZTL Scale)</option>
                <option value="not_sure">Not sure yet</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="source" className="block text-sm font-medium mb-2">
              How did you find us?
            </label>
            <select
              id="source"
              value={form.source}
              onChange={(e) => update('source', e.target.value)}
              className="w-full rounded-xl border border-default bg-surface px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]"
            >
              <option value="">Select source</option>
              <option value="google">Google search</option>
              <option value="linkedin">LinkedIn</option>
              <option value="referral">Referral from someone I know</option>
              <option value="youtube">YouTube or podcast</option>
              <option value="social">Social media</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Motivation slider */}
          <div className="pt-2">
            <label className="block text-sm font-medium mb-4">
              On a scale of 1 to 10, how urgent is solving this?
            </label>

            <div className="space-y-3">
              <input
                type="range"
                min={1}
                max={10}
                step={1}
                value={form.motivation}
                onChange={(e) => update('motivation', Number(e.target.value))}
                className="w-full accent-[var(--color-brand-blue)] cursor-pointer"
                aria-label="Urgency score"
              />

              <div className="flex justify-between text-xs text-muted">
                <span>1 — Just looking</span>
                <span>10 — Critical</span>
              </div>

              <div
                className={cn(
                  'rounded-xl px-4 py-3 text-sm font-medium text-center transition-colors',
                  form.motivation >= 8
                    ? 'bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)]'
                    : form.motivation >= 6
                      ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                      : 'bg-surface-2 text-muted'
                )}
              >
                <span className="font-bold text-lg mr-2">{form.motivation}</span>
                {MOTIVATION_LABELS[form.motivation]}
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="flex-1"
              onClick={() => {
                setScreen(2)
                scrollToTop()
              }}
              disabled={isSubmitting}
            >
              Back
            </Button>
            <Button
              type="button"
              size="lg"
              className="flex-1"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Request My Strategy Call
                  <ArrowRight className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
          </div>

          <p className="text-xs text-muted text-center">
            We will confirm within 1 business day. Adrian reviews every submission personally.
          </p>
        </div>
      )}

      {/* ── Result: ambivalent / cold ───────────────────────────────────────── */}
      {screen === 'result' && bucket && (
        <div className="text-center space-y-6 py-4">
          {bucket === 'ambivalent' ? (
            <>
              <CheckCircle2 className="h-12 w-12 text-amber-500 mx-auto" />
              <h2 className="text-xl font-bold">We have received your submission.</h2>
              <p className="text-secondary leading-relaxed max-w-md mx-auto">
                Based on your answers, now might not be the right moment to book a call immediately.
                We will reach out within 2 business days with a few thoughts on your situation. No
                sales pitch. Just honest perspective.
              </p>
              <p className="text-sm text-muted">
                In the meantime, you might find our{' '}
                <a href="/work" className="underline hover:text-[var(--text)] transition-colors">
                  case studies
                </a>{' '}
                useful context.
              </p>
            </>
          ) : (
            <>
              <CheckCircle2 className="h-12 w-12 text-muted mx-auto" />
              <h2 className="text-xl font-bold">Got it. We will be in touch.</h2>
              <p className="text-secondary leading-relaxed max-w-md mx-auto">
                It sounds like the timing may not be right for a discovery call yet. We have saved
                your details and will follow up with some resources relevant to what you described.
                When the moment is right, we will be here.
              </p>
              <p className="text-sm text-muted">
                If you would like to reach us directly:{' '}
                <a href="/contact" className="underline hover:text-[var(--text)] transition-colors">
                  contact us here
                </a>
                .
              </p>
            </>
          )}
        </div>
      )}
    </div>
  )
}
