import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel, AnimatedSection, TestimonialCard, YouTubeFacade, RatingsStrip } from '@/components/common'
import { HeroProofCard } from '@/components/hero/HeroProofCard'
import { LudaSection } from '@/components/luda/LudaSection'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { YT_JUSTIN } from '@/lib/constants'
import Image from 'next/image'
import {
  ArrowRight,
  MessageSquare,
  BarChart3,
  Cpu,
  FileSpreadsheet,
  AlertTriangle,
  Clock,
  Zap,
  ShieldCheck,
  Bot,
  Target,
  MessageCircle,
  Users,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Upstack Studio | AI-Enabled Software Engineering Malaysia',
  description:
    'AI-enabled software engineering for established companies. Operations digitalisation, AI integration, and custom platform development. Trusted by Daikin, Magnum 4D, BookXcess. Built on the LUDA™ Framework.',
  alternates: { canonical: 'https://upstackstudio.com' },
  openGraph: {
    title: 'Upstack Studio | AI-Enabled Software Engineering Malaysia',
    description: 'Operations digitalisation, AI integration, and custom platform development for established, growing companies.',
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

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Upstack Studio',
  url: 'https://upstackstudio.com',
  foundingDate: '2017',
  founder: { '@type': 'Person', name: 'Adrian Ching' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Petaling Jaya',
    addressRegion: 'Selangor',
    addressCountry: 'MY',
  },
  areaServed: ['MY', 'SG', 'AU', 'GB', 'US', 'ID', 'TH', 'PH'],
  description:
    'AI-enabled software engineering firm specialising in operations digitalisation, AI integration, and custom platform development for established companies.',
}

// Testimonials data
const TESTIMONIALS = [
  {
    quote: "Brilliant job guys! Just brilliant! So many amazing changes in just a few days. Thank you for the quick response to our predicament. You really don't know how much this means to us. I owe you guys the biggest favour.",
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
    quote: 'Pleasant experience working with a team of professionals who were responsive and reliable. Most impressive was that the entire team from Upstack Studio went above and beyond to ensure the deliverables and deadline were met.',
    author: 'Eddy How',
    role: 'Deputy Manager',
    company: 'Magnum 4D Berhad',
    image: '/images/clients/eddyhow.png',
  },
  {
    quote: 'I was impressed by their knowledge on web design, user experience, and optimization. The total app delivery process exceeded our expectations with remarkable turnaround speed.',
    author: 'Heidzir Jamarajid',
    role: 'IT Administrator',
    company: 'The Malaysian Insight',
    image: '/images/clients/heidzirjamaraji.png',
  },
  {
    quote: "We worked closely with Adrian and his team during the project and their response was very quick and timely. Work is delivered on time and sometimes, they even go out of their way to complete urgent tasks which we really appreciate.",
    author: 'Dinie Johari',
    role: 'Assistant Manager',
    company: 'BookXcess',
    image: '/images/clients/diniejohari.png',
  },
  {
    quote: 'The management team are satisfied with the deliverables, and decided to continue engaging Upstack team for the ongoing product enhancement and support. We were very satisfied with their work every step of the way.',
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
  accentColor: 'amber' | 'rose' | 'violet' | 'emerald' | 'sky' | 'orange'
  href: string
}> = [
  {
    title: '"Procurement approvals run on email chains and WhatsApp"',
    description: 'Your team copies data between systems, chases sign-offs on group chats, and re-enters information that should flow automatically. Every new hire adds one more person to manage the chaos — not fix it.',
    icon: MessageSquare,
    accentColor: 'amber',
    href: '/services/operations-digitalisation',
  },
  {
    title: '"Field team and back office work from different versions of the truth"',
    description: "Sales has one version of the numbers. Finance has another. Operations has a spreadsheet nobody's updated this week. Decisions get made on gut feel because pulling accurate data takes half a day.",
    icon: FileSpreadsheet,
    accentColor: 'rose',
    href: '/services/custom-platform-development',
  },
  {
    title: '"Zero real-time visibility into operations across locations"',
    description: "You can't see what's happening at your branches until someone calls you about it. By the time you spot a problem, it's already cost you money. Your competitors have dashboards — you have monthly reports.",
    icon: BarChart3,
    accentColor: 'violet',
    href: '/services/operations-digitalisation',
  },
  {
    title: '"Every off-the-shelf system breaks on our specific workflow"',
    description: "You've tried Salesforce. You've tried Zoho. You've tried the industry-specific solution. They all need so many workarounds that your team ends up back in Excel. Your business isn't generic — your software shouldn't be either.",
    icon: Cpu,
    accentColor: 'emerald',
    href: '/services/custom-platform-development',
  },
  {
    title: '"Our last software project failed. We can\'t afford another."',
    description: "You spent six figures on a system that never launched. Or it launched and nobody uses it. The vendor disappeared. Now your board is skeptical of any technology investment. We get it.",
    icon: AlertTriangle,
    accentColor: 'orange',
    href: '/services/operations-digitalisation',
  },
  {
    title: '"Budget allocated. Deadline to spend. No clear plan."',
    description: "RMK-13 funds, internal digital transformation budget, or year-end allocation that expires. You have the money — you just need a partner who can scope, plan, and deliver before the window closes.",
    icon: Clock,
    accentColor: 'sky',
    href: '/strategy-session',
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
    description: 'Replace manual processes, spreadsheets, and WhatsApp chains with systems that run your business.',
    href: '/services/operations-digitalisation',
  },
  {
    title: 'AI Integration',
    description: "AI isn't magic — but in the right place, it's the highest-ROI investment you can make.",
    href: '/services/ai-integration',
  },
  {
    title: 'Custom Platform Development',
    description: "When off-the-shelf software stops fitting — we build what actually works for your business.",
    href: '/services/custom-platform-development',
  },
]

export default function Home() {
  return (
    <div className="bg-page hero-parallax-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      {/* Hero Section — Asymmetric two-column layout */}
      <section aria-labelledby="hero-heading" className="hero-section relative min-h-[85vh] flex items-center pt-20 md:pt-28 pb-16 md:pb-20 overflow-hidden">
        {/* Background dot grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, var(--muted) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />

        {/* Subtle background glow — dark mode only */}
        <div className="hidden dark:block absolute top-1/4 left-1/3 w-[600px] h-[400px] rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #0A4DFF 0%, transparent 70%)' }} />

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
      <section aria-labelledby="pain-heading" className="pt-16 pb-24 md:pt-24 md:pb-40 bg-surface content-auto">
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
                    These are the conversations we have every week with operations leaders across Malaysia.
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
                  emerald: {
                    iconBg: 'bg-emerald-500/10 dark:bg-emerald-400/10',
                    icon: 'text-emerald-600 dark:text-emerald-400',
                    border: 'hover:border-emerald-500/40',
                    accent: 'border-l-emerald-500',
                  },
                  orange: {
                    iconBg: 'bg-orange-500/10 dark:bg-orange-400/10',
                    icon: 'text-orange-600 dark:text-orange-400',
                    border: 'hover:border-orange-500/40',
                    accent: 'border-l-orange-500',
                  },
                  sky: {
                    iconBg: 'bg-sky-500/10 dark:bg-sky-400/10',
                    icon: 'text-sky-600 dark:text-sky-400',
                    border: 'hover:border-sky-500/40',
                    accent: 'border-l-sky-500',
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
                          <div className={`w-14 h-14 rounded-xl ${colorClasses.iconBg} flex items-center justify-center`}>
                            <card.icon className={`h-7 w-7 ${colorClasses.icon}`} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--color-brand-blue)] transition-colors">{card.title}</h3>
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
      <section aria-labelledby="services-heading" className="pt-20 pb-28 md:pt-28 md:pb-44 bg-surface content-auto">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <AnimatedSection className="mb-16 md:mb-20 max-w-3xl">
            <SectionLabel className="mb-4 block">How We Help</SectionLabel>
            <h2 id="services-heading" className="text-section-title">
              We don't build apps.
              <span className="text-gradient"> We build the infrastructure your business runs on.</span>
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
                <div className="absolute top-0 left-0 w-1.5 h-full" style={{ background: 'var(--gradient-text)' }} />

                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-blue)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center relative">
                  <div>
                    <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--color-lime-text)] mb-6 px-3 py-1.5 rounded-full bg-[var(--color-lime-bg)] border border-[var(--color-lime-border)]">Most requested</span>
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
                const cardColors = index === 0
                  ? { accent: 'violet', border: 'hover:border-violet-500/40', numeral: 'group-hover:text-violet-500/15', title: 'group-hover:text-violet-500 dark:group-hover:text-violet-400', link: 'group-hover:text-violet-500 dark:group-hover:text-violet-400' }
                  : { accent: 'emerald', border: 'hover:border-emerald-500/40', numeral: 'group-hover:text-emerald-500/15', title: 'group-hover:text-emerald-500 dark:group-hover:text-emerald-400', link: 'group-hover:text-emerald-500 dark:group-hover:text-emerald-400' }

                return (
                  <AnimatedSection key={service.title} delay={0.15 + index * 0.05}>
                    <Link
                      href={service.href}
                      className={`group block h-full relative rounded-2xl border border-default bg-surface p-8 md:p-10 transition-all duration-300 ${cardColors.border} hover:bg-surface-2 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]`}
                    >
                      {/* Large numeral in background */}
                      <div className={`absolute -top-4 -right-4 text-[100px] font-extrabold font-display text-[var(--border)] ${cardColors.numeral} transition-colors leading-none tracking-tighter pointer-events-none`}>
                        0{index + 2}
                      </div>

                      <div className="relative">
                        <h3 className={`text-xl md:text-2xl font-bold ${cardColors.title} transition-colors mb-4 font-display tracking-tight`}>
                          {service.title}
                        </h3>
                        <p className="text-secondary text-base md:text-lg leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <span className={`inline-flex items-center gap-2 text-base font-semibold text-muted ${cardColors.link} transition-colors`}>
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
      <section aria-labelledby="work-heading" className="pt-24 pb-16 md:pt-36 md:pb-20 bg-page content-auto">
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
              <div className="absolute top-0 left-0 w-1.5 h-full" style={{ background: 'var(--gradient-text)' }} />

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <span className="inline-flex rounded-full bg-[var(--color-brand-blue)]/10 border border-[var(--color-brand-blue)]/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-brand-blue)] mb-6">
                    Retail · Ecommerce
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display tracking-tight">
                    BookXcess
                  </h3>
                  <p className="text-secondary text-lg leading-relaxed mb-6">
                    Shopify migration that transformed their online revenue. From manual processes to automated operations.
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
                  style={{ background: 'linear-gradient(135deg, var(--surface-2) 0%, var(--surface) 100%)' }}
                >
                  {/* Subtle dot pattern overlay */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, var(--muted) 1px, transparent 0)',
                    backgroundSize: '16px 16px',
                  }} />
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
                    React Native app for remote AC control and unified CCTV monitoring across distributed facilities.
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl md:text-4xl font-extrabold text-gradient font-display">2</span>
                    <span className="text-base text-muted font-medium">IoT platforms delivered</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="group h-full rounded-2xl border border-default bg-surface overflow-hidden transition-all hover:border-[var(--color-brand-blue)]/40">
                <div
                  className="relative aspect-[16/9] overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, var(--surface-2) 0%, var(--surface) 100%)' }}
                >
                  {/* Subtle dot pattern overlay */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, var(--muted) 1px, transparent 0)',
                    backgroundSize: '16px 16px',
                  }} />
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
                    Telemedicine platform that exceeded all previous development partnerships. Now serving thousands of patients.
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl md:text-4xl font-extrabold text-gradient font-display">#1</span>
                    <span className="text-base text-muted font-medium">best dev partner they've had</span>
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

      {/* DNA / How We Work Section */}
      <section aria-labelledby="dna-heading" className="pt-24 pb-20 md:pt-36 md:pb-28 bg-surface content-auto">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <AnimatedSection className="mb-12 md:mb-16">
            <SectionLabel className="mb-4 block">How We Work</SectionLabel>
            <h2 id="dna-heading" className="text-section-title max-w-3xl">
              Our DNA. The principles that make projects succeed.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Stay Agile */}
            <AnimatedSection delay={0.1}>
              <div className="group h-full rounded-2xl border border-default bg-page p-8 transition-all hover:border-[var(--color-brand-blue)]/40 hover:bg-surface-2">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-blue)]/10 flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-[var(--color-brand-blue)]" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">Stay Agile & Nimble</h3>
                <p className="text-secondary text-base leading-relaxed">
                  Two-week sprints. Demo every fortnight. Course-correct before small issues become expensive problems.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 2: Quality is Priority */}
            <AnimatedSection delay={0.15}>
              <div className="group h-full rounded-2xl border border-default bg-page p-8 transition-all hover:border-[var(--color-brand-blue)]/40 hover:bg-surface-2">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-blue)]/10 flex items-center justify-center mb-6">
                  <ShieldCheck className="h-6 w-6 text-[var(--color-brand-blue)]" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">Quality is Priority</h3>
                <p className="text-secondary text-base leading-relaxed">
                  Design review. Code review. QA testing. Three layers before anything reaches your users. No shortcuts.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 3: AI-Enabled Engineering */}
            <AnimatedSection delay={0.2}>
              <div className="group h-full rounded-2xl border-2 border-[var(--color-brand-blue)]/30 bg-page p-8 transition-all hover:border-[var(--color-brand-blue)]/60 hover:bg-surface-2 relative overflow-hidden">
                {/* Subtle glow for AI card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-blue)]/5 to-transparent pointer-events-none" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-blue)]/15 flex items-center justify-center mb-6">
                    <Bot className="h-6 w-6 text-[var(--color-brand-blue)]" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold font-display">AI-Enabled Engineering</h3>
                    <span className="inline-flex px-2 py-0.5 rounded-full bg-[var(--color-lime-bg)] border border-[var(--color-lime-border)] text-[10px] font-bold uppercase tracking-wider text-[var(--color-lime-text)]">New</span>
                  </div>
                  <p className="text-secondary text-base leading-relaxed">
                    We use Claude Code and the latest AI tools. Your timeline and codebase quality benefit from the best tools on the planet.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Card 4: Your Success, Our Goal */}
            <AnimatedSection delay={0.25}>
              <div className="group h-full rounded-2xl border border-default bg-page p-8 transition-all hover:border-[var(--color-brand-blue)]/40 hover:bg-surface-2">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-blue)]/10 flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-[var(--color-brand-blue)]" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">Your Success, Our Goal</h3>
                <p className="text-secondary text-base leading-relaxed">
                  We push back on bad features. If something won't help your users, we'll tell you — even if you're paying for it.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 5: Overcommunicate */}
            <AnimatedSection delay={0.3}>
              <div className="group h-full rounded-2xl border border-default bg-page p-8 transition-all hover:border-[var(--color-brand-blue)]/40 hover:bg-surface-2">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-blue)]/10 flex items-center justify-center mb-6">
                  <MessageCircle className="h-6 w-6 text-[var(--color-brand-blue)]" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">Overcommunicate</h3>
                <p className="text-secondary text-base leading-relaxed">
                  Dedicated Slack channel. Bi-weekly sprint reviews. Live sprint board access. You always know exactly where things stand.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 6: Collaboration Over Silos */}
            <AnimatedSection delay={0.35}>
              <div className="group h-full rounded-2xl border border-default bg-page p-8 transition-all hover:border-[var(--color-brand-blue)]/40 hover:bg-surface-2">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-blue)]/10 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-[var(--color-brand-blue)]" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">Collaboration Over Silos</h3>
                <p className="text-secondary text-base leading-relaxed">
                  PM, designer, developers, and QA work as one squad. No handoffs. No "that's not my department." One team, one goal.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* LUDA Framework Section */}
      <LudaSection variant="full" />

      {/* Awards Section */}
      <section aria-labelledby="awards-heading" className="py-16 md:py-20 bg-surface border-y border-default content-auto">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <AnimatedSection className="text-center mb-10 md:mb-12">
            <SectionLabel className="mb-3 block">Recognition</SectionLabel>
            <h2 id="awards-heading" className="text-2xl md:text-3xl font-bold font-display">
              Recognised by the industry
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {/* Award badges — grayscale with hover color */}
              <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src="/images/awards/clutch-top-developers.svg"
                  alt="Clutch Top Developers Malaysia 2024"
                  width={80}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <span className="text-xs text-muted">Clutch 2024</span>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src="/images/awards/designrush-best-agency.svg"
                  alt="DesignRush Best Agency"
                  width={80}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <span className="text-xs text-muted">DesignRush</span>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src="/images/awards/goodfirms-top-software.svg"
                  alt="GoodFirms Top Software Company"
                  width={80}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <span className="text-xs text-muted">GoodFirms</span>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src="/images/awards/topdevelopers-2024.svg"
                  alt="TopDevelopers 2024"
                  width={80}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <span className="text-xs text-muted">TopDevelopers</span>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src="/images/awards/mdec-certified.svg"
                  alt="MDEC MSC Status"
                  width={80}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <span className="text-xs text-muted">MDEC MSC</span>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src="/images/awards/clutch-global-2023.svg"
                  alt="Clutch Global Leader 2023"
                  width={80}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <span className="text-xs text-muted">Clutch Global</span>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src="/images/awards/google-partner.svg"
                  alt="Google Partner"
                  width={80}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <span className="text-xs text-muted">Google Partner</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Client Logo Marquee */}
      <section aria-label="Our clients" className="py-10 md:py-14 border-y border-default overflow-hidden group/marquee">
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
      <section aria-labelledby="testimonials-heading" className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-surface content-auto">
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
                  &ldquo;You had a great process. You had a great team. Your service offerings really fit exactly what I was looking for.&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold">Justin Ruffier</p>
                  <p className="text-muted text-sm">Founder, Whisker Tracker · San Diego, USA</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Section header comes AFTER video — reversed pattern */}
          <AnimatedSection delay={0.1} className="mb-10 flex items-end justify-between gap-4 flex-wrap">
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

      {/* FAQ Section */}
      <section aria-labelledby="faq-heading" className="py-20 md:py-28 bg-surface content-auto">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <SectionLabel className="mb-4 block">Questions</SectionLabel>
            <h2 id="faq-heading" className="text-section-title">
              Frequently asked questions
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Accordion type="single" collapsible className="space-y-4">
              {/* Scout question: Process */}
              <AccordionItem value="item-1" className="border border-default rounded-xl px-6 data-[state=open]:bg-surface-2 transition-colors">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold py-5 hover:no-underline">
                  What does the engagement process look like?
                </AccordionTrigger>
                <AccordionContent className="text-secondary text-base leading-relaxed pb-5">
                  It starts with a strategy call where we understand your pain points and goals. If we're a fit, we move to a discovery phase (typically 2 weeks) where we map your processes and define the scope. Then we build in 2-week sprints with demos every fortnight. You're involved throughout — this isn't a black box. Most MVPs launch in 12-16 weeks.
                </AccordionContent>
              </AccordionItem>

              {/* Decision-maker question: Pricing */}
              <AccordionItem value="item-2" className="border border-default rounded-xl px-6 data-[state=open]:bg-surface-2 transition-colors">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold py-5 hover:no-underline">
                  How much does a typical project cost?
                </AccordionTrigger>
                <AccordionContent className="text-secondary text-base leading-relaxed pb-5">
                  Typical engagements start from USD 45,000 for a production-ready MVP. That includes discovery, design, development, and QA. Larger transformations or multi-phase projects range from USD 75,000 to USD 150,000+. We give you a fixed quote after the strategy call — no surprises, no scope creep billing.
                </AccordionContent>
              </AccordionItem>

              {/* Scout question: Technical */}
              <AccordionItem value="item-3" className="border border-default rounded-xl px-6 data-[state=open]:bg-surface-2 transition-colors">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold py-5 hover:no-underline">
                  What technologies do you use?
                </AccordionTrigger>
                <AccordionContent className="text-secondary text-base leading-relaxed pb-5">
                  We're stack-agnostic but opinionated. For web apps: Next.js, React, TypeScript, and PostgreSQL. For mobile: React Native or Flutter depending on your needs. For AI integrations: we work with OpenAI, Anthropic, and open-source models. We pick what's right for your project, not what's trendy this month.
                </AccordionContent>
              </AccordionItem>

              {/* Decision-maker question: Risk */}
              <AccordionItem value="item-4" className="border border-default rounded-xl px-6 data-[state=open]:bg-surface-2 transition-colors">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold py-5 hover:no-underline">
                  What if the project doesn't work out?
                </AccordionTrigger>
                <AccordionContent className="text-secondary text-base leading-relaxed pb-5">
                  Our LUDA™ Framework is specifically designed to mitigate this. We lock scope before building (no moving goalposts), use structured milestones (you see progress every 2 weeks), and have clear off-ramp clauses if you need to pause. You own the code from day one. We've delivered over 50 projects — our track record speaks for itself.
                </AccordionContent>
              </AccordionItem>

              {/* Scout question: Team */}
              <AccordionItem value="item-5" className="border border-default rounded-xl px-6 data-[state=open]:bg-surface-2 transition-colors">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold py-5 hover:no-underline">
                  Who will actually work on my project?
                </AccordionTrigger>
                <AccordionContent className="text-secondary text-base leading-relaxed pb-5">
                  The same senior team from kickoff to handover. No bait-and-switch with juniors. You'll have a dedicated project manager, a senior designer, and senior developers. Adrian personally reviews key milestones. We don't subcontract your project to a white-label agency overseas.
                </AccordionContent>
              </AccordionItem>

              {/* Decision-maker question: Post-launch */}
              <AccordionItem value="item-6" className="border border-default rounded-xl px-6 data-[state=open]:bg-surface-2 transition-colors">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold py-5 hover:no-underline">
                  What happens after launch?
                </AccordionTrigger>
                <AccordionContent className="text-secondary text-base leading-relaxed pb-5">
                  We don't disappear. Every project includes 30 days of post-launch support. After that, you can continue with a maintenance retainer (most clients do) or take the codebase in-house — it's yours. We also offer development subscriptions for ongoing feature work if you need continuous improvement without the overhead of hiring.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA — Clear, confident, no redundancy */}
      <section aria-labelledby="cta-heading" className="relative pt-32 pb-28 md:pt-48 md:pb-40 overflow-hidden content-auto">
        {/* Subtle background glow — dark mode only */}
        <div className="hidden dark:block absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] opacity-[0.08] blur-[80px]"
            style={{ background: 'radial-gradient(ellipse at center, #0A4DFF 0%, transparent 70%)' }} />
        </div>

        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 id="cta-heading" className="text-[clamp(32px,5vw,56px)] font-bold font-display tracking-[-0.02em] leading-[1.1] mb-8">
              Ready to fix your operations?{' '}
              <span className="text-gradient">Let's talk.</span>
            </h2>
            <p className="text-xl text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
              We work best with established businesses ready to invest seriously. Adrian personally reviews every submission before the call.
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
