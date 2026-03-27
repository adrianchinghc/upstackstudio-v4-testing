import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel, AnimatedSection } from '@/components/common'
import { Button } from '@/components/ui/button'
import { ArrowRight, FileText, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'App Brief Template | Project Requirements Guide',
  description:
    'Free app brief template to help you document your software project requirements. Includes sections for goals, features, timeline, and budget.',
  alternates: {
    canonical: '/app-brief-template',
  },
  openGraph: {
    title: 'App Brief Template | Upstack Studio',
    description: 'Free template to document your software project requirements.',
    url: '/app-brief-template',
    siteName: 'Upstack Studio',
    locale: 'en_MY',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Brief Template',
    description: 'Free template for documenting project goals, features, timeline, and budget.',
  },
}

const BRIEF_SECTIONS = [
  {
    title: 'Business Context',
    items: [
      'Company background and industry',
      "The problem you're trying to solve",
      'Who experiences this problem (target users)',
      'What happens if the problem remains unsolved',
    ],
  },
  {
    title: 'Project Goals',
    items: [
      'Primary objective for this project',
      "How you'll measure success",
      'Key metrics or KPIs to track',
      'What "done" looks like in 6-12 months',
    ],
  },
  {
    title: 'Functional Requirements',
    items: [
      'Core features (must-have for launch)',
      'Nice-to-have features (post-launch)',
      'User roles and permissions',
      'Integrations with existing systems',
    ],
  },
  {
    title: 'Technical Considerations',
    items: [
      'Existing tech stack or constraints',
      'Performance requirements',
      'Security and compliance needs',
      'Mobile, web, or both',
    ],
  },
  {
    title: 'Timeline & Budget',
    items: [
      'Ideal launch date and why',
      'Hard deadlines (regulatory, events, etc.)',
      'Budget range',
      'Approval process and decision makers',
    ],
  },
]

const TIPS = [
  {
    tip: 'Focus on the problem, not the solution',
    explanation:
      "Describe what's broken in your business. Let the development team recommend solutions — that's what you're paying them for.",
  },
  {
    tip: 'Be honest about budget',
    explanation:
      "Sharing your budget range helps developers scope appropriately. Hiding it wastes everyone's time.",
  },
  {
    tip: 'Include the "why now"',
    explanation:
      'What changed that makes this project urgent? This context helps prioritize features and timelines.',
  },
  {
    tip: 'Name all stakeholders',
    explanation:
      'Who needs to approve the project? Who will use the software? Identify decision-makers and users early.',
  },
]

export default function AppBriefTemplatePage() {
  return (
    <div className="bg-page pt-20 md:pt-24 pb-16 md:pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Header */}
        <AnimatedSection className="mb-12 md:mb-16">
          <SectionLabel className="mb-4 block">Resource</SectionLabel>
          <h1 className="text-page-title mb-6">App Brief Template</h1>
          <p className="text-lg text-secondary max-w-2xl">
            A clear project brief is the foundation of successful software development. Use this
            structure to communicate your requirements effectively.
          </p>
        </AnimatedSection>

        {/* Brief Sections */}
        <AnimatedSection className="mb-12 md:mb-16">
          <div className="rounded-2xl bg-surface border border-default p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="h-6 w-6 text-brand-blue" />
              <h2 className="text-xl font-semibold">What to Include in Your Brief</h2>
            </div>

            <div className="space-y-8">
              {BRIEF_SECTIONS.map((section, index) => (
                <div
                  key={section.title}
                  className="pb-8 border-b border-border last:border-0 last:pb-0"
                >
                  <h3 className="text-lg font-semibold mb-4">
                    {index + 1}. {section.title}
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-secondary">
                        <CheckCircle className="h-4 w-4 text-brand-blue mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Tips */}
        <AnimatedSection className="mb-16 md:mb-24">
          <h2 className="text-section-title mb-8">Tips for a Better Brief</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {TIPS.map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-surface border border-border">
                <h3 className="font-semibold mb-2">{item.tip}</h3>
                <p className="text-secondary text-sm">{item.explanation}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <div className="rounded-2xl bg-surface-2 border border-default p-8 md:p-12">
            <h2 className="text-2xl font-semibold mb-4">Need Help Defining Your Project?</h2>
            <p className="text-secondary mb-6 max-w-lg mx-auto">
              Our strategy session includes a guided discovery process. We&apos;ll help you clarify
              requirements, identify risks, and scope your project properly.
            </p>
            <Button asChild size="lg">
              <Link href="/strategy-session">
                Book a Strategy Call
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
