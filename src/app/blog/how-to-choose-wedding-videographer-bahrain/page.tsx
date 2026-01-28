import type { Metadata } from 'next'
import WeddingVideographerContent from './content'

export const metadata: Metadata = {
  title: 'How to Choose a Wedding Videographer in Bahrain | Film Production Bahrain',
  description: 'Complete guide to choosing the perfect wedding videographer in Bahrain. What to look for, questions to ask, pricing, and tips for stunning wedding videos.',
  keywords: ['wedding videographer Bahrain', 'wedding video Bahrain', 'Bahrain wedding filmmaker', 'wedding videography cost Bahrain'],
  alternates: {
    canonical: 'https://filmproductionbahrain.com/blog/how-to-choose-wedding-videographer-bahrain',
  },
  openGraph: {
    title: 'How to Choose a Wedding Videographer in Bahrain',
    description: 'Complete guide to choosing the perfect wedding videographer in Bahrain.',
    url: 'https://filmproductionbahrain.com/blog/how-to-choose-wedding-videographer-bahrain',
    type: 'article',
  },
}

export default function WeddingVideographerPage() {
  return <WeddingVideographerContent />
}
