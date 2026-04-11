import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel, AnimatedSection } from '@/components/common'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, AlertTriangle, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'App Developer Interview Questions | Hiring Guide',
  description:
    'Essential questions to ask when hiring an app developer. Evaluate technical skills, process, communication, and red flags before signing a contract.',
  alternates: {
    canonical: '/app-developer-interview-questions',
  },
  openGraph: {
    title: 'App Developer Interview Questions | Upstack Studio',
    description: 'Essential questions to ask when hiring an app developer.',
    url: '/app-developer-interview-questions',
    siteName: 'Upstack Studio',
    locale: 'en_MY',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Developer Interview Questions',
    description: 'Evaluate technical skills, process, and red flags before hiring.',
  },
}

const QUESTION_CATEGORIES = [
  {
    title: 'Technical Capability',
    icon: CheckCircle,
    questions: [
      'What tech stack do you recommend for my project, and why?',
      "Can you show me similar projects you've built?",
      'How do you handle projects outside your core stack?',
      "What's your approach to technical debt?",
      'How do you ensure code quality and maintainability?',
    ],
  },
  {
    title: 'Process & Communication',
    icon: HelpCircle,
    questions: [
      'How often will we have status updates?',
      'What project management tools do you use?',
      'Who will be my main point of contact?',
      'How do you handle scope changes mid-project?',
      'What happens if a deadline is at risk?',
    ],
  },
  {
    title: 'Red Flags to Watch For',
    icon: AlertTriangle,
    questions: [
      'Vague answers about team composition or who works on your project',
      'Reluctance to show previous work or provide references',
      'No clear process for requirements gathering',
      'Pricing that seems too good to be true',
      'Promises of unrealistic timelines',
    ],
  },
]

const KEY_QUESTIONS = [
  {
    question: 'Will the same team work on my project from start to finish?',
    why: 'Team handoffs cause delays, miscommunication, and rework. The developers who understand your requirements should be the ones building.',
  },
  {
    question: 'What happens after launch? Do you offer support and maintenance?',
    why: 'Software needs ongoing care. Agencies that disappear after launch leave you stranded when bugs appear or you need updates.',
  },
  {
    question: 'Can I talk to a recent client as a reference?',
    why: 'Any reputable agency should be willing to connect you with satisfied clients. Hesitation here is a major red flag.',
  },
  {
    question: "What if I'm not happy with the work?",
    why: 'Understand the feedback process, revision policy, and worst-case scenarios before you sign anything.',
  },
]

export default function AppDeveloperInterviewQuestionsPage() {
  return (
    <div className="bg-page pt-20 md:pt-24 pb-16 md:pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Header */}
        <AnimatedSection className="mb-12 md:mb-16">
          <SectionLabel className="mb-4 block">Resource</SectionLabel>
          <h1 className="text-page-title mb-6">Questions to Ask Before Hiring an App Developer</h1>
          <p className="text-lg text-secondary max-w-2xl">
            Hiring the wrong developer is expensive — not just in money, but in time and opportunity
            cost. Ask these questions to find a partner who will actually deliver.
          </p>
        </AnimatedSection>

        {/* Question Categories */}
        {QUESTION_CATEGORIES.map((category, categoryIndex) => (
          <AnimatedSection key={category.title} delay={categoryIndex * 0.05} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <category.icon className="h-5 w-5 text-brand-blue" />
              <h2 className="text-xl font-semibold">{category.title}</h2>
            </div>
            <ul className="space-y-3 pl-8">
              {category.questions.map((question, index) => (
                <li key={index} className="text-secondary flex items-start gap-3">
                  <span className="text-brand-blue mt-1">•</span>
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        ))}

        {/* Key Questions Deep Dive */}
        <AnimatedSection className="mb-16 md:mb-24">
          <div className="rounded-2xl bg-surface border border-default p-8 md:p-10">
            <h2 className="text-section-title mb-8">4 Questions That Matter Most</h2>
            <div className="space-y-8">
              {KEY_QUESTIONS.map((item, index) => (
                <div key={index} className="pb-8 border-b border-border last:border-0 last:pb-0">
                  <h3 className="text-lg font-semibold mb-2">
                    {index + 1}. {item.question}
                  </h3>
                  <p className="text-secondary">
                    <span className="font-medium text-muted">Why it matters:</span> {item.why}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <div className="rounded-2xl bg-surface-2 border border-default p-8 md:p-12">
            <h2 className="text-2xl font-semibold mb-4">Want to See These Principles in Action?</h2>
            <p className="text-secondary mb-6 max-w-lg mx-auto">
              Book a strategy call with us. We&apos;ll answer every question on this page — and you
              can see firsthand how a senior team operates.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/strategy-session">
                  Book a Strategy Call
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/work">See Our Work</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
