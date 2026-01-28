import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://filmproductionbahrain.com'),
  title: {
    default: 'Film Production Bahrain | Bahrain Nights - Premium Video Production',
    template: '%s | Film Production Bahrain'
  },
  description: 'Bahrain\'s leading film production agency. Premium brand films, commercials, corporate videos, documentaries, and event coverage. 10+ years of cinematic excellence.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/apple-touch-icon.png',
  },
  keywords: [
    'film production bahrain',
    'video production bahrain',
    'commercial filming bahrain',
    'corporate video bahrain',
    'brand films bahrain',
    'documentary production bahrain',
    'event videography bahrain',
    'bahrain nights production',
    'cinema production middle east',
    'professional videography bahrain'
  ],
  authors: [{ name: 'Bahrain Nights' }],
  creator: 'Bahrain Nights',
  publisher: 'Bahrain Nights',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://filmproductionbahrain.com',
    siteName: 'Film Production Bahrain',
    title: 'Film Production Bahrain | Bahrain Nights',
    description: 'Bahrain\'s leading film production agency. Premium brand films, commercials, corporate videos, and documentaries.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Film Production Bahrain - Bahrain Nights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Film Production Bahrain | Bahrain Nights',
    description: 'Bahrain\'s leading film production agency. Premium brand films, commercials, corporate videos, and documentaries.',
    images: ['/og-image.jpg'],
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
  alternates: {
    canonical: 'https://filmproductionbahrain.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Bahrain Nights - Film Production',
              url: 'https://filmproductionbahrain.com',
              logo: 'https://filmproductionbahrain.com/logo-white.png',
              description: "Bahrain's leading film production agency. Premium brand films, commercials, corporate videos, and documentaries.",
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'Bahrain',
                addressLocality: 'Manama',
              },
              sameAs: [
                'https://www.instagram.com/hdvideos',
              ],
              telephone: '+973-3900-7750',
              areaServed: 'Bahrain',
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
