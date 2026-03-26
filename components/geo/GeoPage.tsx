import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { SectionLabel, AnimatedSection, GuaranteeBar, TestimonialCard } from '@/components/common'
import { LudaSection } from '@/components/luda/LudaSection'
import { Button } from '@/components/ui/button'
import { type Market, formatPrice, PRICING } from '@/lib/currency'

export interface GeoPageProps {
  market: Market
  country: string
  h1: string
  keyword?: string
  subCopy: string
  callout?: string
  clientsHeadline?: string
}

const TESTIMONIALS_FEATURED = [
  {
    quote:
      "Brilliant job guys! Just brilliant! So many amazing changes in just a few days. You really don't know how much this means to us.",
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
      "I shopped around. I looked at assembling a team of freelancers. I reached out to about two other agencies here in the United States in San Diego, California. In hindsight, I'm glad I did not do that. You had a great process. You had a great team.",
    author: 'Justin Ruffier',
    role: 'Founder',
    company: 'Whisker Tracker (San Diego, USA)',
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

export function GeoPage({
  market,
  country,
  h1,
  subCopy,
  callout,
  clientsHeadline = 'Trusted by companies across the globe.',
}: GeoPageProps) {
  const transformPrice = formatPrice(
    market === 'malaysia' ? PRICING.transform.myr : PRICING.transform.usd,
    market
  )
  const essentialPrice = formatPrice(
    market === 'malaysia' ? PRICING.essential.myr : PRICING.essential.usd,
    market
  )

  return (
    <div className="bg-page min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection delay={0}>
            <SectionLabel>Upstack Studio · {country}</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <h1 className="text-page-h1 mt-4 mb-6 max-w-4xl">{h1}</h1>
          </AnimatedSection>
          <AnimatedSection delay={0.16}>
            <p className="text-lg text-secondary max-w-2xl mb-8 leading-relaxed">{subCopy}</p>
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
              Typical engagements from {transformPrice}. Scope confirmed on the call.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Special Callout (used for US page and others with specific messaging) */}
      {callout && (
        <section className="py-12 px-6 bg-[var(--color-brand-navy)]/5 border-y border-[var(--color-brand-navy)]/10 dark:border-sky-faint/10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <p className="text-lg font-semibold text-sky-accent text-center leading-relaxed">
                {callout}
              </p>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Why Upstack */}
      <section className="py-20 md:py-28 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionLabel>Why Upstack Studio</SectionLabel>
            <h2 className="text-section-h2 mt-3 mb-4">{clientsHeadline}</h2>
            <p className="text-secondary max-w-2xl mb-12">
              We've delivered for companies in Malaysia, Australia, the US, UK, and the Netherlands.
              The same standards and senior team for every client, regardless of geography.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4">
            {WHY_US.map((reason, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="flex items-start gap-3 rounded-xl border border-default bg-page p-5">
                  <CheckCircle className="h-4 w-4 text-sky-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-secondary">{reason}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-section-h2 mt-3 mb-4">Transparent pricing. No surprises.</h2>
            <p className="text-secondary max-w-2xl mb-12">
              We scope precisely in discovery and give you a fixed price before any work begins.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Transform */}
            <AnimatedSection>
              <div className="rounded-2xl border border-sky-faint bg-sky-faint p-8">
                <h3 className="text-xl font-bold mb-1">Transform</h3>
                <p className="text-sm text-secondary mb-6">One platform. 16 weeks. Done.</p>
                <div className="mb-6">
                  <span className="text-3xl font-extrabold font-display">{transformPrice}</span>
                  <span className="text-secondary text-sm ml-2">fixed price</span>
                </div>
                <ul className="space-y-2.5 mb-8">
                  {[
                    'Single platform',
                    '16-week delivery',
                    'PM + engineers + designer + QA',
                    '30-day post-launch support',
                    'Full IP ownership',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-secondary">
                      <CheckCircle className="h-4 w-4 text-sky-accent shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="w-full" asChild>
                  <Link href="/strategy-session">
                    Book a Strategy Call <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>

            {/* Accelerate */}
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-default bg-surface p-8">
                <h3 className="text-xl font-bold mb-1">Accelerate</h3>
                <p className="text-sm text-secondary mb-6">Web + Mobile. 4–6 months.</p>
                <div className="mb-6">
                  <span className="text-3xl font-extrabold font-display">
                    {formatPrice(
                      market === 'malaysia' ? PRICING.accelerate.myr : PRICING.accelerate.usd,
                      market
                    )}
                  </span>
                  <span className="text-secondary text-sm ml-2">fixed price</span>
                </div>
                <ul className="space-y-2.5 mb-8">
                  {[
                    'Web + Mobile platforms',
                    '4–6 month delivery',
                    'Full senior squad',
                    '90-day post-launch support',
                    'Full IP ownership',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-secondary">
                      <CheckCircle className="h-4 w-4 text-sky-accent shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button size="lg" variant="outline" className="w-full" asChild>
                  <Link href="/strategy-session">
                    Book a Strategy Call <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Dev subscription teaser */}
          <AnimatedSection delay={0.2}>
            <div className="rounded-xl border border-default bg-surface-2 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold mb-1">Development Subscription</p>
                <p className="text-sm text-secondary">
                  Ongoing development for live platforms. From {essentialPrice}/month.
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/services/development-subscription">Learn More</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionLabel>What Clients Say</SectionLabel>
            <h2 className="text-section-h2 mt-3 mb-12">Results that speak for themselves.</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS_FEATURED.map((t, i) => (
              <AnimatedSection key={t.author} delay={i * 0.1}>
                <TestimonialCard {...t} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="text-center mt-10">
              <Button variant="outline" asChild>
                <Link href="/testimonials">Read All Testimonials</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* LUDA */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <LudaSection variant="full" />
          </AnimatedSection>
        </div>
      </section>

      {/* Guarantee Bar */}
      <div className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <GuaranteeBar />
        </div>
      </div>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <SectionLabel>Next Step</SectionLabel>
            <h2 className="text-section-h2 mt-4 mb-6">Tell us what you need to build.</h2>
            <p className="text-secondary mb-8 max-w-xl mx-auto leading-relaxed">
              Adrian personally reviews every submission before the call. Not a junior sales rep.
              Not a template pitch deck. A real conversation about your operations.
            </p>
            <Button size="lg" asChild>
              <Link href="/strategy-session">
                Book a Strategy Call <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <p className="mt-4 text-sm text-muted">
              Typical engagements from {transformPrice}. Scope confirmed on the call.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
