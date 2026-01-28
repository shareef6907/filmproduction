import type { Metadata } from 'next'
import VideoProductionContent from './content'

export const metadata: Metadata = {
  title: 'Video Production Bahrain | Professional Videography Services',
  description: 'Leading video production company in Bahrain. From concept to final cut, we deliver cinematic-quality videos for brands, events, and businesses. 4K production, professional crew.',
  keywords: ['video production Bahrain', 'videography Bahrain', 'video production company Bahrain', 'professional video Bahrain', 'video filming Bahrain'],
  openGraph: {
    title: 'Video Production Bahrain | Bahrain Nights',
    description: 'Leading video production company in Bahrain. Cinematic-quality videos for brands, events, and businesses.',
    url: 'https://filmproductionbahrain.com/services/video-production-bahrain',
    siteName: 'Film Production Bahrain',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video Production Bahrain | Bahrain Nights',
    description: 'Leading video production company in Bahrain. Cinematic-quality videos for brands, events, and businesses.',
  },
  alternates: {
    canonical: 'https://filmproductionbahrain.com/services/video-production-bahrain',
  },
}

export default function VideoProductionPage() {
  return <VideoProductionContent />
}
