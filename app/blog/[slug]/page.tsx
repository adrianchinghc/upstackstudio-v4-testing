import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPostSlugs, getPostBySlug, getAllPosts } from '@/lib/blog'
import { SectionLabel, AnimatedSection } from '@/components/common'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Clock, Calendar, Tag } from 'lucide-react'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: post.canonical },
    openGraph: {
      title: post.title,
      description: post.description,
      url: post.canonical,
      siteName: 'Upstack Studio',
      locale: 'en_MY',
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  // Related posts (same category, different slug)
  const related = getAllPosts(post.category)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3)

  return (
    <div className="bg-page min-h-screen">
      {/* Article Header */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-14 px-6 border-b border-default">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-sky-accent transition-colors mb-8"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span className="rounded-full bg-[var(--color-brand-navy)]/10 dark:bg-[var(--color-brand-sky)]/10 px-3 py-1 text-xs font-medium text-[var(--color-brand-navy)] dark:text-[var(--color-brand-sky)]">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted">
                <Clock className="h-3 w-3" />
                {post.readingTime}
              </span>
              {post.date && (
                <span className="flex items-center gap-1 text-xs text-muted">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </span>
              )}
            </div>

            <h1 className="text-page-h1 mb-5">{post.title}</h1>

            {post.description && (
              <p className="text-lg text-secondary leading-relaxed mb-6">{post.description}</p>
            )}

            <div className="flex items-center justify-between border-t border-default pt-5">
              <span className="text-sm text-secondary">By {post.author}</span>
              {post.tags.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap justify-end">
                  <Tag className="h-3 w-3 text-muted" />
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-display prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-secondary prose-p:leading-relaxed
            prose-a:text-[var(--color-brand-sky)] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[var(--text)] prose-strong:font-semibold
            prose-blockquote:border-l-[var(--color-brand-sky)] prose-blockquote:text-secondary
            prose-code:text-[var(--color-brand-sky)] prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-surface prose-pre:border prose-pre:border-default
            prose-img:rounded-xl prose-img:border prose-img:border-default"
          >
            <MDXRemote source={post.content} />
          </div>

          {/* Inline CTA - appears at end of article */}
          <div className="mt-16 rounded-2xl border border-sky-faint bg-sky-faint p-8 text-center">
            <SectionLabel>Next Step</SectionLabel>
            <h2 className="text-2xl font-bold mt-3 mb-3">
              Building something like this? Let's talk.
            </h2>
            <p className="text-secondary mb-6 max-w-sm mx-auto text-sm">
              45 minutes with Adrian. No scripts. No generic questions. A real conversation about
              your operations.
            </p>
            <Button asChild>
              <Link href="/strategy-session">
                Book a Strategy Call <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16 px-6 bg-surface border-t border-default">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <SectionLabel>Related Articles</SectionLabel>
              <h2 className="text-section-h2 mt-3 mb-8">More from our blog.</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((relPost, i) => (
                <AnimatedSection key={relPost.slug} delay={i * 0.08}>
                  <Link
                    href={`/blog/${relPost.slug}`}
                    className="group block h-full rounded-2xl border border-default bg-page p-6 hover:border-sky-faint transition-colors"
                  >
                    <span className="text-xs text-muted flex items-center gap-1 mb-3">
                      <Clock className="h-3 w-3" />
                      {relPost.readingTime}
                    </span>
                    <h3 className="font-semibold text-sm leading-snug mb-2 group-hover:text-sky-accent transition-colors line-clamp-2">
                      {relPost.title}
                    </h3>
                    <p className="text-xs text-secondary line-clamp-2">{relPost.description}</p>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
