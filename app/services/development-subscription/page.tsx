import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, X } from 'lucide-react'
import { SectionLabel, AnimatedSection, GuaranteeBar } from '@/components/common'
import { LudaSection } from '@/components/luda/LudaSection'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { PRICING, formatPrice } from '@/lib/currency'

export const metadata: Metadata = {
  title: 'Development Subscription | Upstack Studio',
  description:
    'Your platform launched. Now it needs to keep up with your business. Ongoing development subscriptions for platforms built by Upstack Studio — from RM 4,995/month.',
  alternates: {
    canonical: 'https://upstackstudio.com/services/development-subscription',
  },
  openGraph: {
    title: 'Development Subscription | Upstack Studio',
    description:
      'Ongoing development for your live platform. Same senior team. Predictable monthly cost. Pause or cancel with one month notice.',
    url: 'https://upstackstudio.com/services/development-subscription',
    siteName: 'Upstack Studio',
    locale: 'en_MY',
    type: 'website',
  },
}

const TIERS = [
  {
    name: 'Essential',
    myr: PRICING.essential.myr,
    usd: PRICING.essential.usd,
    requests: 1,
    description: 'For platforms in maintenance mode — keep it running, fix bugs, small improvements.',
    features: [
      '1 active development request at a time',
      'Bug fixes and security patches',
      'Minor feature enhancements',
      'Monthly progress report',
      'Slack communication',
      '5-business-day response SLA',
    ],
    notIncluded: [
      'New feature development',
      'Third-party integrations',
      'Design changes',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    myr: PRICING.pro.myr,
    usd: PRICING.pro.usd,
    requests: 1,
    description: 'For actively evolving platforms — new features, integrations, and continuous improvement.',
    features: [
      '1 active development request at a time',
      'New feature development',
      'Third-party API integrations',
      'Design and UX improvements',
      'Bi-weekly progress reviews',
      'Slack communication',
      '2-business-day response SLA',
      'Priority queue over Essential',
    ],
    notIncluded: [
      'Multiple concurrent requests',
      'Full platform rebuilds',
    ],
    cta: 'Get Started',
    highlight: true,
  },
  {
    name: 'Platinum',
    myr: PRICING.platinum.myr,
    usd: PRICING.platinum.usd,
    requests: 2,
    description: 'For teams building fast — multiple workstreams, dedicated bandwidth, maximum velocity.',
    features: [
      '2 active development requests simultaneously',
      'All Pro tier features',
      'Dedicated PM oversight',
      'Weekly progress reviews',
      'Emergency priority support',
      '24-hour response SLA',
      'Architecture review & guidance',
      'Performance and infrastructure optimisation',
    ],
    notIncluded: [],
    cta: 'Get Started',
    highlight: false,
  },
]

const INCLUDED_ALL = [
  'Same senior team that built your platform',
  'No juniors, no interns',
  'Full IP ownership of everything developed',
  'Monthly invoice — no long-term contracts',
  'Pause or cancel with 1 month notice',
  'Code reviewed and documented on every change',
]

const FAQS = [
  {
    question: 'Is the Development Subscription only for platforms Upstack built?',
    answer:
      "No. We'll take on platforms built by other teams — subject to a codebase audit first. We need to understand the architecture, technical debt, and quality before committing to ongoing work. If the codebase needs significant remediation, we'll tell you and scope that separately.",
  },
  {
    question: 'What counts as a "request"?',
    answer:
      "A request is a defined piece of work — a feature, an integration, a bug fix, or an improvement. It has a scope, and we agree on it before starting. Simple requests might take a day. Complex requests might take a sprint. We don't charge by the hour — each request is scoped fairly and work begins when we agree on the outcome.",
  },
  {
    question: 'What if I need more than the subscription allows?',
    answer:
      "You can upgrade at any time — tiers change at the next billing cycle. For large additional scope (a major new module, a second platform), we'll typically scope that as a separate project. We'll always tell you which path is more cost-effective for your situation.",
  },
  {
    question: 'Can I pause the subscription?',
    answer:
      'Yes. You can pause with 1 month notice. Pauses are charged at a reduced retainer rate to maintain your place in the team. When you resume, you pick up immediately — no re-onboarding delay.',
  },
  {
    question: 'How do I submit requests?',
    answer:
      'Via a shared project board (Linear or Jira, depending on your preference) and Slack. You submit requests, we scope them, you approve, we build. The board gives you full visibility into what\'s in progress, what\'s next, and what\'s done.',
  },
  {
    question: 'Do I still own the code developed under the subscription?',
    answer:
      'Yes. Everything we build — whether in a project or a subscription — is yours. Full IP transfer. Full source code ownership. No licensing, no lock-in.',
  },
]

export default function DevelopmentSubscriptionPage() {
  return (
    <div className="bg-page min-h-screen">

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection delay={0}>
            <SectionLabel>Development Subscription</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <h1 className="text-page-h1 mt-4 mb-6 max-w-4xl">
              Your platform launched. Now it needs to{' '}
              <span className="text-[var(--color-brand-sky)]">keep up with your business.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.16}>
            <p className="text-lg text-secondary max-w-2xl mb-8 leading-relaxed">
              Software doesn&apos;t stand still. Your business doesn&apos;t stand still. The Development Subscription
              gives you a dedicated senior team, a predictable monthly cost, and continuous delivery — without the
              overhead of managing a development team in-house.
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
                <Link href="#pricing">
                  See Pricing
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted">
              From RM {PRICING.essential.myr.toLocaleString()}/month · Pause or cancel with 1 month notice.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Included in all tiers */}
      <section className="py-16 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionLabel>Included in Every Tier</SectionLabel>
            <h2 className="text-section-h2 mt-3 mb-10">The baseline we don&apos;t negotiate on.</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {INCLUDED_ALL.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-default bg-page p-5">
                  <CheckCircle className="h-4 w-4 text-[var(--color-brand-sky)] shrink-0 mt-0.5" />
                  <span className="text-sm text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 md:py-28 px-6" id="pricing">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-section-h2 mt-3 mb-4">Three tiers. No surprises.</h2>
            <p className="text-secondary max-w-2xl mb-16">
              Prices shown in MYR for Malaysian clients. International clients are invoiced in USD.
              Book a call for USD pricing.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {TIERS.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 0.1}>
                <div
                  className={
                    `relative h-full rounded-2xl border p-8 flex flex-col ${
                      tier.highlight
                        ? 'border-[var(--color-brand-sky)] bg-[var(--color-brand-sky)]/5'
                        : 'border-default bg-surface'
                    }`
                  }
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-[var(--color-brand-sky)] px-4 py-1 text-xs font-semibold text-[var(--color-brand-black)]">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                    <p className="text-sm text-secondary mb-5">{tier.description}</p>
                    <div className="mb-1">
                      <span className="text-3xl font-extrabold font-display">
                        {formatPrice(tier.myr, 'malaysia')}
                      </span>
                      <span className="text-secondary text-sm ml-1">/month</span>
                    </div>
                    <p className="text-xs text-muted">
                      USD {tier.usd.toLocaleString()}/month for international clients
                    </p>
                  </div>

                  <ul className="space-y-2.5 flex-1 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-secondary">
                        <CheckCircle className="h-4 w-4 text-[var(--color-brand-sky)] shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                    {tier.notIncluded.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-muted line-through decoration-muted/40">
                        <X className="h-4 w-4 text-muted shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    size="lg"
                    variant={tier.highlight ? 'default' : 'outline'}
                    className="w-full"
                    asChild
                  >
                    <Link href="/strategy-session">
                      {tier.cta} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <p className="text-center text-sm text-muted mt-8">
              Not sure which tier fits? Book a strategy call — we&apos;ll match you to the right level based on your
              platform and roadmap.
            </p>
          </AnimatedSection>
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
            <SectionLabel>Get Started</SectionLabel>
            <h2 className="text-section-h2 mt-4 mb-6">
              Your platform needs to grow. Let&apos;s make sure it does.
            </h2>
            <p className="text-secondary mb-8 max-w-xl mx-auto leading-relaxed">
              Book a strategy call to discuss your platform, your roadmap, and which subscription tier makes
              sense. We&apos;ll onboard within one week of agreement.
            </p>
            <Button size="lg" asChild>
              <Link href="/strategy-session">
                Book a Strategy Call <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <p className="mt-4 text-sm text-muted">
              From RM {PRICING.essential.myr.toLocaleString()}/month · Pause or cancel with 1 month notice.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
