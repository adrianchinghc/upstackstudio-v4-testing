'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  blur?: boolean
  once?: boolean
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  blur = true,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 24 }
      case 'down':
        return { y: -24 }
      case 'left':
        return { x: 24 }
      case 'right':
        return { x: -24 }
      default:
        return {}
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        filter: blur ? 'blur(8px)' : 'blur(0px)',
        ...getInitialPosition(),
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              filter: 'blur(0px)',
              x: 0,
              y: 0,
            }
          : {
              opacity: 0,
              filter: blur ? 'blur(8px)' : 'blur(0px)',
              ...getInitialPosition(),
            }
      }
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
