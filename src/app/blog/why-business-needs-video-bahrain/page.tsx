import type { Metadata } from 'next'
import BusinessVideoContent from './content'

export const metadata: Metadata = {
  title: 'Why Every Business in Bahrain Needs Professional Video Content | Film Production Bahrain',
  description: 'Discover why professional video content is essential for businesses in Bahrain. Learn how video drives engagement, builds trust, improves SEO, and increases conversions.',
  keywords: ['business video Bahrain', 'video marketing Bahrain', 'professional video content Bahrain', 'video production for business Bahrain'],
  alternates: {
    canonical: 'https://filmproductionbahrain.com/blog/why-business-needs-video-bahrain',
  },
  openGraph: {
    title: 'Why Every Business in Bahrain Needs Professional Video Content',
    description: 'Discover why professional video content is essential for businesses in Bahrain.',
    url: 'https://filmproductionbahrain.com/blog/why-business-needs-video-bahrain',
    type: 'article',
  },
}

export default function BusinessVideoPage() {
  return <BusinessVideoContent />
}
