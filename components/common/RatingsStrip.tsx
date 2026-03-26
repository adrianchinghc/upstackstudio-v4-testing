'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Star } from 'lucide-react'
import { RATINGS } from '@/lib/constants'

interface RatingsStripProps {
  className?: string
  variant?: 'default' | 'compact'
}

const LOGO_CONFIG = {
  clutch: {
    light: '/images/review-sites/clutch-dark.svg',
    dark: '/images/review-sites/clutch-white.svg',
    invertLight: false,
    width: 80,
    height: 22,
  },
  techBehemoths: {
    light: '/images/review-sites/TB-logo-transparent-light-bg.svg',
    dark: '/images/review-sites/TB-logo-transparent-dark-bg.svg',
    invertLight: false,
    width: 110,
    height: 24,
  },
  google: {
    light: '/images/review-sites/google.svg',
    dark: '/images/review-sites/google.svg',
    invertLight: false,
    width: 70,
    height: 24,
  },
} as const

export function RatingsStrip({ className, variant = 'default' }: RatingsStripProps) {
  const ratingEntries = Object.entries(RATINGS) as [
    keyof typeof RATINGS,
    (typeof RATINGS)[keyof typeof RATINGS],
  ][]

  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-center gap-8 md:gap-12',
        variant === 'compact' && 'gap-6 md:gap-8',
        className
      )}
    >
      {ratingEntries.map(([key, rating]) => {
        const logo = LOGO_CONFIG[key]
        const scale = variant === 'compact' ? 0.8 : 1

        return (
          <div
            key={rating.label}
            className={cn('flex items-center gap-3', variant === 'compact' && 'gap-2')}
          >
            {/* Rating score with star */}
            <div className="flex items-center gap-1">
              <Star
                className={cn(
                  'text-amber-400 fill-amber-400',
                  variant === 'default' ? 'h-4 w-4' : 'h-3.5 w-3.5'
                )}
              />
              <span
                className={cn(
                  'font-bold font-display',
                  variant === 'default' ? 'text-lg' : 'text-base'
                )}
              >
                {rating.score}
              </span>
            </div>

            {/* Logo */}
            <div className="relative">
              {/* Dark mode logo */}
              <Image
                src={logo.dark}
                alt={rating.label}
                width={Math.round(logo.width * scale)}
                height={Math.round(logo.height * scale)}
                className={cn(
                  'hidden dark:block opacity-70 hover:opacity-100 transition-opacity',
                  variant === 'compact' && 'opacity-60'
                )}
              />
              {/* Light mode logo */}
              <Image
                src={logo.light}
                alt={rating.label}
                width={Math.round(logo.width * scale)}
                height={Math.round(logo.height * scale)}
                className={cn(
                  'block dark:hidden opacity-80 hover:opacity-100 transition-opacity',
                  logo.invertLight && 'invert',
                  variant === 'compact' && 'opacity-70'
                )}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
