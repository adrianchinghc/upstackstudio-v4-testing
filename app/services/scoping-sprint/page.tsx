import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  FileText,
  Calculator,
  Map,
  GitBranch,
  Presentation,
  Users,
  CheckCircle2,
  XCircle,
  Download,
  ArrowRight,
  Clock,
  Calendar,
  Building2,
} from 'lucide-react'
import { SectionLabel, AnimatedSection, GuaranteeBar } from '@/components/common'
import { Price } from '@/components/common/Price'
import { LudaSection } from '@/components/luda/LudaSection'
import { ServiceJsonLd } from '@/components/seo/JsonLd'
import { Button } from '@/components/ui/button'
import { SITE_URL, TEAM_MEMBERS } from '@/lib/constants'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'Scoping Sprint | Upstack Studio',
  description:
    'A 2-week paid diagnostic where a senior engineer maps your operations and delivers a written plan with a fixed price. From RM 15,000 / USD 15,000.',
  alternates: {
    canonical: '/services/scoping-sprint',
  },
  openGraph: {
    title: 'Scoping Sprint | Upstack Studio',
    description:
      'Two weeks. One senior engineer. A written plan you can defend internally. Custom software for growing companies, built with AI.',
    url: '/services/scoping-sprint',
    siteName: 'Upstack Studio',
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scoping Sprint | Upstack Studio',
    description: 'Two weeks. One senior engineer. A written plan you can defend internally.',
  },
}

const DELIVERABLES = [
  {
    icon: FileText,
    title: 'Written operational assessment',
    description:
      '30+ pages mapping every manual workflow in scope — exactly how your team currently operates, not how the org chart says it should.',
  },
  {
    icon: Calculator,
    title: 'Cost-of-inaction analysis',
    description:
      'What staying manual actually costs you, measured in headcount hours and currency. Most clients are surprised by how high the real number is.',
  },
  {
    icon: Map,
    title: 'Phased digitalization roadmap',
    description:
      'A sequenced plan of what to build and when, with expected ROI per project. Not a vendor pitch. A prioritized plan you own.',
  },
  {
    icon: GitBranch,
    title: 'Build-vs-buy recommendation',
    description:
      'For every candidate system, we tell you honestly whether to build custom, buy off-the-shelf, or stay on what you have. Sometimes the answer is Odoo. We will say so.',
  },
  {
    icon: FileText,
    title: 'Locked proposal for Phase 1',
    description:
      'A scoped proposal for the first LUDA Zero to Launch engagement — fixed scope, fixed price, fixed 16-week timeline. No surprises later.',
  },
  {
    icon: Presentation,
    title: 'Leadership presentation',
    description:
      'A 60-minute findings walkthrough with your leadership team. Adrian presents personally. Your MD gets answers, not slides.',
  },
]

const FOR_SIGNALS = [
  'You run a company doing RM 5M to RM 50M in annual revenue in Malaysia, Singapore, or SEA',
  'You have 50 to 500 staff, and operations rely on spreadsheets, WhatsApp, and tools that do not talk to each other',
  'You have looked at SAP, Odoo, or Microsoft Dynamics and the quote was too high, the timeline too long, or the fit too rigid',
  'You have been burned by a freelancer, an offshore team, or a consultant who delivered a slide deck and nothing else',
  'You need a written plan you can defend internally to get budget approved',
  'You want a senior team that will still be there in 16 weeks when something breaks',
]

const NOT_FOR_SIGNALS = [
  'Pre-revenue startups looking for a build partner',
  'Companies looking for the cheapest quote',
  'Anyone who needs something shipped in three weeks',
  'Buyers looking for AI theatre — a chatbot, a GPT wrapper, a demo for the board',
  'Teams not willing to give one senior person two hours a week for the duration',
]

const PROCESS_WEEK_1 = [
  {
    day: 'Day 1',
    title: 'Kickoff',
    detail:
      'We meet your core team, align on scope, and set up access to the systems and data we need to map.',
  },
  {
    day: 'Day 2',
    title: 'Stakeholder interviews',
    detail:
      'We interview the people who actually run the workflows — not the org chart, the people on the ground. We are looking for the gaps nobody talks about in formal meetings.',
  },
  {
    day: 'Days 3–5',
    title: 'Operations mapping workshop',
    detail:
      'On-site with your team. We trace every manual step end to end, identify handoffs and failure points, and quantify the time and cost at each stage.',
  },
]

const PROCESS_WEEK_2 = [
  {
    day: 'Days 6–8',
    title: 'Analysis and roadmap drafting',
    detail:
      'We synthesize the mapping into a prioritized roadmap. We run the build-vs-buy analysis for every candidate system and draft the Phase 1 proposal.',
  },
  {
    day: 'Days 9–10',
    title: 'Findings preparation',
    detail:
      'We assemble the written assessment and prepare the leadership presentation. You receive a draft copy before the final session.',
  },
  {
    day: 'Day 11+',
    title: '60-minute leadership presentation',
    detail:
      'Adrian presents the findings to your leadership team. Every number, every recommendation, every trade-off explained in plain language. You leave with a plan, not a deck.',
  },
]

const FAQS = [
  {
    question: 'Is the Scoping Sprint just a way to get us to commit to a larger project?',
    answer:
      'No. The Scoping Sprint is a standalone paid engagement. You receive a written plan and a proposal at the end. You can take that plan and execute it with us, with another team, or with your own engineers. The plan is yours. If we are not the right team for Phase 1, we will tell you — and we will point you at someone who is. Our model depends on clients who chose us because we were the right fit, not because they felt backed into it.',
  },
  {
    question: 'What if we already have a rough spec or an RFP?',
    answer:
      'That is fine. We still run the Scoping Sprint because RFPs and specs almost always describe the system someone wants, not the problem they have. The Scoping Sprint maps the problem. The spec maps the solution. We need both before we can give you a proposal we will actually stand behind.',
  },
  {
    question: 'Will a junior consultant run the on-site sessions?',
    answer:
      'No. A senior engineer runs every session. Adrian joins for the kickoff and the leadership presentation. That is the commitment and it does not change.',
  },
  {
    question: 'We are not in Petaling Jaya. Can you still do this?',
    answer:
      'Yes. We run Scoping Sprints for clients across Malaysia, Singapore, and SEA. For clients outside Klang Valley, the on-site days are grouped into 2–3 focused on-site visits rather than spread across the two weeks. Travel costs are billed at cost.',
  },
  {
    question: 'What happens if the Scoping Sprint shows software is not the right answer?',
    answer:
      'Then we tell you. It happens. Sometimes the answer is a process change, sometimes it is a configuration fix on the ERP you already have, sometimes it is hiring one more competent operations manager. We would rather tell you that in week two than take your RM 180K for a build that does not solve the real problem.',
  },
  {
    question: 'Can the Scoping Sprint fee be credited against a ZTL project?',
    answer:
      "No. The Scoping Sprint is a standalone paid engagement. We do not credit it against later work. This is intentional — it keeps the Sprint's output independent. If we credited it forward, you would rightly question whether the roadmap was written to justify the larger project.",
  },
]

// Featured senior team for this page
const SPRINT_TEAM = TEAM_MEMBERS.filter((m) => ['Adrian', 'Derrick'].includes(m.name))

export default async function ScopingSprintPage() {
  return (
    <>
      <ServiceJsonLd
        name="Scoping Sprint"
        description="A paid 2-week diagnostic where a senior engineer maps your operations, quantifies the cost of staying manual, and delivers a written plan with a fixed price for Phase 1."
        url={`${SITE_URL}/services/scoping-sprint`}
      />

      <div className="bg-page">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="pt-24 md:pt-32 pb-16 md:pb-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="max-w-4xl">
              <AnimatedSection>
                <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
                  <ol className="flex items-center gap-2">
                    <li>
                      <Link href="/services" className="hover:text-[var(--text)] transition-colors">
                        Services
                      </Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li className="text-[var(--text)]" aria-current="page">
                      Scoping Sprint
                    </li>
                  </ol>
                </nav>

                <SectionLabel className="mb-4 block">Scoping Sprint</SectionLabel>
                <h1 className="text-hero mb-6">
                  Two weeks. One senior engineer.
                  <br />
                  <span className="text-gradient">A written plan you can defend internally.</span>
                </h1>
                <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-3xl mb-8">
                  Before we build anything, we map everything. The Scoping Sprint is a paid 2-week
                  engagement where a senior from our team sits with your operations team, maps the
                  workflows end to end, and delivers a written roadmap with a fixed price for Phase
                  1. You keep the plan whether or not you build with us.
                </p>

                <div className="flex flex-wrap items-center gap-3 mb-8 text-sm font-medium">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-default">
                    <Clock className="h-3.5 w-3.5 text-[var(--color-brand-blue)]" />2 weeks, start
                    to finish
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-default">
                    <Users className="h-3.5 w-3.5 text-[var(--color-brand-blue)]" />
                    Senior-led. No juniors.
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-default text-[var(--color-brand-blue)] font-semibold">
                    <Price anchor="scopingSprint" />
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="btn-primary">
                    <Link href="/strategy-session">
                      Book a Discovery Call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="/downloads/scoping-sprint-brief.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download the one-page brief
                    </a>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── What you get ─────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-surface">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <AnimatedSection className="mb-12">
              <SectionLabel className="mb-3 block">Deliverables</SectionLabel>
              <h2 className="text-section-title mb-4">Six things you walk away with.</h2>
              <p className="text-lg text-secondary max-w-2xl">
                Every Scoping Sprint delivers the same six outputs. What changes is the depth — your
                workflows, your numbers, your business.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DELIVERABLES.map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.07}>
                  <div className="h-full rounded-2xl border border-default bg-surface-2 p-6 md:p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand-blue)]/10 mb-5">
                      <item.icon className="h-6 w-6 text-[var(--color-brand-blue)]" />
                    </div>
                    <h3 className="text-card-title mb-3">{item.title}</h3>
                    <p className="text-base text-secondary leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── What it is NOT ───────────────────────────────────── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <AnimatedSection>
                <SectionLabel className="mb-3 block">Honest about what this is</SectionLabel>
                <h2 className="text-section-title mb-6">
                  Not a sales pitch dressed up as a workshop.
                </h2>
                <div className="space-y-4 text-secondary text-base leading-relaxed">
                  <p>
                    Most "discovery workshops" are structured to close a deal. They are designed to
                    surface the problems the vendor already knows how to solve, and then present
                    those problems back as reasons to sign.
                  </p>
                  <p>
                    The Scoping Sprint is different because it is paid. When you have paid for the
                    output, we are accountable to the output — not to the contract that comes after
                    it. If the output says you do not need custom software, we say that.
                  </p>
                  <p>
                    Seventy percent of Scoping Sprint clients convert to a LUDA Zero to Launch
                    project. The other thirty percent walk away with a plan worth more than the
                    Sprint cost. Both are wins. The goal is to get the right answer, not to close
                    the deal.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="rounded-2xl border border-default bg-surface p-8 space-y-5">
                  <h3 className="font-semibold text-lg">The Scoping Sprint is NOT:</h3>
                  <ul className="space-y-3">
                    {[
                      'A free discovery call with extra steps',
                      'A generic template applied to your business',
                      'Delivered by junior staff or subcontractors',
                      'A commitment to hire us for Phase 1',
                      'A sales presentation with your logo on slide 3',
                      'Something you keep only if you build with us',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base text-secondary">
                        <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Who it is for / not for ──────────────────────────── */}
        <section className="py-16 md:py-24 bg-surface">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <AnimatedSection className="mb-12 text-center">
              <SectionLabel className="mb-3 block">Qualification</SectionLabel>
              <h2 className="text-section-title">This is for you if...</h2>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-8">
              <AnimatedSection>
                <div className="rounded-2xl border border-[color:var(--color-brand-blue)]/20 bg-[var(--color-brand-blue)]/5 p-8">
                  <h3 className="font-semibold text-lg mb-5 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[var(--color-brand-blue)]" />
                    This is for you if:
                  </h3>
                  <ul className="space-y-3">
                    {FOR_SIGNALS.map((signal) => (
                      <li key={signal} className="flex items-start gap-3 text-base text-secondary">
                        <CheckCircle2 className="h-4 w-4 text-[var(--color-brand-blue)] shrink-0 mt-0.5" />
                        {signal}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="rounded-2xl border border-default bg-surface-2 p-8">
                  <h3 className="font-semibold text-lg mb-5 flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-muted" />
                    This is not for you if:
                  </h3>
                  <ul className="space-y-3">
                    {NOT_FOR_SIGNALS.map((signal) => (
                      <li key={signal} className="flex items-start gap-3 text-base text-secondary">
                        <XCircle className="h-4 w-4 text-muted shrink-0 mt-0.5" />
                        {signal}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── The process ──────────────────────────────────────── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <AnimatedSection className="mb-12">
              <SectionLabel className="mb-3 block">How it runs</SectionLabel>
              <h2 className="text-section-title mb-4">Two weeks. Every step visible.</h2>
              <p className="text-lg text-secondary max-w-2xl">
                You will know what is happening on every day. No black boxes. No "we will come back
                to you at the end."
              </p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Week 1 */}
              <AnimatedSection>
                <div className="rounded-2xl border border-default bg-surface p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand-blue)] text-white text-sm font-bold">
                      1
                    </div>
                    <h3 className="font-semibold text-lg">Week One — On the ground</h3>
                  </div>
                  <ol className="space-y-6">
                    {PROCESS_WEEK_1.map((step) => (
                      <li key={step.day} className="flex gap-4">
                        <div className="shrink-0">
                          <span className="inline-flex h-7 items-center px-2 rounded bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] text-xs font-semibold">
                            {step.day}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-sm mb-1">{step.title}</p>
                          <p className="text-sm text-secondary leading-relaxed">{step.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </AnimatedSection>

              {/* Week 2 */}
              <AnimatedSection delay={0.1}>
                <div className="rounded-2xl border border-default bg-surface p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand-blue)] text-white text-sm font-bold">
                      2
                    </div>
                    <h3 className="font-semibold text-lg">Week Two — Building the plan</h3>
                  </div>
                  <ol className="space-y-6">
                    {PROCESS_WEEK_2.map((step) => (
                      <li key={step.day} className="flex gap-4">
                        <div className="shrink-0">
                          <span className="inline-flex h-7 items-center px-2 rounded bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] text-xs font-semibold">
                            {step.day}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-sm mb-1">{step.title}</p>
                          <p className="text-sm text-secondary leading-relaxed">{step.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── LUDA Framework (compact) ─────────────────────────── */}
        <section className="py-8 md:py-12 bg-surface">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <AnimatedSection>
              <LudaSection variant="compact" />
            </AnimatedSection>
          </div>
        </section>

        {/* ── The people ───────────────────────────────────────── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <AnimatedSection className="mb-12">
              <SectionLabel className="mb-3 block">Who runs it</SectionLabel>
              <h2 className="text-section-title mb-4">Senior from day one. Not delegated.</h2>
              <p className="text-lg text-secondary max-w-2xl">
                A senior engineer runs every on-site session. Adrian joins for the strategy kickoff
                and presents findings personally to your leadership team. This is not negotiable and
                it does not change regardless of project size.
              </p>
            </AnimatedSection>

            <div className="flex flex-wrap gap-6">
              {SPRINT_TEAM.map((member) => (
                <AnimatedSection key={member.name}>
                  <div className="rounded-2xl border border-default bg-surface p-6 flex items-start gap-5 min-w-[260px]">
                    <div className="relative h-14 w-14 shrink-0 rounded-full overflow-hidden bg-surface-2">
                      <Image
                        src={member.image}
                        alt={member.fullName}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{member.fullName}</p>
                      <p className="text-sm text-muted mb-2">{member.role}</p>
                      {'linkedin' in member && (
                        <a
                          href={member.linkedin as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[var(--color-brand-blue)] hover:underline"
                        >
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}

              <AnimatedSection delay={0.1}>
                <div className="rounded-2xl border border-default bg-surface-2 p-6 min-w-[260px] flex items-start gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-brand-blue)]/10 shrink-0">
                    <Building2 className="h-6 w-6 text-[var(--color-brand-blue)]" />
                  </div>
                  <div>
                    <p className="font-semibold">Senior Engineer</p>
                    <p className="text-sm text-muted mb-2">On-site lead, Week 1 and 2</p>
                    <p className="text-xs text-secondary">
                      Assigned based on your industry and stack. Always senior. Always the same
                      person throughout.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Pricing + Download ───────────────────────────────── */}
        <section className="py-16 md:py-24 bg-surface">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <AnimatedSection>
                <SectionLabel className="mb-3 block">Pricing</SectionLabel>
                <h2 className="text-section-title mb-6">One price. No discount. No surprises.</h2>

                <div className="rounded-2xl border-2 border-[var(--color-brand-blue)]/30 bg-[var(--color-brand-blue)]/5 p-8 mb-8">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-4xl font-extrabold font-display">
                      <Price anchor="scopingSprint" />
                    </span>
                  </div>
                  <p className="text-sm text-secondary mb-4">
                    RM 15,000 for Malaysia-based engagements. USD 15,000 for international. Prices
                    shown based on your location.
                  </p>
                  <ul className="space-y-2 text-sm text-secondary">
                    <li className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[var(--color-brand-blue)]" />2 weeks, start
                      to finish
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-[var(--color-brand-blue)]" />
                      Senior engineer + Adrian for kickoff and presentation
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-[var(--color-brand-blue)]" />
                      All six deliverables listed above. Yours to keep.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-default bg-surface p-5 text-sm text-secondary">
                  <p className="font-semibold text-[var(--text)] mb-2">On discounts</p>
                  <p>
                    We do not discount. If the Scoping Sprint is outside your budget, the right move
                    is to have the discovery call first and be honest about constraints. We will
                    tell you what we can actually do at what stage.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <SectionLabel className="mb-3 block">Share internally</SectionLabel>
                <h2 className="text-section-title mb-6">The one-page brief.</h2>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  If you need to take this conversation to your MD or board, the one-pager below
                  covers the offer, the three-tier architecture, pricing in both currencies, and
                  Adrian's contact details. Print-ready. Two pages. No web-only version.
                </p>

                <a
                  href="/downloads/scoping-sprint-brief.pdf"
                  download
                  className="group inline-flex items-center gap-3 rounded-xl border border-default bg-surface p-5 hover:border-[var(--color-brand-blue)]/50 hover:bg-[var(--color-brand-blue)]/5 transition-all w-full"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-brand-blue)]/10 shrink-0">
                    <Download className="h-5 w-5 text-[var(--color-brand-blue)]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">
                      Scoping Sprint — A Brief for Decision Makers
                    </p>
                    <p className="text-xs text-muted mt-0.5">PDF, 2 pages, print-ready</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted group-hover:text-[var(--color-brand-blue)] transition-colors" />
                </a>

                <p className="text-xs text-muted mt-4">
                  No form. No email required. Download immediately.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Guarantee bar ────────────────────────────────────── */}
        <AnimatedSection>
          <GuaranteeBar />
        </AnimatedSection>

        {/* ── What happens on the call ─────────────────────────── */}
        <section className="py-16 md:py-24 bg-surface">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <AnimatedSection>
                <SectionLabel className="mb-3 block">Before the sprint starts</SectionLabel>
                <h2 className="text-section-title mb-6">
                  What happens on the 45-minute discovery call.
                </h2>
                <p className="text-base text-secondary leading-relaxed mb-8">
                  Before the Scoping Sprint kicks off, we do one 45-minute discovery call. It is
                  free. It is senior-led. It will not waste your time.
                </p>

                <ol className="space-y-5">
                  {[
                    'You tell us what is breaking. Specifically. In your words.',
                    'We ask six questions. They are the same six for every client. They are the questions that decide whether we can actually help you.',
                    'If the answers fit, we explain the Scoping Sprint and what it costs. If the answers do not fit, we tell you honestly and point you at someone who can help instead.',
                    'No deck. No pitch. No follow-up sales sequence if you do not proceed.',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-brand-blue)] text-white text-xs font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-base text-secondary leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>

                <p className="text-sm text-muted mt-6 italic">
                  Adrian takes every first call personally.
                </p>
              </AnimatedSection>

              {/* FAQ */}
              <AnimatedSection delay={0.15}>
                <SectionLabel className="mb-3 block">Common questions</SectionLabel>
                <h2 className="text-section-title mb-6">What people ask before they book.</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {FAQS.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="rounded-xl border border-default bg-surface px-5"
                    >
                      <AccordionTrigger className="text-sm font-semibold text-left py-4 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-secondary leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── What to read next ────────────────────────────────── */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <AnimatedSection className="mb-8">
              <SectionLabel className="mb-2 block">What to read next</SectionLabel>
              <h2 className="text-2xl font-bold">Go deeper before the call.</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  label: 'Service',
                  title: 'Operations Digitalisation',
                  description:
                    'See the operational problems the Scoping Sprint is most often called in to map.',
                  href: '/services/operations-digitalisation',
                },
                {
                  label: 'Service',
                  title: 'Custom Platform Development',
                  description:
                    'What Phase 1 (the build) looks like after the Scoping Sprint confirms scope.',
                  href: '/services/custom-platform-development',
                },
                {
                  label: 'Case study',
                  title: 'BookXcess: 15x Revenue Growth',
                  description:
                    'What happens after the plan is approved and the build begins. A story in before and after.',
                  href: '/work',
                },
              ].map((item) => (
                <AnimatedSection key={item.title}>
                  <Link
                    href={item.href}
                    className="group block rounded-xl border border-default bg-surface p-6 hover:border-[var(--color-brand-blue)]/40 transition-colors h-full"
                  >
                    <span className="text-xs font-semibold text-muted uppercase tracking-wider mb-3 block">
                      {item.label}
                    </span>
                    <h3 className="font-semibold mb-2 group-hover:text-[var(--color-brand-blue)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-secondary leading-relaxed">{item.description}</p>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ────────────────────────────────────────── */}
        <section className="py-20 md:py-32 bg-surface">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection>
                <SectionLabel className="mb-4 block">Ready to get a plan</SectionLabel>
                <h2 className="text-section-title mb-6">
                  You already know the problem.
                  <br />
                  <span className="text-gradient">
                    We help you prove it costs what you think it costs.
                  </span>
                </h2>
                <p className="text-lg text-secondary leading-relaxed mb-10">
                  The 45-minute discovery call is free. Senior-led. It will not waste your time. If
                  the answers fit, we explain the Scoping Sprint and what it costs. If they do not,
                  we tell you honestly and point you at someone who can help instead.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
                  <Button asChild size="lg" className="btn-primary">
                    <Link href="/strategy-session">
                      Book Your Discovery Call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="/downloads/scoping-sprint-brief.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download the one-pager first
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-muted italic">
                  Adrian takes every first call personally.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
