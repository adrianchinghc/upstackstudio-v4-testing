import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel, AnimatedSection } from '@/components/common'
import { LudaSection } from '@/components/luda/LudaSection'
import { ContactForm } from '@/components/forms/ContactForm'
import { MapPin, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Upstack Studio. For project enquiries, book a strategy call. This form is for general enquiries, partnerships, and press.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Upstack Studio',
    description: 'Get in touch with Upstack Studio. For project enquiries, book a strategy call.',
    url: '/contact',
    siteName: 'Upstack Studio',
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Upstack Studio',
    description: 'Get in touch with Upstack Studio.',
  },
}

export default function ContactPage() {
  return (
    <div className="bg-page pt-20 md:pt-24 pb-16 md:pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <AnimatedSection>
              <SectionLabel className="mb-4 block">Contact</SectionLabel>
              <h1 className="text-page-title mb-6">Get in touch.</h1>
              <p className="text-lg text-secondary leading-relaxed mb-8">
                For project enquiries, book a strategy call. This form is for everything else —
                existing clients, partnerships, press.
              </p>

              <Link
                href="/strategy-session"
                className="inline-flex items-center gap-2 text-sky-accent hover:underline font-medium mb-12"
              >
                Looking to start a project? Book a Strategy Call
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* Location */}
              <div className="flex items-start gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-surface border border-default">
                  <MapPin className="h-5 w-5 text-sky-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-secondary">
                    Kuala Lumpur
                    <br />
                    Malaysia
                  </p>
                </div>
              </div>

              {/* LUDA compact */}
              <LudaSection variant="compact" className="mt-8" />
            </AnimatedSection>
          </div>

          {/* Right column - Form */}
          <div>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl border border-default bg-surface p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  )
}
