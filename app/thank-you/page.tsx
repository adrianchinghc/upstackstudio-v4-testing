import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel, AnimatedSection } from '@/components/common'
import { Button } from '@/components/ui/button'
import { SOCIAL } from '@/lib/constants'
import { CheckCircle, Youtube, ArrowRight, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Your strategy session has been booked. Here\'s what to expect on the call with Adrian.',
  alternates: {
    canonical: '/thank-you',
  },
}

const WHAT_TO_EXPECT = [
  'Adrian will review your submission before the call — no generic questions.',
  "We'll discuss the specific operational problem you shared.",
  "You'll get an honest assessment of whether software is the right solution.",
  "If we're a fit, we'll outline realistic timelines and investment ranges.",
  'No pressure. No hard sell. Just a real conversation.',
]

export default function ThankYouPage() {
  return (
    <div className="bg-page pt-20 md:pt-24 pb-16 md:pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <AnimatedSection className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-brand-sky)]/10">
              <CheckCircle className="h-10 w-10 text-[var(--color-brand-sky)]" />
            </div>
          </div>

          <SectionLabel className="mb-4 block">Confirmed</SectionLabel>
          <h1 className="text-page-title mb-4">
            Your strategy session is booked.
          </h1>
          <p className="text-lg text-secondary">
            Check your email for calendar details and a Zoom link.
          </p>
        </AnimatedSection>

        {/* What to expect */}
        <AnimatedSection delay={0.1} className="mb-12">
          <div className="rounded-2xl border border-default bg-surface p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <Calendar className="h-5 w-5 text-[var(--color-brand-sky)]" />
              What to expect on the call
            </h2>

            <ul className="space-y-4">
              {WHAT_TO_EXPECT.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-brand-sky)]/10 text-[var(--color-brand-sky)] font-semibold text-xs">
                    {index + 1}
                  </span>
                  <span className="text-secondary pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Pre-call video placeholder */}
        {/* <!-- TODO: Get pre-call video ID for /thank-you page --> */}
        <AnimatedSection delay={0.2} className="mb-12">
          <div className="rounded-2xl border border-default bg-surface-2 p-6 md:p-8 text-center">
            <Youtube className="h-10 w-10 text-[var(--color-brand-sky)] mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              Watch while you wait
            </h3>
            <p className="text-secondary mb-4">
              See how we&apos;ve helped companies like yours build software that actually works.
            </p>
            <a
              href={SOCIAL.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--color-brand-sky)] hover:underline font-medium"
            >
              Visit our YouTube channel
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </AnimatedSection>

        {/* Actions */}
        <AnimatedSection delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild variant="outline">
            <Link href="/work">View Our Work</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/about">About Upstack Studio</Link>
          </Button>
        </AnimatedSection>
      </div>
    </div>
  )
}
