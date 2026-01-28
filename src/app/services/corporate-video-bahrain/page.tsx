import type { Metadata } from 'next'
import CorporateVideoContent from './content'

export const metadata: Metadata = {
  title: 'Corporate Video Production Bahrain | Professional Business Videos',
  description: 'Professional corporate video production in Bahrain. Company profiles, training videos, investor presentations, internal communications, and executive interviews filmed in 4K.',
  keywords: ['corporate video Bahrain', 'corporate video production Bahrain', 'business video Bahrain', 'company profile video Bahrain', 'corporate filming Bahrain'],
  openGraph: {
    title: 'Corporate Video Production Bahrain | Bahrain Nights',
    description: 'Professional corporate video production in Bahrain. Company profiles, training videos, and executive interviews.',
    url: 'https://filmproductionbahrain.com/services/corporate-video-bahrain',
    siteName: 'Film Production Bahrain',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Video Production Bahrain | Bahrain Nights',
    description: 'Professional corporate video production in Bahrain. Company profiles, training videos, and executive interviews.',
  },
  alternates: {
    canonical: 'https://filmproductionbahrain.com/services/corporate-video-bahrain',
  },
}

export default function CorporateVideoPage() {
  return <CorporateVideoContent />
}
