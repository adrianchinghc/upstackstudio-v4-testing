import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel, AnimatedSection, RatingsStrip } from '@/components/common'
import { OrganizationJsonLd } from '@/components/seo/JsonLd'
import { LudaSection } from '@/components/luda/LudaSection'
import { Button } from '@/components/ui/button'
import { SOCIAL, PRESS, YT_JUSTIN, YT_JASON } from '@/lib/constants'
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Users,
  Youtube,
  Podcast,
  ExternalLink,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We exist for one reason: to help growing companies build technology that actually works. Learn about our story, values, and the LUDA™ Framework.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | Upstack Studio',
    description:
      'We exist for one reason: to help growing companies build technology that actually works. Learn about our story, values, and the LUDA™ Framework.',
    url: '/about',
    siteName: 'Upstack Studio',
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Upstack Studio',
    description:
      'We exist for one reason: to help growing companies build technology that actually works.',
  },
}

const VALUES = [
  {
    title: 'Growth Mindset',
    description:
      'We learn from every project. Every failure teaches us something. Every success is a chance to raise the bar.',
    icon: TrendingUp,
  },
  {
    title: 'Uncompromising Standards',
    description:
      "We push back on bad features. We tell you the truth about what's possible. We don't cut corners.",
    icon: ShieldCheck,
  },
  {
    title: 'Proactive by Default',
    description:
      "We don't wait for problems to become crises. We flag issues early, propose solutions, and move fast.",
    icon: Zap,
  },
  {
    title: 'People Before Technology',
    description:
      'Technology is a tool. The goal is always better outcomes for people — your team, your customers, your business.',
    icon: Users,
  },
]

const WHY_US = [
  'The people who pitch you are the people who build for you.',
  "We tell you the truth about what's possible — even when it's not what you want to hear.",
  'No juniors, no interns on design or development.',
  'Bi-weekly calls. Slack always open. You always know where your project stands.',
  'If we cause delays, we pay for them — not you.',
  'You own everything we build, from kickoff to final delivery.',
  'Delivered across manufacturing, financial services, healthcare, media, logistics, consumer tech, and sports.',
]

const QUALIFYING_QUESTIONS = [
  {
    question: 'Why now?',
    description: 'What changed? Why is this problem urgent enough to solve today?',
  },
  {
    question: 'Why this solution?',
    description: 'Why software? Why not a process change, a hire, or an off-the-shelf tool?',
  },
  {
    question: 'Why us?',
    description:
      "Are we the right team for this specific problem? Sometimes we're not — and we'll tell you.",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-page pt-20 md:pt-24 pb-16 md:pb-24">
      <OrganizationJsonLd />
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <AnimatedSection className="max-w-3xl mb-16 md:mb-20">
          <SectionLabel className="mb-4 block">About Upstack Studio</SectionLabel>
          <h1 className="text-page-title mb-6">
            We exist for one reason: to help growing companies build technology that actually works.
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            Not technology that looks good in a demo. Technology that runs your business, day after
            day, without breaking.
          </p>
        </AnimatedSection>

        {/* AI-Enabled Section */}
        <AnimatedSection className="mb-16 md:mb-24">
          <div className="rounded-2xl border border-sky-faint bg-surface p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <SectionLabel className="mb-4 block">How We Build</SectionLabel>
                <h2 className="text-section-title mb-4">AI-Enabled Engineering</h2>
                <p className="text-lg text-secondary mb-6 leading-relaxed">
                  We build software the way the world's best engineers build it — with AI. Our team
                  uses Claude Code, AI-assisted code review, and automated testing on every sprint.
                  Not because it's trendy. Because it makes us faster, more thorough, and more
                  predictable.
                </p>
                <p className="text-base text-muted">
                  AI-enabled doesn't mean AI-replaced. It means your project gets our senior
                  engineers plus the best tools on the planet. That's why 16 weeks is achievable
                  when competitors quote 12 months.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-extrabold text-sky-accent font-display mb-2">
                  17+
                </div>
                <p className="text-xl font-semibold">
                  projects shipped with AI-enabled engineering
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Story Section */}
        <AnimatedSection className="mb-16 md:mb-24">
          <div className="max-w-3xl">
            <SectionLabel className="mb-4 block">Our Story</SectionLabel>
            <h2 className="text-section-title mb-8">
              Built from experience — including the painful kind.
            </h2>

            <div className="prose prose-lg text-secondary max-w-none">
              <p>
                We started in a café in Kuala Lumpur. Just a few engineers who believed there had to
                be a better way to build software for growing companies.
              </p>
              <p>
                We've walked away from a RM350,000 prospect because there were too many red flags.
                Both co-founders left within a year. We survived 3 months with no clients — team
                still on payroll — and had to tell a prospect honestly: &ldquo;I don't know whether
                I will still be here.&rdquo;
              </p>
              <p>
                We've carried RM80,000 in bad debt from a client who doubled scope then refused to
                pay. Every one of those failures taught us something that now protects our clients.
              </p>
              <p>
                From those lessons came the LUDA™ Framework and the three qualifying questions we
                ask before every engagement. Now we're delivering for 9-figure brands and
                public-listed companies across six countries.
              </p>
            </div>

            {/* Press mention */}
            <div className="mt-8 pt-8 border-t border-default">
              <a
                href={PRESS.inRealLife.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-sky-accent hover:underline"
              >
                <span className="text-sm font-medium">Read more:</span>
                <span className="text-base">{PRESS.inRealLife.title}</span>
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-sm text-muted mt-1">{PRESS.inRealLife.source}</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Qualifying Questions */}
        <AnimatedSection className="mb-16 md:mb-24">
          <div className="max-w-3xl">
            <SectionLabel className="mb-4 block">Before Every Engagement</SectionLabel>
            <h2 className="text-section-title mb-8">Three questions we ask before we say yes.</h2>

            <div className="grid gap-6">
              {QUALIFYING_QUESTIONS.map((item, index) => (
                <div
                  key={item.question}
                  className="rounded-xl border border-default bg-surface p-6"
                >
                  <span className="text-4xl font-bold text-sky-accent font-display">
                    {index + 1}.
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-2">{item.question}</h3>
                  <p className="text-secondary">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Values */}
        <section className="mb-16 md:mb-24">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel className="mb-4 block">Our Values</SectionLabel>
            <h2 className="text-section-title">What we stand for.</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {VALUES.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="rounded-xl border border-default bg-surface p-6 md:p-8 h-full">
                  <value.icon className="h-10 w-10 text-sky-accent mb-4" />
                  <h3 className="text-card-title mb-3">{value.title}</h3>
                  <p className="text-secondary">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Why Us */}
        <AnimatedSection className="mb-16 md:mb-24">
          <div className="rounded-2xl bg-surface border border-default p-8 md:p-12">
            <SectionLabel className="mb-4 block">7 Reasons</SectionLabel>
            <h2 className="text-section-title mb-8">Why work with us?</h2>

            <ol className="space-y-4">
              {WHY_US.map((reason, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-sky-faint text-sky-accent font-semibold text-sm">
                    {index + 1}
                  </span>
                  <p className="text-lg pt-1" dangerouslySetInnerHTML={{ __html: reason }} />
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>

        {/* Team */}
        <AnimatedSection className="mb-16 md:mb-24">
          <div className="max-w-3xl">
            <SectionLabel className="mb-4 block">The Team</SectionLabel>
            <h2 className="text-section-title mb-6">A lean, senior team.</h2>
            <p className="text-lg text-secondary leading-relaxed mb-8">
              Engineers, designers, and strategists — all full-time, all based in Malaysia. No
              distributed freelance networks. No offshore handoffs at midnight. The people who scope
              your project are the people who build it.
            </p>

            <div className="rounded-xl border border-default bg-surface p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-surface-2 flex items-center justify-center text-4xl font-bold text-sky-accent font-display">
                AC
              </div>
              <div>
                <h3 className="text-xl font-semibold">Adrian Ching</h3>
                <p className="text-muted mb-3">Founder</p>
                <p className="text-secondary text-base">
                  Adrian personally reviews every strategy session submission and leads client
                  relationships from start to finish.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* LUDA Section */}
        <LudaSection variant="full" />

        {/* YouTube / Podcast */}
        <section className="py-16 md:py-24">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel className="mb-4 block">Learn How We Think</SectionLabel>
            <h2 className="text-section-title">Watch. Listen. Decide.</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden bg-surface border border-default">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${YT_JUSTIN}`}
                    title="Justin Ruffier - Whisker Tracker Testimonial"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl overflow-hidden bg-surface border border-default">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${YT_JASON}`}
                    title="Jason Anderson - Tradelink Testimonial"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SOCIAL.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-default bg-surface hover:bg-surface-2 transition-colors"
            >
              <Youtube className="h-5 w-5 text-red-500" />
              <span className="font-medium">YouTube Channel</span>
            </a>
            <a
              href={SOCIAL.podcast}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-default bg-surface hover:bg-surface-2 transition-colors"
            >
              <Podcast className="h-5 w-5 text-sky-accent" />
              <span className="font-medium">Tech It Or Leave It Podcast</span>
            </a>
          </AnimatedSection>
        </section>

        {/* Ratings */}
        <AnimatedSection className="mb-16 md:mb-24">
          <RatingsStrip />
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <h2 className="text-section-title mb-6">Ready to talk?</h2>
          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
            45 minutes with Adrian. Not a sales pitch. A real conversation about your operations and
            what we'd do about it.
          </p>
          <Button asChild size="lg">
            <Link href="/strategy-session">
              Book a Strategy Call
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </div>
  )
}
