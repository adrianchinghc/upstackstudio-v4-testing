'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface LogoProps {
  className?: string
  width?: number
  height?: number
  priority?: boolean
  linked?: boolean
}

export function Logo({
  className,
  width = 140,
  height = 36,
  priority = false,
  linked = true,
}: LogoProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Show dark logo by default during SSR, then switch based on theme
  const src = mounted && resolvedTheme === 'dark' ? '/logo-white.svg' : '/logo-dark.svg'

  const image = (
    <Image
      src={src}
      alt="Upstack Studio"
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  )

  if (!linked) return image

  return (
    <Link href="/" className="inline-flex items-center">
      {image}
    </Link>
  )
}
