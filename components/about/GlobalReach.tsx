'use client'

import { AnimatedSection } from '@/components/common'
import { COUNTRIES_SERVED } from '@/lib/constants'

export function GlobalReach() {
  return (
    <section className="py-12 md:py-16 mb-8 md:mb-12">
      <AnimatedSection>
        {/* Compact, impactful strip */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-8 border-y border-border">
          <div className="max-w-xl">
            <p className="text-2xl md:text-3xl font-semibold font-display leading-snug">
              Delivered in <span className="text-brand-blue">6 countries</span>.
              <br className="hidden md:block" />
              <span className="text-muted"> Your timezone works for us.</span>
            </p>
          </div>

          {/* Flags — large, bold, no pills */}
          <div className="flex items-center gap-4 md:gap-5">
            {COUNTRIES_SERVED.map((country) => (
              <span
                key={country.code}
                className="text-4xl md:text-5xl transition-transform hover:scale-110"
                role="img"
                aria-label={country.name}
                title={country.name}
              >
                {country.flag}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
