import type { Metadata } from 'next'
import { GeoPage } from '@/components/geo/GeoPage'

export const metadata: Metadata = {
  title: 'Software Development USA | Upstack Studio',
  description:
    'US companies that need APAC-ready software built to the same standard they expect at home. Senior engineering team, transparent process, fixed pricing. Operations digitalisation, AI integration, custom platforms.',
  alternates: { canonical: 'https://upstackstudio.com/united-states' },
  openGraph: {
    title: 'Software Development USA | Upstack Studio',
    description:
      'US companies that need APAC-ready software at a fraction of US agency prices. Senior engineers, clean codebase, no juniors, no handoffs.',
    url: 'https://upstackstudio.com/united-states',
    siteName: 'Upstack Studio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function UnitedStatesPage() {
  return (
    <GeoPage
      market="international"
      country="United States"
      h1="US companies that need APAC-ready software built to the same standard they expect at home."
      keyword="software development USA"
      subCopy="Justin Ruffier in San Diego looked at local US agencies, considered assembling a freelancer team, and chose us. He said: 'I had another developer look at what you guys produced and said, You have a very clean code base.' We've built for US clients in consumer tech, mental health, and enterprise software."
      callout="One of our clients spent USD 500,000 with a US agency and got nothing usable. They came to us. We rebuilt it in 16 weeks. It now supports 10 languages and is preparing for public release."
      clientsHeadline="US clients trust us for the same reason local ones do: results."
    />
  )
}
