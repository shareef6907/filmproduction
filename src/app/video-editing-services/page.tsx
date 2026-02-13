import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Video Editing Services Bahrain | Professional Post-Production',
  description: 'Professional video editing services in Bahrain. Post-production, color grading, motion graphics, sound design, and video enhancement for businesses and content creators.',
  keywords: ['video editing bahrain', 'video editing services bahrain', 'post production bahrain', 'color grading bahrain', 'video editor bahrain'],
  openGraph: {
    title: 'Video Editing Services Bahrain | Film Production Bahrain',
    description: 'Professional video editing services in Bahrain. Post-production and color grading.',
    url: 'https://www.filmproductionbahrain.com/video-editing-services',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.filmproductionbahrain.com/video-editing-services',
  },
}

const faqs = [
  {
    question: 'What video editing services do you offer?',
    answer: 'We offer video editing, color correction and grading, motion graphics, sound design and mixing, title design, visual effects, video format conversion, and video enhancement. We work with footage you\'ve shot yourself or footage we\'ve produced.',
  },
  {
    question: 'How much does video editing cost in Bahrain?',
    answer: 'Simple editing starts at BD 50-100 per finished minute. Complex editing with color grading and motion graphics ranges from BD 150-300 per minute. We also offer hourly rates (BD 30-50/hour) and project-based quotes for larger jobs.',
  },
  {
    question: 'What file formats do you accept?',
    answer: 'We accept all common video formats including MP4, MOV, AVI, MKV, and raw formats from all major cameras (Canon, Sony, RED, Blackmagic, etc.). We can work with footage from phones, DSLRs, cinema cameras, and drones.',
  },
  {
    question: 'How long does video editing take?',
    answer: 'Simple edits can be delivered within 1-2 days. Complex projects typically take 1-2 weeks. We offer rush services for urgent projects. Timelines depend on project complexity, footage volume, and revision rounds.',
  },
  {
    question: 'Do you provide revisions?',
    answer: 'Yes, all editing projects include revision rounds. We typically include 2-3 rounds of revisions in our quotes. We work closely with you to ensure the final edit matches your vision perfectly.',
  },
]

const crossLinks = [
  {
    text: 'Need full video production services?',
    url: 'https://www.filmproductionbahrain.com',
    label: 'Film Production Bahrain',
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
  name: 'Video Editing Services Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://www.filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional video editing and post-production services in Bahrain including color grading, motion graphics, and sound design.',
}

export default function VideoEditingServices() {
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
        title="Video Editing Services Bahrain"
        subtitle="Professional Post-Production"
        heroDescription="Expert video editing that transforms raw footage into polished, professional content through skilled editing, color grading, and post-production."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Professional Video Editing</h2>
        <p>
          Great video is made in the edit. Even the best footage needs skilled editing to become 
          compelling content. At Film Production Bahrain, our editing team transforms raw footage 
          into polished videos that engage audiences and achieve your objectives.
        </p>
        <p>
          Whether you've shot your own footage and need professional editing, or you need post-production 
          services for existing content, our team delivers broadcast-quality results. We work with 
          businesses, content creators, agencies, and filmmakers across Bahrain.
        </p>

        <h2>Our Editing Services</h2>
        
        <h3>Video Editing</h3>
        <p>
          Core editing services including footage selection, sequencing, cutting, pacing, and assembly. 
          We craft narratives from raw footage, ensuring your video flows smoothly and maintains viewer 
          engagement. Our editors have years of experience across all video types from corporate to 
          creative.
        </p>

        <h3>Color Correction and Grading</h3>
        <p>
          Color correction ensures consistent, accurate colors across your footage. Color grading goes 
          further, creating a specific look and mood. Whether you want a cinematic film look, bright 
          and clean corporate style, or something unique, our colorists deliver.
        </p>

        <h3>Motion Graphics</h3>
        <p>
          Enhance your videos with animated titles, lower thirds, logo animations, infographics, and 
          visual effects. Motion graphics add production value and help communicate information 
          visually. We design custom graphics that match your brand.
        </p>

        <h3>Sound Design and Mixing</h3>
        <p>
          Audio quality is as important as video. We clean up dialogue, balance audio levels, add music 
          and sound effects, and deliver professional mixes. Poor audio ruins good video—we ensure your 
          audio matches your visual quality.
        </p>

        <h3>Title Design</h3>
        <p>
          Custom title sequences, lower thirds, credits, and on-screen text. We design titles that 
          fit your brand and enhance your video's professional appearance. From simple text overlays 
          to animated title sequences.
        </p>

        <h3>Visual Effects</h3>
        <p>
          Add visual effects to enhance your footage: green screen compositing, object removal, sky 
          replacement, and other effects. We use industry-standard tools to seamlessly integrate 
          effects into your content.
        </p>

        <h3>Format Conversion and Optimization</h3>
        <p>
          Deliver your video in any format for any platform. We optimize for YouTube, Instagram, 
          TikTok, TV broadcast, web hosting, and more. Get multiple versions from a single edit 
          for all your distribution needs.
        </p>

        <h2>Types of Projects We Edit</h2>
        <ul>
          <li>Corporate and business videos</li>
          <li>Social media content</li>
          <li>YouTube videos</li>
          <li>Commercials and ads</li>
          <li>Event highlights</li>
          <li>Wedding videos</li>
          <li>Documentary footage</li>
          <li>Training and educational content</li>
          <li>Podcasts and interviews</li>
          <li>Music videos</li>
        </ul>

        <h2>Our Editing Process</h2>
        
        <h3>Footage Review</h3>
        <p>
          We review all your footage and discuss your vision, objectives, and preferences. 
          Understanding what you want helps us deliver an edit that meets your expectations.
        </p>

        <h3>First Assembly</h3>
        <p>
          We create an initial rough cut showing the overall structure and flow. This lets you 
          provide feedback on direction before we invest in fine-tuning.
        </p>

        <h3>Fine Cut</h3>
        <p>
          Based on your feedback, we refine the edit: adjusting timing, improving transitions, 
          and polishing the flow. We add music, graphics, and other elements.
        </p>

        <h3>Finishing</h3>
        <p>
          Final color grading, audio mixing, and quality checks ensure your video is broadcast-ready. 
          We deliver in your specified formats with all technical specifications met.
        </p>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          Our editing team brings years of professional experience and creative vision. We work 
          efficiently without sacrificing quality, providing competitive pricing and reliable 
          turnaround times. As a full-service production company, we can also help with filming 
          and other production needs.
        </p>
      </ServicePageLayout>
    </>
  )
}
