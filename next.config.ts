import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  async redirects() {
    return [
      // WordPress legacy redirects - trailing slashes
      { source: '/blog/:slug/', destination: '/blog/:slug', permanent: true },
      { source: '/about/', destination: '/about', permanent: true },
      { source: '/work/', destination: '/work', permanent: true },
      { source: '/services/', destination: '/services', permanent: true },
      { source: '/contact/', destination: '/contact', permanent: true },
      { source: '/testimonials/', destination: '/testimonials', permanent: true },
      { source: '/resources/', destination: '/resources', permanent: true },

      // WordPress taxonomy redirects
      { source: '/category/:cat*', destination: '/blog', permanent: true },
      { source: '/author/:author*', destination: '/blog', permanent: true },
      { source: '/tag/:tag*', destination: '/blog', permanent: true },
      { source: '/blog/category/:cat/', destination: '/blog', permanent: true },
      { source: '/blog/category/:cat', destination: '/blog', permanent: true },

      // WordPress legacy page redirects
      { source: '/roadmap/', destination: '/strategy-session', permanent: true },
      { source: '/roadmap', destination: '/strategy-session', permanent: true },
      { source: '/schedule/', destination: '/strategy-session', permanent: true },
      { source: '/schedule', destination: '/strategy-session', permanent: true },
      { source: '/thanks/', destination: '/thank-you', permanent: true },
      { source: '/thanks', destination: '/thank-you', permanent: true },
      { source: '/almost-done/', destination: '/thank-you', permanent: true },
      { source: '/almost-done', destination: '/thank-you', permanent: true },
      { source: '/search/', destination: '/blog', permanent: true },
      { source: '/search', destination: '/blog', permanent: true },

      // Trailing slashes for new pages
      { source: '/faq/', destination: '/faq', permanent: true },
      { source: '/careers/', destination: '/careers', permanent: true },
      { source: '/privacy-policy/', destination: '/privacy-policy', permanent: true },
      { source: '/affiliate-disclaimer/', destination: '/affiliate-disclaimer', permanent: true },
      {
        source: '/clutch-top-rated-app-development-agency/',
        destination: '/clutch-top-rated-app-development-agency',
        permanent: true,
      },
      {
        source: '/app-developer-interview-questions/',
        destination: '/app-developer-interview-questions',
        permanent: true,
      },
      { source: '/app-brief-template/', destination: '/app-brief-template', permanent: true },
      {
        source: '/app-validation-blueprint/',
        destination: '/app-validation-blueprint',
        permanent: true,
      },
      { source: '/zero-to-app-ready/', destination: '/zero-to-app-ready', permanent: true },
      {
        source: '/app-development-mistakes-ebook/',
        destination: '/app-development-mistakes-ebook',
        permanent: true,
      },

      // Legacy landing pages redirect to strategy session
      { source: '/course/', destination: '/strategy-session', permanent: true },
      { source: '/course', destination: '/strategy-session', permanent: true },

      // Wave 3 — /services/development-subscription will be rebuilt as the
      // canonical Dev Subscription page. /services/ai-automation-subscription
      // will be rebuilt or merged at that point.
    ]
  },
}

export default nextConfig
