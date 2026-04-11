import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel, AnimatedSection } from '@/components/common'
import { Button } from '@/components/ui/button'
import { SOCIAL } from '@/lib/constants'
import { ArrowRight, Zap, Users, Rocket, Coffee, Laptop, Heart, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Upstack Studio — build software for growing companies with a senior team that values craft, ownership, and AI-enabled engineering.',
  alternates: {
    canonical: '/careers',
  },
  openGraph: {
    title: 'Careers | Upstack Studio',
    description:
      'Join Upstack Studio — build software for growing companies with a senior team that values craft and ownership.',
    url: '/careers',
    siteName: 'Upstack Studio',
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | Upstack Studio',
    description: 'Join Upstack Studio — a senior team that values craft and ownership.',
  },
}

const PERKS = [
  {
    title: 'Remote-First',
    description:
      'Work from anywhere in Malaysia. We meet in-person quarterly, but your desk is wherever you do your best work.',
    icon: Laptop,
  },
  {
    title: 'Senior Team',
    description:
      "No juniors means no babysitting. You'll work alongside experienced engineers who move fast and ship quality.",
    icon: Users,
  },
  {
    title: 'AI-Enabled Tools',
    description:
      'We use Claude Code, AI-assisted code review, and the best development tools. Your productivity matters.',
    icon: Zap,
  },
  {
    title: 'Real Ownership',
    description:
      'You own features end-to-end. No ticket factories. No micromanagement. Ship work you can be proud of.',
    icon: Rocket,
  },
  {
    title: 'Sustainable Pace',
    description:
      "No death marches. No weekend emergencies. We scope projects properly so you don't burn out.",
    icon: Coffee,
  },
  {
    title: 'Clients Who Care',
    description:
      'We work with established companies solving real problems — not vaporware startups or demanding clients.',
    icon: Heart,
  },
]

const VALUES = [
  {
    title: 'Craft over speed',
    description:
      "We'd rather ship something excellent in 16 weeks than something mediocre in 8. Quality is the strategy.",
  },
  {
    title: 'Honesty over comfort',
    description:
      "We tell clients when their ideas won't work. We tell each other when code needs improvement. Directness builds trust.",
  },
  {
    title: 'Ownership over process',
    description:
      "We hire people who don't need to be managed. You own your work and the outcomes. We stay out of your way.",
  },
  {
    title: 'Learning over ego',
    description:
      'AI is changing everything. The best engineers are the ones who embrace new tools and stay curious.',
  },
]

export default function CareersPage() {
  return (
    <div className="bg-page pt-20 md:pt-24 pb-16 md:pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        {/* Header */}
        <AnimatedSection className="max-w-3xl mb-16 md:mb-24">
          <SectionLabel className="mb-4 block">Careers</SectionLabel>
          <h1 className="text-page-title mb-6">Build Software That Matters</h1>
          <p className="text-lg md:text-xl text-secondary leading-relaxed mb-4">
            We&apos;re a small, senior team building custom software for companies that can&apos;t
            afford another failed project. If you care about craft and want to work with AI-enabled
            tools alongside experienced engineers — keep reading.
          </p>
          <p className="text-base text-muted">
            Kuala Lumpur-based, remote-first. Currently hiring selectively.
          </p>
        </AnimatedSection>

        {/* Perks Grid */}
        <AnimatedSection className="mb-16 md:mb-24">
          <h2 className="text-section-title mb-8">What You Get</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERKS.map((perk) => (
              <div
                key={perk.title}
                className="group flex gap-4 p-6 rounded-xl bg-surface border border-border hover:border-brand-blue/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue/10 group-hover:bg-brand-blue/20 transition-colors">
                  <perk.icon className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{perk.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Values */}
        <AnimatedSection className="mb-16 md:mb-24">
          <div className="max-w-3xl">
            <h2 className="text-section-title mb-8">How We Work</h2>
            <div className="space-y-8">
              {VALUES.map((value, index) => (
                <div key={value.title} className="flex gap-6 items-baseline">
                  <span className="text-4xl font-bold text-brand-blue/30 font-display leading-none">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-secondary leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Current Openings */}
        <AnimatedSection className="mb-16 md:mb-24">
          <div className="rounded-2xl border border-default bg-surface p-8 md:p-12">
            <h2 className="text-section-title mb-6">Current Openings</h2>
            <p className="text-secondary mb-8 max-w-2xl">
              We hire slowly and carefully. If you don&apos;t see a role that fits, reach out anyway
              — we&apos;re always interested in meeting exceptional people.
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-6 rounded-xl bg-surface-2 border border-border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">Senior Full-Stack Developer</h3>
                    <p className="text-sm text-muted">
                      Ruby on Rails + React · Remote (Malaysia) · Full-time
                    </p>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={`mailto:careers@upstackstudio.com?subject=Application: Senior Full-Stack Developer`}
                    >
                      Apply
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-surface-2 border border-border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">UI/UX Designer</h3>
                    <p className="text-sm text-muted">
                      Figma + Design Systems · Remote (Malaysia) · Full-time
                    </p>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={`mailto:careers@upstackstudio.com?subject=Application: UI/UX Designer`}
                    >
                      Apply
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted">
              Don&apos;t see your role?{' '}
              <a
                href="mailto:careers@upstackstudio.com"
                className="text-brand-blue hover:underline"
              >
                Send us your portfolio anyway
              </a>
              .
            </p>
          </div>
        </AnimatedSection>

        {/* About */}
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 p-8 md:p-12 rounded-2xl bg-surface-2 border border-border">
            <div className="max-w-xl">
              <h2 className="text-xl font-semibold mb-4">About Upstack Studio</h2>
              <p className="text-secondary leading-relaxed mb-4">
                We&apos;re a software development studio based in Kuala Lumpur, building custom
                applications for established companies across Southeast Asia and beyond. Our clients
                include Daikin, BookXcess, Teleme, and The Malaysian Insight.
              </p>
              <p className="text-secondary leading-relaxed">
                Since 2017, we&apos;ve delivered 40+ projects with a team that stays from kickoff to
                handover. No juniors. No outsourcing. No bullshit.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button asChild variant="outline">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">
                  Follow on LinkedIn
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
