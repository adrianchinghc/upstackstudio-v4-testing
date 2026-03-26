import type { Metadata } from 'next'
import { GeoPage } from '@/components/geo/GeoPage'

export const metadata: Metadata = {
  title: 'Software Development Company Malaysia | Upstack Studio',
  description:
    'Malaysia\'s growing companies trust Upstack Studio for operations digitalisation, AI integration, and custom platform development. Petaling Jaya, Selangor. Built on the LUDA™ Framework.',
  alternates: { canonical: 'https://upstackstudio.com/malaysia' },
  openGraph: {
    title: 'Software Development Company Malaysia | Upstack Studio',
    description: 'Operations digitalisation, AI integration, and custom platform development for established Malaysian companies. Built on the LUDA™ Framework.',
    url: 'https://upstackstudio.com/malaysia',
    siteName: 'Upstack Studio',
    locale: 'en_MY',
    type: 'website',
  },
}

export default function MalaysiaPage() {
  return (
    <GeoPage
      market="malaysia"
      country="Malaysia"
      h1="Malaysia's growing companies trust Upstack Studio to build what their operations need."
      keyword="software development company Malaysia"
      subCopy="From Daikin to Magnum 4D to BookXcess — we've helped some of Malaysia's most recognised companies replace manual processes, integrate AI, and build the infrastructure they need to compete. Based in Petaling Jaya. Delivering across Malaysia and beyond."
      clientsHeadline="Trusted by some of Malaysia's most recognised companies."
    />
  )
}
