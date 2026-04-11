import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react'
import { SectionLabel, AnimatedSection, GuaranteeBar } from '@/components/common'
import { ServiceJsonLd } from '@/components/seo/JsonLd'
import { LudaSection } from '@/components/luda/LudaSection'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'Operations Digitalisation | Upstack Studio',
  description:
    'Replace manual processes, spreadsheets, and WhatsApp approval chains with systems that run your business. Operations digitalisation company Malaysia.',
  alternates: {
    canonical: '/services/operations-digitalisation',
  },
  openGraph: {
    title: 'Operations Digitalisation | Upstack Studio',
    description:
      'Stop running your business on spreadsheets and WhatsApp chains. We map your operations and build the systems to replace them — in 16 weeks.',
    url: '/services/operations-digitalisation',
    siteName: 'Upstack Studio',
    locale: 'en_MY',
    type: 'website',
  },
}

const SCENARIOS = [
  {
    icon: AlertCircle,
    label: 'Scenario 1',
    problem: 'PO approvals running on WhatsApp and email chains',
    detail:
      'A distribution company was losing 3–5 days on every purchase order. Approvals sat in group chats. Nobody knew where a PO stood. Escalations happened on phone calls. The finance team manually re-entered approved POs into the ERP.',
    outcome:
      'We built a procurement approval portal — mobile-first, with role-based access, automated notifications, and ERP integration. Approval cycles dropped from 5 days to under 4 hours.',
  },
  {
    icon: TrendingUp,
    label: 'Scenario 2',
    problem: 'Client data scattered across three disconnected systems',
    detail:
      'A financial services firm was managing client relationships across CRM, Excel, and a legacy portal that nobody trusted. Customer-facing staff ran their own shadow spreadsheets. Every client meeting started with 10 minutes of reconciliation.',
    outcome:
      'We designed and built a unified operations portal — single source of truth, real-time sync, audit log. The firm cut onboarding time by 60% and their compliance team stopped dreading quarterly reviews.',
  },
  {
    icon: CheckCircle,
    label: 'Scenario 3',
    problem: 'Six hours every Monday building the weekly KPI report',
    detail:
      "A manufacturing operations head spent half of every Monday pulling numbers from five different systems, formatting them in Excel, and emailing a slide deck that was already outdated by the time it arrived. Leadership was making decisions on last week's data.",
    outcome:
      'We replaced the manual process with a live operations dashboard — automated data pipeline, role-based views, exportable to PDF at any time. Six hours became thirty seconds.',
  },
]

const FAQS = [
  {
    question: 'How do you know which processes to digitalise first?',
    answer:
      "We start every engagement with a 2-week discovery sprint. We map your current operations end-to-end, identify the highest-cost bottlenecks (in time, money, and human error), and prioritise based on ROI. We won't build you a tool that solves the wrong problem.",
  },
  {
    question: 'We already have an ERP. Can you integrate with it?',
    answer:
      'Yes. The majority of our operations projects involve integration with existing systems — SAP, Oracle, Microsoft Dynamics, custom ERPs, and accounting platforms like Xero or QuickBooks. We assess integration complexity in the discovery sprint and build accordingly.',
  },
  {
    question: "What if our processes aren't documented anywhere?",
    answer:
      "That's normal. In fact, it's the majority of our engagements. We use structured workshops with your operations team to document processes as they actually run — not how they're supposed to run. The discovery output becomes your operations blueprint.",
  },
  {
    question: 'How long does a typical operations project take?',
    answer:
      'Most operations digitalisation projects land in the 12–20 week range depending on complexity. The LUDA™ Framework gives you a committed launch date at kickoff — not a range. If we cause delays, we absorb the cost.',
  },
  {
    question:
      "We tried off-the-shelf software and it didn't fit our workflow. Why will this be different?",
    answer:
      "Off-the-shelf software is designed for the average business. Your operations aren't average — your approval chains, your data flows, your exception handling all have specific requirements. We build to your workflow, not the other way around. That's the only way it actually gets adopted.",
  },
  {
    question: 'Do your systems need ongoing maintenance?',
    answer:
      'All software needs maintenance — security patches, infrastructure updates, and improvements as your business evolves. We offer a Development Subscription for ongoing support, or hand over the codebase with documentation for your internal team. You own everything we build.',
  },
]

export default function OperationsDigitalisationPage() {
  return (
    <div className="bg-page min-h-screen">
      <ServiceJsonLd
        name="Operations Digitalisation"
        description="Replace manual processes, spreadsheets, and WhatsApp approval chains with systems that run your business."
        url="/services/operations-digitalisation"
      />
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection delay={0}>
            <SectionLabel>Operations Digitalisation</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <h1 className="text-page-h1 mt-4 mb-6 max-w-4xl">
              Stop running your business on <span className="text-sky-accent">spreadsheets</span>{' '}
              and WhatsApp chains.
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.16}>
            <p className="text-lg text-secondary max-w-2xl mb-8 leading-relaxed">
              Every day your team copies data between systems, chases approvals over group chats,
              and re-enters information that should flow automatically — that's revenue leaking
              through process gaps. We map your operations, design the system, and build it. Built
              on the LUDA™ Framework.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.24}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/strategy-session">
                  Book a Strategy Call <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/work">See Case Studies</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted">
              Typical engagements from USD 45,000. Scope confirmed on the call.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Real Scenarios */}
      <section className="py-20 md:py-28 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionLabel>Real Scenarios</SectionLabel>
            <h2 className="text-section-h2 mt-3 mb-4">Operations problems we've solved.</h2>
            <p className="text-secondary max-w-2xl mb-16">
              Not hypotheticals. These are the exact types of engagements we run — described in the
              same terms our clients used before we started.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {SCENARIOS.map((scenario, i) => (
              <AnimatedSection key={scenario.label} delay={i * 0.1}>
                <div className="rounded-2xl border border-default bg-page p-8 md:p-10">
                  <div className="grid md:grid-cols-5 gap-8">
                    <div className="md:col-span-3">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-brand-navy)]/10 dark:bg-[var(--color-brand-sky)]/10">
                          <scenario.icon className="h-4 w-4 text-[var(--color-brand-navy)] dark:text-sky-accent" />
                        </div>
                        <span className="text-xs font-semibold tracking-widest uppercase text-muted">
                          {scenario.label}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{scenario.problem}</h3>
                      <p className="text-secondary leading-relaxed">{scenario.detail}</p>
                    </div>
                    <div className="md:col-span-2">
                      <div className="h-full rounded-xl bg-[var(--color-brand-navy)]/5 dark:bg-[var(--color-brand-sky)]/5 border border-[var(--color-brand-navy)]/10 dark:border-[var(--color-brand-sky)]/10 p-6">
                        <p className="text-xs font-semibold tracking-widest uppercase text-sky-accent mb-3">
                          What we built
                        </p>
                        <p className="text-sm leading-relaxed text-secondary">{scenario.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* LUDA Framework */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <LudaSection variant="compact" />
          </AnimatedSection>
        </div>
      </section>

      {/* Guarantee Bar */}
      <div className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <GuaranteeBar />
        </div>
      </div>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 bg-surface">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-section-h2 mt-3 mb-12">
              Questions we hear before every engagement.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <SectionLabel>Next Step</SectionLabel>
            <h2 className="text-section-h2 mt-4 mb-6">
              Tell us what's broken. We'll tell you what it costs to fix it.
            </h2>
            <p className="text-secondary mb-8 max-w-xl mx-auto leading-relaxed">
              Adrian personally reviews every submission before the call. Not a junior sales rep.
              Not a template pitch deck. A real conversation about your operations.
            </p>
            <Button size="lg" asChild>
              <Link href="/strategy-session">
                Book a Strategy Call <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <p className="mt-4 text-sm text-muted">
              Typical engagements from USD 45,000. Scope confirmed on the call.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
