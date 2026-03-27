import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel, AnimatedSection } from '@/components/common'
import { Button } from '@/components/ui/button'
import { SOCIAL } from '@/lib/constants'
import {
  ArrowRight,
  BookOpen,
  Youtube,
  Podcast,
  Calculator,
  FileText,
  ExternalLink,
  Target,
  Rocket,
  AlertTriangle,
  HelpCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Blog posts, videos, podcasts, and tools to help you make better decisions about software development for your business.',
  alternates: {
    canonical: '/resources',
  },
  openGraph: {
    title: 'Resources | Upstack Studio',
    description:
      'Blog posts, videos, podcasts, and tools for better software development decisions.',
    url: '/resources',
    siteName: 'Upstack Studio',
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources | Upstack Studio',
    description: 'Blog posts, videos, podcasts, and tools for your business.',
  },
}

const RESOURCE_CATEGORIES = [
  {
    title: 'Blog',
    description:
      'In-depth articles on software development, AI integration, and digital transformation.',
    href: '/blog',
    icon: BookOpen,
    count: '200+ articles',
  },
  {
    title: 'YouTube',
    description:
      'Video content covering project walkthroughs, client testimonials, and tech insights.',
    href: SOCIAL.youtube,
    icon: Youtube,
    external: true,
  },
  {
    title: 'Podcast',
    description:
      'Tech It Or Leave It — conversations about technology, business, and building products.',
    href: SOCIAL.podcast,
    icon: Podcast,
    external: true,
  },
]

const TOOLS = [
  {
    title: 'App Cost Calculator',
    description: 'Get a rough estimate of what your software project might cost.',
    href: 'https://appcost.upstackstudio.com/',
    icon: Calculator,
    external: true,
  },
  {
    title: 'App Brief Template',
    description:
      'A template to help you document your requirements before talking to any developer.',
    href: '/app-brief-template',
    icon: FileText,
  },
  {
    title: 'App Validation Blueprint',
    description:
      'Validate your app idea before building. Test demand, refine features, reduce risk.',
    href: '/app-validation-blueprint',
    icon: Target,
  },
  {
    title: 'Zero to App Ready Guide',
    description:
      'Everything you need to know before building your first app — from validation to launch.',
    href: '/zero-to-app-ready',
    icon: Rocket,
  },
  {
    title: 'App Development Mistakes',
    description: 'Common mistakes that cost founders time and money — and how to avoid them.',
    href: '/app-development-mistakes-ebook',
    icon: AlertTriangle,
  },
  {
    title: 'Developer Interview Questions',
    description:
      'Essential questions to ask when hiring an app developer. Evaluate skills and red flags.',
    href: '/app-developer-interview-questions',
    icon: HelpCircle,
  },
]

export default function ResourcesPage() {
  return (
    <div className="bg-page pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <AnimatedSection className="max-w-3xl mb-16 md:mb-20">
          <SectionLabel className="mb-4 block">Resources</SectionLabel>
          <h1 className="text-page-title mb-6">Learn before you decide.</h1>
          <p className="text-lg text-secondary leading-relaxed">
            Blog posts, videos, podcasts, and tools to help you make better decisions about software
            development for your business.
          </p>
        </AnimatedSection>

        {/* Content Categories */}
        <section className="mb-16 md:mb-24">
          <AnimatedSection className="mb-8">
            <h2 className="text-section-title">Content</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {RESOURCE_CATEGORIES.map((category, index) => (
              <AnimatedSection key={category.title} delay={index * 0.1}>
                {category.external ? (
                  <a
                    href={category.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col h-full rounded-2xl border border-default bg-surface p-6 md:p-8 transition-all hover:border-sky-faint"
                  >
                    <category.icon className="h-10 w-10 text-sky-accent mb-4" />
                    <h3 className="text-card-title mb-2 group-hover:text-sky-accent transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-secondary text-base leading-relaxed mb-4 flex-1">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-muted group-hover:text-sky-accent transition-colors mt-auto">
                      Visit
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </a>
                ) : (
                  <Link
                    href={category.href}
                    className="group flex flex-col h-full rounded-2xl border border-default bg-surface p-6 md:p-8 transition-all hover:border-sky-faint"
                  >
                    <category.icon className="h-10 w-10 text-sky-accent mb-4" />
                    <h3 className="text-card-title mb-2 group-hover:text-sky-accent transition-colors">
                      {category.title}
                    </h3>
                    {category.count && (
                      <span className="text-sm text-sky-accent mb-2">{category.count}</span>
                    )}
                    <p className="text-secondary text-base leading-relaxed mb-4 flex-1">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-muted group-hover:text-sky-accent transition-colors mt-auto">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                )}
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Tools & Guides */}
        <section className="mb-16 md:mb-24">
          <AnimatedSection className="mb-8">
            <h2 className="text-section-title">Tools & Guides</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOLS.map((tool, index) => {
              const CardContent = (
                <>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-surface-2 mb-4">
                    <tool.icon className="h-6 w-6 text-sky-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-sky-accent transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-secondary text-sm mb-4 flex-1">{tool.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-muted group-hover:text-sky-accent transition-colors mt-auto">
                    {tool.external ? 'Open' : 'Read'}
                    {tool.external ? (
                      <ExternalLink className="h-4 w-4" />
                    ) : (
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    )}
                  </span>
                </>
              )

              return (
                <AnimatedSection key={tool.title} delay={index * 0.05}>
                  {tool.external ? (
                    <a
                      href={tool.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col h-full rounded-2xl border border-default bg-surface p-6 transition-all hover:border-sky-faint"
                    >
                      {CardContent}
                    </a>
                  ) : (
                    <Link
                      href={tool.href}
                      className="group flex flex-col h-full rounded-2xl border border-default bg-surface p-6 transition-all hover:border-sky-faint"
                    >
                      {CardContent}
                    </Link>
                  )}
                </AnimatedSection>
              )
            })}
          </div>
        </section>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <h2 className="text-section-title mb-6">Ready to talk?</h2>
          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
            Skip the reading and get straight to a conversation about your specific situation.
          </p>
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
