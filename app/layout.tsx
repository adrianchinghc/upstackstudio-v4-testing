import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CookieConsent } from '@/components/layout/CookieConsent'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Upstack Studio | AI-Enabled Software Engineering',
    template: '%s | Upstack Studio',
  },
  description:
    'AI-enabled software engineering for established, growing companies. We digitalize operations, integrate AI, and build custom platforms — delivered on the LUDA™ Framework.',
  metadataBase: new URL('https://upstackstudio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Upstack Studio | AI-Enabled Software Engineering',
    description:
      'AI-enabled software engineering for established, growing companies. We digitalize operations, integrate AI, and build custom platforms.',
    url: 'https://upstackstudio.com',
    siteName: 'Upstack Studio',
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upstack Studio | AI-Enabled Software Engineering',
    description:
      'AI-enabled software engineering for established, growing companies.',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
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
