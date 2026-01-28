import type { Metadata } from 'next'
import WeddingVideographyContent from './content'

export const metadata: Metadata = {
  title: 'Wedding Videography Bahrain | Cinematic Wedding Films',
  description: 'Cinematic wedding videography in Bahrain. Capture your special day with stunning 4K wedding films, highlight reels, and same-day edits. Bahrain\'s most trusted wedding videographers.',
  keywords: ['wedding videography Bahrain', 'wedding videographer Bahrain', 'wedding film Bahrain', 'wedding video Bahrain', 'cinematic wedding Bahrain'],
  openGraph: {
    title: 'Wedding Videography Bahrain | Bahrain Nights',
    description: 'Cinematic wedding videography in Bahrain. Capture your special day with stunning 4K wedding films.',
    url: 'https://filmproductionbahrain.com/services/wedding-videography-bahrain',
    siteName: 'Film Production Bahrain',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Videography Bahrain | Bahrain Nights',
    description: 'Cinematic wedding videography in Bahrain. Capture your special day with stunning 4K wedding films.',
  },
  alternates: {
    canonical: 'https://filmproductionbahrain.com/services/wedding-videography-bahrain',
  },
}

export default function WeddingVideographyPage() {
  return <WeddingVideographyContent />
}
