import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel, AnimatedSection, TestimonialCard, RatingsStrip } from '@/components/common'
import { LudaSection } from '@/components/luda/LudaSection'
import { Button } from '@/components/ui/button'
import { CLIENTS, YT_JUSTIN, YT_JASON } from '@/lib/constants'
import {
  ArrowRight,
  MessageSquare,
  BarChart3,
  Cpu,
  Building2,
  HeartPulse,
  Truck,
  Newspaper,
  Briefcase,
  Factory,
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
    company: 'BookXcess & Big Bad Wolf Books',
    featured: true,
  },
  {
    quote: "They were much better than any development house we'd used previously.",
    author: 'Mark Choo',
    role: 'Ex-CEO',
    company: 'Teleme',
  },
  {
    quote: 'Pleasant experience working with a team of professionals who were responsive and reliable. Most impressive was that the entire team from Upstack Studio went above and beyond to ensure the deliverables and deadline were met.',
    author: 'Eddy How',
    role: 'Deputy Manager',
    company: 'Magnum 4D Berhad',
  },
  {
    quote: 'I was impressed by their knowledge on web design, user experience, and optimization. The total app delivery process exceeded our expectations with remarkable turnaround speed.',
    author: 'Heidzir Jamarajid',
    role: 'IT Administrator',
    company: 'The Malaysian Insight',
  },
  {
    quote: "We worked closely with Adrian and his team during the project and their response was very quick and timely. Work is delivered on time and sometimes, they even go out of their way to complete urgent tasks which we really appreciate.",
    author: 'Dinie Johari',
    role: 'Assistant Manager',
    company: 'BookXcess',
  },
  {
    quote: 'The management team are satisfied with the deliverables, and decided to continue engaging Upstack team for the ongoing product enhancement and support. We were very satisfied with their work every step of the way.',
    author: 'Tan Loo Toon',
    role: 'CTO',
    company: 'NiuAce for Builders',
  },
]

// Pain cards data
const PAIN_CARDS = [
  {
    title: '"We\'re still doing approvals over WhatsApp"',
    description: 'Your team copies data between systems, chases sign-offs on group chats, and re-enters information that should flow automatically. Every new hire adds one more person to manage the chaos — not fix it.',
    icon: MessageSquare,
  },
  {
    title: '"I can\'t get a clear picture of what\'s happening"',
    description: "Sales has one version of the numbers. Finance has another. Operations has a spreadsheet nobody's updated this week. Decisions get made on gut feel because pulling accurate data takes half a day.",
    icon: BarChart3,
  },
  {
    title: '"Everyone says we need AI. Nobody can tell us where to start."',
    description: "You've sat through demos. You've read the reports. But every vendor wants to sell you a chatbot, and none of it connects to how your business actually runs.",
    icon: Cpu,
  },
]

// Stats data
const STATS = [
  { value: '70%', label: 'of digital transformations fail', source: 'McKinsey' },
  { value: '88%', label: 'of business transformations miss their goals', source: 'Bain 2024' },
  { value: '15×', label: 'ecommerce revenue growth', source: 'BookXcess' },
  { value: '4.9★', label: 'average rating across Clutch & Google', source: '' },
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

// Industries
const INDUSTRIES = [
  { name: 'Manufacturing', icon: Factory },
  { name: 'Financial Services', icon: Building2 },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Logistics', icon: Truck },
  { name: 'Media', icon: Newspaper },
  { name: 'Professional Services', icon: Briefcase },
]

export default function Home() {
  return (
    <div className="bg-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, var(--muted) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />

        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <AnimatedSection delay={0}>
              <SectionLabel className="mb-6">AI-Enabled Software Engineering</SectionLabel>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-hero mb-6">
                Your revenue has scaled.
                <br />
                <span className="text-[var(--color-brand-sky)]">
                  Your operations haven&apos;t.
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed mb-4">
                We map your broken processes, design the system, and build it in 16 weeks — with AI-enabled engineering and the same senior team from kickoff to handover. No juniors. No handoffs. No disappearing after launch.
              </p>
              <p className="text-sm text-muted mb-8">
                Typical engagements from USD 45,000. Scope confirmed on the call.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button asChild size="lg">
                  <Link href="/strategy-session">
                    Book a Strategy Call
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/work">See Our Work</Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="text-sm text-muted">
                Trusted by Daikin · Magnum 4D · BookXcess · Teleme · AFA Malaysia
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pain Cards Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <SectionLabel className="mb-4 block">Sound Familiar?</SectionLabel>
            <h2 className="text-section-title">
              The problems that got you here won&apos;t solve themselves.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {PAIN_CARDS.map((card, index) => (
              <AnimatedSection key={card.title} delay={index * 0.1}>
                <div className="h-full rounded-2xl border border-default bg-surface-2 p-6 md:p-8 transition-all hover:border-[var(--color-brand-sky)]/30">
                  <card.icon className="h-10 w-10 text-[var(--color-brand-sky)] mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
                  <p className="text-secondary text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="py-12 md:py-16 bg-[var(--color-brand-navy)]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 font-display">
                  {stat.value}
                </div>
                <p className="text-sm md:text-base text-white/70 leading-snug">
                  {stat.label}
                  {stat.source && (
                    <span className="block text-xs text-white/50 mt-1">({stat.source})</span>
                  )}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* BookXcess Feature Callout */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <AnimatedSection>
            <div className="rounded-2xl border border-[var(--color-brand-sky)]/30 bg-surface p-8 md:p-12 text-center max-w-3xl mx-auto">
              <div className="text-6xl md:text-8xl font-extrabold text-[var(--color-brand-sky)] mb-4 font-display">
                15×
              </div>
              <p className="text-xl md:text-2xl font-semibold mb-4">
                ecommerce revenue growth
              </p>
              <blockquote className="text-lg text-secondary italic mb-4">
                &ldquo;Brilliant job guys! Just brilliant!&rdquo;
              </blockquote>
              <p className="text-muted">
                — Andrew Yap, Founder, BookXcess
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <SectionLabel className="mb-4 block">How We Help</SectionLabel>
            <h2 className="text-section-title mb-4">
              We don&apos;t build apps.
              <br />
              <span className="text-[var(--color-brand-sky)]">
                We build the infrastructure your business runs on.
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {SERVICES.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Link
                  href={service.href}
                  className="group block h-full rounded-2xl border border-default bg-surface-2 p-6 md:p-8 transition-all hover:border-[var(--color-brand-sky)]/50"
                >
                  <h3 className="text-card-title mb-3 group-hover:text-[var(--color-brand-sky)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-secondary text-base leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-muted group-hover:text-[var(--color-brand-sky)] transition-colors">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3} className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* LUDA Framework Section */}
      <LudaSection variant="full" />

      {/* Client Marquee */}
      <section className="py-12 md:py-16 border-y border-default overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...CLIENTS, ...CLIENTS].map((client, index) => (
            <span
              key={`${client}-${index}`}
              className="mx-8 md:mx-12 text-lg md:text-xl font-semibold text-muted"
            >
              {client}
            </span>
          ))}
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <SectionLabel className="mb-4 block">What Clients Say</SectionLabel>
            <h2 className="text-section-title">
              Don&apos;t take our word for it.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden bg-surface border border-default">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${YT_JUSTIN}`}
                    title="Justin Ruffier Testimonial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <p className="text-lg font-semibold">Justin Ruffier</p>
                  <p className="text-muted">Founder, Whisker Tracker (San Diego, USA)</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl overflow-hidden bg-surface border border-default">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${YT_JASON}`}
                    title="Jason Anderson Testimonial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <p className="text-lg font-semibold">Jason Anderson</p>
                  <p className="text-muted">Executive Director, Black Tulip</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Text Testimonials */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <AnimatedSection key={testimonial.author} delay={index * 0.05}>
                <TestimonialCard {...testimonial} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3} className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/testimonials">Read All Testimonials</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <SectionLabel className="mb-4 block">Industries We Serve</SectionLabel>
            <h2 className="text-section-title">
              Delivered across six countries.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {INDUSTRIES.map((industry, index) => (
              <AnimatedSection key={industry.name} delay={index * 0.05}>
                <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-default bg-surface hover:border-[var(--color-brand-sky)]/30 transition-colors">
                  <industry.icon className="h-8 w-8 text-[var(--color-brand-sky)]" />
                  <span className="text-sm font-medium text-center">{industry.name}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ratings Strip */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <AnimatedSection>
            <RatingsStrip />
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-section-title mb-6">
                If this sounds like where your business is right now — let&apos;s talk.
              </h2>
              <p className="text-lg text-secondary leading-relaxed mb-8">
                Not every company is the right fit for what we do. We work best with established businesses ready to invest in digital infrastructure seriously — not companies looking for the cheapest quote or a quick fix.
              </p>
              <p className="text-muted mb-8">
                Adrian personally reviews every submission before the call.
              </p>
              <Button asChild size="lg">
                <Link href="/strategy-session">
                  Book Your Strategy Call
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
