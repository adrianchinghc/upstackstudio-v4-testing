import type { Metadata } from 'next'
import { GeoPage } from '@/components/geo/GeoPage'

export const metadata: Metadata = {
  title: 'Software Development Agency Singapore | Upstack Studio',
  description:
    'For Singapore companies that need enterprise-grade software — without enterprise prices. Operations digitalisation, AI integration, and custom platform development.',
  alternates: { canonical: 'https://upstackstudio.com/singapore' },
  openGraph: {
    title: 'Software Development Agency Singapore | Upstack Studio',
    description: 'Singapore companies building enterprise-grade software at a price that makes sense. Based in Malaysia, delivering to Singapore and beyond.',
    url: 'https://upstackstudio.com/singapore',
    siteName: 'Upstack Studio',
    locale: 'en_SG',
    type: 'website',
  },
}

export default function SingaporePage() {
  return (
    <GeoPage
      market="international"
      country="Singapore"
      h1="For Singapore companies that need enterprise-grade software — without enterprise prices."
      keyword="software development agency Singapore"
      subCopy="Singapore companies pay Singapore prices for local agencies. We deliver the same enterprise-grade engineering — with a senior Malaysian team, at a cost structure that lets you invest more in what you're building. Delivered across ASEAN and beyond."
      clientsHeadline="Trusted by companies across Southeast Asia and beyond."
    />
  )
}
