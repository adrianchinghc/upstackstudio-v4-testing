import type { Metadata } from 'next'
import { GeoPage } from '@/components/geo/GeoPage'

export const metadata: Metadata = {
  title: 'Software Development Indonesia | Upstack Studio',
  description:
    'For Indonesian enterprises ready to move beyond manual operations. Operations digitalisation, AI integration, and custom platform development for Indonesia\'s growing companies.',
  alternates: { canonical: 'https://upstackstudio.com/indonesia' },
  openGraph: {
    title: 'Software Development Indonesia | Upstack Studio',
    description: 'For Indonesian enterprises ready to digitalise operations and build the infrastructure to compete. Senior Malaysian engineering team. Fixed pricing.',
    url: 'https://upstackstudio.com/indonesia',
    siteName: 'Upstack Studio',
    locale: 'en_ID',
    type: 'website',
  },
}

export default function IndonesiaPage() {
  return (
    <GeoPage
      market="international"
      country="Indonesia"
      h1="For Indonesian enterprises ready to move beyond manual operations."
      keyword="software development Indonesia"
      subCopy="Indonesia's fastest-growing companies are investing in digital infrastructure to outpace competitors still running on spreadsheets and WhatsApp chains. We help established Indonesian companies digitalise operations, integrate AI, and build the platforms they need to scale — delivered by a senior team with a track record across ASEAN."
      clientsHeadline="ASEAN delivery. Enterprise standards."
    />
  )
}
