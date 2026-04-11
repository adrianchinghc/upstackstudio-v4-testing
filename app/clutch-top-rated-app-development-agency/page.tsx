import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel, AnimatedSection, RatingsStrip } from '@/components/common'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star, Award, Users, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Top Rated App Development Agency | Clutch Recognition',
  description:
    'Upstack Studio is a top-rated app development agency recognized by Clutch. 4.9★ rating, 40+ reviews from enterprise clients across Southeast Asia.',
  alternates: {
    canonical: '/clutch-top-rated-app-development-agency',
  },
  openGraph: {
    title: 'Top Rated App Development Agency | Upstack Studio',
    description: 'Recognized by Clutch with 4.9★ rating and 40+ reviews from enterprise clients.',
    url: '/clutch-top-rated-app-development-agency',
    siteName: 'Upstack Studio',
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Rated App Development Agency | Upstack Studio',
    description: 'Recognized by Clutch with 4.9★ rating and 40+ reviews.',
  },
}

const CLUTCH_HIGHLIGHTS = [
  {
    metric: '4.9',
    label: 'Average Rating',
    icon: Star,
  },
  {
    metric: '40+',
    label: 'Client Reviews',
    icon: Users,
  },
  {
    metric: '100%',
    label: 'Recommend Us',
    icon: CheckCircle,
  },
  {
    metric: 'Top 5%',
    label: 'Global Ranking',
    icon: Award,
  },
]

const AWARDS = [
  'Top App Developers Malaysia 2024',
  'Top Software Developers Malaysia 2024',
  'Top Web Developers Malaysia 2024',
  'Clutch Global Leader 2023',
  'Clutch Champion 2023',
]

const TESTIMONIALS = [
  {
    quote:
      'Upstack Studio delivered exactly what we needed — a reliable, scalable platform that our team actually uses. Their communication throughout the project was exceptional.',
    author: 'Operations Director',
    company: 'Manufacturing Company, Malaysia',
    rating: 5,
  },
  {
    quote:
      "We've worked with other agencies before, but Upstack Studio is different. They pushed back on our bad ideas and delivered something far better than what we originally asked for.",
    author: 'Founder & CEO',
    company: 'Healthcare Startup, Singapore',
    rating: 5,
  },
  {
    quote:
      'Our eCommerce revenue grew 15× after launching the platform they built. The ROI was clear within the first quarter.',
    author: 'Managing Director',
    company: 'Retail Chain, Malaysia',
    rating: 5,
  },
]

export default function ClutchPage() {
  return (
    <div className="bg-page pt-20 md:pt-24 pb-16 md:pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        {/* Hero */}
        <AnimatedSection className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            Clutch Verified
          </div>
          <h1 className="text-page-title mb-6">Top Rated App Development Agency</h1>
          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-8">
            Recognized by Clutch as one of the top software development companies in Malaysia. Our
            4.9★ rating comes from 40+ verified client reviews.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/strategy-session">
                Book a Strategy Call
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://clutch.co/profile/upstack-studio"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Clutch Profile
              </a>
            </Button>
          </div>
        </AnimatedSection>

        {/* Metrics */}
        <AnimatedSection className="mb-16 md:mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CLUTCH_HIGHLIGHTS.map((item) => (
              <div
                key={item.label}
                className="text-center p-6 rounded-xl bg-surface border border-border"
              >
                <item.icon className="h-8 w-8 text-brand-blue mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold font-display mb-1">
                  {item.metric}
                </div>
                <p className="text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Awards List */}
        <AnimatedSection className="mb-16 md:mb-24">
          <div className="rounded-2xl bg-surface border border-default p-8 md:p-12">
            <SectionLabel className="mb-4 block">Recognition</SectionLabel>
            <h2 className="text-section-title mb-8">Awards & Accolades</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {AWARDS.map((award) => (
                <div key={award} className="flex items-center gap-3 p-4 rounded-lg bg-surface-2">
                  <Award className="h-5 w-5 text-brand-blue flex-shrink-0" />
                  <span className="font-medium">{award}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection className="mb-16 md:mb-24">
          <SectionLabel className="mb-4 block">Client Reviews</SectionLabel>
          <h2 className="text-section-title mb-8">What Clients Say on Clutch</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="p-6 rounded-xl bg-surface border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-secondary mb-4 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted mt-6">
            <a
              href="https://clutch.co/profile/upstack-studio#reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue hover:underline"
            >
              Read all reviews on Clutch →
            </a>
          </p>
        </AnimatedSection>

        {/* Ratings Strip */}
        <AnimatedSection className="mb-16 md:mb-24">
          <RatingsStrip />
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <div className="rounded-2xl bg-surface-2 border border-default p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to Work With a Top-Rated Team?
            </h2>
            <p className="text-secondary mb-6 max-w-lg mx-auto">
              Book a 45-minute strategy call with Adrian. You&apos;ll walk away with a clear picture
              of what your project would look like — whether you work with us or not.
            </p>
            <p className="text-muted mb-8">Typical engagements from USD 45,000.</p>
            <Button asChild size="lg">
              <Link href="/strategy-session">
                Book Your Strategy Call
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
