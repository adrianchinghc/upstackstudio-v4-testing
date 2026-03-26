import Link from 'next/link'
import { Logo } from '@/components/common/Logo'
import { SOCIAL, SITE_NAME } from '@/lib/constants'
import { Youtube, Instagram, Linkedin, MapPin, Podcast } from 'lucide-react'

const FOOTER_LINKS = {
  services: [
    { label: 'Operations Digitalisation', href: '/services/operations-digitalisation' },
    { label: 'AI Integration', href: '/services/ai-integration' },
    { label: 'AI Automation', href: '/services/ai-automation-subscription' },
    { label: 'Custom Development', href: '/services/custom-platform-development' },
    { label: 'Dev Subscription', href: '/services/development-subscription' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ],
  regions: [
    { label: 'Malaysia', href: '/malaysia' },
    { label: 'Singapore', href: '/singapore' },
    { label: 'Australia', href: '/australia' },
    { label: 'United Kingdom', href: '/united-kingdom' },
    { label: 'United States', href: '/united-states' },
  ],
}

const ADRIAN_SOCIAL = [
  { label: 'YouTube', href: SOCIAL.youtube, icon: Youtube },
  { label: 'Instagram', href: SOCIAL.instagram, icon: Instagram },
  { label: 'LinkedIn', href: SOCIAL.linkedin, icon: Linkedin },
  { label: 'Podcast', href: SOCIAL.podcast, icon: Podcast },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-default">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Main footer content */}
        <div className="py-16 md:py-20">
          <div className="grid gap-12 md:gap-8 lg:grid-cols-5">
            {/* Brand column */}
            <div className="lg:col-span-2 space-y-6">
              <Logo className="opacity-80" />
              <p className="text-secondary text-base max-w-sm leading-relaxed">
                AI-enabled software engineering for established, growing companies. Built on the
                LUDA™ Framework.
              </p>

              <div className="flex items-center gap-2 text-muted">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Petaling Jaya, Selangor, Malaysia</span>
              </div>

              {/* Adrian's social links */}
              <div className="space-y-3">
                <p className="text-xs font-medium text-muted uppercase tracking-wider">
                  Follow Adrian
                </p>
                <div className="flex items-center gap-3">
                  {ADRIAN_SOCIAL.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-lg border border-default bg-surface-2 hover:bg-sky-faint hover:border-sky-faint transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4 text-muted hover:text-sky-accent" />
                    </a>
                  ))}
                </div>
                <a
                  href={SOCIAL.podcast}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-sky-accent hover:underline"
                >
                  <Podcast className="h-4 w-4" />
                  Tech It Or Leave It Podcast
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-secondary hover:text-[var(--text)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-secondary hover:text-[var(--text)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Regions */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Regions</h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.regions.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-secondary hover:text-[var(--text)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-default">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted">
              © {currentYear} {SITE_NAME}. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-muted">
              <Link href="/privacy" className="hover:text-[var(--text)] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[var(--text)] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
