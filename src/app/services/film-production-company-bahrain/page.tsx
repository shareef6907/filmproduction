import type { Metadata } from 'next'
import FilmProductionContent from './content'

export const metadata: Metadata = {
  title: 'Film Production Company Bahrain | Cinematic Storytelling',
  description: 'Bahrain\'s leading film production company. We produce award-quality brand films, documentaries, commercials, and short films with a full in-house crew and 4K cinema equipment.',
  keywords: ['film production company Bahrain', 'film production Bahrain', 'filmmaking Bahrain', 'production house Bahrain', 'Bahrain film company'],
  openGraph: {
    title: 'Film Production Company Bahrain | Bahrain Nights',
    description: 'Bahrain\'s leading film production company. Award-quality brand films, documentaries, and commercials.',
    url: 'https://filmproductionbahrain.com/services/film-production-company-bahrain',
    siteName: 'Film Production Bahrain',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Film Production Company Bahrain | Bahrain Nights',
    description: 'Bahrain\'s leading film production company. Award-quality brand films, documentaries, and commercials.',
  },
  alternates: {
    canonical: 'https://filmproductionbahrain.com/services/film-production-company-bahrain',
  },
}

export default function FilmProductionPage() {
  return <FilmProductionContent />
}
