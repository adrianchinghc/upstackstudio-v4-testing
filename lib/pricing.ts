import type { Region } from '@/lib/geo'

export type PriceAnchor = {
  myr: { amount: number; label: string }
  usd: { amount: number; label: string }
}

/**
 * Canonical pricing as of 2026-04-10 (offers.md v2).
 *
 * Source of truth: context/offers.md
 * Do not edit without updating offers.md first.
 *
 * NOTE: The retired tier names (LUDA Transform / Accelerate / Essential/Pro/Platinum)
 * have been removed. If you see those names anywhere in the codebase, replace them
 * with the anchors below.
 */
export const PRICES = {
  scopingSprint: {
    myr: { amount: 15_000, label: 'RM 15,000' },
    usd: { amount: 15_000, label: 'USD 15,000' },
  },
  ztlEssential: {
    myr: { amount: 180_000, label: 'RM 180,000' },
    usd: { amount: 55_000, label: 'USD 55,000' },
  },
  ztlGrowth: {
    myr: { amount: 280_000, label: 'RM 280,000' },
    usd: { amount: 85_000, label: 'USD 85,000' },
  },
  ztlScale: {
    myr: { amount: 380_000, label: 'RM 380,000' },
    usd: { amount: 115_000, label: 'USD 115,000' },
  },
  devsubEssential: {
    myr: { amount: 12_500, label: 'RM 12,500/mo' },
    usd: { amount: 3_500, label: 'USD 3,500/mo' },
  },
  devsubGrowth: {
    myr: { amount: 28_500, label: 'RM 28,500/mo' },
    usd: { amount: 8_500, label: 'USD 8,500/mo' },
  },
  devsubScale: {
    myr: { amount: 42_500, label: 'RM 42,500/mo' },
    usd: { amount: 12_500, label: 'USD 12,500/mo' },
  },
} as const satisfies Record<string, PriceAnchor>

export type PriceKey = keyof typeof PRICES

/**
 * Return the correct price label for a given region.
 * Use <Price anchor="..." /> in Server Components instead of calling this directly.
 */
export function resolvePrice(anchor: PriceKey, region: Region): string {
  return PRICES[anchor][region === 'MY' ? 'myr' : 'usd'].label
}
