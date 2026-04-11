import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel, AnimatedSection } from '@/components/common'
import { Button } from '@/components/ui/button'
import { getAllPosts, getCategories, POSTS_PER_PAGE } from '@/lib/blog'
import { SITE_URL } from '@/lib/constants'
import { ArrowRight, Clock, BookOpen } from 'lucide-react'

// Force dynamic rendering due to searchParams usage
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Blog | Upstack Studio',
  description:
    'In-depth articles on software development, AI integration, operations digitalisation, and digital transformation for established companies.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Blog | Upstack Studio',
    description:
      'Software development, AI integration, and digital transformation insights for established companies.',
    url: `${SITE_URL}/blog`,
    siteName: 'Upstack Studio',
    locale: 'en_MY',
    type: 'website',
  },
}

interface BlogPageProps {
  searchParams: Promise<{ category?: string; page?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams
  const selectedCategory = params.category || 'All'
  const currentPage = parseInt(params.page || '1', 10)

  const categories = getCategories()
  const allPosts = getAllPosts(selectedCategory === 'All' ? undefined : selectedCategory)
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)
  const posts = allPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE)

  return (
    <div className="bg-page min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionLabel>Blog</SectionLabel>
            <h1 className="text-page-h1 mt-4 mb-6 max-w-3xl">
              Insights on software, AI, and digital transformation.
            </h1>
            <p className="text-lg text-secondary max-w-2xl leading-relaxed">
              In-depth articles on building software that actually works, integrating AI where it
              matters, and digitalising operations for established companies.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-10 border-b border-default bg-page/95 backdrop-blur-sm px-6 py-4">
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog${cat === 'All' ? '' : `?category=${encodeURIComponent(cat)}`}`}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[var(--color-brand-navy)] text-white dark:bg-[var(--color-brand-sky)] dark:text-[var(--color-brand-black)]'
                    : 'bg-surface border border-default text-secondary hover:border-sky-faint'
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="h-12 w-12 text-muted mx-auto mb-4" />
              <p className="text-lg text-secondary mb-2">No posts in this category yet.</p>
              <Link href="/blog" className="text-sky-accent hover:underline text-sm">
                View all posts
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <AnimatedSection key={post.slug} delay={i * 0.04}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block h-full rounded-2xl border border-default bg-surface p-6 hover:border-sky-faint transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="rounded-full bg-[var(--color-brand-navy)]/10 dark:bg-[var(--color-brand-sky)]/10 px-3 py-1 text-xs font-medium text-[var(--color-brand-navy)] dark:text-sky-accent">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readingTime}
                      </span>
                    </div>
                    <h2 className="font-semibold text-base leading-snug mb-3 group-hover:text-sky-accent transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-secondary line-clamp-3 leading-relaxed mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted">
                      <span>{post.date}</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:text-sky-accent transition-colors" />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-12">
              {currentPage > 1 && (
                <Button variant="outline" asChild>
                  <Link
                    href={`/blog?${selectedCategory !== 'All' ? `category=${encodeURIComponent(selectedCategory)}&` : ''}page=${currentPage - 1}`}
                  >
                    ← Previous
                  </Link>
                </Button>
              )}
              <span className="flex items-center px-4 text-sm text-secondary">
                Page {currentPage} of {totalPages}
              </span>
              {currentPage < totalPages && (
                <Button variant="outline" asChild>
                  <Link
                    href={`/blog?${selectedCategory !== 'All' ? `category=${encodeURIComponent(selectedCategory)}&` : ''}page=${currentPage + 1}`}
                  >
                    Next →
                  </Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-surface border-t border-default">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-section-h2 mb-4">Ready to stop reading and start building?</h2>
            <p className="text-secondary mb-8">
              Building something like this? Let's talk about what it would take.
            </p>
            <Button size="lg" asChild>
              <Link href="/strategy-session">
                Book a Strategy Call <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
