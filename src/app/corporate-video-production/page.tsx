import { Metadata } from 'next'
import Link from 'next/link'
import ServicePageLayout from '@/components/ServicePageLayout'
import VideoHero from '@/components/VideoHero'

export const metadata: Metadata = {
  title: 'Corporate Film Production Bahrain',
  description: 'Corporate film and video production in Bahrain. Company profiles, recruitment films, training videos, CEO interviews and internal comms.',
  keywords: ['corporate film bahrain', 'corporate video production bahrain', 'company profile video bahrain', 'training video production bahrain', 'corporate video company bahrain', 'business video production bahrain', 'recruitment video bahrain'],
  openGraph: {
    title: 'Corporate Film & Video Production Bahrain | Film Production Bahrain',
    description: 'Corporate film and video production in Bahrain. Company profiles, recruitment films, training videos, CEO interviews and internal communications.',
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
    question: 'What is the difference between a corporate film and a corporate video?',
    answer: 'A corporate film is the story-led version of a corporate video: it is built around a narrative, edited with rhythm and pacing, and usually runs two to five minutes. A corporate video is the working version — shorter, more direct, and designed to answer a specific question quickly, such as how a process works or what a role involves. We produce both, and many companies start with a shorter corporate video and add a corporate film later.',
  },
  {
    question: 'How long does a corporate video production take?',
    answer: 'Typical corporate video projects take 2-4 weeks from concept to delivery. This includes pre-production planning, filming (usually 1-2 days), and post-production. Rush projects can be completed faster with proper scheduling.',
  },
  {
    question: 'What types of corporate videos do you produce?',
    answer: 'We produce company profiles, corporate films, training videos, internal communications, CEO and executive interviews, recruitment videos, annual reports, product demonstrations, testimonials, and corporate event coverage.',
  },
  {
    question: 'How much does corporate video production cost in Bahrain?',
    answer: 'Corporate video production costs range from BD 500 for simple projects to BD 5,000+ for comprehensive multi-day productions. We provide custom quotes based on your specific requirements, duration, and complexity.',
  },
  {
    question: 'Can you film at our office location?',
    answer: 'Absolutely. We bring all necessary equipment to your location in Bahrain. Our team handles lighting, sound, and set design to ensure professional results in any environment.',
  },
]

const crossLinks = [
  {
    text: 'Need a cinematic brand story instead?',
    url: 'https://www.filmproductionbahrain.com/brand-film-production',
    label: 'Brand Film Production',
  },
  {
    text: 'See the full production service we offer',
    url: 'https://www.filmproductionbahrain.com/video-production-bahrain',
    label: 'Video Production Bahrain',
  },
  {
    text: 'Training and e-learning content for your staff',
    url: 'https://www.filmproductionbahrain.com/educational-video-production',
    label: 'Educational Video Production',
  },
  {
    text: 'Customer stories and testimonials that build trust',
    url: 'https://www.filmproductionbahrain.com/testimonial-video-production',
    label: 'Testimonial Video Production',
  },
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
  description: 'Professional corporate film and video production services in Bahrain including company profiles, recruitment films, training videos, and internal communications.',
}

export default function CorporateVideoProduction() {
  return (
    <>
      <VideoHero
        videoId="F2Mw7tngDXY"
        title="Corporate Film & Video Production"
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
        title="Corporate Film & Video Production Bahrain"
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

        <h2>What Is a Corporate Film?</h2>
        <p>
          A corporate film is the story-led form of business video. Where a short corporate video answers a
          practical question, a corporate film earns attention: it introduces your people, your operation, and
          your point of view, then leaves the viewer with a clear sense of who you are. That distinction matters
          in Bahrain, where buyers, partners, and hiring managers are often deciding between companies they
          know only by name.
        </p>
        <p>
          In practice the two formats overlap, and we often deliver both from the same production. A corporate
          film is built for the website hero, the recruitment page, the annual report, and the presentation
          opener. A corporate video is built for the sales team, the training portal, and the internal
          intranet. If you are unsure which one you need, we will tell you plainly during the brief instead
          of selling you the wrong format.
        </p>
        <p>
          We produce these as part of our wider{' '}
          <Link href="/video-production-bahrain" className="text-film-gold hover:underline">
            video production service in Bahrain
          </Link>
          , so the same crew that films your project also handles editing, colour grading, and delivery
          formats.
        </p>

        <h2>Our Corporate Video Services</h2>

        <h3>Company Profile Videos</h3>
        <p>
          Your company profile video is often the first impression potential clients, partners, and employees
          have of your business. We create polished, engaging profile videos that capture your company's
          culture, values, and unique value proposition. From interviewing key executives to showcasing your
          facilities and operations, we tell your story in a way that resonates with your target audience.
        </p>

        <h3>Recruitment and Employer Branding Films</h3>
        <p>
          Hiring in Bahrain is competitive, and a careers page with no video is a careers page that is easy to
          leave. We produce recruitment films and culture films that show candidates how your team actually
          works: a morning in the office, the tools people use, the people they sit with. The material is
          filmed for employer branding purposes, and it is edited to hold attention on a phone screen, because
          that is where most candidates meet your company first. For a deeper look at cinematic storytelling
          for a consumer audience, our{' '}
          <Link href="/brand-film-production" className="text-film-gold hover:underline">
            brand film production
          </Link>{' '}
          service covers the same craft with a different objective.
        </p>

        <h3>Training and Educational Videos</h3>
        <p>
          Effective training is crucial for employee development and operational consistency. Our training
          video production services help you create engaging educational content that improves knowledge
          retention and reduces training costs. We can produce everything from safety training modules to
          complex technical procedures, ensuring your team has the resources they need to succeed. If your
          material is better explained with animation than live action, we produce that format too through
          our{' '}
          <Link href="/explainer-video-production" className="text-film-gold hover:underline">
            explainer video production
          </Link>{' '}
          service.
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
          These videos are powerful sales tools that help convert prospects into customers. Our dedicated{' '}
          <Link href="/testimonial-video-production" className="text-film-gold hover:underline">
            testimonial video production
          </Link>{' '}
          service covers the interview craft and consent handling that these pieces depend on.
        </p>

        <h2>Where Corporate Video Gets Used</h2>
        <p>
          Production value depends heavily on knowing where the finished file will live. Different placements
          change everything from running time to how the audio is mixed. We plan around the destination
          rather than around a generic format, and we typically deliver several versions so every team can
          use the same shoot.
        </p>
        <ul>
          <li>Recruitment pages and employer branding campaigns</li>
          <li>Investor relations, annual reports, and shareholder communications</li>
          <li>Employee onboarding and internal training platforms</li>
          <li>Sales proposals, pitches, and tender submissions</li>
          <li>Corporate website hero sections and product pages</li>
          <li>Exhibitions, conferences, and company town halls</li>
          <li>Social media channels and paid campaign landing pages</li>
        </ul>

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

        <h3>Brief and Objectives</h3>
        <p>
          We start by agreeing on what the video has to achieve: which audience it will speak to, what they
          should do next, and where it will be published. A video for a trade exhibition in Bahrain needs a
          different structure from a video for a global careers page, even when both are about the same
          company.
        </p>

        <h3>Pre-Production</h3>
        <p>
          Scripts, shot lists, interview questions, location planning, and scheduling. Filming on a
          corporate set in Bahrain usually means working around the working week, so we plan the shoot
          around your team's availability rather than around a generic production calendar.
        </p>

        <h3>Production</h3>
        <p>
          A director, cinematographer, and audio operator lead every shoot, with additional crew as the
          project requires. Interviews are lit and framed for consistency across a multi-day shoot, so the
          finished video holds together even when it was filmed in a dozen different rooms.
        </p>

        <h3>Post-Production</h3>
        <p>
          Edit, graphics, colour grading, sound design, and delivery. We deliver a master alongside the
          formats your team actually uses: horizontal and vertical cuts, subtitled versions, and
          platform-ready exports. If you need further work on the raw footage later, our{' '}
          <Link href="/video-editing-services" className="text-film-gold hover:underline">
            video editing service
          </Link>{' '}
          can handle the same project in post.
        </p>

        <h2>What We Need From You</h2>
        <p>
          Corporate productions move faster when we have access to the right people and material. You do not
          need a finished script, a creative brief, or a selected crew to begin — we will build all of that
          with you. What does help is access to the people who will appear on camera, any existing footage
          you want us to consider, and a clear view of the deadline and destination for the finished file.
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
