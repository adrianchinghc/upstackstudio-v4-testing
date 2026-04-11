import { SITE_URL, SITE_NAME, SOCIAL } from '@/lib/constants'

interface OrganizationJsonLdProps {
  className?: string
}

/**
 * Organization structured data for the homepage and about page.
 * Helps search engines understand company information.
 */
export function OrganizationJsonLd({ className }: OrganizationJsonLdProps) {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo-dark.svg`,
    description:
      'Custom software for growing companies in Malaysia and SEA. Built with AI, launched in 16 weeks. Senior-led from Kuala Lumpur.',
    foundingDate: '2017',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kuala Lumpur',
      addressCountry: 'MY',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'hello@upstackstudio.com',
      url: `${SITE_URL}/strategy-session`,
    },
    sameAs: [SOCIAL.companyLinkedin, SOCIAL.companyInstagram, SOCIAL.youtube, SOCIAL.twitter],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '40',
      bestRating: '5',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData),
      }}
      className={className}
    />
  )
}

interface ArticleJsonLdProps {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  slug: string
  image?: string
  className?: string
}

/**
 * Article structured data for blog posts.
 * Helps with rich snippets in search results.
 */
export function ArticleJsonLd({
  title,
  description,
  author,
  datePublished,
  dateModified,
  slug,
  image,
  className,
}: ArticleJsonLdProps) {
  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author,
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo-dark.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${slug}`,
    },
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image.startsWith('http') ? image : `${SITE_URL}${image}`,
      },
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleData),
      }}
      className={className}
    />
  )
}

interface ServiceJsonLdProps {
  name: string
  description: string
  url: string
  className?: string
}

/**
 * Service structured data for service pages.
 * Helps search engines understand what services are offered.
 */
export function ServiceJsonLd({ name, description, url, className }: ServiceJsonLdProps) {
  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: name,
    description: description,
    url: `${SITE_URL}${url}`,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: [
      { '@type': 'Country', name: 'Malaysia' },
      { '@type': 'Country', name: 'Singapore' },
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceData),
      }}
      className={className}
    />
  )
}

interface FAQJsonLdProps {
  questions: Array<{
    question: string
    answer: string
  }>
  className?: string
}

/**
 * FAQ structured data for FAQ sections.
 * Enables FAQ rich snippets in search results.
 */
export function FAQJsonLd({ questions, className }: FAQJsonLdProps) {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqData),
      }}
      className={className}
    />
  )
}

interface BreadcrumbJsonLdProps {
  items: Array<{
    name: string
    url: string
  }>
  className?: string
}

/**
 * Breadcrumb structured data for navigation hierarchy.
 * Shows breadcrumb trails in search results.
 */
export function BreadcrumbJsonLd({ items, className }: BreadcrumbJsonLdProps) {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbData),
      }}
      className={className}
    />
  )
}

interface LocalBusinessJsonLdProps {
  className?: string
}

/**
 * Local Business structured data for geo pages.
 * Helps with local search visibility.
 */
export function LocalBusinessJsonLd({ className }: LocalBusinessJsonLdProps) {
  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    description:
      'Custom software agency for growing companies in Malaysia and SEA. Built with AI-enabled engineering, launched in 16 weeks.',
    url: SITE_URL,
    telephone: '+60-3-7960-5766',
    email: 'hello@upstackstudio.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kuala Lumpur',
      addressLocality: 'Kuala Lumpur',
      addressRegion: 'Wilayah Persekutuan',
      postalCode: '50450',
      addressCountry: 'MY',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 3.139,
      longitude: 101.6869,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '40',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessData),
      }}
      className={className}
    />
  )
}

interface WebSiteJsonLdProps {
  className?: string
}

/**
 * Website structured data for site-wide search features.
 */
export function WebSiteJsonLd({ className }: WebSiteJsonLdProps) {
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Custom software for growing companies in Malaysia and SEA. Built with AI, launched in 16 weeks.',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteData),
      }}
      className={className}
    />
  )
}
