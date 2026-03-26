import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Zap, RefreshCw, GitBranch, Bot } from 'lucide-react'
import { SectionLabel, AnimatedSection, GuaranteeBar } from '@/components/common'
import { LudaSection } from '@/components/luda/LudaSection'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'AI Automation Subscription | Upstack Studio',
  description:
    'Automate operations, eliminate manual work, and scale without adding headcount. Unlimited AI workflow automation on a monthly subscription.',
  alternates: {
    canonical: 'https://upstackstudio.com/services/ai-automation-subscription',
  },
  openGraph: {
    title: 'AI Automation Subscription | Upstack Studio',
    description:
      'Automate operations, eliminate manual work, and scale without adding headcount. Unlimited AI workflow automation on a monthly subscription.',
    url: 'https://upstackstudio.com/services/ai-automation-subscription',
    siteName: 'Upstack Studio',
    locale: 'en_MY',
    type: 'website',
  },
}

const WHAT_WE_AUTOMATE = [
  {
    icon: RefreshCw,
    title: 'Data flows between systems',
    description:
      'Stop manually syncing CRM, ERP, and operations tools. We build automated pipelines that keep your data accurate and current — without human intervention.',
  },
  {
    icon: GitBranch,
    title: 'Approval and escalation workflows',
    description:
      'Automate the routing, tracking, and escalation of approvals across departments. The right person gets notified, at the right time, with the right context.',
  },
  {
    icon: Bot,
    title: 'AI-powered operations tasks',
    description:
      'Document extraction, classification, summarisation, and routing. AI reads what your team used to read — and acts on it.',
  },
  {
    icon: Zap,
    title: 'Reporting and monitoring',
    description:
      'Automated reports, live dashboards, and exception alerts. Your leadership team sees what matters — without waiting for someone to compile it.',
  },
]

const TOOLS = [
  'n8n',
  'Make.com',
  'Zapier',
  'OpenAI Agents',
  'Anthropic Claude',
  'Google Gemini',
  'Airtable',
  'Notion',
  'Slack',
  'Microsoft Teams',
  'Google Workspace',
  'HubSpot',
]

const SCENARIOS = [
  {
    label: 'Scenario 1',
    problem: 'Sales team manually copying leads from LinkedIn into CRM',
    detail:
      'A professional services firm was losing 3–4 hours per week per sales person — copying prospect data from LinkedIn, enriching it manually, and entering it into HubSpot. New leads often took 48 hours to get first outreach.',
    outcome:
      'We automated the entire flow: LinkedIn form submissions trigger enrichment, HubSpot contact creation, Slack notification to the right rep, and a 15-minute follow-up task assignment. Time to first touch: under 5 minutes.',
  },
  {
    label: 'Scenario 2',
    problem: 'Operations manager spending 2 hours daily on status reporting',
    detail:
      'An operations manager at a logistics company built a daily status report by logging into five systems, pulling numbers, and pasting them into a Notion page. Every morning. Every day. For two years.',
    outcome:
      'We automated the data collection, built a structured Notion template that populates automatically, and added a morning Slack digest to leadership. The manager now reviews and adds context — instead of doing the data work.',
  },
  {
    label: 'Scenario 3',
    problem: 'Finance team manually routing invoice approvals by email',
    detail:
      'A company received vendor invoices by email, which were then manually forwarded to the right approver, who responded by email, which was then manually updated in a shared spreadsheet. Invoices frequently got lost.',
    outcome:
      'We automated invoice extraction, routing by vendor/amount/category, approval workflow with reminders, and ERP update on approval. Invoice processing time dropped 80%.',
  },
]

const FAQS = [
  {
    question: 'What tools do you use for automation?',
    answer:
      'We use whichever tools best fit your existing stack and the complexity of what needs to be automated. For most operations automations, we use n8n (self-hosted for data control), Make.com, or Zapier. For AI-heavy workflows, we build directly with OpenAI or Anthropic APIs. We never lock you into a specific tool without a clear reason.',
  },
  {
    question: 'How many automations can you build per month?',
    answer:
      // TODO: Confirm AI Automation Subscription pricing and request limits with Adrian
      'Subscription tier details including request limits are being finalised. Book a strategy call and we can discuss your specific automation needs and the right engagement model.',
  },
  {
    question: 'What happens if an automation breaks?',
    answer:
      'Automations break. APIs change. Services have downtime. We build with error handling, retry logic, and alerting so breakages are caught and resolved quickly — not when someone notices the data is wrong three days later. Active subscriptions include monitoring and fixes.',
  },
  {
    question: 'Do we need to give you access to our internal systems?',
    answer:
      'Yes — read/write access to the systems being automated. We follow least-privilege principles: we only request the minimum permissions needed. All credentials are stored in a secrets manager, not in automation configs. We sign NDAs and data processing agreements before starting.',
  },
  {
    question: 'Can automations be paused or adjusted?',
    answer:
      'Yes. Automations are versioned and documented. You can pause, modify, or disable any workflow with 1 business day notice. We build for flexibility — your operations change, and your automations should be able to change too.',
  },
  {
    question: 'Is this different from your AI Integration service?',
    answer:
      'The AI Automation Subscription is ongoing — a monthly engagement for continuous automation delivery. Our AI Integration service is a project-based engagement to build a specific, complex AI system (e.g., a document intelligence pipeline or an internal AI assistant). The Subscription works best when you have a backlog of automation opportunities to work through systematically.',
  },
]

export default function AiAutomationSubscriptionPage() {
  return (
    <div className="bg-page min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection delay={0}>
            <SectionLabel>AI Automation Subscription</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <h1 className="text-page-h1 mt-4 mb-6 max-w-4xl">
              Automate operations. Eliminate manual work.{' '}
              <span className="text-sky-accent">Scale without adding headcount.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.16}>
            <p className="text-lg text-secondary max-w-2xl mb-8 leading-relaxed">
              Most companies have a long list of &quot;we should automate this&quot; items that
              never get done. The Automation Subscription converts that list into shipped workflows
              — month after month, systematically. We handle the build. You handle the strategy.
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
                <Link href="/work">See Our Work</Link>
              </Button>
            </div>
            {/* TODO: Confirm AI Automation Subscription pricing with Adrian */}
            <p className="mt-4 text-sm text-muted">
              Monthly subscription pricing — details confirmed on the call.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Automate */}
      <section className="py-20 md:py-28 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionLabel>What We Automate</SectionLabel>
            <h2 className="text-section-h2 mt-3 mb-4">The manual work that shouldn't be manual.</h2>
            <p className="text-secondary max-w-2xl mb-16">
              If someone on your team is copying, pasting, routing, or re-entering data — that's an
              automation waiting to happen. We find them and build them.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {WHAT_WE_AUTOMATE.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-default bg-page p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-brand-navy)]/10 dark:bg-[var(--color-brand-sky)]/10 mb-5">
                    <item.icon className="h-5 w-5 text-[var(--color-brand-navy)] dark:text-sky-accent" />
                  </div>
                  <h3 className="text-card-title mb-3">{item.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-6 text-center">
              Tools we work with
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {TOOLS.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-default bg-surface px-4 py-1.5 text-sm text-secondary"
                >
                  {tool}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Real Scenarios */}
      <section className="py-20 md:py-28 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionLabel>Real Scenarios</SectionLabel>
            <h2 className="text-section-h2 mt-3 mb-4">What automation looks like in practice.</h2>
            <p className="text-secondary max-w-2xl mb-16">
              These are examples from the types of workflows we've automated for clients across
              different industries.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {SCENARIOS.map((scenario, i) => (
              <AnimatedSection key={scenario.label} delay={i * 0.1}>
                <div className="rounded-2xl border border-default bg-page p-8 md:p-10">
                  <div className="grid md:grid-cols-5 gap-8">
                    <div className="md:col-span-3">
                      <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 block">
                        {scenario.label}
                      </span>
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
            <h2 className="text-section-h2 mt-3 mb-12">How the subscription works.</h2>
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
              Start with your highest-cost manual process.
            </h2>
            <p className="text-secondary mb-8 max-w-xl mx-auto leading-relaxed">
              Tell us where your team is spending time they shouldn't be. We'll map the automation
              opportunity and tell you exactly what it would take to eliminate it.
            </p>
            <Button size="lg" asChild>
              <Link href="/strategy-session">
                Book a Strategy Call <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
