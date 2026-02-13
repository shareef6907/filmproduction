import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Influencer Video Production Bahrain | Content Creator Services',
  description: 'Professional video production for influencers and content creators in Bahrain. YouTube videos, brand collaborations, high-quality content, and creator support services.',
  keywords: ['influencer video production bahrain', 'content creator video bahrain', 'youtube video production bahrain', 'influencer content bahrain', 'creator services bahrain'],
  openGraph: {
    title: 'Influencer Video Production Bahrain | Film Production Bahrain',
    description: 'Professional video production for influencers and content creators in Bahrain.',
    url: 'https://www.filmproductionbahrain.com/influencer-video-content',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.filmproductionbahrain.com/influencer-video-content',
  },
}

const faqs = [
  {
    question: 'What services do you offer for influencers?',
    answer: 'We offer video production for YouTube and long-form content, brand collaboration filming, music video production, high-quality Reels and TikToks, podcast video, editing services, and production support for creator projects.',
  },
  {
    question: 'Can you help with brand collaboration videos?',
    answer: 'Yes, we help influencers produce professional brand collaboration content that meets sponsor requirements while maintaining your authentic style. Higher production quality often commands higher sponsorship rates.',
  },
  {
    question: 'How much does influencer video production cost?',
    answer: 'Basic content assistance starts at BD 100-200 per video. Full production for YouTube videos ranges from BD 300-800. Brand collaboration production ranges from BD 400-1,500 depending on complexity. We offer packages for ongoing creators.',
  },
  {
    question: 'Do you offer editing-only services?',
    answer: 'Yes, we offer video editing services for creators who shoot their own footage but need professional editing. This is a cost-effective way to improve content quality without full production.',
  },
  {
    question: 'Can you help me grow my channel?',
    answer: 'While we focus on production rather than marketing strategy, better production quality directly impacts growth. We can also advise on content formats and production approaches that perform well on different platforms.',
  },
]

const crossLinks = [
  {
    text: 'Need a website for your personal brand?',
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
  name: 'Influencer Video Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://www.filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional video production services for influencers and content creators in Bahrain.',
}

export default function InfluencerVideoContent() {
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
        title="Influencer Video Production"
        subtitle="Level Up Your Content"
        heroDescription="Professional video production that helps influencers and content creators stand out with higher quality content that grows audiences and attracts brands."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Professional Production for Creators</h2>
        <p>
          As a content creator, your videos are your product. Better production quality means better 
          engagement, faster growth, and higher sponsorship rates. At Film Production Bahrain, we 
          help influencers and creators elevate their content with professional video production 
          services designed for the creator economy.
        </p>
        <p>
          Whether you need full production support for a major project or just editing help for 
          your regular uploads, we provide flexible services that fit creator budgets and workflows. 
          We understand the platforms, the formats, and what makes content perform.
        </p>

        <h2>Our Creator Services</h2>
        
        <h3>YouTube Video Production</h3>
        <p>
          Full production for your YouTube channel: filming, lighting, audio, and editing. We help 
          you create professional long-form content that competes with major channels. From vlogs 
          to educational content to entertainment, we've got you covered.
        </p>

        <h3>Brand Collaboration Content</h3>
        <p>
          When brands hire you for sponsored content, deliver above their expectations. Professional 
          production on brand collaborations impresses sponsors, leads to repeat partnerships, and 
          helps you command higher rates.
        </p>

        <h3>Short-Form Content (Reels/TikTok)</h3>
        <p>
          Professional short-form content that stands out in the feed. While many creators shoot 
          on phones, professional production elevates your content and signals quality to viewers 
          and brands alike.
        </p>

        <h3>Music Videos</h3>
        <p>
          For musicians and artists, we produce music videos that match your artistic vision. From 
          concept development to final edit, we create visuals that represent your music professionally.
        </p>

        <h3>Podcast Video Production</h3>
        <p>
          Video podcasts are the future. We help you set up professional multi-camera podcast 
          recording and provide editing services that create engaging video podcasts and clips 
          for social promotion.
        </p>

        <h3>Editing Services</h3>
        <p>
          Already shooting your own content? Our editors can transform your footage into polished 
          videos. We handle editing, color grading, graphics, and sound design so you can focus 
          on creating.
        </p>

        <h2>Why Professional Production Matters</h2>
        <ul>
          <li>Higher production quality = higher engagement rates</li>
          <li>Brands prefer working with professional-looking creators</li>
          <li>Better content commands higher sponsorship rates</li>
          <li>Professional content builds credibility faster</li>
          <li>Stand out in increasingly competitive platforms</li>
          <li>Focus on creating while we handle technical quality</li>
        </ul>

        <h2>Working with Creators</h2>
        
        <h3>We Understand Platforms</h3>
        <p>
          We know what works on YouTube, Instagram, TikTok, and other platforms. We can advise on 
          formats, pacing, and production approaches that perform well with algorithms and audiences.
        </p>

        <h3>Flexible Packages</h3>
        <p>
          Creator budgets vary. We offer flexible services from editing-only to full production, 
          allowing you to get professional help at whatever level fits your current stage.
        </p>

        <h3>Fast Turnaround</h3>
        <p>
          We understand creators need consistent upload schedules. We work efficiently to deliver 
          content on time without compromising quality.
        </p>

        <h3>Your Style, Elevated</h3>
        <p>
          We don't impose our style on your content—we enhance yours. Your authentic voice and 
          approach stay intact; we just make it look and sound better.
        </p>

        <h2>Content Types We Support</h2>
        <ul>
          <li>Lifestyle and vlog content</li>
          <li>Educational and how-to videos</li>
          <li>Comedy and entertainment</li>
          <li>Beauty and fashion content</li>
          <li>Food and cooking videos</li>
          <li>Travel content</li>
          <li>Gaming and tech reviews</li>
          <li>Fitness and wellness</li>
          <li>Podcast and interview content</li>
        </ul>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          We bring professional production expertise to the creator economy. Our team understands 
          both traditional production quality and the unique requirements of social media content. 
          We're here to help Bahrain's creators compete on a global level with content that looks 
          as good as the biggest channels worldwide.
        </p>
      </ServicePageLayout>
    </>
  )
}
