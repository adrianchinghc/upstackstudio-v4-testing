import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Smartphone, Globe, Layers, CheckCircle } from 'lucide-react'
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
  title: 'Custom Platform Development | Upstack Studio',
  description:
    'Custom software development Malaysia. Mobile app, web app, and PWA development for established companies. Built on the LUDA™ Framework — delivered in 16 weeks.',
  alternates: {
    canonical: 'https://upstackstudio.com/services/custom-platform-development',
  },
  openGraph: {
    title: 'Custom Platform Development | Upstack Studio',
    description:
      'When off-the-shelf software stops fitting — we build what actually works. Mobile apps, web platforms, and PWAs for Malaysia and beyond.',
    url: 'https://upstackstudio.com/services/custom-platform-development',
    siteName: 'Upstack Studio',
    locale: 'en_MY',
    type: 'website',
  },
}

const SCENARIOS = [
  {
    label: 'Scenario 1',
    problem: 'Off-the-shelf tools keep failing at your specific workflow',
    detail:
      'A logistics company tried three different TMS platforms over two years. Each one handled 80% of their workflow — and broke on the 20% that made them different. Every workaround added another spreadsheet.',
    outcome:
      'We built a custom TMS from the ground up — designed around how they actually operate. It became a standalone SaaS product they now sell to other logistics companies. The software became a revenue line.',
  },
  {
    label: 'Scenario 2',
    problem: 'Mobile app built by a previous developer — unusable, abandoned',
    detail:
      'A mental health platform spent USD 500,000 with a previous development firm. The app shipped — barely. Crashes on iOS. Broken localisation. Architecture that made every new feature a two-month project.',
    outcome:
      'We rebuilt the entire platform from scratch — in 10 languages — with a clean, scalable codebase. The founder called the result "basically crushed it." Now preparing for public release.',
  },
  {
    label: 'Scenario 3',
    problem: 'Manual consumer experience that should be a mobile app',
    detail:
      'A consumer tech startup was managing their AI-powered pet recognition service through email and spreadsheets. The product worked. The delivery mechanism did not.',
    outcome:
      'We built the iOS and Android app — clean interface, React Native codebase, integrated with their AI backend. The client, based in San Diego, specifically noted our clean codebase and communication: "I had another developer look at what you guys produced. Very clean code base."',
  },
]

const WHY_NOT_OFF_SHELF = [
  'Off-the-shelf vendors design for the average business',
  'Your workflow exceptions break generic software',
  'Workarounds multiply until the tool is abandoned',
  'You end up paying licensing fees for something you hate',
  'Customisation costs exceed a custom build within 2 years',
  'You never own the data or the logic',
]

const FAQS = [
  {
    question: 'How do you decide whether to build custom vs. customise existing software?',
    answer:
      "We assess this in discovery. If an off-the-shelf tool covers 90%+ of your requirements with low customisation cost and manageable lock-in risk — we'll tell you to buy it. Custom builds make sense when your workflow has specific requirements that off-the-shelf can't meet, when you need to own the IP, or when the total cost of customising an existing platform exceeds building from scratch.",
  },
  {
    question: 'What tech stack do you use?',
    answer:
      'We use React Native for cross-platform mobile apps (iOS and Android from a single codebase), Next.js for web apps and platforms, NestJS for backend APIs, and PostgreSQL/MongoDB depending on data structure. We use proven stacks — not the latest framework that will be obsolete in 18 months.',
  },
  {
    question: 'Can you take over a project another developer started?',
    answer:
      "Yes. We've rescued multiple projects — including one where the client had spent USD 500,000 with a previous firm and gotten an unusable product. We start with a codebase audit, document what works, what's broken, and what needs to be rebuilt. We give you a clear assessment before committing to anything.",
  },
  {
    question: 'Do I need Figma designs before we start?',
    answer:
      "No. We have designers in-house. If you have designs, we'll use them. If not, we'll design and build together. Designs are created in Figma, reviewed with you before development begins, and iterated based on feedback.",
  },
  {
    question: 'What happens after launch?',
    answer:
      'Every project includes a post-launch support period — 30 days for Transform, 90 days for Accelerate. After that, you can move to our Development Subscription for ongoing enhancements, or take the codebase to your own team. You own everything we build.',
  },
  {
    question: 'How do you handle scope changes during a project?',
    answer:
      "Scope changes are inevitable. We handle them through our sprint review process — every two weeks, you see what was built, what's next, and where the project stands. Scope additions are assessed for timeline and cost impact, documented, and agreed in writing before we start. We never build something we haven't agreed to.",
  },
]

export default function CustomPlatformDevelopmentPage() {
  return (
    <div className="bg-page min-h-screen">

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection delay={0}>
            <SectionLabel>Custom Platform Development</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <h1 className="text-page-h1 mt-4 mb-6 max-w-4xl">
              When off-the-shelf software stops fitting —{' '}
              <span className="text-sky-accent">we build what actually works.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.16}>
            <p className="text-lg text-secondary max-w-2xl mb-8 leading-relaxed">
              Your business has specific requirements, specific workflows, and specific exceptions that no generic
              platform was designed for. We build the exact tool your business needs — mobile app, web platform,
              or progressive web app — on a technology you own outright.
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
                <Link href="/work">See 17 Case Studies</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted">Typical engagements from USD 45,000. Scope confirmed on the call.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Custom */}
      <section className="py-16 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionLabel>Why Custom</SectionLabel>
                <h2 className="text-section-h2 mt-3 mb-6">
                  Off-the-shelf software is designed for the average business.
                </h2>
                <p className="text-secondary leading-relaxed">
                  Yours isn't average. Your approval chains, your data relationships, your exception handling —
                  all have specific requirements that generic platforms weren't designed for. By year two, the
                  workaround cost exceeds what a custom build would have cost from the start.
                </p>
              </div>
              <div className="rounded-2xl border border-default bg-page p-8">
                <ul className="space-y-3">
                  {WHY_NOT_OFF_SHELF.map((reason) => (
                    <li key={reason} className="flex items-start gap-3 text-sm text-secondary">
                      <CheckCircle className="h-4 w-4 text-sky-accent shrink-0 mt-0.5" />
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Mobile App Development ─── */}
      <section className="py-20 md:py-28 px-6" id="mobile-app-development">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="flex items-start gap-5 mb-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand-navy)]/10 dark:bg-[var(--color-brand-sky)]/10 shrink-0 mt-1">
                <Smartphone className="h-6 w-6 text-[var(--color-brand-navy)] dark:text-sky-accent" />
              </div>
              <div>
                <SectionLabel>Mobile App Development Malaysia</SectionLabel>
                {/* keyword: mobile app development Malaysia */}
                <h2 className="text-section-h2 mt-2 mb-4">iOS & Android apps your users actually use.</h2>
                <p className="text-secondary max-w-2xl leading-relaxed">
                  We build React Native apps — a single codebase for iOS and Android, with native performance and
                  access to device hardware. Consumer-facing apps, enterprise mobile tools, field operations apps,
                  and AI-powered mobile experiences. Built and tested on real devices before every release.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 pl-0 md:pl-17">
              {[
                ['React Native', 'Single codebase, native performance'],
                ['Enterprise Mobile', 'Field operations, approvals, dashboards'],
                ['Consumer Apps', 'Public-facing iOS & Android experiences'],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-xl border border-default bg-surface p-5">
                  <p className="font-semibold text-sm mb-1">{title}</p>
                  <p className="text-xs text-secondary">{desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Web App Development ─── */}
      <section className="py-20 md:py-28 px-6 bg-surface" id="web-app-development">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="flex items-start gap-5 mb-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand-navy)]/10 dark:bg-[var(--color-brand-sky)]/10 shrink-0 mt-1">
                <Globe className="h-6 w-6 text-[var(--color-brand-navy)] dark:text-sky-accent" />
              </div>
              <div>
                <SectionLabel>Web App Development Malaysia</SectionLabel>
                {/* keyword: web app development Malaysia */}
                <h2 className="text-section-h2 mt-2 mb-4">Custom web platforms that run your operations.</h2>
                <p className="text-secondary max-w-2xl leading-relaxed">
                  Internal portals, customer-facing platforms, SaaS products, operations dashboards — built on
                  Next.js with a TypeScript + PostgreSQL backend. Designed for performance, scalability, and the
                  specific requirements of your operations. Not a WordPress site. Not a page builder. Real
                  engineering for real business requirements.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                ['Operations Portals', 'Internal tools, approval systems, dashboards'],
                ['Customer Platforms', 'Client-facing portals, ecommerce, booking'],
                ['SaaS Products', 'Multi-tenant platforms you can sell'],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-xl border border-default bg-page p-5">
                  <p className="font-semibold text-sm mb-1">{title}</p>
                  <p className="text-xs text-secondary">{desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PWA Development ─── */}
      <section className="py-20 md:py-28 px-6" id="pwa-development">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="flex items-start gap-5 mb-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand-navy)]/10 dark:bg-[var(--color-brand-sky)]/10 shrink-0 mt-1">
                <Layers className="h-6 w-6 text-[var(--color-brand-navy)] dark:text-sky-accent" />
              </div>
              <div>
                <SectionLabel>PWA Development Malaysia</SectionLabel>
                {/* keyword: PWA development Malaysia */}
                <h2 className="text-section-h2 mt-2 mb-4">One codebase. App-like experience on every device.</h2>
                <p className="text-secondary max-w-2xl leading-relaxed">
                  Progressive Web Apps (PWAs) run in the browser but behave like native apps — installable, offline-capable,
                  and push notification–enabled. A single codebase serves iOS, Android, and desktop. Companies that
                  switch to PWA report up to 76% higher conversion rates and significantly lower development and maintenance
                  costs compared to maintaining separate native apps.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                ['Single Codebase', 'One build for all devices and platforms'],
                ['Offline Capability', 'Works without an internet connection'],
                ['76% Higher Conversion', 'Vs. non-PWA web experiences (industry benchmark)'],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-xl border border-default bg-surface p-5">
                  <p className="font-semibold text-sm mb-1">{title}</p>
                  <p className="text-xs text-secondary">{desc}</p>
                </div>
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
            <h2 className="text-section-h2 mt-3 mb-4">Projects we've delivered.</h2>
            <p className="text-secondary max-w-2xl mb-16">
              Delivered across Malaysia, Australia, the US, the UK, and the Netherlands.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {SCENARIOS.map((scenario, i) => (
              <AnimatedSection key={scenario.label} delay={i * 0.1}>
                <div className="rounded-2xl border border-default bg-page p-8 md:p-10">
                  <div className="grid md:grid-cols-5 gap-8">
                    <div className="md:col-span-3">
                      <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 block">{scenario.label}</span>
                      <h3 className="text-xl font-semibold mb-3">{scenario.problem}</h3>
                      <p className="text-secondary leading-relaxed">{scenario.detail}</p>
                    </div>
                    <div className="md:col-span-2">
                      <div className="h-full rounded-xl bg-[var(--color-brand-navy)]/5 dark:bg-[var(--color-brand-sky)]/5 border border-[var(--color-brand-navy)]/10 dark:border-[var(--color-brand-sky)]/10 p-6">
                        <p className="text-xs font-semibold tracking-widest uppercase text-sky-accent mb-3">What we built</p>
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
            <h2 className="text-section-h2 mt-3 mb-12">What to expect from a custom build.</h2>
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
              Tell us what you need to build. We'll tell you how we'd build it.
            </h2>
            <p className="text-secondary mb-8 max-w-xl mx-auto leading-relaxed">
              We work best with companies that know what problem they're solving — even if they don't know
              what the solution looks like yet. Come to the call with the problem. Leave with a plan.
            </p>
            <Button size="lg" asChild>
              <Link href="/strategy-session">
                Book a Strategy Call <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <p className="mt-4 text-sm text-muted">Typical engagements from USD 45,000. Scope confirmed on the call.</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
