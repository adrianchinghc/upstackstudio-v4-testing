import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel, AnimatedSection } from '@/components/common'

export const metadata: Metadata = {
  title: 'Affiliate Disclaimer',
  description:
    'Affiliate disclosure for Upstack Studio — transparency about our affiliate relationships and how we recommend tools and services.',
  alternates: {
    canonical: '/affiliate-disclaimer',
  },
}

export default function AffiliateDisclaimerPage() {
  return (
    <div className="bg-page pt-20 md:pt-24 pb-16 md:pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        {/* Header */}
        <AnimatedSection className="mb-12">
          <SectionLabel className="mb-4 block">Legal</SectionLabel>
          <h1 className="text-page-title mb-4">Affiliate Disclaimer</h1>
          <p className="text-muted">Last updated: March 2026</p>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection delay={0.1}>
          <div className="prose prose-lg max-w-none text-secondary">
            <h2>Disclosure</h2>
            <p>
              Upstack Studio Sdn Bhd (&quot;Upstack Studio&quot;, &quot;we&quot;, &quot;us&quot;) participates in various affiliate marketing programs. This means we may earn commissions on products or services we recommend through links on our website and blog.
            </p>

            <h2>How Affiliate Links Work</h2>
            <p>
              When you click an affiliate link on our website and make a purchase or sign up for a service, we may receive a small commission at no additional cost to you. This commission helps support our content creation and business operations.
            </p>
            <p>
              We only recommend products and services that we have personally used, thoroughly evaluated, or believe will provide genuine value to our readers. Our recommendations are based on our professional experience in software development and our understanding of what works for growing businesses.
            </p>

            <h2>Our Commitment to Transparency</h2>
            <p>
              We are committed to providing honest, unbiased recommendations. Our editorial content is not influenced by affiliate relationships. If a product or service has limitations or is not suitable for certain use cases, we will say so — regardless of any affiliate relationship.
            </p>
            <p>
              When we include affiliate links in our content, we strive to clearly indicate this through:
            </p>
            <ul>
              <li>Disclosures within the relevant content</li>
              <li>This affiliate disclaimer page</li>
              <li>Honest assessments of both pros and cons</li>
            </ul>

            <h2>Products We May Recommend</h2>
            <p>
              Our affiliate relationships may include, but are not limited to:
            </p>
            <ul>
              <li><strong>No-code platforms:</strong> Bubble, FlutterFlow, Plasmic, Retool</li>
              <li><strong>Development tools:</strong> Various SaaS tools we use in our projects</li>
              <li><strong>Hosting services:</strong> Cloud platforms and infrastructure providers</li>
              <li><strong>Business tools:</strong> Project management, communication, and productivity software</li>
              <li><strong>Books and courses:</strong> Educational resources related to software development and entrepreneurship</li>
            </ul>

            <h2>Your Choice</h2>
            <p>
              You are never obligated to use our affiliate links. If you prefer, you can go directly to the vendor&apos;s website by typing their URL in your browser. Our content will be just as valuable to you regardless of whether you use our affiliate links.
            </p>

            <h2>Questions</h2>
            <p>
              If you have any questions about our affiliate relationships or this disclaimer, please contact us at <a href="mailto:hello@upstackstudio.com">hello@upstackstudio.com</a>.
            </p>
          </div>
        </AnimatedSection>

        {/* Related Links */}
        <AnimatedSection delay={0.2} className="mt-12 pt-8 border-t border-default">
          <p className="text-muted text-sm">
            See also:{' '}
            <Link href="/privacy-policy" className="text-brand-blue hover:underline">
              Privacy Policy
            </Link>
          </p>
        </AnimatedSection>
      </div>
    </div>
  )
}
