import type { Metadata } from 'next'
import { GeoPage } from '@/components/geo/GeoPage'

export const metadata: Metadata = {
  title: 'Software Development Philippines | Upstack Studio',
  description:
    'For Philippine enterprises that have outgrown off-the-shelf software. Operations digitalisation, AI integration, and custom platform development for the Philippines.',
  alternates: { canonical: '/philippines' },
  openGraph: {
    title: 'Software Development Philippines | Upstack Studio',
    description:
      'Philippine enterprises building custom software to replace the tools that no longer fit. Senior ASEAN engineering team. Fixed pricing. Full IP ownership.',
    url: '/philippines',
    siteName: 'Upstack Studio',
    locale: 'en_PH',
    type: 'website',
  },
}

export default function PhilippinesPage() {
  return (
    <GeoPage
      market="international"
      country="Philippines"
      h1="For Philippine enterprises that have outgrown off-the-shelf software."
      keyword="software development Philippines"
      subCopy="The Philippines' most ambitious companies are replacing off-the-shelf tools that stopped fitting their workflows years ago. We build the exact system your operations need — custom, owned outright, and delivered by a senior team with a proven track record across ASEAN industries."
      clientsHeadline="When off-the-shelf stops fitting, we build what actually works."
    />
  )
}
