'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

function getRegionCookie(): 'MY' | 'INTL' | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(/(?:^|;\s*)region=([^;]+)/)
  const val = match?.[1]
  if (val === 'MY' || val === 'INTL') return val
  return null
}

function setRegionCookie(region: 'MY' | 'INTL') {
  const maxAge = 60 * 60 * 24 * 90 // 90 days
  document.cookie = `region=${region}; path=/; max-age=${maxAge}; SameSite=Lax`
}

export function RegionToggle() {
  const router = useRouter()
  const [active, setActive] = useState<'MY' | 'INTL' | null>(null)

  useEffect(() => {
    setActive(getRegionCookie())
  }, [])

  function handleSelect(region: 'MY' | 'INTL') {
    setRegionCookie(region)
    setActive(region)
    router.refresh()
  }

  const base =
    'px-3 py-1 text-xs font-semibold rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-blue)]'
  const on = 'bg-[var(--color-brand-blue)] text-white'
  const off = 'text-muted hover:text-[var(--text)] hover:bg-surface-2'

  return (
    <div
      className="inline-flex items-center gap-1 rounded-lg border border-default bg-surface p-1"
      role="group"
      aria-label="Price currency"
    >
      <button
        type="button"
        onClick={() => handleSelect('MY')}
        className={`${base} ${active === 'MY' ? on : off}`}
        aria-pressed={active === 'MY'}
      >
        RM
      </button>
      <button
        type="button"
        onClick={() => handleSelect('INTL')}
        className={`${base} ${active === 'INTL' ? on : off}`}
        aria-pressed={active === 'INTL'}
      >
        USD
      </button>
    </div>
  )
}
