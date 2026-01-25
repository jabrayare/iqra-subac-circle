import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { Analytics } from '@/components/analytics/Analytics'

export const metadata: Metadata = {
  title: {
    default: 'Iqra | The Subac Circle - Islamic Prayer & Quran Circle Management',
    template: '%s | Iqra - The Subac Circle'
  },
  description: 'Iqra | The Subac Circle is a mobile app designed for the Somali Muslim community to manage Subac (communal Quran recitation circles), provide accurate prayer times, calculate Qibla direction, and find nearby mosques.',
  keywords: [
    'Islamic app',
    'Prayer times',
    'Qibla compass',
    'Mosque finder',
    'Subac',
    'Quran recitation',
    'Somali Muslim',
    'Islamic community',
    'Prayer reminder',
    'Islamic calendar'
  ],
  authors: [{ name: 'Iqra Development Team' }],
  creator: 'Iqra Development Team',
  publisher: 'Iqra Development Team',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://iqra-subac.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iqra-subac.com',
    siteName: 'Iqra | The Subac Circle',
    title: 'Iqra | The Subac Circle - Islamic Prayer & Quran Circle Management',
    description: 'Join the Somali Muslim community in managing Subac circles, tracking prayer times, and finding mosques with our comprehensive Islamic app.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Iqra | The Subac Circle App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iqra | The Subac Circle - Islamic Prayer & Quran Circle Management',
    description: 'Join the Somali Muslim community in managing Subac circles, tracking prayer times, and finding mosques with our comprehensive Islamic app.',
    images: ['/images/twitter-image.jpg'],
    creator: '@iqrasubac',
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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0d4f4f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Iqra" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
