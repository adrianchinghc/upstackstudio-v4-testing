import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel, AnimatedSection, GuaranteeBar } from '@/components/common'
import { LudaSection } from '@/components/luda/LudaSection'
import { Button } from '@/components/ui/button'
import { ArrowRight, Settings, Brain, Zap, Code, RefreshCw } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Operations digitalisation, AI integration, custom platform development, and ongoing development subscriptions. Built on the LUDA™ Framework.',
  alternates: {
    canonical: '/services',
  },
}

const SERVICES = [
  {
    title: 'Operations Digitalisation',
    description: 'Replace manual processes, spreadsheets, and WhatsApp chains with systems that run your business.',
    href: '/services/operations-digitalisation',
    icon: Settings,
  },
  {
    title: 'AI Integration',
    description: "AI isn't magic — but in the right place, it's the highest-ROI investment you can make.",
    href: '/services/ai-integration',
    icon: Brain,
  },
  {
    title: 'AI Automation Subscription',
    description: 'Automate operations, eliminate manual work, and scale without adding headcount.',
    href: '/services/ai-automation-subscription',
    icon: Zap,
  },
  {
    title: 'Custom Platform Development',
    description: "When off-the-shelf software stops fitting — we build what actually works for your business.",
    href: '/services/custom-platform-development',
    icon: Code,
  },
  {
    title: 'Development Subscription',
    description: 'Your platform launched. Now it needs to keep up with your business.',
    href: '/services/development-subscription',
    icon: RefreshCw,
  },
]

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Strategy Call',
    description: '45 minutes with Adrian. We understand your problem, assess fit, and outline next steps.',
  },
  {
    number: '02',
    title: 'Discovery & Scoping',
    description: 'We map your processes, define requirements, and deliver a detailed proposal with fixed scope and timeline.',
  },
  {
    number: '03',
    title: 'Build & Deliver',
    description: 'Bi-weekly sprints, constant communication, and a working product in 16 weeks or less.',
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-page pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <AnimatedSection className="max-w-3xl mb-16 md:mb-20">
          <SectionLabel className="mb-4 block">Services</SectionLabel>
          <h1 className="text-page-title mb-6">
            We don't build apps.
            <br />
            <span className="text-sky-accent">
              We build the infrastructure your business runs on.
            </span>
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            Every engagement starts with understanding your operations — not a feature list. We engineer the exact solution your business needs, built on the LUDA™ Framework.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <section className="mb-16 md:mb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Link
                  href={service.href}
                  className="group flex flex-col h-full rounded-2xl border border-default bg-surface p-6 md:p-8 transition-all hover:border-sky-faint"
                >
                  <service.icon className="h-10 w-10 text-sky-accent mb-4" />
                  <h3 className="text-card-title mb-3 group-hover:text-sky-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-secondary text-base leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-muted group-hover:text-sky-accent transition-colors mt-auto">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-16 md:mb-24">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel className="mb-4 block">How We Work</SectionLabel>
            <h2 className="text-section-title">
              A simple, proven process.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.1}>
                <div className="relative">
                  <span className="text-6xl font-extrabold text-sky-accent/20 font-display absolute -top-4 left-0">
                    {step.number}
                  </span>
                  <div className="pt-8">
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-secondary">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Guarantee Bar */}
        <AnimatedSection className="mb-16 md:mb-24">
          <GuaranteeBar />
        </AnimatedSection>

        {/* LUDA Section */}
        <LudaSection variant="full" />

        {/* Pricing Note */}
        <AnimatedSection className="text-center py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-section-title mb-6">
              Pricing
            </h2>
            <p className="text-lg text-secondary mb-4">
              Typical zero-to-launch engagements start from <span className="font-semibold text-[var(--text)]">USD 45,000</span> for a single platform delivered in 16 weeks.
            </p>
            <p className="text-muted mb-8">
              Development subscriptions available from USD 2,995/month. All pricing confirmed on the strategy call.
            </p>
            <Button asChild size="lg">
              <Link href="/strategy-session">
                Discuss Your Project
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
