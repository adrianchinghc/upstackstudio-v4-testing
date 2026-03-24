import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

interface CaseStudyCardProps {
  client: string
  industry: string
  outcome: string
  description?: string
  slug?: string
  featured?: boolean
  className?: string
}

export function CaseStudyCard({
  client,
  industry,
  outcome,
  description,
  slug,
  featured = false,
  className,
}: CaseStudyCardProps) {
  const content = (
    <div
      className={cn(
        'group relative flex flex-col gap-4 rounded-2xl border border-default bg-surface p-6 md:p-8 transition-all',
        slug && 'hover:border-[var(--color-brand-sky)]/50 cursor-pointer',
        featured && 'md:col-span-2 bg-surface-2',
        className
      )}
    >
      {/* Industry badge */}
      <span className="inline-flex self-start rounded-full bg-[var(--color-brand-navy)]/10 dark:bg-[var(--color-brand-sky)]/10 px-3 py-1 text-xs font-medium text-[var(--color-brand-navy)] dark:text-[var(--color-brand-sky)]">
        {industry}
      </span>

      {/* Client name */}
      <h3 className={cn(
        'text-card-title',
        featured && 'text-section-title'
      )}>
        {client}
      </h3>

      {/* Outcome - the key metric */}
      <p className={cn(
        'text-lg font-semibold text-[var(--color-brand-sky)]',
        featured && 'text-2xl md:text-3xl'
      )}>
        {outcome}
      </p>

      {/* Description */}
      {description && (
        <p className="text-secondary text-base leading-relaxed">
          {description}
        </p>
      )}

      {/* Link indicator */}
      {slug && (
        <div className="flex items-center gap-2 text-sm font-medium text-muted group-hover:text-[var(--color-brand-sky)] transition-colors mt-auto pt-4">
          View case study
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      )}
    </div>
  )

  if (slug) {
    return <Link href={`/work/${slug}`}>{content}</Link>
  }

  return content
}
