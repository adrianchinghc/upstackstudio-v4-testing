'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion, useSpring, useTransform, useMotionValue } from 'framer-motion'
import { AnimatedCounter } from '@/components/common'

// Spring config for mouse parallax — subtle, not nauseating
const PARALLAX_SPRING = { stiffness: 150, damping: 20 }

export function HeroProofCard() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-50px' })
  const prefersReducedMotion = useReducedMotion()

  // Mouse position for parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smoothed mouse values with spring physics
  const smoothMouseX = useSpring(mouseX, PARALLAX_SPRING)
  const smoothMouseY = useSpring(mouseY, PARALLAX_SPRING)

  // Transform mouse to parallax offsets (different layers move different amounts)
  // All hooks must be called unconditionally at the top level
  const glowX = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20])
  const glowY = useTransform(smoothMouseY, [-0.5, 0.5], [-20, 20])
  const cardX = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8])
  const cardY = useTransform(smoothMouseY, [-0.5, 0.5], [-8, 8])
  const cardRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [2, -2])
  const cardRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-2, 2])
  const secondaryX = useTransform(cardX, v => v * 0.5)
  const secondaryY = useTransform(cardY, v => v * 0.5)
  const tertiaryX = useTransform(cardX, v => v * 1.2)
  const tertiaryY = useTransform(cardY, v => v * 1.2)

  // Handle mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  // Materialization animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 50,
        damping: 20,
        duration: 0.8,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        stiffness: 60,
        damping: 15,
        duration: 0.6,
      },
    },
  }

  const badgeVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
        delay: 0.4,
      },
    },
  }

  // Reduced motion: static render
  if (prefersReducedMotion) {
    return (
      <div ref={containerRef} className="relative">
        {/* Subtle glow — toned down from original */}
        <div className="absolute -inset-8 opacity-10 blur-[40px] rounded-full" style={{ background: 'radial-gradient(circle, #0A4DFF 0%, transparent 70%)' }} />

        <div className="relative bg-surface border border-[var(--border)] rounded-2xl p-10 shadow-lg">
          <div className="text-[80px] md:text-[100px] font-extrabold text-gradient leading-none font-display tracking-[-0.04em] mb-4">
            15×
          </div>
          <p className="text-xl font-semibold mb-2">ecommerce revenue growth</p>
          <p className="text-base text-muted">BookXcess</p>

          <div className="absolute -bottom-4 -right-4 bg-surface border border-[var(--border)] text-[var(--text)] px-4 py-2.5 rounded-lg text-sm font-semibold shadow-md">
            4.9★ Clutch
          </div>
        </div>

        <div className="absolute -bottom-10 -left-6 bg-surface border border-[var(--border)] rounded-lg px-5 py-3 shadow-md">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold font-display text-[var(--color-brand-blue)]">17</div>
            <div className="text-xs text-muted leading-tight font-medium">projects<br/>delivered</div>
          </div>
        </div>

        <div className="absolute -top-4 -right-4 bg-surface border border-[var(--border)] rounded-lg px-3 py-1.5 shadow-sm">
          <span className="text-xs font-semibold text-muted">Since 2017</span>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      ref={containerRef}
      className="relative"
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {/* Subtle glow — single layer, toned down */}
      <motion.div
        className="absolute -inset-8 opacity-10 blur-[40px] rounded-full"
        style={{ x: glowX, y: glowY, background: 'radial-gradient(circle, #0A4DFF 0%, transparent 70%)' }}
        variants={glowVariants}
      />

      {/* Main proof card — clean, confident */}
      <motion.div
        className="relative bg-surface border border-[var(--border)] rounded-2xl p-10 shadow-lg"
        style={{
          x: cardX,
          y: cardY,
          rotateX: cardRotateX,
          rotateY: cardRotateY,
          transformStyle: 'preserve-3d',
        }}
        variants={cardVariants}
      >
        {/* The landmark stat */}
        <div className="text-[80px] md:text-[100px] font-extrabold text-gradient leading-none font-display tracking-[-0.04em] mb-4">
          <AnimatedCounter
            value={15}
            suffix="×"
            stiffness={40}
            damping={12}
          />
        </div>
        <p className="text-xl font-semibold mb-2">ecommerce revenue growth</p>
        <p className="text-base text-muted">BookXcess</p>

        {/* Rating badge — subtle, not flashy */}
        <motion.div
          className="absolute -bottom-4 -right-4 bg-surface border border-[var(--border)] text-[var(--text)] px-4 py-2.5 rounded-lg text-sm font-semibold shadow-md"
          variants={badgeVariants}
        >
          4.9★ Clutch
        </motion.div>
      </motion.div>

      {/* Secondary stat — projects delivered */}
      <motion.div
        className="absolute -bottom-10 -left-6 bg-surface border border-[var(--border)] rounded-lg px-5 py-3 shadow-md"
        style={{ x: secondaryX, y: secondaryY }}
        variants={badgeVariants}
      >
        <div className="flex items-center gap-3">
          <AnimatedCounter
            value={17}
            className="text-2xl font-bold font-display text-[var(--color-brand-blue)]"
            stiffness={60}
            damping={14}
          />
          <div className="text-xs text-muted leading-tight font-medium">projects<br/>delivered</div>
        </div>
      </motion.div>

      {/* Tertiary element — years badge */}
      <motion.div
        className="absolute -top-4 -right-4 bg-surface border border-[var(--border)] rounded-lg px-3 py-1.5 shadow-sm"
        style={{ x: tertiaryX, y: tertiaryY }}
        variants={badgeVariants}
      >
        <span className="text-xs font-semibold text-muted">Since 2017</span>
      </motion.div>
    </motion.div>
  )
}
