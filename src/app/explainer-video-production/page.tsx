import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Explainer Video Production Bahrain | Animated & Live Action',
  description: 'Professional explainer video production in Bahrain. Animated explainers, live action, whiteboard videos, and product explainers that simplify complex ideas and drive conversions.',
  keywords: ['explainer video bahrain', 'animated explainer bahrain', 'product explainer video bahrain', 'whiteboard animation bahrain', 'explainer video production bahrain'],
  openGraph: {
    title: 'Explainer Video Production Bahrain | Film Production Bahrain',
    description: 'Professional explainer video production in Bahrain. Animated and live action explainers.',
    url: 'https://filmproductionbahrain.com/explainer-video-production',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://filmproductionbahrain.com/explainer-video-production',
  },
}

const faqs = [
  {
    question: 'What is an explainer video?',
    answer: 'An explainer video is a short video (typically 60-90 seconds) that explains your product, service, or concept in a simple, engaging way. They\'re proven to increase understanding, engagement, and conversion rates when placed on websites and landing pages.',
  },
  {
    question: 'Should I choose animated or live action explainer videos?',
    answer: 'Animated explainers work well for abstract concepts, software products, and when you want a specific visual style. Live action is better when showing real people, physical products, or building trust through human connection. We can advise based on your specific needs.',
  },
  {
    question: 'How much does an explainer video cost in Bahrain?',
    answer: 'Explainer videos range from BD 500 for simple whiteboard or template-based videos to BD 3,000+ for fully custom animated explainers with original character design. Live action explainers typically range from BD 800-2,500 depending on complexity.',
  },
  {
    question: 'How long should an explainer video be?',
    answer: 'The ideal length is 60-90 seconds. This is long enough to explain your value proposition but short enough to maintain viewer attention. For complex topics, we might recommend 2-3 minutes, but shorter is generally better for engagement.',
  },
  {
    question: 'Do you write the script?',
    answer: 'Yes, scriptwriting is included in our explainer video packages. We write clear, compelling scripts that communicate your key messages effectively. You review and approve the script before production begins.',
  },
]

const crossLinks = [
  {
    text: 'Need a landing page for your explainer video?',
    url: 'https://cinematicwebworks.com/landing-page-design',
    label: 'Landing Page Design',
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
  name: 'Explainer Video Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional explainer video production services in Bahrain including animated, live action, and whiteboard explainer videos.',
}

export default function ExplainerVideoProduction() {
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
        title="Explainer Video Production Bahrain"
        subtitle="Simplify & Convert"
        heroDescription="Clear, engaging explainer videos that turn complex ideas into simple stories and convert viewers into customers."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Why Explainer Videos Work</h2>
        <p>
          Explainer videos are one of the most effective tools in digital marketing. Research shows that 
          landing pages with explainer videos see up to 80% higher conversion rates. Viewers retain 95% 
          of a message when they watch it in a video, compared to 10% when reading text. At Film 
          Production Bahrain, we create explainer videos that make complex ideas simple and drive results.
        </p>
        <p>
          Whether you're launching a new product, explaining a service, or onboarding customers, our 
          explainer videos communicate your value proposition clearly and memorably. We've helped 
          businesses across Bahrain and the GCC explain everything from fintech apps to industrial 
          processes.
        </p>

        <h2>Types of Explainer Videos</h2>
        
        <h3>Animated Explainer Videos</h3>
        <p>
          Our most popular option, animated explainers use custom graphics, characters, and motion to 
          explain concepts visually. Animation works particularly well for software products, abstract 
          services, and brands wanting a specific aesthetic. We offer various animation styles from 
          clean and corporate to fun and playful.
        </p>

        <h3>Live Action Explainer Videos</h3>
        <p>
          Show real people using your product or explaining your service. Live action builds trust and 
          human connection. We handle scripting, casting, filming, and editing to deliver polished 
          live action explainers that feel authentic and professional.
        </p>

        <h3>Whiteboard Animation</h3>
        <p>
          The classic hand-drawing-on-whiteboard style remains popular for its clarity and educational 
          feel. Whiteboard videos are particularly effective for explaining processes, teaching concepts, 
          and B2B marketing. They're also cost-effective compared to fully custom animation.
        </p>

        <h3>Screencast Explainers</h3>
        <p>
          Perfect for software and app demos, screencast videos combine screen recordings with voiceover 
          and motion graphics. We make screen recordings engaging with smooth transitions, callouts, and 
          professional editing.
        </p>

        <h3>Hybrid Explainers</h3>
        <p>
          Combine live action footage with animated graphics and text. This approach gives you the best 
          of both worlds—human connection plus visual explanation. Great for technology companies and 
          service businesses.
        </p>

        <h2>Our Explainer Video Process</h2>
        
        <h3>1. Discovery</h3>
        <p>
          We start by understanding your business, audience, and goals. What do you want viewers to do 
          after watching? What are the key messages they need to understand? We'll interview stakeholders 
          and research your market.
        </p>

        <h3>2. Script Writing</h3>
        <p>
          Our writers craft a clear, compelling script that communicates your value proposition in 
          60-90 seconds. We focus on benefits over features and use language your audience understands. 
          You approve the script before we proceed.
        </p>

        <h3>3. Storyboard</h3>
        <p>
          We visualize the script with a detailed storyboard showing every scene. This ensures we're 
          aligned on the visual approach before investing in production.
        </p>

        <h3>4. Production</h3>
        <p>
          For animation, our artists create all visual assets and animate them to the approved script 
          and voiceover. For live action, we handle casting, filming, and capturing all footage needed.
        </p>

        <h3>5. Post-Production</h3>
        <p>
          We add professional voiceover, music, and sound effects. Everything is edited, color graded, 
          and polished to deliver a broadcast-quality explainer video ready for your website.
        </p>

        <h2>Where to Use Your Explainer Video</h2>
        <ul>
          <li>Homepage hero section</li>
          <li>Product and service landing pages</li>
          <li>Social media advertising</li>
          <li>Email marketing campaigns</li>
          <li>Trade show booths and presentations</li>
          <li>Sales team presentations</li>
          <li>Customer onboarding</li>
          <li>App store listings</li>
        </ul>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          We've produced explainer videos for businesses of all sizes across diverse industries. Our 
          team combines marketing expertise with production quality to create videos that don't just 
          look good—they convert. As part of the Cinematic Group, we can also help you build landing 
          pages and marketing campaigns to maximize your explainer video's impact.
        </p>
      </ServicePageLayout>
    </>
  )
}
