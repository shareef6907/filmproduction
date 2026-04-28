import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'
import VideoHero from '@/components/VideoHero'

export const metadata: Metadata = {
  title: 'Music Video Production Bahrain | Artists & Bands',
  description: 'Creative music video production in Bahrain. Bring your artistic vision to life with cinematic music videos, performance films, and artist content. Professional production for local and international artists.',
  keywords: ['music video production bahrain', 'music video director bahrain', 'artist video bahrain', 'band video production bahrain', 'mv production bahrain'],
  openGraph: {
    title: 'Music Video Production Bahrain | Film Production Bahrain',
    description: 'Creative music video production in Bahrain. Cinematic music videos and artist content.',
    url: 'https://www.filmproductionbahrain.com/music-video-production',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.filmproductionbahrain.com/music-video-production',
  },
}

const faqs = [
  {
    question: 'How much does a music video cost in Bahrain?',
    answer: 'Music video budgets in Bahrain range from BD 1,000 for simple performance videos to BD 10,000+ for narrative music videos with multiple locations, actors, and elaborate production design. We work with artists at all budget levels.',
  },
  {
    question: 'How long does music video production take?',
    answer: 'Typical music video production takes 2-4 weeks from concept development to final delivery. Pre-production (concept, locations, casting) takes 1-2 weeks, filming 1-2 days, and post-production 1-2 weeks.',
  },
  {
    question: 'Do you develop creative concepts?',
    answer: 'Yes, our creative team develops original concepts and treatments based on your music, artist brand, and vision. We collaborate closely with artists to ensure the video authentically represents their artistic identity.',
  },
  {
    question: 'Can you handle choreography and dancers?',
    answer: 'We work with choreographers and can arrange professional dancers for performance-based music videos. We coordinate all talent, rehearsals, and on-set direction.',
  },
  {
    question: 'What formats do you deliver for streaming platforms?',
    answer: 'We deliver in formats optimized for YouTube, Vevo, Spotify Canvas, Apple Music, and all major streaming platforms. This includes 4K masters and platform-specific aspect ratios.',
  },
]

const crossLinks = [
  {
    text: 'Need a website for your music or band?',
    url: 'https://cinematicwebworks.com',
    label: 'CinematicWebWorks.com',
  },
  {
    text: 'Launching your music at an event?',
    url: 'https://bahrainnights.com',
    label: 'Promote on BahrainNights.com',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Music Video Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://www.filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional music video production services in Bahrain for artists, bands, and musicians.',
}

export default function MusicVideoProduction() {
  return (
    <>
      <VideoHero
        videoId="0o3yqUNUtwU"
        title="Music Video Production"
        subtitle="Artists, bands & music videos"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageLayout
        title="Music Video Production Bahrain"
        subtitle="Artist Content Creation"
        heroDescription="Transform your music into visual art. Our creative team brings your artistic vision to life with cinematic music videos that captivate audiences and elevate your brand."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Your Music Deserves to Be Seen</h2>
        <p>
          A great music video does more than accompany a song—it creates an immersive visual 
          experience that amplifies your music's emotional impact. At Film Production Bahrain, 
          we collaborate with artists to create music videos that are authentic expressions of 
          their artistic identity, designed to captivate audiences and drive streams.
        </p>
        <p>
          Whether you're an emerging artist releasing your first single or an established act 
          looking to push creative boundaries, our team brings the creative vision and technical 
          expertise to make your music video stand out in a crowded digital landscape.
        </p>

        <h2>Our Music Video Services</h2>
        
        <h3>Narrative Music Videos</h3>
        <p>
          Tell a story through your music video with narrative filmmaking techniques. We develop 
          compelling storylines that complement your lyrics and music, casting actors, scouting 
          locations, and directing scenes that draw viewers into the world of your song. Narrative 
          videos create emotional connections that performance-only videos cannot achieve.
        </p>

        <h3>Performance Videos</h3>
        <p>
          Showcase your talent with high-energy performance videos that capture the essence of 
          your live presence. Whether it's a full band performance, solo artist piece, or 
          choreographed routine, we create visually dynamic content that highlights your 
          performance skills and stage presence.
        </p>

        <h3>Concept and Art Films</h3>
        <p>
          Push creative boundaries with abstract, artistic music videos that prioritize visual 
          aesthetics and mood over literal interpretation. These videos work beautifully for 
          electronic, ambient, and experimental music, creating immersive visual experiences 
          that enhance the listening experience.
        </p>

        <h3>Live Session Videos</h3>
        <p>
          Capture intimate acoustic sessions, live studio recordings, or stripped-down 
          performances. These videos connect fans to the raw, authentic side of your music 
          and are perfect for building your YouTube channel and social media presence.
        </p>

        <h3>Lyric Videos</h3>
        <p>
          Create engaging lyric videos with motion graphics, typography, and visual elements 
          that bring your lyrics to life. Lyric videos are cost-effective content pieces that 
          keep fans engaged between major releases.
        </p>

        <h2>The Creative Process</h2>
        
        <h3>Discovery and Concept Development</h3>
        <p>
          Every project begins with understanding you as an artist—your sound, influences, 
          brand identity, and vision for this release. We listen to the track multiple times, 
          discuss your ideas, and develop a treatment that aligns with your artistic direction.
        </p>

        <h3>Pre-Production Planning</h3>
        <p>
          Once the concept is approved, we move into detailed planning: location scouting, 
          casting, wardrobe, props, shot lists, and scheduling. Every detail is considered 
          to ensure the production day runs smoothly and efficiently.
        </p>

        <h3>Production Day</h3>
        <p>
          On set, our experienced crew captures your performance and scenes using professional 
          cinema cameras, lighting, and movement equipment. We create a comfortable, creative 
          environment where artists can deliver their best performances.
        </p>

        <h3>Post-Production Excellence</h3>
        <p>
          In the edit suite, we craft your video with precision—cutting to the beat, building 
          visual rhythm, and adding color grading, visual effects, and finishing touches that 
          elevate the final product. The result is a polished, professional music video ready 
          for release.
        </p>

        <h2>Genres We Work With</h2>
        <p>
          We have experience producing music videos across various genres:
        </p>
        <ul>
          <li>Pop and R&B</li>
          <li>Hip Hop and Rap</li>
          <li>Arabic Music and Khaleeji</li>
          <li>Electronic and Dance</li>
          <li>Rock and Alternative</li>
          <li>Indie and Folk</li>
          <li>Classical and Instrumental</li>
        </ul>

        <h2>Distribution Support</h2>
        <p>
          We deliver your music video in formats optimized for all major platforms:
        </p>
        <ul>
          <li>YouTube (4K and HD versions)</li>
          <li>Vevo (broadcast specifications)</li>
          <li>Spotify Canvas (vertical loop format)</li>
          <li>Apple Music</li>
          <li>Instagram and TikTok (vertical edits)</li>
          <li>Broadcast (if applicable)</li>
        </ul>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          Music videos are where filmmaking meets music—and we love that intersection. Our team 
          brings a genuine passion for visual storytelling and music, combined with the technical 
          skills to execute ambitious creative visions. We treat every project, regardless of 
          budget, with the same creative dedication. Contact us to discuss bringing your next 
          release to life.
        </p>
      </ServicePageLayout>
    </>
  )
}
