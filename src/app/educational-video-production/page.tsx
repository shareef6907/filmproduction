import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Educational Video Production Bahrain | E-Learning & Training Videos',
  description: 'Professional educational video production in Bahrain. E-learning videos, online course content, training videos, school videos, and educational content for institutions and businesses.',
  keywords: ['educational video production bahrain', 'e-learning video bahrain', 'training video bahrain', 'school video production bahrain', 'online course video bahrain'],
  openGraph: {
    title: 'Educational Video Production Bahrain | Film Production Bahrain',
    description: 'Professional educational video production in Bahrain. E-learning and training content.',
    url: 'https://filmproductionbahrain.com/educational-video-production',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://filmproductionbahrain.com/educational-video-production',
  },
}

const faqs = [
  {
    question: 'What types of educational videos do you produce?',
    answer: 'We produce e-learning courses, corporate training videos, how-to tutorials, school promotional videos, explainer videos for education, online course content, safety training, compliance training, and educational documentaries.',
  },
  {
    question: 'Can you integrate with LMS platforms?',
    answer: 'Yes, we deliver video content formatted for all major Learning Management Systems including Moodle, Canvas, Blackboard, and custom LMS platforms. We can include chapter markers, quizzes, and interactive elements as needed.',
  },
  {
    question: 'How much does educational video production cost?',
    answer: 'Simple tutorial videos start at BD 200-400. Comprehensive training modules range from BD 500-1,500 per module. Full e-learning course production with multiple modules costs BD 2,000-10,000 depending on complexity and duration.',
  },
  {
    question: 'Do you provide scriptwriting for educational content?',
    answer: 'Yes, we offer instructional design and scriptwriting services. Our team can work with your subject matter experts to develop clear, engaging scripts that effectively communicate learning objectives.',
  },
  {
    question: 'Can you produce videos in Arabic?',
    answer: 'Yes, we produce educational content in Arabic, English, or both. We provide professional Arabic voiceover, on-screen text, and subtitles. Our bilingual team ensures accurate translation and cultural appropriateness.',
  },
]

const crossLinks = [
  {
    text: 'Need a website for your school or training business?',
    url: 'https://cinematicwebworks.com/school-website-design',
    label: 'School Website Design',
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
  name: 'Educational Video Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional educational video production services in Bahrain for e-learning, training, and educational institutions.',
}

export default function EducationalVideoProduction() {
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
        title="Educational Video Production Bahrain"
        subtitle="Learning Through Video"
        heroDescription="Professional educational videos that engage learners, improve knowledge retention, and deliver effective training for institutions and businesses."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>The Power of Video for Learning</h2>
        <p>
          Video has transformed education and training. Learners retain 95% of information from video 
          compared to 10% from text. At Film Production Bahrain, we create educational video content 
          that engages learners, improves outcomes, and makes training programs more effective.
        </p>
        <p>
          Whether you're a school, university, corporate training department, or online educator, our 
          team produces professional educational videos that communicate complex concepts clearly and 
          keep learners engaged throughout.
        </p>

        <h2>Our Educational Video Services</h2>
        
        <h3>E-Learning Course Production</h3>
        <p>
          Complete video production for online courses. We handle everything from scripting and 
          storyboarding to filming, animation, and final delivery in LMS-compatible formats. Our 
          e-learning videos combine talking-head content, screen recordings, animations, and 
          graphics for effective learning experiences.
        </p>

        <h3>Corporate Training Videos</h3>
        <p>
          Reduce training costs and improve consistency with professional training videos. We produce 
          onboarding content, skills training, compliance training, safety training, and process 
          documentation. Video training scales efficiently and ensures every employee receives the 
          same quality instruction.
        </p>

        <h3>Tutorial and How-To Videos</h3>
        <p>
          Step-by-step instructional videos that teach specific skills or processes. We combine 
          clear narration with visual demonstrations to guide learners through procedures. Perfect 
          for software training, equipment operation, and procedural documentation.
        </p>

        <h3>School and University Videos</h3>
        <p>
          Promotional videos for educational institutions showcasing facilities, programs, and campus 
          life. We also produce supplementary learning content, virtual tours for prospective students, 
          and graduation and event coverage.
        </p>

        <h3>Animated Explainer Videos</h3>
        <p>
          Animation is particularly effective for explaining abstract concepts, scientific processes, 
          and complex systems. We create animated educational content that makes difficult topics 
          accessible and engaging for learners of all levels.
        </p>

        <h3>Instructor-Led Video Content</h3>
        <p>
          Professional filming of instructors and subject matter experts. We set up professional 
          lighting, audio, and camera work in your location or our studio, ensuring your instructors 
          look and sound their best on camera.
        </p>

        <h2>Educational Sectors We Serve</h2>
        <ul>
          <li>Schools (K-12)</li>
          <li>Universities and colleges</li>
          <li>Corporate training departments</li>
          <li>Online course creators</li>
          <li>Government training programs</li>
          <li>Professional certification bodies</li>
          <li>Non-profit organizations</li>
          <li>Healthcare training</li>
          <li>Financial services training</li>
          <li>Technical and vocational training</li>
        </ul>

        <h2>Our Production Approach</h2>
        
        <h3>Instructional Design</h3>
        <p>
          Effective educational video requires more than good production—it requires good pedagogy. 
          We apply instructional design principles to ensure content is structured for learning, 
          with clear objectives, logical sequencing, and appropriate assessments.
        </p>

        <h3>Engagement First</h3>
        <p>
          Boring training videos don't work. We create content that holds attention through varied 
          visuals, clear pacing, and professional presentation. Engaged learners are effective learners.
        </p>

        <h3>Technical Quality</h3>
        <p>
          Professional audio and video quality ensures content is easy to consume. Poor quality 
          distracts from learning. We use professional equipment and techniques to deliver 
          broadcast-quality educational content.
        </p>

        <h3>Accessible Delivery</h3>
        <p>
          We deliver in formats optimized for your distribution method: LMS, YouTube, internal 
          servers, or mobile apps. We can include closed captions, transcripts, and multiple 
          language options for accessibility.
        </p>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          We combine professional video production with understanding of effective learning design. 
          Our educational videos don't just look good—they teach effectively. As part of the Cinematic 
          Group, we can also help with website development for educational institutions and online 
          learning platforms.
        </p>
      </ServicePageLayout>
    </>
  )
}
