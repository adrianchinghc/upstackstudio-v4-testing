import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel, AnimatedSection } from '@/components/common'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, CheckCircle, Clock, Target, Users, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Zero to App Ready | Your Guide to Building Software',
  description:
    'Everything you need to know before building your first app. From validation to launch, a practical guide for non-technical founders.',
  alternates: {
    canonical: '/zero-to-app-ready',
  },
}

const JOURNEY_STAGES = [
  {
    stage: 'Validation',
    icon: Target,
    description: 'Make sure the problem is real and people will pay to solve it.',
    timeline: '2-4 weeks',
    activities: [
      'Customer interviews (10+ conversations)',
      'Competitive analysis',
      'Market sizing',
      'Willingness-to-pay testing',
    ],
  },
  {
    stage: 'Strategy',
    icon: BookOpen,
    description: 'Define what to build and how it will create business value.',
    timeline: '2-4 weeks',
    activities: [
      'Product roadmap workshop',
      'Feature prioritization (MoSCoW)',
      'Technical architecture decisions',
      'Budget and timeline alignment',
    ],
  },
  {
    stage: 'Design',
    icon: Users,
    description: 'Turn requirements into a visual, testable prototype.',
    timeline: '3-6 weeks',
    activities: [
      'User flow mapping',
      'Wireframing key screens',
      'UI design and branding',
      'Prototype testing with users',
    ],
  },
  {
    stage: 'Development',
    icon: Zap,
    description: 'Build the software in iterative sprints with regular demos.',
    timeline: '8-16 weeks',
    activities: [
      '2-week development sprints',
      'Bi-weekly progress demos',
      'Continuous integration and testing',
      'Staging environment for review',
    ],
  },
  {
    stage: 'Launch',
    icon: CheckCircle,
    description: 'Deploy to production and get the software into users\' hands.',
    timeline: '1-2 weeks',
    activities: [
      'Production deployment',
      'User onboarding setup',
      'Analytics and monitoring',
      'Bug fixing and stabilization',
    ],
  },
]

const KEY_DECISIONS = [
  {
    decision: 'MVP vs MLP',
    description:
      'Minimum Viable Product gets to market fastest. Minimum Lovable Product takes longer but creates better first impressions. The right choice depends on your market.',
  },
  {
    decision: 'Build vs Buy',
    description:
      'Not everything needs custom code. Sometimes off-the-shelf tools, no-code platforms, or integrations are the smarter choice.',
  },
  {
    decision: 'Agency vs In-house',
    description:
      'Building an internal team takes time. Agencies deliver faster but cost more per hour. Many companies start with an agency, then transition to in-house.',
  },
  {
    decision: 'Fixed Price vs Time & Materials',
    description:
      'Fixed price gives you predictability. Time & materials gives you flexibility. Neither is always better — it depends on how well-defined your requirements are.',
  },
]

export default function ZeroToAppReadyPage() {
  return (
    <div className="bg-page pt-20 md:pt-24 pb-16 md:pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        {/* Header */}
        <AnimatedSection className="mb-12 md:mb-16 max-w-3xl">
          <SectionLabel className="mb-4 block">Guide</SectionLabel>
          <h1 className="text-page-title mb-6">Zero to App Ready</h1>
          <p className="text-lg text-secondary">
            Building software for the first time? This guide covers the journey from idea to launch — the stages, decisions, and timeline you should expect.
          </p>
        </AnimatedSection>

        {/* Journey Stages */}
        <AnimatedSection className="mb-16 md:mb-24">
          <h2 className="text-section-title mb-8">The Journey</h2>
          <div className="space-y-6">
            {JOURNEY_STAGES.map((stage) => (
              <div
                key={stage.stage}
                className="rounded-2xl bg-surface border border-default p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand-blue/10">
                      <stage.icon className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{stage.stage}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted">
                        <Clock className="h-3 w-3" />
                        {stage.timeline}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-secondary mb-4">{stage.description}</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {stage.activities.map((activity) => (
                        <div
                          key={activity}
                          className="flex items-center gap-2 text-sm text-muted"
                        >
                          <CheckCircle className="h-3 w-3 text-brand-blue" />
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Key Decisions */}
        <AnimatedSection className="mb-16 md:mb-24">
          <div className="rounded-2xl bg-surface border border-default p-8 md:p-10">
            <h2 className="text-section-title mb-8">Key Decisions You&apos;ll Make</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {KEY_DECISIONS.map((item, index) => (
                <div key={index} className="p-5 rounded-xl bg-surface-2">
                  <h3 className="font-semibold mb-2">{item.decision}</h3>
                  <p className="text-sm text-secondary">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Timeline Summary */}
        <AnimatedSection className="mb-16 md:mb-24">
          <div className="bg-surface-2 rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-xl font-semibold mb-4">
              Typical Timeline: 16-26 Weeks
            </h2>
            <p className="text-secondary max-w-2xl mx-auto mb-6">
              From validated idea to launched product. Faster is possible for simpler projects. Complex enterprise software takes longer. Anyone who promises faster without knowing your requirements is lying.
            </p>
            <p className="text-muted">
              Typical investment: USD 45,000 – USD 150,000
            </p>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <div className="rounded-2xl bg-surface border border-default p-8 md:p-12">
            <h2 className="text-2xl font-semibold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-secondary mb-6 max-w-lg mx-auto">
              Book a strategy session and we&apos;ll help you map out your specific path from idea to launch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/strategy-session">
                  Book a Strategy Call
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/work">See What We&apos;ve Built</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
