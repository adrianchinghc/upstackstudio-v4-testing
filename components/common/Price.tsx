import { resolveRegion } from '@/lib/geo'
import { resolvePrice, type PriceKey } from '@/lib/pricing'

interface PriceProps {
  anchor: PriceKey
  /** Optional Tailwind classes for the wrapping span */
  className?: string
}

/**
 * Async Server Component — renders the correct price label for the visitor's region.
 *
 * Region is resolved automatically from the visitor's IP address via Vercel's
 * x-vercel-ip-country header. Malaysian IPs show RM pricing; all others show USD.
 *
 * Usage:
 *   <Price anchor="scopingSprint" />           → "RM 15,000" or "USD 15,000"
 *   <Price anchor="ztlEssential" />            → "RM 180,000" or "USD 55,000"
 *   <Price anchor="devsubEssential" />         → "RM 12,500/mo" or "USD 3,500/mo"
 *
 * Can NOT be used inside Client Components. Wrap in Suspense if needed.
 */
export async function Price({ anchor, className }: PriceProps) {
  const region = await resolveRegion()
  const label = resolvePrice(anchor, region)

  return (
    <span className={className} data-price-anchor={anchor} data-region={region}>
      {label}
    </span>
  )
}
