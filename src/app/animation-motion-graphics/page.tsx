import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Animation & Motion Graphics Bahrain | 2D & 3D Animation Services',
  description: 'Professional animation and motion graphics production in Bahrain. 2D animation, 3D animation, logo animation, explainer animations, and animated infographics for businesses.',
  keywords: ['animation bahrain', 'motion graphics bahrain', '2d animation bahrain', '3d animation bahrain', 'animated video bahrain', 'logo animation bahrain'],
  openGraph: {
    title: 'Animation & Motion Graphics Bahrain | Film Production Bahrain',
    description: 'Professional animation and motion graphics production in Bahrain. 2D, 3D, and explainer animations.',
    url: 'https://www.filmproductionbahrain.com/animation-motion-graphics',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.filmproductionbahrain.com/animation-motion-graphics',
  },
}

const faqs = [
  {
    question: 'What types of animation do you offer?',
    answer: 'We offer 2D animation, 3D animation, motion graphics, logo animations, animated infographics, character animation, whiteboard animation, and kinetic typography. We can match any style from corporate and clean to fun and playful.',
  },
  {
    question: 'How long does animation production take?',
    answer: 'Simple motion graphics and logo animations take 1-2 weeks. Explainer videos with custom animation typically take 3-4 weeks. Complex 3D animation or longer animated videos may take 4-8 weeks depending on complexity.',
  },
  {
    question: 'How much does animation cost in Bahrain?',
    answer: 'Logo animations start at BD 150-300. Motion graphics videos range from BD 500-2,000. Full explainer videos with custom animation cost BD 1,000-3,000. 3D animation projects start at BD 2,000. We provide detailed quotes based on your specific requirements.',
  },
  {
    question: 'Do you provide Arabic text animation?',
    answer: 'Yes, we are fully equipped for Arabic motion graphics and animation. Our team handles right-to-left text animation, Arabic typography, and culturally appropriate design elements for the regional market.',
  },
  {
    question: 'Can you animate my existing logo and brand assets?',
    answer: 'Absolutely. We can take your existing logo, icons, and brand elements and bring them to life with professional animation. This is a cost-effective way to add movement to your brand without redesigning assets.',
  },
]

const crossLinks = [
  {
    text: 'Need a website with animated elements?',
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
  name: 'Animation & Motion Graphics Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://www.filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional animation and motion graphics services in Bahrain including 2D, 3D, and explainer video animation.',
}

export default function AnimationMotionGraphics() {
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
        title="Animation & Motion Graphics Bahrain"
        subtitle="Bring Ideas to Life"
        heroDescription="Professional animation and motion graphics that captivate audiences, explain complex concepts, and elevate your brand with stunning visual movement."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>The Power of Animation</h2>
        <p>
          Animation allows you to communicate ideas that are impossible or impractical to capture with 
          traditional video. From explaining complex processes to bringing brand characters to life, 
          animation opens creative possibilities limited only by imagination. At Film Production Bahrain, 
          we create professional animation and motion graphics for businesses across the Kingdom.
        </p>
        <p>
          Whether you need a simple logo animation for your social media or a full animated explainer 
          video, our team combines artistic creativity with technical expertise to deliver stunning 
          animated content that achieves your communication goals.
        </p>

        <h2>Our Animation Services</h2>
        
        <h3>2D Animation</h3>
        <p>
          Classic 2D animation brings characters, scenes, and stories to life through hand-drawn or 
          digital illustrations. We create 2D animated videos for commercials, educational content, 
          children's content, and brand storytelling. Styles range from simple and clean to detailed 
          and artistic.
        </p>

        <h3>3D Animation</h3>
        <p>
          3D animation adds depth, realism, and cinematic quality to your content. We use professional 
          3D software to create product visualizations, architectural walkthroughs, character animation, 
          and special effects. 3D is particularly effective for showcasing products that don't exist yet 
          or visualizing complex structures.
        </p>

        <h3>Motion Graphics</h3>
        <p>
          Motion graphics combine graphic design with animation to create dynamic visual content. Perfect 
          for corporate videos, presentations, social media content, and advertising. We animate text, 
          shapes, logos, and data visualizations with smooth, professional movement that captures attention.
        </p>

        <h3>Logo Animation</h3>
        <p>
          Transform your static logo into a dynamic brand asset. Logo animations are essential for video 
          intros, social media, presentations, and digital advertising. We create custom animations that 
          reflect your brand personality—whether that's elegant and sophisticated or bold and energetic.
        </p>

        <h3>Animated Infographics</h3>
        <p>
          Turn data and statistics into engaging visual stories. Animated infographics make complex 
          information digestible and shareable. Perfect for annual reports, research presentations, 
          social media content, and educational materials.
        </p>

        <h3>Explainer Video Animation</h3>
        <p>
          Explain your product, service, or concept with animated explainer videos. These videos break 
          down complex ideas into simple, engaging narratives. We handle scripting, storyboarding, 
          voiceover, and animation to deliver complete explainer videos ready for your website and 
          marketing channels.
        </p>

        <h3>Character Animation</h3>
        <p>
          Create memorable brand mascots or characters for your marketing. We design and animate custom 
          characters that represent your brand and connect with your audience on an emotional level. 
          Character animation is particularly effective for children's content, apps, and social media.
        </p>

        <h2>Our Animation Process</h2>
        
        <h3>Concept and Script</h3>
        <p>
          Every animation project begins with a clear concept. We work with you to define objectives, 
          key messages, and creative direction. For narrative animations, we develop scripts that 
          communicate effectively while keeping audiences engaged.
        </p>

        <h3>Storyboard</h3>
        <p>
          We create detailed storyboards showing every scene before animation begins. This visual 
          blueprint ensures alignment on creative direction and allows for feedback early in the 
          process, saving time and revisions later.
        </p>

        <h3>Design</h3>
        <p>
          Our designers create the visual elements: characters, backgrounds, icons, and graphics. 
          We can match your existing brand guidelines or develop new visual styles. You approve 
          designs before we proceed to animation.
        </p>

        <h3>Animation</h3>
        <p>
          Our animators bring the designs to life with fluid, professional movement. We pay careful 
          attention to timing, easing, and detail to ensure animations feel polished and engaging.
        </p>

        <h3>Sound and Delivery</h3>
        <p>
          We add voiceover, music, and sound effects to complete the experience. Final animations 
          are delivered in multiple formats optimized for your intended platforms.
        </p>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          Our animation team combines artistic talent with years of professional experience. We've 
          created animations for businesses across Bahrain and the GCC, from startups to enterprises. 
          As part of the Cinematic Group, we understand how animation fits into broader marketing 
          strategy and can help you maximize the impact of your animated content.
        </p>
      </ServicePageLayout>
    </>
  )
}
