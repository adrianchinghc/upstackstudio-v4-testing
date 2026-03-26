'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CONSENT_KEY = 'upstack_cookie_consent'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) {
      // Small delay so it doesn't flash on initial render
      const timer = setTimeout(() => setVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  function loadAnalytics() {
    // GA4 — conditional load on consent
    const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    if (gaId && typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
      script.async = true
      document.head.appendChild(script)
      window.dataLayer = window.dataLayer || []
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      window.gtag = function (...args: any[]) {
        window.dataLayer.push(args)
      }
      window.gtag('js', new Date())
      window.gtag('config', gaId)
    }

    // Meta Pixel
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID
    if (pixelId && typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const f = window as any
      f.fbq =
        f.fbq ||
        function (...args: unknown[]) {
          ;(f.fbq.q = f.fbq.q || []).push(args)
        }
      const script = document.createElement('script')
      script.src = 'https://connect.facebook.net/en_US/fbevents.js'
      script.async = true
      document.head.appendChild(script)
      f.fbq('init', pixelId)
      f.fbq('track', 'PageView')
    }
  }

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setVisible(false)
    loadAnalytics()
  }

  function handleDecline() {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-default bg-surface/95 backdrop-blur-sm px-6 py-4 md:py-5"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <div className="flex-1 text-sm text-secondary leading-relaxed pr-4">
          We use cookies to understand how visitors use our site and improve the experience.{' '}
          <Link href="/contact" className="text-sky-accent hover:underline">
            Learn more
          </Link>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Button size="sm" variant="outline" onClick={handleDecline}>
            Decline
          </Button>
          <Button size="sm" onClick={handleAccept}>
            Accept
          </Button>
          <button
            onClick={handleDecline}
            className="text-muted hover:text-[var(--text)] transition-colors ml-1"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

// Extend window for dataLayer
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any[]
  }
}
