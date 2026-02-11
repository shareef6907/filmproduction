import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Brand Film Production Bahrain | Cinematic Brand Videos',
  description: 'Cinematic brand film production in Bahrain. Premium brand videos, brand stories, company vision films, and emotive brand content that defines your identity and connects with audiences.',
  keywords: ['brand film bahrain', 'brand video production bahrain', 'brand story video bahrain', 'company brand film bahrain', 'cinematic brand video bahrain'],
  openGraph: {
    title: 'Brand Film Production Bahrain | Film Production Bahrain',
    description: 'Cinematic brand film production in Bahrain. Premium brand videos and story films.',
    url: 'https://filmproductionbahrain.com/brand-film-production',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://filmproductionbahrain.com/brand-film-production',
  },
}

const faqs = [
  {
    question: 'What is a brand film?',
    answer: 'A brand film is a cinematic video that tells your brand\'s story, communicates your values, and creates an emotional connection with your audience. Unlike promotional videos, brand films focus on storytelling and feeling rather than direct selling.',
  },
  {
    question: 'How long should a brand film be?',
    answer: 'Most effective brand films are 1-3 minutes. This length allows for meaningful storytelling while maintaining viewer attention. For special purposes like website headers, we also create shorter 30-60 second versions.',
  },
  {
    question: 'How much does brand film production cost?',
    answer: 'Brand films range from BD 2,000 for simpler productions to BD 10,000+ for cinematic productions with multiple locations, talent, and complex post-production. We discuss your vision and provide detailed quotes based on scope.',
  },
  {
    question: 'Do brand films work for B2B companies?',
    answer: 'Absolutely. B2B companies often benefit most from brand films because business decisions are ultimately made by people who respond to emotional storytelling. A compelling brand film differentiates you from competitors.',
  },
  {
    question: 'What\'s included in brand film production?',
    answer: 'Our brand film service includes creative concept development, scriptwriting, location scouting, filming with cinema cameras, professional audio, post-production editing, color grading, music licensing, and multiple format deliveries.',
  },
]

const crossLinks = [
  {
    text: 'Need a cinematic website for your brand?',
    url: 'https://cinematicwebworks.com/cinematic-websites',
    label: 'Cinematic Websites',
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
  name: 'Brand Film Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Cinematic brand film production services in Bahrain creating emotive brand stories and premium video content.',
}

export default function BrandFilmProduction() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageLayout
        title="Brand Film Production Bahrain"
        subtitle="Stories That Define You"
        heroDescription="Cinematic brand films that capture the essence of who you are, why you exist, and why people should care—told through powerful visual storytelling."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Beyond Marketing: Brand Storytelling</h2>
        <p>
          A brand film isn't just another marketing video. It's a cinematic statement that defines who 
          you are as a company. At Film Production Bahrain, we create brand films that go beyond features 
          and benefits to connect with audiences on an emotional level—the level where real brand loyalty 
          is built.
        </p>
        <p>
          We approach every brand film as filmmakers first, marketers second. The result is content that 
          feels more like a short film than an advertisement—something people actually want to watch and 
          share. When your brand film moves people, it moves your business forward.
        </p>

        <h2>What Makes a Great Brand Film</h2>
        
        <h3>Authentic Story</h3>
        <p>
          The best brand films tell true stories. Whether it's your founder's journey, your team's 
          passion, or your customers' experiences, authenticity resonates. We help you find and tell 
          the stories that make your brand unique.
        </p>

        <h3>Emotional Connection</h3>
        <p>
          People remember how you made them feel, not what you said. Great brand films evoke emotion—
          inspiration, aspiration, belonging, or purpose. We craft narratives designed to create 
          meaningful emotional responses.
        </p>

        <h3>Cinematic Quality</h3>
        <p>
          Production quality signals brand quality. We shoot with cinema cameras, use professional 
          lighting, and employ the same techniques used in feature films. The result is content that 
          feels premium and positions your brand accordingly.
        </p>

        <h3>Clear Identity</h3>
        <p>
          Your brand film should make it clear what you stand for. Values, mission, and personality 
          should come through clearly. When viewers finish watching, they should understand not just 
          what you do, but who you are.
        </p>

        <h2>Types of Brand Films</h2>
        
        <h3>Origin Stories</h3>
        <p>
          Tell the story of how your company came to be. Origin stories humanize your brand and help 
          customers connect with the passion and purpose behind what you do.
        </p>

        <h3>Vision Films</h3>
        <p>
          Communicate where you're going and why it matters. Vision films inspire employees, investors, 
          and customers to believe in your mission and join you on the journey.
        </p>

        <h3>Culture Films</h3>
        <p>
          Showcase the people and values that define your organization. Culture films are powerful for 
          employer branding, talent recruitment, and demonstrating what makes your company special.
        </p>

        <h3>Impact Films</h3>
        <p>
          Demonstrate the difference you make in the world. Impact films are particularly powerful for 
          purpose-driven brands, social enterprises, and companies with strong CSR initiatives.
        </p>

        <h2>Our Brand Film Process</h2>
        
        <h3>Discovery</h3>
        <p>
          We immerse ourselves in your brand: history, values, voice, and vision. We interview 
          stakeholders, review materials, and develop a deep understanding of what makes you unique.
        </p>

        <h3>Concept Development</h3>
        <p>
          We develop creative concepts that translate your brand essence into visual storytelling. 
          You'll see treatment documents that outline the story, style, and emotional journey we 
          plan to create.
        </p>

        <h3>Pre-Production</h3>
        <p>
          Detailed planning ensures smooth production: scriptwriting, storyboarding, location scouting, 
          talent casting, and scheduling. We handle all logistics so you can focus on your business.
        </p>

        <h3>Production</h3>
        <p>
          Our crew captures stunning footage using cinema cameras, professional lighting, and cinematic 
          techniques. We direct interviews, capture b-roll, and ensure every shot serves the story.
        </p>

        <h3>Post-Production</h3>
        <p>
          Expert editing transforms footage into story. We add music, color grade for cinematic look, 
          and polish every detail. You receive multiple versions optimized for different platforms.
        </p>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          We're filmmakers who understand branding. Our team brings the creative vision and technical 
          skill to create brand films that stand out. As part of the Cinematic Group, we can also build 
          the cinematic websites where your brand film will live—creating a cohesive brand experience 
          from video to web.
        </p>
      </ServicePageLayout>
    </>
  )
}
