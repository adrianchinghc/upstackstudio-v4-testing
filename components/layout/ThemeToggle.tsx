'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-default bg-surface hover:bg-surface-2 transition-colors"
        aria-label="Toggle theme"
      >
        <span className="w-4 h-4" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-default bg-surface hover:bg-surface-2 transition-colors"
      aria-label="Toggle theme"
    >
      <Sun className="h-4 w-4 scale-100 dark:scale-0 transition-all absolute" />
      <Moon className="h-4 w-4 scale-0 dark:scale-100 transition-all" />
    </button>
  )
}
