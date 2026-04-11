import { headers } from 'next/headers'

export type Region = 'MY' | 'INTL'

/**
 * Resolve the visitor's region for geo-aware pricing.
 *
 * Resolution order:
 *   1. Vercel's x-vercel-ip-country header (set automatically by Vercel's edge network)
 *   2. Fallback: 'INTL'
 *
 * Server-only — call this from Server Components or Route Handlers only.
 */
export async function resolveRegion(): Promise<Region> {
  const headerStore = await headers()
  const country = headerStore.get('x-vercel-ip-country')
  if (country === 'MY') return 'MY'
  return 'INTL'
}
