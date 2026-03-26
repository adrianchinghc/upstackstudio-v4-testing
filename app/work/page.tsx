import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel, AnimatedSection, CaseStudyCard } from '@/components/common'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Projects delivered across Malaysia, Australia, the US, UK, and the Netherlands. See how we help established companies build software that actually works.',
  alternates: {
    canonical: '/work',
  },
}

// Case studies data from the brief
const CASE_STUDIES = [
  {
    client: 'BookXcess',
    industry: 'Retail · Events',
    outcome: '15× ecommerce revenue growth',
    description: 'Shopify migration and optimization that transformed their online revenue.',
    featured: true,
  },
  {
    client: 'Daikin / Acson — GO DAIKIN App',
    industry: 'Manufacturing · IoT',
    outcome: 'IoT remote AC control',
    description: 'React Native app for remote air conditioning control and monitoring.',
  },
  {
    client: 'Daikin DEDM — AXIIOT Plus',
    industry: 'Manufacturing · IoT',
    outcome: 'Unified monitoring system',
    description: 'Unified CCTV and alarm monitoring platform for distributed facilities.',
  },
  {
    client: 'Teleme',
    industry: 'Healthcare · Telemedicine',
    outcome: 'Better than any previous dev house',
    description: 'Telemedicine platform that exceeded all previous development partnerships.',
  },
  {
    client: 'Magnum 4D Berhad',
    industry: 'Gaming · Public-listed',
    outcome: 'On-time delivery, above & beyond',
    description: 'Delivered on time with the team going above and beyond expectations.',
  },
  {
    client: 'The Malaysian Insight',
    industry: 'Media · News',
    outcome: 'Exceeded delivery expectations',
    description: 'Mobile app delivery that surpassed all expectations with remarkable speed.',
  },
  {
    client: 'AFA Malaysia',
    industry: 'Financial Services',
    outcome: 'Increased consumer transparency',
    description: 'Public adviser portal that improved transparency in financial services.',
  },
  {
    client: 'Whisker Tracker',
    industry: 'Consumer Tech · AI',
    outcome: 'Cat facial recognition for NGOs',
    description: 'AI-powered cat facial recognition system for animal welfare organizations.',
  },
  {
    client: 'Hummingbird TMS / Tradelink',
    industry: 'Logistics',
    outcome: 'Created sellable SaaS product',
    description: 'Built a transport management system that became a standalone SaaS product.',
  },
  {
    client: 'Black Tulip',
    industry: 'Platform · Mental Health',
    outcome: 'Rebuilt $500K failed project',
    description: 'Rescued a failed half-million dollar project and rebuilt it in 10 languages.',
  },
  {
    client: 'Fightcode',
    industry: 'Sports Tech',
    outcome: 'Simplified event management',
    description: 'Event management platform for combat sports competitions.',
  },
  {
    client: '12Job',
    industry: 'HR Tech · Social Impact',
    outcome: 'Job access for B40 community',
    description: 'React Native + Ruby on Rails platform connecting B40 workers to opportunities.',
  },
  {
    client: 'NiuAce for Builders',
    industry: 'Construction Tech',
    outcome: 'Completed on time, retained for ongoing work',
    description:
      'Construction management platform delivered on schedule, now in ongoing development.',
  },
  {
    client: 'Fitness Annotations',
    industry: 'Health & Fitness',
    outcome: 'Full v1 delivered with AI recommendations',
    description: 'AI-driven fitness recommendation platform built with React Native + NestJS.',
  },
]

export default function WorkPage() {
  return (
    <div className="bg-page pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <AnimatedSection className="max-w-3xl mb-16 md:mb-20">
          <SectionLabel className="mb-4 block">Case Studies</SectionLabel>
          <h1 className="text-page-title mb-6">Work that moves businesses forward.</h1>
          <p className="text-lg text-secondary leading-relaxed">
            Projects delivered across Malaysia, Australia, the US, UK, and the Netherlands. From 15×
            revenue growth to rebuilding failed projects — here's what we've built.
          </p>
        </AnimatedSection>

        {/* Featured Case Study - BookXcess */}
        <AnimatedSection className="mb-12 md:mb-16">
          <div className="rounded-2xl border border-[var(--color-brand-blue)]/30 bg-surface p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-flex rounded-full bg-[var(--color-lime-bg)] border border-[var(--color-lime-border)] px-3 py-1 text-xs font-medium text-[var(--color-lime-text)] mb-4">
                  Featured
                </span>
                <h2 className="text-section-title mb-4">BookXcess</h2>
                <p className="text-lg text-secondary mb-6">
                  When BookXcess needed to transform their ecommerce operations, we delivered a
                  Shopify migration that drove results nobody expected.
                </p>
                <blockquote className="text-base italic text-secondary border-l-2 border-[var(--color-brand-blue)] pl-4 mb-6">
                  &ldquo;Brilliant job guys! Just brilliant! So many amazing changes in just a few
                  days.&rdquo;
                  <footer className="text-sm text-muted mt-2 not-italic">
                    — Andrew Yap, Founder
                  </footer>
                </blockquote>
              </div>
              <div className="text-center">
                <div className="text-7xl md:text-9xl font-extrabold text-gradient font-display">
                  15×
                </div>
                <p className="text-xl font-semibold">ecommerce revenue growth</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {CASE_STUDIES.filter((cs) => cs.client !== 'BookXcess').map((caseStudy, index) => (
            <AnimatedSection key={caseStudy.client} delay={index * 0.05}>
              <CaseStudyCard {...caseStudy} />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <p className="text-lg text-secondary mb-6">Ready to see what we can build for you?</p>
          <Button asChild size="lg">
            <Link href="/strategy-session">
              Book a Strategy Call
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </div>
  )
}
