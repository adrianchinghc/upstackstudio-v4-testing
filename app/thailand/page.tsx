import type { Metadata } from 'next'
import { GeoPage } from '@/components/geo/GeoPage'

export const metadata: Metadata = {
  title: 'Software Development Thailand | Upstack Studio',
  description:
    "Thailand's growing enterprises deserve software built for how they actually operate. Operations digitalisation, AI integration, and custom platform development.",
  alternates: { canonical: '/thailand' },
  openGraph: {
    title: 'Software Development Thailand | Upstack Studio',
    description:
      "Software development for Thailand's growing enterprises. Digitalise operations, integrate AI, build custom platforms — delivered by a senior ASEAN engineering team.",
    url: '/thailand',
    siteName: 'Upstack Studio',
    locale: 'en_TH',
    type: 'website',
  },
}

export default function ThailandPage() {
  return (
    <GeoPage
      market="international"
      country="Thailand"
      h1="Thailand's growing enterprises deserve software built for how they actually operate."
      keyword="software development Thailand"
      subCopy="Thailand's established companies are at an inflection point: the processes that got them here won't scale to the next level. We help Thai enterprises replace manual operations with systems that work — built by a senior team that understands ASEAN business context, delivered on the LUDA™ Framework."
      clientsHeadline="Built for how ASEAN businesses actually operate."
    />
  )
}
