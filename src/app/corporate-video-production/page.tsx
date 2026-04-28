import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'
import VideoHero from '@/components/VideoHero'

export const metadata: Metadata = {
  title: 'Corporate Video Production Bahrain | Company Profiles & Training Videos',
  description: 'Professional corporate video production in Bahrain. Company profiles, training videos, internal communications, CEO interviews, and corporate event coverage. Get a free quote today.',
  keywords: ['corporate video production bahrain', 'company profile video bahrain', 'training video production bahrain', 'corporate video company bahrain', 'business video production bahrain'],
  openGraph: {
    title: 'Corporate Video Production Bahrain | Film Production Bahrain',
    description: 'Professional corporate video production in Bahrain. Company profiles, training videos, and internal communications.',
    url: 'https://www.filmproductionbahrain.com/corporate-video-production',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.filmproductionbahrain.com/corporate-video-production',
  },
}

const faqs = [
  {
    question: 'How long does a corporate video production take?',
    answer: 'Typical corporate video projects take 2-4 weeks from concept to delivery. This includes pre-production planning, filming (usually 1-2 days), and post-production. Rush projects can be completed faster with proper scheduling.',
  },
  {
    question: 'What types of corporate videos do you produce?',
    answer: 'We produce company profiles, training videos, internal communications, CEO and executive interviews, annual reports, product demonstrations, testimonials, and corporate event coverage.',
  },
  {
    question: 'How much does corporate video production cost in Bahrain?',
    answer: 'Corporate video production costs range from BD 500 for simple projects to BD 5,000+ for comprehensive multi-day productions. We provide custom quotes based on your specific requirements, duration, and complexity.',
  },
  {
    question: 'Do you provide scriptwriting services?',
    answer: 'Yes, we offer full pre-production services including scriptwriting, storyboarding, and creative direction. Our team works closely with you to craft messaging that aligns with your brand and objectives.',
  },
  {
    question: 'Can you film at our office location?',
    answer: 'Absolutely. We bring all necessary equipment to your location in Bahrain. Our team handles lighting, sound, and set design to ensure professional results in any environment.',
  },
]

const crossLinks = [
  {
    text: 'Need a website to showcase your company video?',
    url: 'https://cinematicwebworks.com',
    label: 'CinematicWebWorks.com',
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
  name: 'Corporate Video Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://www.filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional corporate video production services in Bahrain including company profiles, training videos, and internal communications.',
}

export default function CorporateVideoProduction() {
  return (
    <>
      <VideoHero
        videoId="F2Mw7tngDXY"
        title="Corporate Video Production"
        subtitle="Professional business videos for Bahrain companies"
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
        title="Corporate Video Production Bahrain"
        subtitle="Professional Business Videos"
        heroDescription="Elevate your brand with professional corporate videos that communicate your message, engage stakeholders, and drive business results."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Why Your Business Needs Corporate Video</h2>
        <p>
          In today's digital-first business environment, corporate video has become an essential tool for 
          communicating with clients, employees, and stakeholders. At Film Production Bahrain, we specialize 
          in creating compelling corporate videos that tell your brand's story, showcase your expertise, and 
          build trust with your audience.
        </p>
        <p>
          Whether you're a multinational corporation headquartered in Bahrain or a growing local business, 
          our team brings the same level of professionalism and creativity to every project. We understand 
          that corporate video is not just about looking good—it's about achieving your business objectives 
          and delivering measurable results.
        </p>

        <h2>Our Corporate Video Services</h2>
        
        <h3>Company Profile Videos</h3>
        <p>
          Your company profile video is often the first impression potential clients, partners, and employees 
          have of your business. We create polished, engaging profile videos that capture your company's 
          culture, values, and unique value proposition. From interviewing key executives to showcasing your 
          facilities and operations, we tell your story in a way that resonates with your target audience.
        </p>

        <h3>Training and Educational Videos</h3>
        <p>
          Effective training is crucial for employee development and operational consistency. Our training 
          video production services help you create engaging educational content that improves knowledge 
          retention and reduces training costs. We can produce everything from safety training modules to 
          complex technical procedures, ensuring your team has the resources they need to succeed.
        </p>

        <h3>Internal Communications</h3>
        <p>
          Keep your employees informed and engaged with professional internal communications videos. 
          Whether it's CEO announcements, company updates, or cultural initiatives, video is the most 
          effective way to connect with your workforce. We help you create content that builds company 
          culture and keeps everyone aligned with your organizational goals.
        </p>

        <h3>Executive and CEO Interviews</h3>
        <p>
          Put a face to your leadership with professionally produced executive interview videos. Our team 
          creates comfortable, controlled environments where executives can share their vision, discuss 
          strategy, and connect with stakeholders on a personal level. These videos are perfect for 
          annual reports, investor relations, and thought leadership content.
        </p>

        <h3>Testimonial and Case Study Videos</h3>
        <p>
          Nothing builds trust like hearing from satisfied customers. We produce compelling testimonial 
          and case study videos that showcase your success stories and demonstrate the value you deliver. 
          These videos are powerful sales tools that help convert prospects into customers.
        </p>

        <h2>Our Production Process</h2>
        <p>
          Every corporate video project begins with understanding your objectives, audience, and key 
          messages. Our pre-production phase includes scripting, storyboarding, and detailed planning 
          to ensure a smooth production. During filming, our experienced crew captures high-quality 
          footage using professional cinema cameras and lighting equipment.
        </p>
        <p>
          In post-production, we edit your footage, add graphics and animations, color grade for a 
          polished look, and mix professional audio. The result is a broadcast-quality video that 
          represents your brand at the highest level.
        </p>

        <h2>Industries We Serve</h2>
        <p>
          We have experience producing corporate videos for a wide range of industries in Bahrain and 
          across the GCC, including:
        </p>
        <ul>
          <li>Banking and Financial Services</li>
          <li>Oil and Gas</li>
          <li>Healthcare and Pharmaceuticals</li>
          <li>Real Estate and Construction</li>
          <li>Hospitality and Tourism</li>
          <li>Technology and Telecommunications</li>
          <li>Government and Public Sector</li>
          <li>Education and Training</li>
        </ul>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          As part of the Cinematic Group, we bring a unique combination of creative storytelling and 
          technical excellence to every corporate project. Our team includes experienced directors, 
          cinematographers, and editors who have worked with some of the biggest brands in the region. 
          We understand the corporate environment and know how to produce content that meets your 
          professional standards while still engaging and inspiring your audience.
        </p>
        <p>
          From initial concept to final delivery, we handle every aspect of production, making the 
          process seamless and stress-free for your team. Contact us today to discuss your corporate 
          video needs and receive a customized quote.
        </p>
      </ServicePageLayout>
    </>
  )
}
