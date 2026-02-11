import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Behind-the-Scenes Video Production Bahrain | BTS Content',
  description: 'Professional behind-the-scenes video production in Bahrain. BTS content, making-of videos, production diaries, and authentic content that builds brand connection.',
  keywords: ['behind the scenes video bahrain', 'bts content bahrain', 'making of video bahrain', 'production diary bahrain', 'authentic content bahrain'],
  openGraph: {
    title: 'Behind-the-Scenes Video Production Bahrain | Film Production Bahrain',
    description: 'Professional behind-the-scenes video production in Bahrain. Authentic BTS content.',
    url: 'https://filmproductionbahrain.com/behind-the-scenes-content',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://filmproductionbahrain.com/behind-the-scenes-content',
  },
}

const faqs = [
  {
    question: 'What is behind-the-scenes content?',
    answer: 'Behind-the-scenes (BTS) content shows the process, people, and effort behind your products, services, or events. It\'s authentic, unpolished content that humanizes your brand and builds emotional connections with audiences.',
  },
  {
    question: 'Why is BTS content effective?',
    answer: 'Audiences crave authenticity. BTS content shows the real people and processes behind your brand, building trust and relatability. It performs exceptionally well on social media and helps differentiate you from competitors.',
  },
  {
    question: 'How much does BTS content production cost?',
    answer: 'BTS documentation during an existing shoot adds BD 100-300 to production costs. Dedicated BTS shoots for ongoing content range from BD 200-500 per session. Monthly BTS content packages are available for ongoing needs.',
  },
  {
    question: 'Can you create BTS content from our existing productions?',
    answer: 'Yes, we can add BTS documentation to any production we\'re already doing for you. This is the most efficient way to generate BTS content since we\'re already on-site with equipment.',
  },
  {
    question: 'What platforms is BTS content best for?',
    answer: 'BTS content excels on Instagram, TikTok, and YouTube. It works well for Stories and Reels in short-form, and as longer videos for YouTube. We can create versions optimized for each platform.',
  },
]

const crossLinks = [
  {
    text: 'Need social media video content?',
    url: 'https://filmproductionbahrain.com/social-media-video-content',
    label: 'Social Media Videos',
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
  name: 'Behind-the-Scenes Video Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional behind-the-scenes video production services in Bahrain for authentic brand content.',
}

export default function BehindTheScenesContent() {
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
        title="Behind-the-Scenes Content"
        subtitle="Show Your Process"
        heroDescription="Authentic behind-the-scenes content that reveals the people, passion, and process behind your brand—building connection and trust."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>The Power of BTS Content</h2>
        <p>
          In an era of polished marketing, audiences crave authenticity. Behind-the-scenes content 
          pulls back the curtain, showing the real people and processes behind your brand. This 
          transparency builds trust, humanizes your business, and creates emotional connections 
          that traditional marketing can't achieve.
        </p>
        <p>
          At Film Production Bahrain, we create compelling BTS content that showcases your brand's 
          authentic side. Whether we're documenting a production shoot, your team at work, or your 
          creative process, we capture genuine moments that resonate with audiences.
        </p>

        <h2>Types of BTS Content</h2>
        
        <h3>Production Behind-the-Scenes</h3>
        <p>
          Document the making of your commercials, photoshoots, and video productions. Show your 
          audience the effort and creativity that goes into your content. This type of BTS builds 
          appreciation for your work and provides engaging social content.
        </p>

        <h3>Day-in-the-Life Content</h3>
        <p>
          Follow team members through their workday to showcase your company culture and the people 
          behind your brand. Day-in-the-life content is powerful for employer branding, humanizing 
          executives, and building customer connection.
        </p>

        <h3>Process and Making-Of Videos</h3>
        <p>
          Show how your products are made or services are delivered. Manufacturing processes, creative 
          workflows, and service delivery all make compelling content that demonstrates quality and 
          expertise.
        </p>

        <h3>Event Behind-the-Scenes</h3>
        <p>
          Document the setup, preparation, and backstage moments at your events. Event BTS extends 
          your content beyond the event itself and creates FOMO that drives attendance at future events.
        </p>

        <h3>Team and Culture Content</h3>
        <p>
          Capture casual moments, team activities, and workplace culture. This content humanizes 
          your brand and helps customers connect with the real people behind your business.
        </p>

        <h2>Why BTS Content Works</h2>
        <ul>
          <li>Builds trust through transparency</li>
          <li>Humanizes your brand with real people</li>
          <li>Creates emotional connections</li>
          <li>Performs well on social media algorithms</li>
          <li>Differentiates you from competitors</li>
          <li>Provides cost-effective content</li>
          <li>Shows the value behind your products/services</li>
        </ul>

        <h2>Our BTS Production Approach</h2>
        
        <h3>Integrated Documentation</h3>
        <p>
          The most efficient way to create BTS content is during existing productions. We can add 
          BTS documentation to any shoot we're doing for you, capturing behind-the-scenes moments 
          while we're already on-site.
        </p>

        <h3>Dedicated BTS Shoots</h3>
        <p>
          For ongoing content needs, we can schedule regular visits to document your operations, 
          team activities, and processes. This provides a steady stream of authentic content for 
          social media.
        </p>

        <h3>Authentic Style</h3>
        <p>
          BTS content should feel authentic, not overly produced. We capture genuine moments while 
          maintaining visual quality. The goal is content that feels real while still looking 
          professional enough to represent your brand.
        </p>

        <h3>Multi-Platform Editing</h3>
        <p>
          We edit BTS footage into multiple formats: Instagram Reels and Stories, TikTok videos, 
          YouTube content, and longer-form making-of videos. One shoot day generates content for 
          weeks of social posting.
        </p>

        <h2>BTS Content Ideas</h2>
        <ul>
          <li>Photoshoot and video production BTS</li>
          <li>Product development and manufacturing</li>
          <li>Team meetings and brainstorms</li>
          <li>Office tours and workplace culture</li>
          <li>Event setup and preparation</li>
          <li>Customer service in action</li>
          <li>Packing and shipping orders</li>
          <li>Creative process documentation</li>
          <li>Bloopers and outtakes</li>
        </ul>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          We understand both polished production and authentic content. Our team knows how to capture 
          genuine moments while maintaining the visual quality your brand deserves. As a full-service 
          production company, we can integrate BTS documentation into all your productions, maximizing 
          content output from every shoot.
        </p>
      </ServicePageLayout>
    </>
  )
}
