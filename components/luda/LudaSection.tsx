'use client'

import { cn } from '@/lib/utils'
import { SectionLabel } from '@/components/common/SectionLabel'
import { GuaranteeBar } from '@/components/common/GuaranteeBar'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { Users, Video, Calendar, Shield } from 'lucide-react'

const LUDA_PILLARS = [
  {
    icon: Users,
    title: 'Dedicated Agile Squad',
    description:
      'Fixed senior team from day one — PM, engineers, QA, designer. Same people, kickoff to launch. No juniors. No interns. No handoffs.',
  },
  {
    icon: Video,
    title: 'Bi-weekly Progress Reviews',
    description:
      'Video call every two weeks. You see what was built, what\'s next, what needs your input. Slack always open. No waiting for a monthly report.',
  },
  {
    icon: Calendar,
    title: '16-Week Launch Commitment',
    description:
      'We set a date and keep it. Delays on our side = we keep working at no extra cost. You never pay for our problems.',
  },
  {
    icon: Shield,
    title: 'Full IP & Source Code Ownership',
    description:
      'Everything we build is yours — from kickoff to final delivery. No lock-in. No licensing. No platform dependency.',
  },
] as const

interface LudaSectionProps {
  variant?: 'full' | 'compact'
  className?: string
}

export function LudaSection({ variant = 'full', className }: LudaSectionProps) {
  if (variant === 'compact') {
    return (
      <div className={cn('rounded-2xl bg-surface border border-default p-6 md:p-8', className)}>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-brand-blue)]/10">
              <Shield className="h-5 w-5 text-[var(--color-brand-blue)]" />
            </div>
            <div>
              <SectionLabel>The LUDA™ Framework</SectionLabel>
              <h3 className="text-lg font-semibold mt-1">Built so your project doesn't fail.</h3>
            </div>
          </div>

          <ul className="grid gap-2 text-sm text-secondary">
            {LUDA_PILLARS.map((pillar) => (
              <li key={pillar.title} className="flex items-start gap-2">
                <pillar.icon className="h-4 w-4 text-[var(--color-brand-blue)] shrink-0 mt-0.5" />
                <span>{pillar.title}</span>
              </li>
            ))}
          </ul>

          <GuaranteeBar variant="compact" className="mt-4" />
        </div>
      </div>
    )
  }

  return (
    <section aria-labelledby="luda-heading" className={cn('py-24 md:py-32 bg-surface content-auto', className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <SectionLabel className="mb-4 block">The LUDA™ Framework</SectionLabel>
          <h2 id="luda-heading" className="text-section-title mb-4">
            70% of software projects fail.
            <br />
            <span className="text-gradient">
              We built a framework so yours doesn't.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            The LUDA™ Framework is how we deliver every engagement — not a promise, a structure.
            Every client, every project, every time.
          </p>
        </AnimatedSection>

        {/* Pillar cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {LUDA_PILLARS.map((pillar, index) => (
            <AnimatedSection
              key={pillar.title}
              delay={index * 0.1}
              className="group relative rounded-2xl border border-default bg-surface-2 p-8 md:p-10 transition-all hover:border-[var(--color-brand-blue)]/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-brand-blue)]/10 shrink-0">
                  <pillar.icon className="h-7 w-7 text-[var(--color-brand-blue)]" />
                </div>
                <div>
                  <h3 className="text-card-title mb-3">{pillar.title}</h3>
                  <p className="text-base text-secondary leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Guarantee bar */}
        <AnimatedSection delay={0.4}>
          <GuaranteeBar />
        </AnimatedSection>
      </div>
    </section>
  )
}
