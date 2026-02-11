import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Promotional Video Production Bahrain | Promo Videos & Ads',
  description: 'Professional promotional video production in Bahrain. TV commercials, digital ads, promotional videos, sales videos, and marketing content that drives results.',
  keywords: ['promotional video bahrain', 'promo video bahrain', 'tv commercial bahrain', 'video advertising bahrain', 'marketing video bahrain'],
  openGraph: {
    title: 'Promotional Video Production Bahrain | Film Production Bahrain',
    description: 'Professional promotional video production in Bahrain. Commercials, ads, and promo content.',
    url: 'https://filmproductionbahrain.com/promotional-video-bahrain',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://filmproductionbahrain.com/promotional-video-bahrain',
  },
}

const faqs = [
  {
    question: 'What types of promotional videos do you produce?',
    answer: 'We produce TV commercials, digital video ads, promotional videos for websites and social media, sales videos, product launch videos, event promotions, and seasonal campaign content.',
  },
  {
    question: 'How much does a promotional video cost?',
    answer: 'Simple promotional videos start at BD 500-800. Professional promotional videos with talent and locations range from BD 1,000-3,000. TV-quality commercials with full production typically cost BD 3,000-10,000+.',
  },
  {
    question: 'Can you create videos for TV advertising?',
    answer: 'Yes, we produce broadcast-quality commercials that meet technical specifications for TV networks in Bahrain and the GCC. We handle all aspects including media format delivery.',
  },
  {
    question: 'Do you provide multiple versions for different platforms?',
    answer: 'Yes, we deliver promotional videos in multiple formats and aspect ratios optimized for each platform: 16:9 for YouTube and TV, 1:1 for Instagram feed, 9:16 for Stories and TikTok, and any other specifications you need.',
  },
  {
    question: 'How long should a promotional video be?',
    answer: 'It depends on the platform. TV commercials are typically 15-30 seconds. Digital ads perform best at 15-60 seconds. Website promotional videos can be 1-2 minutes. We create content optimized for each use case.',
  },
]

const crossLinks = [
  {
    text: 'Need a landing page for your campaign?',
    url: 'https://cinematicwebworks.com/landing-page-design',
    label: 'Landing Page Design',
  },
  {
    text: 'Planning a promotional event?',
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
  name: 'Promotional Video Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional promotional video production services in Bahrain including commercials, ads, and marketing videos.',
}

export default function PromotionalVideoBahrain() {
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
        title="Promotional Video Production Bahrain"
        subtitle="Videos That Sell"
        heroDescription="High-impact promotional videos that grab attention, communicate your value, and drive customers to take action."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Promotional Videos That Drive Results</h2>
        <p>
          Promotional video is the most powerful tool in your marketing arsenal. Whether you're launching 
          a new product, running a seasonal campaign, or building brand awareness, video outperforms every 
          other content type. At Film Production Bahrain, we create promotional videos designed to convert 
          viewers into customers.
        </p>
        <p>
          Our promotional videos combine compelling storytelling with strong calls to action. We understand 
          that great-looking video means nothing if it doesn't achieve your business objectives. Every 
          creative decision we make serves the goal of driving measurable results for your campaign.
        </p>

        <h2>Types of Promotional Videos</h2>
        
        <h3>TV Commercials</h3>
        <p>
          Broadcast-quality commercials for TV advertising in Bahrain and across the GCC. We produce 
          15, 30, and 60-second spots that meet all technical broadcast specifications. Our commercials 
          combine creative impact with clear messaging to maximize your media spend.
        </p>

        <h3>Digital Video Ads</h3>
        <p>
          Video ads optimized for digital platforms: YouTube pre-roll, Facebook and Instagram ads, 
          programmatic display, and more. We create thumb-stopping content designed for each platform's 
          user behavior and technical requirements.
        </p>

        <h3>Product Launch Videos</h3>
        <p>
          Generate excitement for new products with launch videos that showcase features, benefits, and 
          the experience your product delivers. We create content for launch events, websites, social 
          media, and press distribution.
        </p>

        <h3>Sales Videos</h3>
        <p>
          Equip your sales team with video assets that close deals. Sales videos explain your offering, 
          overcome objections, and move prospects through the funnel. Perfect for email outreach, 
          presentations, and landing pages.
        </p>

        <h3>Event Promotional Videos</h3>
        <p>
          Drive attendance to events with promotional videos that build anticipation. We create teasers, 
          speaker highlights, program overviews, and hype content for conferences, concerts, exhibitions, 
          and special events.
        </p>

        <h3>Seasonal Campaign Videos</h3>
        <p>
          Ramadan, Eid, National Day, summer sales—seasonal campaigns need fresh video content. We 
          produce festive promotional videos that resonate with local audiences and drive seasonal 
          purchase behavior.
        </p>

        <h2>Our Production Approach</h2>
        
        <h3>Strategy First</h3>
        <p>
          Before cameras roll, we understand your goals, audience, and desired outcomes. What action 
          do you want viewers to take? What makes your offer compelling? This strategic foundation 
          guides every creative decision.
        </p>

        <h3>Creative That Converts</h3>
        <p>
          Our creative concepts balance attention-grabbing impact with clear communication. We hook 
          viewers quickly, deliver your message efficiently, and end with compelling calls to action.
        </p>

        <h3>Professional Production</h3>
        <p>
          Cinema cameras, professional lighting, and experienced crew ensure your brand is represented 
          at the highest level. Production quality signals brand quality—we make sure your promotional 
          videos look premium.
        </p>

        <h3>Multi-Platform Delivery</h3>
        <p>
          We deliver your promotional video in every format you need: different aspect ratios, 
          durations, and platform specifications. One production day can yield content for TV, 
          YouTube, Instagram, TikTok, and your website.
        </p>

        <h2>Industries We Serve</h2>
        <ul>
          <li>Retail and E-commerce</li>
          <li>Real Estate</li>
          <li>Hospitality and Tourism</li>
          <li>Healthcare</li>
          <li>Automotive</li>
          <li>Financial Services</li>
          <li>Food and Beverage</li>
          <li>Technology</li>
          <li>Education</li>
          <li>Events and Entertainment</li>
        </ul>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          We combine creative excellence with marketing discipline. Our promotional videos look 
          cinematic and perform commercially. As part of the Cinematic Group, we can also build 
          landing pages, websites, and complete marketing campaigns around your video content. 
          From concept to conversion, we're your complete video marketing partner.
        </p>
      </ServicePageLayout>
    </>
  )
}
