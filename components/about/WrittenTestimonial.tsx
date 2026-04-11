'use client'

import Image from 'next/image'
import { AnimatedSection } from '@/components/common'
import { FEATURED_TESTIMONIALS } from '@/lib/constants'

interface WrittenTestimonialProps {
  index?: number
}

export function WrittenTestimonial({ index = 0 }: WrittenTestimonialProps) {
  const testimonial = FEATURED_TESTIMONIALS[index]
  if (!testimonial) return null

  // Function to highlight specific phrases in the quote
  const renderQuoteWithHighlights = () => {
    const result = testimonial.quote
    const highlights = testimonial.highlights || []

    // Create a map of highlights
    const parts: { text: string; highlighted: boolean }[] = []
    let lastIndex = 0

    // Find all highlights and their positions
    const positions: { start: number; end: number; text: string }[] = []
    highlights.forEach((highlight) => {
      const idx = result.toLowerCase().indexOf(highlight.toLowerCase())
      if (idx !== -1) {
        positions.push({
          start: idx,
          end: idx + highlight.length,
          text: result.substring(idx, idx + highlight.length),
        })
      }
    })

    // Sort by position
    positions.sort((a, b) => a.start - b.start)

    // Build parts array
    positions.forEach((pos) => {
      if (pos.start > lastIndex) {
        parts.push({
          text: result.substring(lastIndex, pos.start),
          highlighted: false,
        })
      }
      parts.push({ text: pos.text, highlighted: true })
      lastIndex = pos.end
    })

    if (lastIndex < result.length) {
      parts.push({ text: result.substring(lastIndex), highlighted: false })
    }

    if (parts.length === 0) {
      parts.push({ text: result, highlighted: false })
    }

    return parts.map((part, i) =>
      part.highlighted ? (
        <strong key={i} className="font-semibold text-[var(--text)]">
          {part.text}
        </strong>
      ) : (
        <span key={i}>{part.text}</span>
      )
    )
  }

  return (
    <section className="py-16 md:py-24">
      <AnimatedSection>
        <div className="max-w-4xl">
          {/* Quote mark accent */}
          <span className="text-6xl md:text-7xl font-display font-bold leading-none text-brand-blue/20 select-none block mb-4">
            &ldquo;
          </span>

          {/* Quote text */}
          <blockquote className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-secondary mb-8">
            {renderQuoteWithHighlights()}
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4 pt-6 border-t border-border">
            <div className="relative w-14 h-14 rounded-full overflow-hidden bg-surface-2 ring-2 ring-border">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-muted text-sm">
                {testimonial.role}, <span className="text-brand-blue">{testimonial.company}</span>
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
