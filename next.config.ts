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
      // WordPress legacy redirects
      { source: '/blog/:slug/', destination: '/blog/:slug', permanent: true },
      { source: '/category/:cat*', destination: '/blog', permanent: true },
      { source: '/author/:author*', destination: '/blog', permanent: true },
      { source: '/tag/:tag*', destination: '/blog', permanent: true },
    ]
  },
}

export default nextConfig
