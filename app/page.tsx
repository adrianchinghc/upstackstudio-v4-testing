import type { Metadata } from 'next'
import Link from 'next/link'
import {
  SectionLabel,
  AnimatedSection,
  TestimonialCard,
  YouTubeFacade,
  RatingsStrip,
} from '@/components/common'
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd'
import { HeroProofCard } from '@/components/hero/HeroProofCard'
import { LudaSection } from '@/components/luda/LudaSection'
import { Button } from '@/components/ui/button'
import { YT_JUSTIN } from '@/lib/constants'
import Image from 'next/image'
import { ArrowRight, MessageSquare, BarChart3, Cpu } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Upstack Studio | AI-Enabled Software Engineering Malaysia',
  description:
    'AI-enabled software engineering for established companies. Operations digitalisation, AI integration, and custom platform development. Trusted by Daikin, Magnum 4D, BookXcess. Built on the LUDA™ Framework.',
  alternates: { canonical: 'https://upstackstudio.com' },
  openGraph: {
    title: 'Upstack Studio | AI-Enabled Software Engineering Malaysia',
    description:
      'Operations digitalisation, AI integration, and custom platform development for established, growing companies.',
    url: 'https://upstackstudio.com',
    siteName: 'Upstack Studio',
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upstack Studio | AI-Enabled Software Engineering',
    description: 'AI-enabled software engineering for established, growing companies.',
  },
}

// Testimonials data
const TESTIMONIALS = [
  {
    quote:
      "Brilliant job guys! Just brilliant! So many amazing changes in just a few days. Thank you for the quick response to our predicament. You really don't know how much this means to us. I owe you guys the biggest favour.",
    author: 'Andrew Yap',
    role: 'Founder',
    company: 'BookXcess',
    image: '/images/clients/andrewyap.png',
    featured: true,
  },
  {
    quote: "They were much better than any development house we'd used previously.",
    author: 'Mark Choo',
    role: 'Ex-CEO',
    company: 'Teleme',
    image: '/images/clients/mark-choo.webp',
  },
  {
    quote:
      'Pleasant experience working with a team of professionals who were responsive and reliable. Most impressive was that the entire team from Upstack Studio went above and beyond to ensure the deliverables and deadline were met.',
    author: 'Eddy How',
    role: 'Deputy Manager',
    company: 'Magnum 4D Berhad',
    image: '/images/clients/eddyhow.png',
  },
  {
    quote:
      'I was impressed by their knowledge on web design, user experience, and optimization. The total app delivery process exceeded our expectations with remarkable turnaround speed.',
    author: 'Heidzir Jamarajid',
    role: 'IT Administrator',
    company: 'The Malaysian Insight',
    image: '/images/clients/heidzirjamaraji.png',
  },
  {
    quote:
      'We worked closely with Adrian and his team during the project and their response was very quick and timely. Work is delivered on time and sometimes, they even go out of their way to complete urgent tasks which we really appreciate.',
    author: 'Dinie Johari',
    role: 'Assistant Manager',
    company: 'BookXcess',
    image: '/images/clients/diniejohari.png',
  },
  {
    quote:
      'The management team are satisfied with the deliverables, and decided to continue engaging Upstack team for the ongoing product enhancement and support. We were very satisfied with their work every step of the way.',
    author: 'Tan Loo Toon',
    role: 'CTO',
    company: 'NiuAce for Builders',
    image: '/images/clients/loo-toon-tan.jpg',
  },
]

// Pain cards data — each links to relevant service
const PAIN_CARDS: Array<{
  title: string
  description: string
  icon: typeof MessageSquare
  accentColor: 'amber' | 'rose' | 'violet'
  href: string
}> = [
  {
    title: '"We\'re still doing approvals over WhatsApp"',
    description:
      'Your team copies data between systems, chases sign-offs on group chats, and re-enters information that should flow automatically. Every new hire adds one more person to manage the chaos — not fix it.',
    icon: MessageSquare,
    accentColor: 'amber',
    href: '/services/operations-digitalisation',
  },
  {
    title: '"I can\'t get a clear picture of what\'s happening"',
    description:
      "Sales has one version of the numbers. Finance has another. Operations has a spreadsheet nobody's updated this week. Decisions get made on gut feel because pulling accurate data takes half a day.",
    icon: BarChart3,
    accentColor: 'rose',
    href: '/services/custom-platform-development',
  },
  {
    title: '"Everyone says we need AI. Nobody can tell us where to start."',
    description:
      "You've sat through demos. You've read the reports. But every vendor wants to sell you a chatbot, and none of it connects to how your business actually runs.",
    icon: Cpu,
    accentColor: 'violet',
    href: '/services/ai-integration',
  },
]

// Client logos with SVGs available — heights tuned for visual consistency
const CLIENT_LOGOS = [
  { name: 'Daikin', src: '/images/client-logos/daikin.svg', height: 28 },
  { name: 'Teleme', src: '/images/client-logos/teleme.svg', height: 20 },
  { name: 'The Malaysian Insight', src: '/images/client-logos/tmi.svg', height: 32 },
  { name: 'Acson', src: '/images/client-logos/acson.svg', height: 36 },
  { name: 'NiuAce', src: '/images/client-logos/niuace.svg', height: 24 },
  { name: 'Whitman', src: '/images/client-logos/whitman.svg', height: 26 },
]

// Services preview
const SERVICES = [
  {
    title: 'Operations Digitalisation',
    description:
      'Replace manual processes, spreadsheets, and WhatsApp chains with systems that run your business.',
    href: '/services/operations-digitalisation',
  },
  {
    title: 'AI Integration',
    description:
      "AI isn't magic — but in the right place, it's the highest-ROI investment you can make.",
    href: '/services/ai-integration',
  },
  {
    title: 'Custom Platform Development',
    description:
      'When off-the-shelf software stops fitting — we build what actually works for your business.',
    href: '/services/custom-platform-development',
  },
]

export default function Home() {
  return (
    <div className="bg-page hero-parallax-container">
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      {/* Hero Section — Asymmetric two-column layout */}
      <section
        aria-labelledby="hero-heading"
        className="hero-section relative min-h-[85vh] flex items-center pt-20 md:pt-28 pb-16 md:pb-20 overflow-hidden"
      >
        {/* Background dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, var(--muted) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Subtle background glow — dark mode only */}
        <div
          className="hidden dark:block absolute top-1/4 left-1/3 w-[600px] h-[400px] rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #0A4DFF 0%, transparent 70%)' }}
        />

        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left column — Content */}
            <div className="lg:col-span-7">
              <AnimatedSection delay={0}>
                <SectionLabel className="mb-5">AI-Enabled Software Engineering</SectionLabel>
              </AnimatedSection>

              <AnimatedSection delay={0.08}>
                <h1 id="hero-heading" className="mb-6">
                  <span className="block text-[clamp(36px,5.5vw,72px)] font-extrabold font-display tracking-[-0.03em] leading-[0.95]">
                    Your revenue has scaled.
                  </span>
                  <span className="block text-[clamp(36px,5.5vw,72px)] font-extrabold font-display tracking-[-0.03em] leading-[0.95] text-gradient mt-1">
                    Your operations haven't.
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.16}>
                <p className="text-lg md:text-xl text-secondary max-w-xl leading-relaxed mb-3">
                  We map your broken processes, design the system, and build it in 16 weeks.
                </p>
                <p className="text-base text-muted mb-4 font-medium">
                  No juniors. No handoffs. No disappearing after launch.
                </p>
                <p className="text-sm text-muted/80 mb-8">
                  <span className="font-semibold">Typical engagements from USD 45,000.</span>{' '}
                  <span className="opacity-80">Scope confirmed on the call.</span>
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.24}>
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <Button asChild size="lg" className="h-12 px-6 text-base">
                    <Link href="/strategy-session">
                      Book a Strategy Call
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base">
                    <Link href="/work">See Our Work</Link>
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <RatingsStrip variant="compact" className="justify-start" />
              </AnimatedSection>
            </div>

            {/* Right column — Proof card */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <HeroProofCard />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Cards Section — Left-aligned header, varied card weights */}
      <section
        aria-labelledby="pain-heading"
        className="pt-16 pb-24 md:pt-24 md:pb-40 bg-surface content-auto"
      >
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left column — Header (sticky on scroll) */}
            <div className="lg:col-span-4">
              <AnimatedSection>
                <div className="lg:sticky lg:top-32">
                  <SectionLabel className="mb-4 block">Sound Familiar?</SectionLabel>
                  <h2 id="pain-heading" className="text-section-title mb-6">
                    The problems that got you here won't solve themselves.
                  </h2>
                  <p className="text-secondary text-lg leading-relaxed">
                    These are the conversations we have every week with operations leaders across
                    Malaysia.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Right column — Cards with semantic color accents */}
            <div className="lg:col-span-8 space-y-6">
              {PAIN_CARDS.map((card, index) => {
                // Semantic color classes for each pain type
                const colorMap = {
                  amber: {
                    iconBg: 'bg-amber-500/10 dark:bg-amber-400/10',
                    icon: 'text-amber-600 dark:text-amber-400',
                    border: 'hover:border-amber-500/40',
                    accent: 'border-l-amber-500',
                  },
                  rose: {
                    iconBg: 'bg-rose-500/10 dark:bg-rose-400/10',
                    icon: 'text-rose-600 dark:text-rose-400',
                    border: 'hover:border-rose-500/40',
                    accent: 'border-l-rose-500',
                  },
                  violet: {
                    iconBg: 'bg-violet-500/10 dark:bg-violet-400/10',
                    icon: 'text-violet-600 dark:text-violet-400',
                    border: 'hover:border-violet-500/40',
                    accent: 'border-l-violet-500',
                  },
                } as const
                const colorClasses = colorMap[card.accentColor]

                return (
                  <AnimatedSection key={card.title} delay={index * 0.1}>
                    <Link
                      href={card.href}
                      className={`
                        group block relative rounded-2xl border border-default border-l-4 ${colorClasses.accent} p-8 md:p-10 transition-all duration-300
                        ${colorClasses.border} hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]
                        ${index === 0 ? 'bg-surface-2' : 'bg-surface'}
                      `}
                    >
                      <div className="flex gap-6">
                        <div className="shrink-0">
                          <div
                            className={`w-14 h-14 rounded-xl ${colorClasses.iconBg} flex items-center justify-center`}
                          >
                            <card.icon className={`h-7 w-7 ${colorClasses.icon}`} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--color-brand-blue)] transition-colors">
                            {card.title}
                          </h3>
                          <p className="text-secondary text-base leading-relaxed mb-4">
                            {card.description}
                          </p>
                          <span className="inline-flex items-center gap-2 text-sm font-medium text-muted group-hover:text-[var(--color-brand-blue)] transition-colors">
                            See how we solve this
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview — Asymmetric grid with featured first card */}
      <section
        aria-labelledby="services-heading"
        className="pt-20 pb-28 md:pt-28 md:pb-44 bg-surface content-auto"
      >
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <AnimatedSection className="mb-16 md:mb-20 max-w-3xl">
            <SectionLabel className="mb-4 block">How We Help</SectionLabel>
            <h2 id="services-heading" className="text-section-title">
              We don't build apps.
              <span className="text-gradient">
                {' '}
                We build the infrastructure your business runs on.
              </span>
            </h2>
          </AnimatedSection>

          {/* Asymmetric grid — first card spans full width */}
          <div className="space-y-6 mb-12">
            {/* Featured first service — dramatic, full width */}
            <AnimatedSection delay={0.1}>
              <Link
                href={SERVICES[0].href}
                className="group block relative rounded-2xl border-2 border-[var(--color-brand-blue)]/20 bg-surface-2 p-10 md:p-14 transition-all duration-300 hover:border-[var(--color-brand-blue)]/50 overflow-hidden shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
              >
                {/* Bold accent line — cyan to blue gradient */}
                <div
                  className="absolute top-0 left-0 w-1.5 h-full"
                  style={{ background: 'var(--gradient-text)' }}
                />

                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-blue)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center relative">
                  <div>
                    <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--color-lime-text)] mb-6 px-3 py-1.5 rounded-full bg-[var(--color-lime-bg)] border border-[var(--color-lime-border)]">
                      Most requested
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold mb-5 group-hover:text-[var(--color-brand-blue)] transition-colors font-display tracking-tight">
                      {SERVICES[0].title}
                    </h3>
                    <p className="text-secondary text-lg md:text-xl leading-relaxed mb-8">
                      {SERVICES[0].description}
                    </p>
                    <span className="inline-flex items-center gap-3 text-lg font-semibold text-muted group-hover:text-[var(--color-brand-blue)] transition-colors">
                      Explore this service
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </span>
                  </div>
                  <div className="hidden md:flex items-center justify-end">
                    <div className="text-[140px] font-extrabold font-display text-[var(--border)] group-hover:text-[var(--color-brand-blue)]/15 transition-colors leading-none tracking-tighter">
                      01
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Secondary services — 2-column grid with color accents */}
            <div className="grid md:grid-cols-2 gap-6">
              {SERVICES.slice(1).map((service, index) => {
                // AI Integration = violet, Custom Platform = emerald
                const cardColors =
                  index === 0
                    ? {
                        accent: 'violet',
                        border: 'hover:border-violet-500/40',
                        numeral: 'group-hover:text-violet-500/15',
                        title: 'group-hover:text-violet-500 dark:group-hover:text-violet-400',
                        link: 'group-hover:text-violet-500 dark:group-hover:text-violet-400',
                      }
                    : {
                        accent: 'emerald',
                        border: 'hover:border-emerald-500/40',
                        numeral: 'group-hover:text-emerald-500/15',
                        title: 'group-hover:text-emerald-500 dark:group-hover:text-emerald-400',
                        link: 'group-hover:text-emerald-500 dark:group-hover:text-emerald-400',
                      }

                return (
                  <AnimatedSection key={service.title} delay={0.15 + index * 0.05}>
                    <Link
                      href={service.href}
                      className={`group block h-full relative rounded-2xl border border-default bg-surface p-8 md:p-10 transition-all duration-300 ${cardColors.border} hover:bg-surface-2 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]`}
                    >
                      {/* Large numeral in background */}
                      <div
                        className={`absolute -top-4 -right-4 text-[100px] font-extrabold font-display text-[var(--border)] ${cardColors.numeral} transition-colors leading-none tracking-tighter pointer-events-none`}
                      >
                        0{index + 2}
                      </div>

                      <div className="relative">
                        <h3
                          className={`text-xl md:text-2xl font-bold ${cardColors.title} transition-colors mb-4 font-display tracking-tight`}
                        >
                          {service.title}
                        </h3>
                        <p className="text-secondary text-base md:text-lg leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <span
                          className={`inline-flex items-center gap-2 text-base font-semibold text-muted ${cardColors.link} transition-colors`}
                        >
                          Learn more
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>

          <AnimatedSection delay={0.3}>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies — Before/After proof of outcomes */}
      <section
        aria-labelledby="work-heading"
        className="pt-24 pb-16 md:pt-36 md:pb-20 bg-page content-auto"
      >
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <AnimatedSection className="mb-12 md:mb-16 max-w-2xl">
            <SectionLabel className="mb-4 block">Proof, Not Promises</SectionLabel>
            <h2 id="work-heading" className="text-section-title">
              Real outcomes from real projects.
            </h2>
          </AnimatedSection>

          {/* Featured case study — BookXcess */}
          <AnimatedSection delay={0.1} className="mb-8">
            <div className="group relative rounded-2xl border-2 border-[var(--color-brand-blue)]/20 bg-surface p-8 md:p-12 transition-all hover:border-[var(--color-brand-blue)]/40 overflow-hidden">
              {/* Accent line */}
              <div
                className="absolute top-0 left-0 w-1.5 h-full"
                style={{ background: 'var(--gradient-text)' }}
              />

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <span className="inline-flex rounded-full bg-[var(--color-brand-blue)]/10 border border-[var(--color-brand-blue)]/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-brand-blue)] mb-6">
                    Retail · Ecommerce
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display tracking-tight">
                    BookXcess
                  </h3>
                  <p className="text-secondary text-lg leading-relaxed mb-6">
                    Shopify migration that transformed their online revenue. From manual processes
                    to automated operations.
                  </p>
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 text-base font-semibold text-muted hover:text-[var(--color-brand-blue)] transition-colors"
                  >
                    View case study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-[80px] md:text-[120px] font-extrabold text-gradient leading-none font-display tracking-[-0.04em]">
                    15×
                  </div>
                  <p className="text-xl font-semibold mt-2">ecommerce revenue growth</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Secondary case studies — 2 cards with images */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <AnimatedSection delay={0.15}>
              <div className="group h-full rounded-2xl border border-default bg-surface overflow-hidden transition-all hover:border-[var(--color-brand-blue)]/40">
                <div
                  className="relative aspect-[16/9] overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, var(--surface-2) 0%, var(--surface) 100%)',
                  }}
                >
                  {/* Subtle dot pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 1px 1px, var(--muted) 1px, transparent 0)',
                      backgroundSize: '16px 16px',
                    }}
                  />
                  <Image
                    src="/images/case-studies/daikin-case-study.png"
                    alt="Daikin Malaysia IoT Platform"
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <span className="inline-flex rounded-full bg-[var(--color-brand-blue)]/10 px-3 py-1 text-xs font-medium text-[var(--color-brand-blue)] mb-4">
                    Manufacturing · IoT
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 font-display tracking-tight">
                    Daikin Malaysia
                  </h3>
                  <p className="text-secondary text-base leading-relaxed mb-6">
                    React Native app for remote AC control and unified CCTV monitoring across
                    distributed facilities.
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl md:text-4xl font-extrabold text-gradient font-display">
                      2
                    </span>
                    <span className="text-base text-muted font-medium">
                      IoT platforms delivered
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="group h-full rounded-2xl border border-default bg-surface overflow-hidden transition-all hover:border-[var(--color-brand-blue)]/40">
                <div
                  className="relative aspect-[16/9] overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, var(--surface-2) 0%, var(--surface) 100%)',
                  }}
                >
                  {/* Subtle dot pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 1px 1px, var(--muted) 1px, transparent 0)',
                      backgroundSize: '16px 16px',
                    }}
                  />
                  <Image
                    src="/images/case-studies/teleme-case-study.png"
                    alt="Teleme Telemedicine Platform"
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <span className="inline-flex rounded-full bg-[var(--color-brand-blue)]/10 px-3 py-1 text-xs font-medium text-[var(--color-brand-blue)] mb-4">
                    Healthcare · Telemedicine
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 font-display tracking-tight">
                    Teleme
                  </h3>
                  <p className="text-secondary text-base leading-relaxed mb-6">
                    Telemedicine platform that exceeded all previous development partnerships. Now
                    serving thousands of patients.
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl md:text-4xl font-extrabold text-gradient font-display">
                      #1
                    </span>
                    <span className="text-base text-muted font-medium">
                      best dev partner they've had
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.25}>
            <Button asChild variant="outline" size="lg">
              <Link href="/work">
                View All Case Studies
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* LUDA Framework Section */}
      <LudaSection variant="full" />

      {/* Client Logo Marquee */}
      <section
        aria-label="Our clients"
        className="py-10 md:py-14 border-y border-default overflow-hidden group/marquee"
      >
        <div className="flex animate-marquee items-center group-hover/marquee:[animation-play-state:paused]">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="mx-10 md:mx-14 flex-shrink-0 opacity-90 hover:opacity-100 transition-all duration-300 dark:opacity-70 dark:hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={200}
                height={logo.height}
                style={{ height: logo.height, width: 'auto' }}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials — Video-first layout breaks the pattern */}
      <section
        aria-labelledby="testimonials-heading"
        className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-surface content-auto"
      >
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {/* Video leads — no header above, creates pattern break */}
          <AnimatedSection className="mb-16 md:mb-20">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Video — takes 3 columns */}
              <div className="lg:col-span-3">
                <div className="rounded-2xl overflow-hidden bg-surface-2 border border-[var(--border)] shadow-lg">
                  <YouTubeFacade
                    videoId={YT_JUSTIN}
                    title="Justin Ruffier Testimonial"
                    className="aspect-video w-full"
                  />
                </div>
              </div>
              {/* Quote excerpt — takes 2 columns */}
              <div className="lg:col-span-2">
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                  &ldquo;You had a great process. You had a great team. Your service offerings
                  really fit exactly what I was looking for.&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold">Justin Ruffier</p>
                  <p className="text-muted text-sm">Founder, Whisker Tracker · San Diego, USA</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Section header comes AFTER video — reversed pattern */}
          <AnimatedSection
            delay={0.1}
            className="mb-10 flex items-end justify-between gap-4 flex-wrap"
          >
            <div>
              <SectionLabel className="mb-3 block">What Clients Say</SectionLabel>
              <h2 id="testimonials-heading" className="text-2xl md:text-3xl font-bold font-display">
                More from our clients
              </h2>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href="/testimonials">View All</Link>
            </Button>
          </AnimatedSection>

          {/* Text testimonials — 3 cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection delay={0.15}>
              <TestimonialCard {...TESTIMONIALS[0]} />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <TestimonialCard {...TESTIMONIALS[2]} />
            </AnimatedSection>
            <AnimatedSection delay={0.25}>
              <TestimonialCard {...TESTIMONIALS[3]} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA — Clear, confident, no redundancy */}
      <section
        aria-labelledby="cta-heading"
        className="relative pt-32 pb-28 md:pt-48 md:pb-40 overflow-hidden content-auto"
      >
        {/* Subtle background glow — dark mode only */}
        <div className="hidden dark:block absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] opacity-[0.08] blur-[80px]"
            style={{
              background: 'radial-gradient(ellipse at center, #0A4DFF 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2
              id="cta-heading"
              className="text-[clamp(32px,5vw,56px)] font-bold font-display tracking-[-0.02em] leading-[1.1] mb-8"
            >
              Ready to fix your operations? <span className="text-gradient">Let's talk.</span>
            </h2>
            <p className="text-xl text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
              We work best with established businesses ready to invest seriously. Adrian personally
              reviews every submission before the call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="h-14 px-8 text-base">
                <Link href="/strategy-session">
                  Book Your Strategy Call
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Link
                href="/work"
                className="text-muted hover:text-[var(--text)] transition-colors text-base font-medium underline underline-offset-4 decoration-[var(--border)] hover:decoration-[var(--text)]"
              >
                Or see our case studies first
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
