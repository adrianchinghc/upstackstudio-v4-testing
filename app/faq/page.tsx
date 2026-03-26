import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel, AnimatedSection } from '@/components/common'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Common questions about working with Upstack Studio — our expertise, process, pricing, and what to expect when building custom software.',
  alternates: {
    canonical: '/faq',
  },
}

const FAQ_CATEGORIES = [
  {
    title: 'Expertise & Capabilities',
    questions: [
      {
        question: "I don't see my area of business among your case studies. Can you still help?",
        answer:
          "While we proudly showcase selected past projects, we have successfully worked on a diverse range of software applications. We've delivered solutions for manufacturing (Daikin), retail (BookXcess), healthcare (Teleme), media (The Malaysian Insight), HR tech, logistics, fintech, and more. If your industry isn't on our portfolio, reach out anyway — chances are we've built something similar under NDA.",
      },
      {
        question: 'What technical stacks do you use?',
        answer:
          'Our team mostly works with Ruby on Rails and ReactJS for web applications, and React Native for mobile apps. We also have experience with Next.js, Node.js, Python, and various cloud platforms (AWS, GCP, Vercel). That said, if your project requires a specific stack — whether for integration with existing systems or team preference — we can adapt.',
      },
      {
        question: 'Can you integrate an existing design or do you always start from scratch?',
        answer:
          "While we are very proud of our design capabilities, we understand that some clients already have designs ready or prefer to work with their own designers. We're happy to work with existing Figma files, design systems, or brand guidelines. Our developers can implement any well-documented design.",
      },
      {
        question: 'We only need design services. Do you offer that?',
        answer:
          'Yes, we absolutely do. We offer standalone UI/UX design services, from user research and wireframing to high-fidelity Figma designs. However, our sweet spot is full-stack delivery — design through development — because that eliminates the handoff friction that often causes projects to fail.',
      },
      {
        question: 'Can you work with our existing codebase or do you only build from scratch?',
        answer:
          "We do both. We've taken over codebases from other agencies, inherited legacy systems that needed modernization, and built net-new applications from the ground up. If you have an existing codebase, we'll audit it first to assess technical debt and give you an honest assessment of whether it's worth building on or starting fresh.",
      },
    ],
  },
  {
    title: 'Process & Approach',
    questions: [
      {
        question: 'Is it possible to get references from any of your clients?',
        answer:
          "Yes, we are happy to introduce some of our select clients who have agreed to serve as references. We'll connect you with someone in a similar industry or project type so you can ask the questions that matter most to you.",
      },
      {
        question: "I have been burned by my previous developers. What's different about you?",
        answer:
          "It actually happens quite often that clients call us in as a rescue team for projects that went sideways with other vendors. What's different: (1) The person you meet is the person who builds — no sales-to-delivery handoff, (2) Bi-weekly demos on working software — not mockups, (3) Fixed-scope pricing — scope creep is on us, (4) You own everything from day one — code, designs, credentials. We've built our entire process around the failure modes we've seen destroy other projects.",
      },
      {
        question: 'Can you sign my NDA instead of your standard NDA?',
        answer:
          "Yes, we are happy to do that. We review NDAs regularly and are familiar with standard corporate confidentiality requirements. If there are specific clauses that need discussion, we'll flag them early so we can resolve any concerns before kicking off.",
      },
      {
        question: 'How do you handle scope changes during a project?',
        answer:
          "Change is inevitable in software development. Our 2-week sprint model makes this manageable: if you need to change direction, we adjust at the next sprint boundary. For additions within the agreed scope, we absorb the cost. For genuine scope expansion — new features, new integrations — we'll price it separately and you decide whether to proceed.",
      },
      {
        question: 'What happens after launch?',
        answer:
          "We don't disappear. Every project includes a warranty period for bug fixes. Beyond that, we offer ongoing maintenance and support retainers, or we can help you hire and transition to an internal team. We always build with continuity in mind — clean code, documentation, and no vendor lock-in.",
      },
    ],
  },
  {
    title: 'Pricing & Engagement',
    questions: [
      {
        question: 'How much does a typical project cost?',
        answer:
          "Typical engagements start from USD 45,000 (approximately RM 200,000) for a 16-week delivery. This includes product strategy, UI/UX design, development, QA, and deployment. The actual cost depends on scope — a simple MVP differs from a complex enterprise platform. We'll give you a precise quote after understanding your requirements in a strategy session.",
      },
      {
        question: 'Do you offer hourly or time-and-materials pricing?',
        answer:
          "We prefer fixed-scope pricing because it aligns our incentives with yours: we're motivated to deliver efficiently, not to maximize hours. That said, for ongoing maintenance, feature additions post-launch, or exploratory discovery phases, we can work on a retainer or time-and-materials basis.",
      },
      {
        question: 'What are your payment terms?',
        answer:
          'We typically ask for 30% upfront to begin work, then invoice bi-weekly based on completed sprints. This pay-as-you-go model means you never pay for work that hasn\'t been delivered, and you can stop the engagement at any sprint boundary if circumstances change.',
      },
      {
        question: 'Do you take equity or revenue share deals?',
        answer:
          "Generally, no. We've found that cash-based engagements create the clearest accountability for both parties. We're here to build great software, not to become your co-founder. If you're an early-stage startup with limited funding, we're probably not the right fit — but we can recommend other options.",
      },
    ],
  },
  {
    title: 'Timeline & Team',
    questions: [
      {
        question: 'How long does a typical project take?',
        answer:
          "Our standard delivery window is 16 weeks from kickoff to launch. This includes discovery, design, development, and QA. More complex projects — enterprise platforms, multiple integrations, regulatory requirements — may take longer. We'll give you a realistic timeline upfront, not an optimistic one that slips.",
      },
      {
        question: 'Who will be working on my project?',
        answer:
          "You get a dedicated squad: one project manager, one UI/UX designer, and one or more senior developers depending on project complexity. The same team stays with you from kickoff to handover — no junior rotations, no surprise reassignments. Adrian personally reviews every project at kickoff and key milestones.",
      },
      {
        question: 'Do you outsource any work?',
        answer:
          "No. Every person working on your project is a full-time Upstack Studio team member based in our Kuala Lumpur office. We don't subcontract to freelancers or offshore night-shift teams. When you work with us, you know exactly who's building your software.",
      },
      {
        question: 'What timezone do you operate in?',
        answer:
          "We're based in Kuala Lumpur, Malaysia (GMT+8). We've successfully delivered projects for clients in the US, UK, Australia, Singapore, and across Southeast Asia. For significant timezone differences, we adjust overlap hours for key meetings and use asynchronous communication via Slack for day-to-day updates.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="bg-page pt-20 md:pt-24 pb-16 md:pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Header */}
        <AnimatedSection className="mb-12 md:mb-16">
          <SectionLabel className="mb-4 block">FAQ</SectionLabel>
          <h1 className="text-page-title mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-secondary max-w-2xl">
            Common questions about working with us — our expertise, process, pricing, and what to expect when building custom software.
          </p>
        </AnimatedSection>

        {/* FAQ Categories */}
        {FAQ_CATEGORIES.map((category, categoryIndex) => (
          <AnimatedSection
            key={category.title}
            delay={categoryIndex * 0.05}
            className="mb-12"
          >
            <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-default">
              {category.title}
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {category.questions.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`${categoryIndex}-${index}`}
                  className="border border-default rounded-lg px-6 bg-surface data-[state=open]:bg-surface-2 transition-colors"
                >
                  <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-secondary pb-5 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        ))}

        {/* CTA */}
        <AnimatedSection delay={0.2} className="mt-16 text-center">
          <div className="rounded-2xl border border-default bg-surface p-8 md:p-12">
            <h2 className="text-2xl font-semibold mb-4">
              Still have questions?
            </h2>
            <p className="text-secondary mb-6 max-w-lg mx-auto">
              The best way to get answers specific to your situation is a 45-minute strategy call. No sales pitch — just honest answers.
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
