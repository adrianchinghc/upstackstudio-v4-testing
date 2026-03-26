import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel, AnimatedSection } from '@/components/common'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for Upstack Studio — how we collect, use, and protect your personal information.',
  alternates: {
    canonical: '/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-page pt-20 md:pt-24 pb-16 md:pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        {/* Header */}
        <AnimatedSection className="mb-12">
          <SectionLabel className="mb-4 block">Legal</SectionLabel>
          <h1 className="text-page-title mb-4">Privacy Policy</h1>
          <p className="text-muted">Last updated: March 2026</p>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection delay={0.1}>
          <div className="prose prose-lg max-w-none text-secondary">
            <p>
              Upstack Studio Sdn Bhd (&quot;Upstack Studio&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website upstackstudio.com or engage with our services.
            </p>

            <h2>Information We Collect</h2>

            <h3>Information You Provide</h3>
            <p>We collect information you voluntarily provide when you:</p>
            <ul>
              <li>Fill out our strategy session or contact forms</li>
              <li>Subscribe to our newsletter</li>
              <li>Communicate with us via email or other channels</li>
              <li>Engage us for software development services</li>
            </ul>
            <p>This information may include your name, email address, phone number, company name, job title, and any other information you choose to provide about your project requirements.</p>

            <h3>Information Collected Automatically</h3>
            <p>When you visit our website, we may automatically collect certain information, including:</p>
            <ul>
              <li>IP address and approximate location</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website or source</li>
            </ul>
            <p>We use cookies and similar tracking technologies to collect this information. You can control cookies through your browser settings.</p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and schedule strategy sessions</li>
              <li>Provide, maintain, and improve our services</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Analyze website usage to improve user experience</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent or unauthorized activity</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul>
              <li><strong>Service providers:</strong> Third parties that help us operate our business (e.g., hosting providers, CRM systems, analytics tools)</li>
              <li><strong>Professional advisors:</strong> Lawyers, accountants, and other advisors as needed</li>
              <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>Our website may use the following third-party services:</p>
            <ul>
              <li><strong>Google Analytics:</strong> For website analytics</li>
              <li><strong>HubSpot:</strong> For customer relationship management and form submissions</li>
              <li><strong>Calendly:</strong> For scheduling strategy sessions</li>
              <li><strong>Vercel:</strong> For website hosting</li>
            </ul>
            <p>Each of these services has their own privacy policy governing how they handle your data.</p>

            <h2>Data Retention</h2>
            <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. For client engagements, we retain project-related information for at least 7 years for legal and business purposes.</p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent where applicable</li>
            </ul>
            <p>To exercise these rights, please contact us at <a href="mailto:hello@upstackstudio.com">hello@upstackstudio.com</a>.</p>

            <h2>Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>

            <h2>International Transfers</h2>
            <p>Your information may be transferred to and processed in countries other than Malaysia, including countries where our service providers operate. We ensure appropriate safeguards are in place for such transfers.</p>

            <h2>Children&apos;s Privacy</h2>
            <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.</p>

            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically.</p>

            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
            <p>
              <strong>Upstack Studio Sdn Bhd</strong><br />
              Email: <a href="mailto:hello@upstackstudio.com">hello@upstackstudio.com</a><br />
              Address: Kuala Lumpur, Malaysia
            </p>
          </div>
        </AnimatedSection>

        {/* Related Links */}
        <AnimatedSection delay={0.2} className="mt-12 pt-8 border-t border-default">
          <p className="text-muted text-sm">
            See also:{' '}
            <Link href="/affiliate-disclaimer" className="text-brand-blue hover:underline">
              Affiliate Disclaimer
            </Link>
          </p>
        </AnimatedSection>
      </div>
    </div>
  )
}
