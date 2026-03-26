'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

// Emil Kowalski: strong ease-out — starts fast, gives instant perceived feedback
const EASE_OUT = [0.23, 1, 0.32, 1] as const
const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  // blur: use sparingly — masks crossfade imperfections, not a primary reveal effect
  blur?: boolean
  once?: boolean
  // spring: for elements that deserve a physical, alive feel
  spring?: boolean
  // scaleFrom: landmark stats — spring from 0.85 feels physical and weighty
  scaleFrom?: number
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  duration = 0.4, // 400ms default — 500ms reads sluggish for scroll reveals
  direction = 'up',
  blur = false, // off by default — use only when crossfading
  once = true,
  spring = false,
  scaleFrom,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-40px' })
  const prefersReducedMotion = useReducedMotion()

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':    return { y: 16 }   // 16px — subtle, natural. 24px is overdramatic.
      case 'down':  return { y: -16 }
      case 'left':  return { x: 16 }
      case 'right': return { x: -16 }
      default:      return {}
    }
  }

  const transition = spring
    ? { type: 'spring' as const, duration: 0.5, bounce: 0.15, delay }
    : { duration, delay, ease: direction === 'none' ? EASE_IN_OUT : EASE_OUT }

  // Respect prefers-reduced-motion: skip all animations, render immediately
  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={cn(className)}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        filter: blur ? 'blur(4px)' : 'none', // 4px, not 8 — subtler mask
        ...(scaleFrom !== undefined ? { scale: scaleFrom } : {}),
        ...getInitialPosition(),
      }}
      animate={
        isInView
          ? { opacity: 1, filter: 'none', x: 0, y: 0, ...(scaleFrom !== undefined ? { scale: 1 } : {}) }
          : { opacity: 0, filter: blur ? 'blur(4px)' : 'none', ...(scaleFrom !== undefined ? { scale: scaleFrom } : {}), ...getInitialPosition() }
      }
      transition={transition}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
