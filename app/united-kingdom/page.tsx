import type { Metadata } from 'next'
import { GeoPage } from '@/components/geo/GeoPage'

export const metadata: Metadata = {
  title: 'Software Development UK | Upstack Studio',
  description:
    'UK companies expanding into Southeast Asia — or building APAC-ready infrastructure. Senior engineering team based in Malaysia. Operations digitalisation, AI integration, custom platform development.',
  alternates: { canonical: 'https://upstackstudio.com/united-kingdom' },
  openGraph: {
    title: 'Software Development UK | Upstack Studio',
    description:
      'UK companies building APAC-ready software with a senior Malaysian engineering team. Transparent process, fixed pricing, full IP ownership.',
    url: 'https://upstackstudio.com/united-kingdom',
    siteName: 'Upstack Studio',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function UnitedKingdomPage() {
  return (
    <GeoPage
      market="international"
      country="United Kingdom"
      h1="UK companies expanding into Southeast Asia — or building APAC-ready infrastructure."
      keyword="software development UK"
      subCopy="UK companies that need a reliable engineering partner in Southeast Asia — or that are building platforms for APAC markets — work with us for the timezone overlap, language clarity, and a delivery process built around predictability. We've built for international clients across manufacturing, financial services, healthcare, and consumer tech."
      clientsHeadline="International delivery. No handoffs. No juniors."
    />
  )
}
