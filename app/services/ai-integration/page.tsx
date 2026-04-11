import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FileSearch, Cog, BrainCircuit } from 'lucide-react'
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
  title: 'AI Integration Services | Upstack Studio',
  description:
    'AI integration services Malaysia. We build AI that connects to how your business actually runs — document intelligence, operational automation, and internal AI tools.',
  alternates: {
    canonical: '/services/ai-integration',
  },
  openGraph: {
    title: 'AI Integration Services | Upstack Studio',
    description:
      "AI isn't magic. But in the right place, it's the highest-ROI investment you can make. We'll tell you directly if it's not the right answer yet.",
    url: '/services/ai-integration',
    siteName: 'Upstack Studio',
    locale: 'en_MY',
    type: 'website',
  },
}

const AI_TYPES = [
  {
    icon: FileSearch,
    title: 'Document & Data Intelligence',
    description:
      'Extract, classify, and act on information locked in documents, emails, and PDFs. Contracts, invoices, reports, compliance forms — AI reads them, structures the data, and routes it where it needs to go.',
    examples: [
      'Invoice processing automation',
      'Contract clause extraction',
      'Compliance document review',
      'Unstructured data classification',
    ],
  },
  {
    icon: Cog,
    title: 'Operational AI Automation',
    description:
      'Connect AI to your existing workflows. Automate decisions that currently require a human to look at data and make a call — exception handling, demand forecasting, anomaly detection, prioritisation.',
    examples: [
      'Inventory demand prediction',
      'Maintenance schedule optimisation',
      'Customer churn signals',
      'Operations anomaly alerts',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'Internal AI Tools',
    description:
      'AI-powered tools your team actually uses — knowledge bases, internal search, operations co-pilots. Not a chatbot on your website. Tools that make your operations team faster and more accurate.',
    examples: [
      'Internal knowledge assistant',
      'Operations decision support',
      'Meeting summary + action routing',
      'Multi-system data Q&A',
    ],
  },
]

const SCENARIOS = [
  {
    label: 'Scenario 1',
    problem: 'Finance team processing 200+ invoices manually each week',
    detail:
      'A logistics company received invoices from 80+ suppliers in different formats. The finance team spent two full days each week extracting line items, matching against POs, and flagging discrepancies — entirely by hand.',
    outcome:
      'We built an AI document processing pipeline that extracts invoice data, matches against POs, and flags exceptions automatically. The finance team now reviews flagged items only — two days became two hours.',
  },
  {
    label: 'Scenario 2',
    problem: 'Customer support team overwhelmed by repetitive internal queries',
    detail:
      'A financial services company had an operations team fielding the same 40–50 internal questions repeatedly — policy queries, compliance clarifications, process lookups. Answers sat in PDFs and SharePoint folders nobody could navigate.',
    outcome:
      'We built an internal AI assistant trained on their documentation. Staff ask in natural language, get accurate answers with source citations. First-contact resolution went from 60% to 94%.',
  },
  {
    label: 'Scenario 3',
    problem: 'Quality control team manually reviewing every production batch',
    detail:
      "A manufacturing client's QC team reviewed 100% of production runs manually — inspecting logs, checking tolerances, writing reports. It created a bottleneck on the production line and caused delivery delays.",
    outcome:
      'We deployed an anomaly detection model trained on 18 months of production data. The model flags deviations in real time. The QC team now reviews exceptions only — throughput increased 35% without adding headcount.',
  },
]

const FAQS = [
  {
    question: 'How do you know if AI is actually the right solution?',
    answer:
      "We'll tell you directly if it isn't. Most companies need 60–90 days of operations clarity before AI becomes genuinely powerful — you can't automate chaos. In discovery, we assess whether your data is in good enough shape, whether the process is consistent enough to model, and whether the ROI justifies the build. If it doesn't, we'll tell you what to fix first.",
  },
  {
    question: 'Do we need a data science team to maintain this?',
    answer:
      "No. We build production AI systems — not research projects. Our implementations use proven, maintained models (OpenAI, Anthropic, Google, or open-source depending on your requirements) with infrastructure you can manage operationally. We build for your team's capabilities, not ours.",
  },
  {
    question: 'How accurate are the AI systems you build?',
    answer:
      'Accuracy depends on data quality and task complexity. In discovery, we establish a baseline accuracy target and build to exceed it. We never deploy a system until it meets the agreed threshold in production testing. For high-stakes decisions, we always keep a human-in-the-loop as a fallback.',
  },
  {
    question: 'What about data privacy and security?',
    answer:
      'We design for data sovereignty. For sensitive data, we use on-premise or private cloud deployments. We never use client data to train external models without explicit consent. Security architecture — encryption, access control, audit logging — is designed from the start, not bolted on.',
  },
  {
    question: 'Can you integrate AI into our existing systems?',
    answer:
      'Yes. We prefer it. AI that sits inside your existing workflow gets used. AI that requires staff to switch tools gets abandoned. Our integrations connect to your ERP, CRM, document management, and operational platforms so AI enhances what your team already does.',
  },
  {
    question: 'How long does an AI integration project take?',
    answer:
      'Scope varies significantly. A focused document processing automation typically runs 8–12 weeks. A broader operational AI layer as part of an operations digitalisation project can take 16–20 weeks. We scope precisely in discovery and commit to a date at kickoff.',
  },
]

export default function AiIntegrationPage() {
  return (
    <div className="bg-page min-h-screen">
      <ServiceJsonLd
        name="AI Integration Services"
        description="AI integration that connects to how your business actually runs — document intelligence, operational automation, and internal AI tools."
        url="/services/ai-integration"
      />
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection delay={0}>
            <SectionLabel>AI Integration</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <h1 className="text-page-h1 mt-4 mb-6 max-w-4xl">
              AI isn't magic. But in the right place, it's the{' '}
              <span className="text-sky-accent">highest-ROI</span> investment you can make.
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.16}>
            <p className="text-lg text-secondary max-w-2xl mb-6 leading-relaxed">
              You've sat through the demos. You've heard the claims. Most of it is either too vague
              or too disconnected from how your business actually runs. We build AI that fits your
              operations — not a chatbot bolted onto your homepage.
            </p>
            <div className="rounded-xl border border-[var(--color-brand-sky)]/30 bg-[var(--color-brand-sky)]/5 p-5 mb-8 max-w-2xl">
              <p className="text-sm font-semibold text-sky-accent mb-1">Honest framing</p>
              <p className="text-sm text-secondary leading-relaxed">
                We will tell you directly if AI isn't the right answer yet. You can't automate
                chaos. Most companies need 60–90 days of operations work before AI becomes genuinely
                powerful. We'll tell you exactly where you are.
              </p>
            </div>
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
            <p className="mt-4 text-sm text-muted">
              Typical engagements from USD 45,000. Scope confirmed on the call.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 3 Types of AI */}
      <section className="py-20 md:py-28 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="text-section-h2 mt-3 mb-4">
              Three types of AI integration that deliver measurable ROI.
            </h2>
            <p className="text-secondary max-w-2xl mb-16">
              Not every AI application is worth building. These three categories have the clearest
              ROI for established companies — clear inputs, clear outputs, clear value.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {AI_TYPES.map((type, i) => (
              <AnimatedSection key={type.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-default bg-page p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-brand-navy)]/10 dark:bg-[var(--color-brand-sky)]/10 mb-5">
                    <type.icon className="h-5 w-5 text-[var(--color-brand-navy)] dark:text-sky-accent" />
                  </div>
                  <h3 className="text-card-title mb-3">{type.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed mb-5">{type.description}</p>
                  <ul className="space-y-1.5">
                    {type.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2 text-xs text-muted">
                        <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[var(--color-brand-sky)] shrink-0" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Real Scenarios */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionLabel>Real Scenarios</SectionLabel>
            <h2 className="text-section-h2 mt-3 mb-4">AI that changed how operations run.</h2>
            <p className="text-secondary max-w-2xl mb-16">
              These aren't proof-of-concepts. They're systems running in production, used daily by
              the teams we built them for.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {SCENARIOS.map((scenario, i) => (
              <AnimatedSection key={scenario.label} delay={i * 0.1}>
                <div className="rounded-2xl border border-default bg-surface p-8 md:p-10">
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
      <section className="py-20 md:py-28 px-6 bg-surface">
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
            <h2 className="text-section-h2 mt-3 mb-12">Straight answers on AI integration.</h2>
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
              Not sure if you're AI-ready? That's exactly what we assess on the call.
            </h2>
            <p className="text-secondary mb-8 max-w-xl mx-auto leading-relaxed">
              We'll tell you honestly where your operations stand, what needs to happen before AI
              makes sense, and what a realistic timeline and investment looks like.
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
