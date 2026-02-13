import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Social Media Video Production Bahrain | Reels, TikTok & Shorts',
  description: 'Professional social media video production in Bahrain. Instagram Reels, TikTok videos, YouTube Shorts, Facebook content, and LinkedIn videos. Engaging content that grows your following.',
  keywords: ['social media video bahrain', 'instagram reels bahrain', 'tiktok video production bahrain', 'social media content bahrain', 'video content creator bahrain'],
  openGraph: {
    title: 'Social Media Video Production Bahrain | Film Production Bahrain',
    description: 'Professional social media video production in Bahrain. Instagram Reels, TikTok videos, and YouTube Shorts.',
    url: 'https://www.filmproductionbahrain.com/social-media-video-content',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.filmproductionbahrain.com/social-media-video-content',
  },
}

const faqs = [
  {
    question: 'What social media platforms do you create content for?',
    answer: 'We create video content for all major platforms: Instagram (Reels and Stories), TikTok, YouTube (Shorts and long-form), Facebook, LinkedIn, Twitter/X, and Snapchat. Each video is optimized for the specific platform\'s format and audience.',
  },
  {
    question: 'How much does social media video production cost?',
    answer: 'Individual short-form videos (Reels, TikToks) start at BD 100-200. Monthly content packages with multiple videos range from BD 500-2,000 depending on quantity and complexity. We offer scalable solutions for businesses of all sizes.',
  },
  {
    question: 'Can you help with content strategy and scheduling?',
    answer: 'Yes, we offer comprehensive social media video packages that include content strategy, production, and recommendations for posting schedules. We can also coordinate with your social media manager or agency.',
  },
  {
    question: 'Do you follow trending formats and sounds?',
    answer: 'Absolutely. Our team stays current with platform trends, viral formats, and popular sounds. We can adapt trending content styles to fit your brand while keeping content fresh and algorithm-friendly.',
  },
  {
    question: 'How quickly can you produce social media content?',
    answer: 'We offer fast turnaround for social media content. Simple videos can be delivered within 24-48 hours. For reactive content tied to trends, we can work even faster. Monthly content batches are typically delivered within 1-2 weeks.',
  },
]

const crossLinks = [
  {
    text: 'Need a website to drive social traffic?',
    url: 'https://cinematicwebworks.com',
    label: 'CinematicWebWorks.com',
  },
  {
    text: 'Looking for events to feature in your content?',
    url: 'https://bahrainnights.com',
    label: 'BahrainNights.com',
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
  name: 'Social Media Video Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://www.filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional social media video production services in Bahrain for Instagram, TikTok, YouTube, and other platforms.',
}

export default function SocialMediaVideoContent() {
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
        title="Social Media Video Production Bahrain"
        subtitle="Content That Performs"
        heroDescription="Scroll-stopping social media videos that grow your audience, boost engagement, and drive results on every platform."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>The Power of Social Media Video</h2>
        <p>
          Social media algorithms favor video content, making it essential for brands that want to be seen. 
          Short-form video on platforms like Instagram Reels and TikTok drives the highest engagement rates, 
          while YouTube remains the second-largest search engine. At Film Production Bahrain, we help brands 
          cut through the noise with professional video content designed for each platform.
        </p>
        <p>
          Whether you're building brand awareness, driving e-commerce sales, or establishing thought 
          leadership, our social media video production services deliver content that performs. We combine 
          platform expertise with professional production quality to create videos that stand out in 
          crowded feeds.
        </p>

        <h2>Platform-Specific Content</h2>
        
        <h3>Instagram Reels & Stories</h3>
        <p>
          Instagram rewards accounts that use Reels with increased reach and discoverability. We create 
          thumb-stopping Reels that showcase your brand, products, or services in engaging 15-90 second 
          formats. From trending transitions to educational content, we produce Reels that get saved and 
          shared.
        </p>

        <h3>TikTok Videos</h3>
        <p>
          TikTok's unique culture requires content that feels authentic and native to the platform. Our 
          team understands TikTok trends, sounds, and formats, creating content that resonates with the 
          audience while maintaining your brand identity. We can help you go viral—or at least consistently 
          reach your target audience.
        </p>

        <h3>YouTube Shorts & Long-Form</h3>
        <p>
          YouTube offers both short-form (Shorts) and long-form opportunities. We produce Shorts that 
          capture attention in under 60 seconds, as well as longer videos for tutorials, vlogs, reviews, 
          and educational content. Our team handles scripting, filming, editing, and optimization for 
          YouTube's search algorithm.
        </p>

        <h3>LinkedIn Video</h3>
        <p>
          Professional video on LinkedIn drives B2B leads and establishes thought leadership. We create 
          polished content for company pages and executives, including industry insights, company culture 
          videos, product announcements, and professional updates that generate engagement and connections.
        </p>

        <h3>Facebook Video</h3>
        <p>
          Facebook's massive user base makes it essential for many businesses. We create video content 
          optimized for Facebook's feed and Watch platform, including promotional videos, live stream 
          support, and content designed to drive shares and comments.
        </p>

        <h2>Content Types We Produce</h2>
        <ul>
          <li>Behind-the-scenes content</li>
          <li>Product showcases and demos</li>
          <li>Tutorial and how-to videos</li>
          <li>User-generated content style videos</li>
          <li>Talking head and interview clips</li>
          <li>Event coverage and highlights</li>
          <li>Testimonial and review videos</li>
          <li>Trending format adaptations</li>
          <li>Day-in-the-life content</li>
          <li>Before and after reveals</li>
        </ul>

        <h2>Monthly Content Packages</h2>
        <p>
          Consistent posting is key to social media success. Our monthly content packages give you a 
          steady stream of professional videos without the hassle of planning, shooting, and editing 
          yourself. We offer packages ranging from 4-16 videos per month, with options for content 
          calendars, caption writing, and posting recommendations.
        </p>

        <h2>Our Process</h2>
        <p>
          We start by understanding your brand, audience, and goals. Our team develops content concepts 
          that align with your messaging while fitting platform best practices. Production is fast and 
          efficient—we often batch multiple videos in single shoot days for cost efficiency.
        </p>
        <p>
          Post-production includes platform-optimized editing, captions, graphics, and trending audio. 
          We deliver content ready to post with recommended captions and hashtags. Need revisions? We 
          include rounds of feedback to ensure you're completely satisfied.
        </p>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          Our team lives on social media and understands what works on each platform. We combine that 
          knowledge with professional production quality that elevates your brand above amateur content. 
          As part of the Cinematic Group, we can also help with your website, event coverage, and broader 
          video marketing strategy.
        </p>
      </ServicePageLayout>
    </>
  )
}
