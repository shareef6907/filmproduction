import type { Metadata, Viewport } from 'next'
import './globals.css'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://filmproductionbahrain.com'),
  title: {
    default: 'Film Production Bahrain | Commercial-Grade Video Production',
    template: '%s | Film Production Bahrain'
  },
  description: 'Commercial-grade video production for brands that demand more. Corporate videos, commercials, event coverage, drone videography, wedding films & more. Part of the Cinematic Group. WhatsApp: +973 3900 7750',
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
    'video production company bahrain',
    'commercial production bahrain',
    'corporate video production bahrain',
    'event videography bahrain',
    'wedding videography bahrain',
    'drone videography bahrain',
    'music video production bahrain',
    'real estate video bahrain',
    'restaurant video production bahrain',
    'cinematic group',
    'professional videography bahrain',
    'tv commercial bahrain',
    'brand films bahrain',
  ],
  authors: [{ name: 'Cinematic Group' }],
  creator: 'Cinematic Group',
  publisher: 'Cinematic Group',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://filmproductionbahrain.com',
    siteName: 'Film Production Bahrain',
    title: 'Film Production Bahrain | Commercial-Grade Video Production',
    description: 'Commercial-grade video production for brands that demand more. Corporate videos, commercials, event coverage, drone videography, wedding films & more.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Film Production Bahrain - Cinematic Group',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Film Production Bahrain | Commercial-Grade Video Production',
    description: 'Commercial-grade video production for brands that demand more. Part of the Cinematic Group.',
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

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'VideoProductionCompany'],
  '@id': 'https://filmproductionbahrain.com',
  name: 'Film Production Bahrain',
  alternateName: 'Cinematic Group - Film Production',
  url: 'https://filmproductionbahrain.com',
  logo: 'https://filmproductionbahrain.com/logo-white.png',
  image: 'https://filmproductionbahrain.com/og-image.jpg',
  description: 'Commercial-grade video production for brands that demand more. Corporate videos, commercials, event coverage, drone videography, wedding films & more.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BH',
    addressLocality: 'Manama',
    addressRegion: 'Capital Governorate',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.2235,
    longitude: 50.5876,
  },
  telephone: '+973-3900-7750',
  email: 'hello@filmproductionbahrain.com',
  priceRange: 'BD 300 - BD 10000+',
  openingHours: 'Mo-Sa 09:00-18:00',
  sameAs: [
    'https://www.instagram.com/hdvideos',
    'https://cinematicwebworks.com',
    'https://bahrainnights.com',
  ],
  areaServed: [
    { '@type': 'Country', name: 'Bahrain' },
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Qatar' },
    { '@type': 'Country', name: 'Kuwait' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '75',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Video Production Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Video Production' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Production' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Event Videography' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drone Videography' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Music Video Production' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Real Estate Video Tours' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Restaurant Video Production' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding Videography' } },
    ],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cinematic Group',
  url: 'https://filmproductionbahrain.com',
  logo: 'https://filmproductionbahrain.com/logo-white.png',
  sameAs: [
    'https://cinematicwebworks.com',
    'https://bahrainnights.com',
    'https://www.instagram.com/hdvideos',
  ],
  member: [
    { '@type': 'Organization', name: 'Cinematic Web Works', url: 'https://cinematicwebworks.com' },
    { '@type': 'Organization', name: 'Bahrain Nights', url: 'https://bahrainnights.com' },
  ],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        <div className="film-grain" aria-hidden="true" />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
