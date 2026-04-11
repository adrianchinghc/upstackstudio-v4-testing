import { headers } from 'next/headers'

export type Region = 'MY' | 'INTL'

/**
 * Resolve the visitor's region for geo-aware pricing.
 *
 * Resolution order:
 *   1. NEXT_DEV_REGION env var — local dev override (set in .env.local)
 *   2. CDN geo headers — checked in priority order across providers:
 *      - x-vercel-ip-country  (Vercel)
 *      - cf-ipcountry         (Cloudflare)
 *      - cloudfront-viewer-country (AWS CloudFront)
 *      - x-country-code       (generic CDN fallback)
 *   3. Fallback: 'INTL'
 *
 * Server-only — call this from Server Components or Route Handlers only.
 */
export async function resolveRegion(): Promise<Region> {
  // Dev override: set NEXT_DEV_REGION=MY in .env.local to simulate Malaysian IP locally
  const devRegion = process.env.NEXT_DEV_REGION
  if (devRegion === 'MY' || devRegion === 'INTL') return devRegion

  const headerStore = await headers()
  const country =
    headerStore.get('x-vercel-ip-country') ??
    headerStore.get('cf-ipcountry') ??
    headerStore.get('cloudfront-viewer-country') ??
    headerStore.get('x-country-code')

  if (country === 'MY') return 'MY'
  return 'INTL'
}
