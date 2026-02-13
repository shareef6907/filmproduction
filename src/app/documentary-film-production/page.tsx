import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Documentary Film Production Bahrain | Professional Documentary Services',
  description: 'Award-quality documentary film production in Bahrain. Corporate documentaries, brand stories, cultural films, and historical documentaries. Expert storytelling with cinematic quality.',
  keywords: ['documentary production bahrain', 'documentary filmmaking bahrain', 'corporate documentary bahrain', 'brand documentary bahrain', 'documentary filmmaker bahrain'],
  openGraph: {
    title: 'Documentary Film Production Bahrain | Film Production Bahrain',
    description: 'Award-quality documentary film production in Bahrain. Corporate documentaries, brand stories, and cultural films.',
    url: 'https://www.filmproductionbahrain.com/documentary-film-production',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.filmproductionbahrain.com/documentary-film-production',
  },
}

const faqs = [
  {
    question: 'What types of documentaries do you produce?',
    answer: 'We produce corporate documentaries, brand story films, cultural and historical documentaries, social impact films, biographical documentaries, and environmental documentaries. Our team can handle projects ranging from short-form brand films to feature-length documentaries.',
  },
  {
    question: 'How long does documentary production take?',
    answer: 'Documentary production timelines vary significantly based on scope. Short brand documentaries (5-15 minutes) typically take 4-8 weeks. Longer documentary projects may take 3-12 months depending on research, filming locations, and post-production requirements.',
  },
  {
    question: 'How much does documentary production cost in Bahrain?',
    answer: 'Documentary costs range from BD 2,000 for short brand documentaries to BD 20,000+ for comprehensive documentary projects. Factors include duration, shooting days, travel requirements, archival footage licensing, and post-production complexity.',
  },
  {
    question: 'Do you handle research and pre-production?',
    answer: 'Yes, we provide full-service documentary production including research, story development, interview scheduling, location scouting, and detailed pre-production planning. Our team works closely with you to develop a compelling narrative structure.',
  },
  {
    question: 'Can you produce documentaries in Arabic and English?',
    answer: 'Absolutely. Our team is fully bilingual and can produce documentaries in Arabic, English, or both. We also offer subtitling and dubbing services for wider distribution.',
  },
]

const crossLinks = [
  {
    text: 'Need a website to host your documentary?',
    url: 'https://cinematicwebworks.com',
    label: 'CinematicWebWorks.com',
  },
  {
    text: 'Planning a documentary premiere event?',
    url: 'https://eventsbahrain.com',
    label: 'EventsBahrain.com',
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
  name: 'Documentary Film Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://www.filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional documentary film production services in Bahrain including corporate documentaries, brand films, and cultural documentaries.',
}

export default function DocumentaryFilmProduction() {
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
        title="Documentary Film Production Bahrain"
        subtitle="Cinematic Storytelling"
        heroDescription="Powerful documentary filmmaking that captures authentic stories, preserves history, and inspires change through compelling visual narratives."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>The Art of Documentary Filmmaking</h2>
        <p>
          Documentary film is the most powerful medium for telling authentic stories that matter. At Film 
          Production Bahrain, we bring professional documentary filmmaking expertise to capture the stories 
          of organizations, communities, and individuals across the Kingdom and the Gulf region.
        </p>
        <p>
          Whether you're documenting your company's journey, preserving cultural heritage, or creating 
          impact-driven content for social causes, our team combines journalistic integrity with cinematic 
          excellence to produce documentaries that engage, inform, and inspire.
        </p>

        <h2>Our Documentary Services</h2>
        
        <h3>Corporate Documentaries</h3>
        <p>
          Go beyond traditional corporate videos with documentary-style storytelling that showcases your 
          company's culture, values, and impact. Corporate documentaries are powerful tools for employer 
          branding, investor relations, and anniversary celebrations. We capture the real stories of your 
          people and the authentic journey of your organization.
        </p>

        <h3>Brand Story Films</h3>
        <p>
          Modern audiences connect with authentic brand stories rather than traditional advertising. Our 
          brand documentaries reveal the passion, purpose, and people behind your brand. These films create 
          emotional connections with your audience and differentiate you from competitors through genuine 
          storytelling.
        </p>

        <h3>Cultural and Historical Documentaries</h3>
        <p>
          Bahrain has a rich cultural heritage worth preserving on film. We produce documentaries that 
          capture traditional crafts, historical landmarks, cultural events, and the stories of Bahrain's 
          people. These films serve as valuable archives and educational resources for future generations.
        </p>

        <h3>Social Impact Documentaries</h3>
        <p>
          Documentary film has the power to raise awareness and drive change. We partner with NGOs, 
          foundations, and government agencies to create compelling social impact films that highlight 
          important issues and inspire action. From environmental concerns to social initiatives, we 
          tell stories that matter.
        </p>

        <h3>Biographical Documentaries</h3>
        <p>
          Preserve the legacy of remarkable individuals through biographical documentary films. Whether 
          it's a business leader, artist, or community figure, we capture their story with respect and 
          cinematic quality. These films become treasured family heirlooms and historical records.
        </p>

        <h2>Our Documentary Process</h2>
        
        <h3>Research and Development</h3>
        <p>
          Every documentary begins with thorough research. We immerse ourselves in your subject matter, 
          conduct preliminary interviews, review archival materials, and develop a narrative structure 
          that will effectively communicate your story.
        </p>

        <h3>Pre-Production</h3>
        <p>
          We plan every detail: interview subjects, filming locations, shot lists, and production schedules. 
          Our team handles all logistics including permits, equipment, and crew coordination to ensure 
          smooth production.
        </p>

        <h3>Production</h3>
        <p>
          Our experienced documentary crew captures footage using cinema-quality cameras and professional 
          audio equipment. We conduct interviews that draw out authentic, compelling stories and shoot 
          b-roll footage that brings the narrative to life visually.
        </p>

        <h3>Post-Production</h3>
        <p>
          In the edit suite, we craft your documentary with careful attention to pacing, narrative arc, 
          and emotional impact. We add music, graphics, archival footage, and professional color grading 
          to create a polished final product worthy of broadcast or film festival submission.
        </p>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          Our team brings years of experience in documentary filmmaking combined with deep knowledge of 
          Bahrain and the Gulf region. We understand the cultural nuances essential for authentic storytelling 
          in this part of the world. As part of the Cinematic Group, we have access to the resources and 
          expertise needed to deliver professional documentaries that meet international standards.
        </p>
        <p>
          From short brand documentaries to feature-length films, we're committed to telling your story 
          with integrity, creativity, and cinematic excellence. Contact us today to discuss your documentary 
          project.
        </p>
      </ServicePageLayout>
    </>
  )
}
