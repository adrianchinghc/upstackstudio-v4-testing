import { cookies, headers } from 'next/headers'

export type Region = 'MY' | 'INTL'

/**
 * Resolve the visitor's region for geo-aware pricing.
 *
 * Priority order:
 *   1. Cookie override (region=MY|INTL) — set by the footer region toggle
 *   2. Vercel's x-vercel-ip-country header (free on all Vercel plans)
 *   3. Fallback: 'INTL'
 *
 * Server-only — call this from Server Components or Route Handlers only.
 */
export async function resolveRegion(): Promise<Region> {
  // 1. Cookie override (user manually selected their region in the footer)
  const cookieStore = await cookies()
  const regionCookie = cookieStore.get('region')?.value
  if (regionCookie === 'MY' || regionCookie === 'INTL') {
    return regionCookie
  }

  // 2. Vercel geo header — set automatically by Vercel's edge network
  const headerStore = await headers()
  const country = headerStore.get('x-vercel-ip-country')
  if (country === 'MY') return 'MY'

  // 3. Fallback to international pricing
  return 'INTL'
}
