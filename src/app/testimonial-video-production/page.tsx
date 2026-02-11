import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Testimonial Video Production Bahrain | Customer Story Videos',
  description: 'Professional testimonial and case study video production in Bahrain. Authentic customer stories, client testimonials, and success stories that build trust and drive conversions.',
  keywords: ['testimonial video bahrain', 'customer testimonial video bahrain', 'case study video bahrain', 'client video bahrain', 'customer story video bahrain'],
  openGraph: {
    title: 'Testimonial Video Production Bahrain | Film Production Bahrain',
    description: 'Professional testimonial and case study video production in Bahrain. Authentic customer stories.',
    url: 'https://filmproductionbahrain.com/testimonial-video-production',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://filmproductionbahrain.com/testimonial-video-production',
  },
}

const faqs = [
  {
    question: 'Why are testimonial videos important?',
    answer: 'Video testimonials are the most trusted form of marketing content. 92% of consumers read reviews before purchasing, and video testimonials are more believable than written reviews. They build social proof and help prospects overcome hesitation.',
  },
  {
    question: 'How do you make customers comfortable on camera?',
    answer: 'Our experienced interviewers put customers at ease with conversational techniques. We don\'t use scripts—instead, we ask questions that naturally draw out authentic stories. Most customers forget about the camera within minutes.',
  },
  {
    question: 'How much do testimonial videos cost?',
    answer: 'Single testimonial videos start at BD 300-500. Multi-testimonial packages are more cost-effective at BD 200-350 per testimonial. Case study videos with additional b-roll and graphics range from BD 800-1,500.',
  },
  {
    question: 'Can you film at customer locations?',
    answer: 'Yes, we often film testimonials at customer locations, workplaces, or homes. This adds authenticity and provides natural b-roll footage. We bring all necessary equipment to create a professional result in any environment.',
  },
  {
    question: 'How long should a testimonial video be?',
    answer: 'The most effective testimonial videos are 1-2 minutes. This is long enough to tell a compelling story but short enough to maintain attention. For websites, we often create both full versions and shorter cuts for social media.',
  },
]

const crossLinks = [
  {
    text: 'Need a website to showcase your testimonials?',
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
  name: 'Testimonial Video Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional testimonial and case study video production services in Bahrain featuring authentic customer stories.',
}

export default function TestimonialVideoProduction() {
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
        title="Testimonial Video Production Bahrain"
        subtitle="Real Stories, Real Results"
        heroDescription="Authentic customer testimonials that build trust, overcome objections, and turn prospects into customers through the power of social proof."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>The Power of Customer Testimonials</h2>
        <p>
          Nothing builds trust like hearing from satisfied customers. Video testimonials are the most 
          powerful form of social proof, combining the authenticity of real stories with the emotional 
          impact of video. At Film Production Bahrain, we specialize in capturing genuine customer 
          stories that resonate with prospects and drive conversions.
        </p>
        <p>
          Your customers have incredible stories about how you've helped them. We help you capture 
          those stories professionally and use them to grow your business. From single testimonials 
          to comprehensive case study videos, we produce content that showcases your impact.
        </p>

        <h2>Types of Testimonial Videos</h2>
        
        <h3>Quick Testimonials</h3>
        <p>
          Short, punchy testimonials (30-60 seconds) that capture a customer's key sentiment and 
          recommendation. Perfect for social media, website banners, and advertising. We focus on 
          the most impactful soundbites that communicate value quickly.
        </p>

        <h3>Story Testimonials</h3>
        <p>
          Longer format (1-3 minutes) testimonials that tell a complete story: the challenge the 
          customer faced, how they found you, and the results they achieved. Story testimonials 
          are powerful for sales pages and consideration-stage marketing.
        </p>

        <h3>Case Study Videos</h3>
        <p>
          Comprehensive videos (3-5 minutes) that combine customer interviews with data, visuals, 
          and your team's perspective. Case studies are particularly effective for B2B sales, high-value 
          services, and complex solutions where buyers need detailed proof of results.
        </p>

        <h3>Multi-Customer Compilations</h3>
        <p>
          Combine multiple customer voices into one powerful video. Hearing the same sentiment from 
          different people amplifies credibility. These work well for brand videos and advertising 
          campaigns.
        </p>

        <h2>Our Testimonial Video Process</h2>
        
        <h3>Customer Selection</h3>
        <p>
          We help you identify the best customers to feature. Ideal testimonial subjects are articulate, 
          have achieved measurable results, and represent your target customer profile. We can advise on 
          selection and help with outreach.
        </p>

        <h3>Pre-Interview Preparation</h3>
        <p>
          We prepare customers without scripting them. We share general topics we'll cover so they can 
          gather their thoughts, but we want authentic responses, not rehearsed lines. This preparation 
          helps customers feel confident without being performative.
        </p>

        <h3>Interview Filming</h3>
        <p>
          Our experienced interviewers create a comfortable, conversational environment. We use 
          professional cinema cameras and lighting to ensure a polished look while maintaining 
          natural authenticity. Most interviews take 30-45 minutes.
        </p>

        <h3>B-Roll Capture</h3>
        <p>
          We capture additional footage to enrich the testimonial: the customer's workplace, them 
          using your product, or relevant contextual shots. B-roll makes testimonials more visually 
          engaging and credible.
        </p>

        <h3>Post-Production</h3>
        <p>
          We edit the interview into a compelling narrative, adding graphics, music, and branding. 
          We create multiple versions: full-length for your website and shorter cuts for social media 
          and advertising.
        </p>

        <h2>Where to Use Testimonial Videos</h2>
        <ul>
          <li>Website homepage and testimonial pages</li>
          <li>Landing pages and sales pages</li>
          <li>Social media organic and paid content</li>
          <li>Email marketing campaigns</li>
          <li>Sales presentations and proposals</li>
          <li>Trade show displays</li>
          <li>YouTube and video advertising</li>
        </ul>

        <h2>Tips for Great Testimonials</h2>
        <p>
          The best testimonials include specific results (numbers, percentages, timeframes), emotional 
          moments (how the customer felt before and after), and direct recommendations. We guide 
          conversations to capture all these elements naturally.
        </p>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          Our team knows how to put customers at ease and draw out authentic, compelling stories. 
          We combine interview expertise with professional production quality to create testimonials 
          that look great and convert. As part of the Cinematic Group, we can also help you build 
          testimonial pages and integrate videos into your marketing strategy.
        </p>
      </ServicePageLayout>
    </>
  )
}
