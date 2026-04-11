export type Market = 'malaysia' | 'international'

export const PRICING = {
  // Scoping Sprint entry point
  scopingSprint: {
    myr: 15000,
    usd: 15000,
    weeks: 2,
    description: 'Written plan before you commit',
  },
  // Zero to Launch packages
  transform: {
    myr: 155000,
    usd: 45000,
    weeks: 16,
    description: '1 platform',
    postLaunch: '30 days',
  },
  accelerate: {
    myr: 295000,
    usd: 75000,
    months: '4–6',
    description: 'Web + Mobile',
    postLaunch: '90 days',
  },
  // Development Subscription tiers
  essential: {
    myr: 4995,
    usd: 2995,
    requests: 1,
    description: 'Essential tier',
  },
  pro: {
    myr: 24995,
    usd: 7995,
    requests: 1,
    description: 'Pro tier',
  },
  platinum: {
    myr: 39995,
    usd: 9995,
    requests: 2,
    description: 'Platinum tier',
  },
} as const

export function formatPrice(amount: number, market: Market): string {
  if (market === 'malaysia') {
    return `RM ${amount.toLocaleString()}`
  }
  return `USD ${amount.toLocaleString()}`
}

export function getPriceForMarket(pricing: { myr: number; usd: number }, market: Market): number {
  return market === 'malaysia' ? pricing.myr : pricing.usd
}

export function getMarketFromPath(pathname: string): Market {
  return pathname === '/malaysia' ? 'malaysia' : 'international'
}

// Geo page configurations
export const GEO_PAGES = {
  malaysia: {
    market: 'malaysia' as Market,
    keyword: 'software development company Malaysia',
    h1: "Malaysia's growing companies trust Upstack Studio to build what their operations need.",
  },
  singapore: {
    market: 'international' as Market,
    keyword: 'software development agency Singapore',
    h1: 'For Singapore companies that need enterprise-grade software — without enterprise prices.',
  },
  australia: {
    market: 'international' as Market,
    keyword: 'software development Australia',
    h1: 'Australian companies building digital infrastructure across Asia-Pacific.',
  },
  'united-kingdom': {
    market: 'international' as Market,
    keyword: 'software development UK',
    h1: 'UK companies expanding into Southeast Asia — or building APAC-ready infrastructure.',
  },
  'united-states': {
    market: 'international' as Market,
    keyword: 'software development USA',
    h1: 'US companies that need APAC-ready software built to the same standard they expect at home.',
  },
  indonesia: {
    market: 'international' as Market,
    keyword: 'software development Indonesia',
    h1: 'For Indonesian enterprises ready to move beyond manual operations.',
  },
  thailand: {
    market: 'international' as Market,
    keyword: 'software development Thailand',
    h1: "Thailand's growing enterprises deserve software built for how they actually operate.",
  },
  philippines: {
    market: 'international' as Market,
    keyword: 'software development Philippines',
    h1: 'For Philippine enterprises that have outgrown off-the-shelf software.',
  },
} as const

export type GeoPageKey = keyof typeof GEO_PAGES
