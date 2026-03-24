import { ThemeToggle } from '@/components/layout/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-page">
      {/* Temporary test layout */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        <div className="max-w-3xl text-center space-y-8">
          {/* Section Label */}
          <p className="text-section-label">AI-Enabled Software Engineering</p>

          {/* Hero Headline */}
          <h1 className="text-hero">
            Your revenue has scaled.
            <br />
            <span className="text-[var(--color-brand-sky)]">
              Your operations haven&apos;t.
            </span>
          </h1>

          {/* Sub copy */}
          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            We map your broken processes, design the system, and build it in 16
            weeks — with AI-enabled engineering and the same senior team from
            kickoff to handover.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="/strategy-session"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-cta-gradient rounded-lg hover:opacity-90 transition-opacity"
            >
              Book a Strategy Call →
            </a>
            <a
              href="/work"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold border border-default rounded-lg hover:bg-surface transition-colors"
            >
              See Our Work
            </a>
          </div>

          {/* Trust line */}
          <p className="text-sm text-muted pt-8">
            Trusted by Daikin · Magnum 4D · BookXcess · Teleme · AFA Malaysia
          </p>
        </div>
      </div>
    </main>
  )
}
