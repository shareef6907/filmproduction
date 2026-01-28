import type { Metadata } from 'next'
import CorporateVideoGuideContent from './content'

export const metadata: Metadata = {
  title: 'Corporate Video Production in Bahrain: What to Expect | Film Production Bahrain',
  description: 'Complete guide to corporate video production in Bahrain. Learn about the process, costs, timelines, and what to expect when hiring a professional video production company.',
  keywords: ['corporate video Bahrain guide', 'corporate video production Bahrain', 'business video Bahrain', 'video production process Bahrain'],
  alternates: {
    canonical: 'https://filmproductionbahrain.com/blog/corporate-video-production-bahrain-guide',
  },
  openGraph: {
    title: 'Corporate Video Production in Bahrain: What to Expect',
    description: 'Complete guide to corporate video production in Bahrain. Process, costs, timelines, and what to expect.',
    url: 'https://filmproductionbahrain.com/blog/corporate-video-production-bahrain-guide',
    type: 'article',
  },
}

export default function CorporateVideoGuidePage() {
  return <CorporateVideoGuideContent />
}
