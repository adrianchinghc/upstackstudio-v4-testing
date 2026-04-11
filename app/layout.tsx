import type { Metadata } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CookieConsent } from '@/components/layout/CookieConsent'
import { SITE_DEFAULT_DESCRIPTION } from '@/lib/constants'
import './globals.css'

// Optimized font loading with next/font — no render blocking
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
  preload: true,
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: 'Upstack Studio | Custom Software for Growing Companies',
    template: '%s | Upstack Studio',
  },
  description: SITE_DEFAULT_DESCRIPTION,
  metadataBase: new URL('https://upstackstudio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Upstack Studio | Custom Software for Growing Companies',
    description: SITE_DEFAULT_DESCRIPTION,
    url: 'https://upstackstudio.com',
    siteName: 'Upstack Studio',
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upstack Studio | Custom Software for Growing Companies',
    description:
      'Custom software for growing companies in Malaysia and SEA. Built with AI, launched in 16 weeks.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${bricolage.variable} ${inter.variable}`}>
      <body className="antialiased font-body">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: 'var(--surface)',
                color: 'var(--text)',
                border: '1px solid var(--border)',
              },
            }}
          />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
