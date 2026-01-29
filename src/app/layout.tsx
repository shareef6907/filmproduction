import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://filmproductionbahrain.com'),
  title: {
    default: 'Film Production Bahrain | Award-Winning Video Production Company | Bahrain Nights',
    template: '%s | Film Production Bahrain'
  },
  description: 'Bahrain\'s leading award-winning film production company. Premium brand films, commercials, corporate videos, documentaries, wedding videography & event coverage. 10+ years experience, 900+ projects delivered. Get a free quote today.',
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
    'commercial filming bahrain',
    'corporate video bahrain',
    'corporate video production bahrain',
    'brand films bahrain',
    'documentary production bahrain',
    'event videography bahrain',
    'wedding videographer bahrain',
    'wedding videography bahrain',
    'cinematic video bahrain',
    'gimbal footage bahrain',
    'tvc production bahrain',
    'tv commercial bahrain',
    'animation bahrain',
    'motion graphics bahrain',
    'podcast filming bahrain',
    'live streaming bahrain',
    'bahrain nights production',
    'cinema production middle east',
    'professional videography bahrain',
    'best video production bahrain',
    'cheap video production bahrain',
    'video editing bahrain',
    'color grading bahrain',
  ],
  authors: [{ name: 'Bahrain Nights' }],
  creator: 'Bahrain Nights',
  publisher: 'Bahrain Nights',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://filmproductionbahrain.com',
    siteName: 'Film Production Bahrain',
    title: 'Film Production Bahrain | Award-Winning Video Production | Bahrain Nights',
    description: 'Bahrain\'s leading award-winning film production company. Premium brand films, commercials, corporate videos, documentaries & wedding videography. 10+ years experience.',
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
    title: 'Film Production Bahrain | Award-Winning Video Production',
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
  verification: {
    google: 'verification_token',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does a typical video production project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Project timelines vary based on complexity. A simple corporate video might take 2-3 weeks from concept to delivery, while a commercial or documentary can take 4-8 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in your video production services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our full-service packages include pre-production (concept development, scripting, storyboarding), production (filming with professional crew and equipment), and post-production (editing, color grading, sound design, and final delivery).',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide color grading services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We offer professional color grading with Hollywood-grade tools. Our colorists use DaVinci Resolve to create cinematic looks that elevate your footage to broadcast and cinema quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does video production cost in Bahrain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Costs depend on project scope, duration, and complexity. Our packages start from BD 500 for simple projects and scale up for larger productions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What video formats do you deliver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We deliver in all standard formats including 4K, HD, and social media-optimized versions for YouTube, Instagram, LinkedIn, and TikTok.',
      },
    },
  ],
}

// Local Business Schema
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://filmproductionbahrain.com',
  name: 'Bahrain Nights - Film Production',
  alternateName: 'Film Production Bahrain',
  url: 'https://filmproductionbahrain.com',
  logo: 'https://filmproductionbahrain.com/logo-white.png',
  image: 'https://filmproductionbahrain.com/og-image.jpg',
  description: "Bahrain's leading award-winning film production company. Premium brand films, commercials, corporate videos, documentaries, and event coverage. 10+ years of cinematic excellence.",
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
  email: 'ceo@bahrainnights.com',
  priceRange: 'BD 500 - BD 5000+',
  openingHours: 'Mo-Sa 09:00-18:00',
  sameAs: [
    'https://www.instagram.com/hdvideos',
  ],
  areaServed: [
    {
      '@type': 'Country',
      name: 'Bahrain',
    },
    {
      '@type': 'Country',
      name: 'Saudi Arabia',
    },
    {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
    {
      '@type': 'Country',
      name: 'Qatar',
    },
    {
      '@type': 'Country',
      name: 'Kuwait',
    },
    {
      '@type': 'Country',
      name: 'Oman',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Video Production Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Corporate Video Production',
          description: 'Professional corporate videos for businesses in Bahrain',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial & TVC Production',
          description: 'TV commercials and advertising videos',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Wedding Videography',
          description: 'Cinematic wedding films in Bahrain',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Documentary Production',
          description: 'Documentary filmmaking services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Color Grading & Post-Production',
          description: 'Professional color grading and editing services',
        },
      },
    ],
  },
}

// Video Production Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Video Production',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Bahrain Nights',
    url: 'https://filmproductionbahrain.com',
  },
  areaServed: 'Bahrain',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Video Production Packages',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Essential Package',
        itemListElement: [
          {
            '@type': 'Offer',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '500',
              priceCurrency: 'BHD',
              minPrice: '500',
            },
          },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Professional Package',
        itemListElement: [
          {
            '@type': 'Offer',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '1500',
              priceCurrency: 'BHD',
              minPrice: '1500',
            },
          },
        ],
      },
    ],
  },
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
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
