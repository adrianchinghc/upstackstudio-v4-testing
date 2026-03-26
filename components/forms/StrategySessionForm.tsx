'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { cn } from '@/lib/utils'
import { buildCalendlyUrl } from '@/lib/utils'
import { submitToHubSpot } from '@/lib/hubspot'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { ArrowRight, Loader2 } from 'lucide-react'

// Step 1 Schema - Pain Primer
const step1Schema = z.object({
  biggest_operational_pain: z
    .string()
    .min(10, 'Please share more detail about your operational challenge'),
  cost_of_inaction: z.string().min(10, 'Please describe what happens if this remains unsolved'),
  previous_attempts: z.string().optional(),
})

// Step 2 Schema - Contact & Qualify
const step2Schema = z.object({
  firstname: z.string().min(1, 'First name is required'),
  lastname: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().min(1, 'Company name is required'),
  jobtitle: z.string().optional(),
  website: z.string().optional(),
  project_timeline: z.string().min(1, 'Please select a timeline'),
  budget_range: z.string().min(1, 'Please select a budget range'),
  existing_assets: z.array(z.string()).optional(),
  how_did_you_hear: z.string().optional(),
})

type Step1Data = z.infer<typeof step1Schema>
type Step2Data = z.infer<typeof step2Schema>

const TIMELINE_OPTIONS = [
  { value: 'asap', label: 'ASAP — we need to move now' },
  { value: '3_months', label: 'Within 3 months' },
  { value: '3_6_months', label: '3–6 months' },
  { value: 'exploring', label: 'Just exploring for now' },
]

const BUDGET_OPTIONS = [
  { value: '20k_45k', label: 'USD 20,000–45,000' },
  { value: '45k_100k', label: 'USD 45,000–100,000' },
  { value: '100k_plus', label: 'USD 100,000+' },
  { value: 'not_sure', label: "Not sure yet — let's talk" },
]

const ASSETS_OPTIONS = [
  { value: 'designs', label: 'Figma designs or mockups' },
  { value: 'spec', label: 'Technical specification' },
  { value: 'codebase', label: 'Existing codebase to build on' },
  { value: 'apis', label: 'Third-party APIs to integrate' },
  { value: 'none', label: 'None — starting from scratch' },
]

const SOURCE_OPTIONS = [
  { value: 'google', label: 'Google search' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'referral', label: 'Referral from someone I know' },
  { value: 'youtube', label: 'YouTube or podcast' },
  { value: 'social', label: 'Social media' },
  { value: 'other', label: 'Other' },
]

interface StrategySessionFormProps {
  className?: string
}

export function StrategySessionForm({ className }: StrategySessionFormProps) {
  const router = useRouter()
  const [step, setStep] = useState<1 | 2>(1)
  const [step1Data, setStep1Data] = useState<Step1Data | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Step 1 form
  const step1Form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      biggest_operational_pain: '',
      cost_of_inaction: '',
      previous_attempts: '',
    },
  })

  // Step 2 form
  const step2Form = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      company: '',
      jobtitle: '',
      website: '',
      project_timeline: '',
      budget_range: '',
      existing_assets: [],
      how_did_you_hear: '',
    },
  })

  const handleStep1Submit = (data: Step1Data) => {
    setStep1Data(data)
    setStep(2)
  }

  const handleStep2Submit = async (data: Step2Data) => {
    if (!step1Data) return

    setIsSubmitting(true)

    // Combine all fields
    const allFields = {
      ...step1Data,
      ...data,
      existing_assets: data.existing_assets?.join(', ') || '',
    }

    // Submit to HubSpot
    const { success, error } = await submitToHubSpot(allFields, 'strategy')

    if (!success) {
      toast.error(error ?? 'Something went wrong. Please try again.')
      setIsSubmitting(false)
      return
    }

    // Redirect to Calendly with pre-filled info
    const calendlyUrl = buildCalendlyUrl(data.firstname, data.lastname || '', data.email)
    router.push(calendlyUrl)
  }

  return (
    <div className={cn('w-full', className)}>
      {/* Progress indicator */}
      <div className="flex items-center gap-2 mb-8">
        <div
          className={cn(
            'flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-colors',
            step >= 1 ? 'bg-[var(--color-brand-blue)] text-white' : 'bg-surface-2 text-muted'
          )}
        >
          1
        </div>
        <div
          className={cn(
            'flex-1 h-1 rounded-full transition-colors',
            step >= 2 ? 'bg-[var(--color-brand-blue)]' : 'bg-surface-2'
          )}
        />
        <div
          className={cn(
            'flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-colors',
            step >= 2 ? 'bg-[var(--color-brand-blue)] text-white' : 'bg-surface-2 text-muted'
          )}
        >
          2
        </div>
      </div>

      <p className="text-sm text-muted mb-6">Step {step} of 2</p>

      {/* Step 1: Pain Primer */}
      {step === 1 && (
        <form onSubmit={step1Form.handleSubmit(handleStep1Submit)} className="space-y-6">
          <div>
            <label htmlFor="biggest_operational_pain" className="block text-sm font-medium mb-2">
              What's the one operational problem costing you the most time or money right now?{' '}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              id="biggest_operational_pain"
              {...step1Form.register('biggest_operational_pain')}
              rows={4}
              placeholder="Be specific — the more detail you give, the more useful the call."
              className="w-full rounded-lg border border-default bg-surface px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] resize-none"
            />
            {step1Form.formState.errors.biggest_operational_pain && (
              <p className="mt-1 text-sm text-red-500">
                {step1Form.formState.errors.biggest_operational_pain.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="cost_of_inaction" className="block text-sm font-medium mb-2">
              What happens to your business if this problem is still unsolved 12 months from now?{' '}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              id="cost_of_inaction"
              {...step1Form.register('cost_of_inaction')}
              rows={4}
              placeholder="Think about the cost: in revenue, headcount, competitive ground lost."
              className="w-full rounded-lg border border-default bg-surface px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] resize-none"
            />
            {step1Form.formState.errors.cost_of_inaction && (
              <p className="mt-1 text-sm text-red-500">
                {step1Form.formState.errors.cost_of_inaction.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="previous_attempts" className="block text-sm font-medium mb-2">
              Have you tried to solve this before? What happened?
            </label>
            <textarea
              id="previous_attempts"
              {...step1Form.register('previous_attempts')}
              rows={3}
              placeholder="Previous vendors, internal attempts, off-the-shelf tools — anything."
              className="w-full rounded-lg border border-default bg-surface px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] resize-none"
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Show me what's possible
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>

          <p className="text-sm text-muted text-center">
            We read every submission before the call. Not a bot.
          </p>
        </form>
      )}

      {/* Step 2: Contact & Qualify */}
      {step === 2 && (
        <form onSubmit={step2Form.handleSubmit(handleStep2Submit)} className="space-y-6">
          {/* Name row */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstname" className="block text-sm font-medium mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstname"
                type="text"
                {...step2Form.register('firstname')}
                className="w-full rounded-lg border border-default bg-surface px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]"
              />
              {step2Form.formState.errors.firstname && (
                <p className="mt-1 text-sm text-red-500">
                  {step2Form.formState.errors.firstname.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm font-medium mb-2">
                Last Name
              </label>
              <input
                id="lastname"
                type="text"
                {...step2Form.register('lastname')}
                className="w-full rounded-lg border border-default bg-surface px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]"
              />
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Work Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                {...step2Form.register('email')}
                className="w-full rounded-lg border border-default bg-surface px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]"
              />
              {step2Form.formState.errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {step2Form.formState.errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                {...step2Form.register('phone')}
                className="w-full rounded-lg border border-default bg-surface px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]"
              />
            </div>
          </div>

          {/* Company and Role */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                id="company"
                type="text"
                {...step2Form.register('company')}
                className="w-full rounded-lg border border-default bg-surface px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]"
              />
              {step2Form.formState.errors.company && (
                <p className="mt-1 text-sm text-red-500">
                  {step2Form.formState.errors.company.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="jobtitle" className="block text-sm font-medium mb-2">
                Role / Title
              </label>
              <input
                id="jobtitle"
                type="text"
                {...step2Form.register('jobtitle')}
                className="w-full rounded-lg border border-default bg-surface px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]"
              />
            </div>
          </div>

          {/* Website */}
          <div>
            <label htmlFor="website" className="block text-sm font-medium mb-2">
              Website
            </label>
            <input
              id="website"
              type="url"
              {...step2Form.register('website')}
              placeholder="https://"
              className="w-full rounded-lg border border-default bg-surface px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]"
            />
          </div>

          {/* Timeline and Budget */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="project_timeline" className="block text-sm font-medium mb-2">
                When are you hoping to start? <span className="text-red-500">*</span>
              </label>
              <select
                id="project_timeline"
                {...step2Form.register('project_timeline')}
                className="w-full rounded-lg border border-default bg-surface px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]"
              >
                <option value="">Select timeline</option>
                {TIMELINE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {step2Form.formState.errors.project_timeline && (
                <p className="mt-1 text-sm text-red-500">
                  {step2Form.formState.errors.project_timeline.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="budget_range" className="block text-sm font-medium mb-2">
                Budget range <span className="text-red-500">*</span>
              </label>
              <select
                id="budget_range"
                {...step2Form.register('budget_range')}
                className="w-full rounded-lg border border-default bg-surface px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]"
              >
                <option value="">Select budget</option>
                {BUDGET_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {step2Form.formState.errors.budget_range && (
                <p className="mt-1 text-sm text-red-500">
                  {step2Form.formState.errors.budget_range.message}
                </p>
              )}
            </div>
          </div>

          {/* Existing Assets */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Do you already have any of the following?
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {ASSETS_OPTIONS.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 p-3 rounded-lg border border-default bg-surface hover:bg-surface-2 cursor-pointer transition-colors"
                >
                  <input
                    type="checkbox"
                    value={option.value}
                    {...step2Form.register('existing_assets')}
                    className="rounded border-default"
                  />
                  <span className="text-sm">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Source */}
          <div>
            <label htmlFor="how_did_you_hear" className="block text-sm font-medium mb-2">
              How did you hear about us?
            </label>
            <select
              id="how_did_you_hear"
              {...step2Form.register('how_did_you_hear')}
              className="w-full rounded-lg border border-default bg-surface px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]"
            >
              <option value="">Select source</option>
              {SOURCE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4">
            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
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

            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-sm text-muted hover:text-[var(--text)] transition-colors"
            >
              ← Back to previous step
            </button>
          </div>

          <p className="text-sm text-muted text-center">
            We'll review your answers and confirm within 1 business day.
          </p>
        </form>
      )}
    </div>
  )
}
