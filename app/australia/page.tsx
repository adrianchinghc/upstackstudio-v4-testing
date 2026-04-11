import type { Metadata } from 'next'
import { GeoPage } from '@/components/geo/GeoPage'

export const metadata: Metadata = {
  title: 'Software Development Australia | Upstack Studio',
  description:
    'Australian companies building digital infrastructure across Asia-Pacific. Operations digitalisation, AI integration, and custom platform development — delivered by a senior Malaysian team.',
  alternates: { canonical: '/australia' },
  openGraph: {
    title: 'Software Development Australia | Upstack Studio',
    description:
      'Australian companies building digital infrastructure for APAC expansion. Senior engineering team, transparent process, fixed pricing.',
    url: '/australia',
    siteName: 'Upstack Studio',
    locale: 'en_AU',
    type: 'website',
  },
}

export default function AustraliaPage() {
  return (
    <GeoPage
      market="international"
      country="Australia"
      h1="Australian companies building digital infrastructure across Asia-Pacific."
      keyword="software development Australia"
      subCopy="We've worked with clients in Australia who needed a team that understood both the technical requirements and the APAC context. Senior engineers, a transparent process, and a fixed price — delivered to Australian standards, at a cost that makes the investment worthwhile."
      clientsHeadline="Delivering for international companies since 2017."
    />
  )
}
