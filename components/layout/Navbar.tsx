'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/common/Logo'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'

type NavLink = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const NAV_LINKS: NavLink[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Operations Digitalisation', href: '/services/operations-digitalisation' },
      { label: 'AI Integration', href: '/services/ai-integration' },
      { label: 'AI Automation Subscription', href: '/services/ai-automation-subscription' },
      { label: 'Custom Platform Development', href: '/services/custom-platform-development' },
      { label: 'Development Subscription', href: '/services/development-subscription' },
    ],
  },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[var(--bg)]/80 backdrop-blur-xl border-b border-default'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Logo priority />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg',
                    pathname === link.href || pathname.startsWith(link.href + '/')
                      ? 'text-[var(--text)]'
                      : 'text-muted hover:text-[var(--text)] hover:bg-surface'
                  )}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className={cn(
                      'h-4 w-4 transition-transform',
                      activeDropdown === link.label && 'rotate-180'
                    )} />
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="rounded-xl border border-default bg-surface shadow-lg py-2 min-w-[280px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'block px-4 py-2.5 text-sm transition-colors',
                            pathname === child.href
                              ? 'text-sky-accent bg-surface-2'
                              : 'text-secondary hover:text-[var(--text)] hover:bg-surface-2'
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* CTA Button - Desktop */}
            <Button asChild size="lg" className="hidden md:inline-flex">
              <Link href="/strategy-session">Book a Strategy Call</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-default bg-surface hover:bg-surface-2 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-default bg-[var(--bg)] py-4">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block px-4 py-3 text-base font-medium transition-colors rounded-lg',
                      pathname === link.href
                        ? 'text-sky-accent bg-surface'
                        : 'text-secondary hover:text-[var(--text)] hover:bg-surface'
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 border-l border-default pl-4 mt-1 mb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'block px-3 py-2 text-sm transition-colors',
                            pathname === child.href
                              ? 'text-sky-accent'
                              : 'text-muted hover:text-[var(--text)]'
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-4 px-4">
              <Button asChild className="w-full">
                <Link href="/strategy-session">Book a Strategy Call</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
