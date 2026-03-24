import { cn } from '@/lib/utils'
import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  className?: string
  featured?: boolean
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  className,
  featured = false,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'group relative flex flex-col gap-6 rounded-2xl border border-default bg-surface p-6 md:p-8 transition-all hover:border-[var(--color-brand-sky)]/30',
        featured && 'md:col-span-2 bg-surface-2',
        className
      )}
    >
      <Quote className="h-8 w-8 text-[var(--color-brand-sky)] opacity-40" />

      <blockquote className={cn(
        'flex-1 text-base md:text-lg leading-relaxed text-secondary',
        featured && 'md:text-xl'
      )}>
        &ldquo;{quote}&rdquo;
      </blockquote>

      <footer className="flex items-center gap-4 pt-4 border-t border-default">
        <div className="flex-1">
          <cite className="not-italic font-semibold text-[var(--text)]">
            {author}
          </cite>
          <p className="text-sm text-muted">
            {role}, {company}
          </p>
        </div>
      </footer>
    </div>
  )
}
