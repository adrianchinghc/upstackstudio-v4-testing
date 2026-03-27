import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel, AnimatedSection } from '@/components/common'
import { Button } from '@/components/ui/button'
import { ArrowRight, AlertTriangle, BookOpen, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'App Development Mistakes | Avoid These Costly Errors',
  description:
    'Common app development mistakes that cost founders time and money. Learn from real project failures and how to avoid them.',
  alternates: {
    canonical: '/app-development-mistakes-ebook',
  },
  openGraph: {
    title: 'App Development Mistakes | Upstack Studio',
    description: 'Learn from real project failures and avoid costly app development mistakes.',
    url: '/app-development-mistakes-ebook',
    siteName: 'Upstack Studio',
    locale: 'en_MY',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Development Mistakes',
    description: 'Common mistakes that cost founders time and money — and how to avoid them.',
  },
}

const MISTAKES = [
  {
    mistake: 'Building before validating',
    cost: 'Months of wasted development',
    description:
      'Founders fall in love with their solution before confirming the problem is real. The result: beautifully built software that nobody wants.',
    fix: "Talk to 10+ potential users before writing code. If you can't find people with the problem, you don't have a business.",
  },
  {
    mistake: 'Hiring on price alone',
    cost: 'Rebuilding from scratch',
    description:
      'The cheapest quote usually means inexperienced developers, poor communication, or hidden costs. You end up paying twice.',
    fix: 'Evaluate based on portfolio, communication quality, and references — not just price. Ask for a fixed-price quote based on defined scope.',
  },
  {
    mistake: 'Scope creep without boundaries',
    cost: '50-100% budget overrun',
    description:
      '"Just one more feature" compounds. Without discipline, projects bloat, timelines slip, and budgets explode.',
    fix: "Define your MVP ruthlessly. Say no to features that don't serve launch. Use a formal change request process for additions.",
  },
  {
    mistake: 'Skipping design',
    cost: 'User abandonment',
    description:
      'Jumping straight to code means building the wrong thing. Users struggle with confusing interfaces. Adoption fails.',
    fix: 'Invest in UI/UX design before development. Test prototypes with real users. A week of design saves months of rework.',
  },
  {
    mistake: 'No testing or QA',
    cost: 'Critical bugs in production',
    description:
      'Shipping untested software means users find bugs, not your team. First impressions suffer. Support costs skyrocket.',
    fix: 'Budget for QA from day one. Use automated testing. Never ship without a staging environment review.',
  },
  {
    mistake: 'Ignoring maintenance',
    cost: 'Technical debt and security risks',
    description:
      'Software needs ongoing care. Security patches. Bug fixes. Performance monitoring. Abandoning after launch creates compounding problems.',
    fix: 'Plan for post-launch maintenance. Budget 15-20% of development cost annually. Keep your development partner engaged.',
  },
  {
    mistake: 'Waiting for perfection',
    cost: 'Missed market opportunity',
    description:
      'Polishing endlessly while competitors ship. Perfect is the enemy of good. Users need value, not perfection.',
    fix: "Launch when core features work. Iterate based on real user feedback. V1 doesn't need to be V10.",
  },
]

const LESSONS = [
  'Validation before development saves 10× the cost of building the wrong thing',
  'Communication quality matters more than technical skills',
  'Fixed scope protects both sides from scope creep',
  "Design is not decoration — it's decision-making made visible",
  'The cheapest option is rarely the best value',
  'Post-launch is where most software value is created or destroyed',
]

export default function AppDevelopmentMistakesPage() {
  return (
    <div className="bg-page pt-20 md:pt-24 pb-16 md:pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Header */}
        <AnimatedSection className="mb-12 md:mb-16">
          <SectionLabel className="mb-4 block">Guide</SectionLabel>
          <h1 className="text-page-title mb-6">
            7 App Development Mistakes That Cost Founders Millions
          </h1>
          <p className="text-lg text-secondary max-w-2xl">
            We&apos;ve seen these patterns destroy projects over and over. Learn from other
            founders&apos; expensive lessons — before you make the same mistakes.
          </p>
        </AnimatedSection>

        {/* Mistakes */}
        <div className="space-y-6 mb-16 md:mb-24">
          {MISTAKES.map((item, index) => (
            <AnimatedSection key={item.mistake} delay={index * 0.03}>
              <div className="rounded-2xl bg-surface border border-default p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-red-500/10">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">
                      Mistake #{index + 1}: {item.mistake}
                    </h2>
                    <p className="text-sm text-red-500">Cost: {item.cost}</p>
                  </div>
                </div>
                <p className="text-secondary mb-4">{item.description}</p>
                <div className="bg-surface-2 rounded-lg p-4">
                  <p className="text-sm">
                    <span className="font-medium text-brand-blue">How to avoid: </span>
                    {item.fix}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Key Lessons */}
        <AnimatedSection className="mb-16 md:mb-24">
          <div className="rounded-2xl bg-surface border border-default p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-brand-blue" />
              <h2 className="text-xl font-semibold">Key Takeaways</h2>
            </div>
            <ul className="space-y-3">
              {LESSONS.map((lesson, index) => (
                <li key={index} className="flex items-start gap-3 text-secondary">
                  <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <div className="rounded-2xl bg-surface-2 border border-default p-8 md:p-12">
            <h2 className="text-2xl font-semibold mb-4">
              Don&apos;t Want to Learn These Lessons the Hard Way?
            </h2>
            <p className="text-secondary mb-6 max-w-lg mx-auto">
              Book a strategy session. We&apos;ll assess your project, identify risks, and make sure
              you&apos;re set up for success — not failure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/strategy-session">
                  Book a Strategy Call
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/faq">Read Our FAQ</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
