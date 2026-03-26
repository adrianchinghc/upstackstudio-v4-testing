import type { Metadata } from 'next'
import { SectionLabel, AnimatedSection } from '@/components/common'
import { StrategySessionForm } from '@/components/forms/StrategySessionForm'

export const metadata: Metadata = {
  title: 'Book a Strategy Session',
  description:
    'Schedule a 45-minute strategy call with Adrian. Not a sales pitch — a real conversation about your operations and how we can help.',
  alternates: {
    canonical: '/strategy-session',
  },
}

export default function StrategySessionPage() {
  return (
    <div className="bg-page pt-20 md:pt-24 pb-16 md:pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - Context */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <AnimatedSection>
              <SectionLabel className="mb-4 block">Strategy Session</SectionLabel>
              <h1 className="text-page-title mb-6">
                Before we talk, help us help you.
              </h1>
              <p className="text-lg text-secondary leading-relaxed mb-8">
                3 questions. 2 minutes. We read every answer before your call.
              </p>

              <div className="space-y-6 text-secondary">
                <div>
                  <h3 className="font-semibold text-[var(--text)] mb-2">What the call covers</h3>
                  <ul className="space-y-2 text-base">
                    <li>— The specific operational problem you're trying to solve</li>
                    <li>— Whether software is the right solution right now</li>
                    <li>— What a realistic timeline and investment looks like</li>
                    <li>— Whether we're the right team for it</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-[var(--text)] mb-2">What it is NOT</h3>
                  <ul className="space-y-2 text-base">
                    <li>— A sales pitch</li>
                    <li>— A generic discovery call</li>
                    <li>— A commitment to anything</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-default">
                  <p className="text-base italic">
                    &ldquo;Whether you're the person who owns this problem — or the person building the case for solving it — this call is for you.&rdquo;
                  </p>
                </div>

                <div className="rounded-xl border border-sky-faint bg-surface p-6">
                  <h3 className="font-semibold text-[var(--text)] mb-2">
                    Had a bad experience with another developer?
                  </h3>
                  <p className="text-base">
                    Some of our strongest client relationships started as rescues. Jason Anderson came to us after his previous team spent his budget and couldn't finish. We rebuilt everything. He called it &ldquo;basically crushed it.&rdquo;
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right column - Form */}
          <div>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl border border-default bg-surface p-6 md:p-8">
                <StrategySessionForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  )
}
