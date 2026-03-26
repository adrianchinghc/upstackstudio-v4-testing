'use client'

import { useEffect, useRef } from 'react'
import { useInView, useSpring, useTransform, motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  className?: string
  // Spring config — these values create a physical, weighty feel
  stiffness?: number
  damping?: number
}

export function AnimatedCounter({
  value,
  suffix = '',
  className,
  stiffness = 50,  // Lower = slower, more dramatic
  damping = 15,    // Lower = more overshoot/bounce
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()

  // Spring animation — starts at 0, animates to target value
  const springValue = useSpring(0, {
    stiffness,
    damping,
    mass: 1,
  })

  // Transform the spring value to a rounded number for display
  const displayValue = useTransform(springValue, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView && !prefersReducedMotion) {
      // Small delay to let the card materialize first
      const timeout = setTimeout(() => {
        springValue.set(value)
      }, 200)
      return () => clearTimeout(timeout)
    } else if (prefersReducedMotion) {
      // Instant for reduced motion
      springValue.jump(value)
    }
  }, [isInView, value, springValue, prefersReducedMotion])

  // Reduced motion: just show the number
  if (prefersReducedMotion) {
    return (
      <span ref={ref} className={cn(className)}>
        {value}{suffix}
      </span>
    )
  }

  return (
    <span ref={ref} className={cn('inline-flex items-baseline', className)}>
      <motion.span>{displayValue}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  )
}
