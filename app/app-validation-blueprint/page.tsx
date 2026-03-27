import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel, AnimatedSection } from '@/components/common'
import { Button } from '@/components/ui/button'
import { ArrowRight, Target, Users, DollarSign, Lightbulb, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'App Validation Blueprint | Test Your Idea',
  description:
    'Validate your app idea before building. A practical framework to test demand, refine features, and reduce the risk of building something nobody wants.',
  alternates: {
    canonical: '/app-validation-blueprint',
  },
  openGraph: {
    title: 'App Validation Blueprint | Upstack Studio',
    description:
      'A practical framework to test demand and reduce the risk of building something nobody wants.',
    url: '/app-validation-blueprint',
    siteName: 'Upstack Studio',
    locale: 'en_MY',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Validation Blueprint',
    description: 'Validate your app idea before building with this practical framework.',
  },
}

const VALIDATION_STEPS = [
  {
    step: 1,
    title: 'Define the Problem',
    icon: Target,
    description: 'Before validating a solution, make sure the problem is real.',
    questions: [
      'Who experiences this problem?',
      'How painful is it? (mild annoyance vs. business-critical)',
      'How are they solving it today?',
      'What does the problem cost them in time, money, or frustration?',
    ],
  },
  {
    step: 2,
    title: 'Talk to Real Users',
    icon: Users,
    description: 'Your assumptions are not validation. Talk to the people who have the problem.',
    questions: [
      'Can you find 10 people with this problem willing to talk?',
      'Do they confirm the problem is significant?',
      'Would they pay to solve it? How much?',
      'What have they already tried?',
    ],
  },
  {
    step: 3,
    title: 'Test Willingness to Pay',
    icon: DollarSign,
    description: 'Interest is not demand. Test whether people will actually pay.',
    questions: [
      'Can you pre-sell before building?',
      'Will someone sign a letter of intent?',
      'Are competitors making money in this space?',
      'What price point makes sense?',
    ],
  },
  {
    step: 4,
    title: 'Build a Minimum Test',
    icon: Lightbulb,
    description: 'Start with the smallest possible test before committing to full development.',
    questions: [
      'Can you solve the problem manually first?',
      'Could a landing page + spreadsheet work initially?',
      "What's the smallest feature set that delivers value?",
      'Can you test with 5-10 users before scaling?',
    ],
  },
]

const WARNING_SIGNS = [
  "You can't find 10 people with the problem willing to talk",
  'Everyone thinks it\'s "interesting" but nobody will commit',
  'The problem is real but the market is too small',
  "You're the only person who thinks this is a problem",
  'Existing solutions are "good enough" for most users',
  "The problem exists but people won't pay to solve it",
]

export default function AppValidationBlueprintPage() {
  return (
    <div className="bg-page pt-20 md:pt-24 pb-16 md:pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Header */}
        <AnimatedSection className="mb-12 md:mb-16">
          <SectionLabel className="mb-4 block">Resource</SectionLabel>
          <h1 className="text-page-title mb-6">App Validation Blueprint</h1>
          <p className="text-lg text-secondary max-w-2xl">
            The most expensive mistake in software development is building something nobody wants.
            Validate before you invest.
          </p>
        </AnimatedSection>

        {/* Validation Steps */}
        <div className="space-y-8 mb-16 md:mb-24">
          {VALIDATION_STEPS.map((step, index) => (
            <AnimatedSection key={step.step} delay={index * 0.05}>
              <div className="rounded-2xl bg-surface border border-default p-8">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-brand-blue/10">
                    <step.icon className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-muted font-medium">Step {step.step}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
                    <p className="text-secondary mb-4">{step.description}</p>
                    <div className="bg-surface-2 rounded-lg p-4">
                      <p className="text-sm font-medium text-muted mb-3">Questions to answer:</p>
                      <ul className="space-y-2">
                        {step.questions.map((question, qIndex) => (
                          <li
                            key={qIndex}
                            className="text-sm text-secondary flex items-start gap-2"
                          >
                            <span className="text-brand-blue">•</span>
                            {question}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Warning Signs */}
        <AnimatedSection className="mb-16 md:mb-24">
          <div className="rounded-2xl bg-surface border border-default p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-6 w-6 text-yellow-500" />
              <h2 className="text-xl font-semibold">Warning Signs Your Idea Needs Work</h2>
            </div>
            <ul className="space-y-3">
              {WARNING_SIGNS.map((sign, index) => (
                <li key={index} className="flex items-start gap-3 text-secondary">
                  <span className="text-yellow-500 mt-1">⚠</span>
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Seeing these signs doesn&apos;t mean you should give up — but it does mean you need to
              dig deeper before investing in development.
            </p>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <div className="rounded-2xl bg-surface-2 border border-default p-8 md:p-12">
            <h2 className="text-2xl font-semibold mb-4">
              Have a Validated Idea? Let&apos;s Build It.
            </h2>
            <p className="text-secondary mb-6 max-w-lg mx-auto">
              If you&apos;ve done the validation work and you&apos;re ready to build, we&apos;d love
              to help. Our strategy session will assess your readiness and scope the project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/strategy-session">
                  Book a Strategy Call
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/blog/app-idea-validation">Read More on Validation</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
