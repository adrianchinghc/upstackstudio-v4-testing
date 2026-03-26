import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  image?: string
  className?: string
  featured?: boolean
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  image,
  className,
  featured = false,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'group relative flex flex-col gap-6 rounded-2xl border border-default bg-surface p-6 md:p-8 transition-all hover:border-[var(--color-brand-blue)]/40 hover:shadow-lg hover:shadow-[var(--color-brand-blue)]/5',
        featured && 'md:col-span-2 bg-surface-2 border-l-4 border-l-[var(--color-brand-blue)]',
        className
      )}
    >
      {/* Quote icon with gradient background */}
      <div className="relative">
        <div className="absolute -inset-2 bg-gradient-to-br from-[var(--color-brand-blue)]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <Quote className="relative h-8 w-8 text-[var(--color-brand-blue)] opacity-60 group-hover:opacity-100 transition-opacity" />
      </div>

      <blockquote
        className={cn(
          'flex-1 text-base md:text-lg leading-relaxed text-secondary',
          featured && 'md:text-xl'
        )}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      <footer className="flex items-center gap-4 pt-4 border-t border-[var(--color-brand-blue)]/10">
        {image && (
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-[var(--color-brand-blue)]/20">
            <Image src={image} alt={author} fill className="object-cover" />
          </div>
        )}
        <div className="flex-1">
          <cite className="not-italic font-semibold text-[var(--text)]">{author}</cite>
          <p className="text-sm text-muted">
            {role}, <span className="text-[var(--color-brand-blue)] font-medium">{company}</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
