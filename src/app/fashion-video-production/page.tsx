import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Fashion Video Production Bahrain | Lookbook & Campaign Videos',
  description: 'Professional fashion video production in Bahrain. Lookbook videos, campaign films, fashion show coverage, e-commerce videos, and brand content for fashion labels and boutiques.',
  keywords: ['fashion video production bahrain', 'fashion film bahrain', 'lookbook video bahrain', 'fashion campaign video bahrain', 'clothing video bahrain'],
  openGraph: {
    title: 'Fashion Video Production Bahrain | Film Production Bahrain',
    description: 'Professional fashion video production in Bahrain. Lookbook videos and campaign films.',
    url: 'https://www.filmproductionbahrain.com/fashion-video-production',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.filmproductionbahrain.com/fashion-video-production',
  },
}

const faqs = [
  {
    question: 'What types of fashion videos do you produce?',
    answer: 'We produce lookbook videos, brand campaign films, fashion show coverage, behind-the-scenes content, e-commerce product videos, social media content, model portfolios, and promotional videos for fashion brands, boutiques, and designers.',
  },
  {
    question: 'Do you provide styling and creative direction?',
    answer: 'We can provide creative direction and work with your styling team, or recommend stylists, makeup artists, and hair stylists from our network of fashion industry professionals.',
  },
  {
    question: 'How much does fashion video production cost?',
    answer: 'E-commerce product videos start at BD 150-300 per item. Lookbook videos range from BD 800-2,500. Full campaign productions with models, locations, and styling range from BD 2,000-10,000+ depending on scope.',
  },
  {
    question: 'Can you film fashion shows and events?',
    answer: 'Yes, we provide full coverage of fashion shows, trunk shows, and fashion events. We capture runway footage, backstage content, and event atmosphere for promotional and documentary purposes.',
  },
  {
    question: 'Do you work with modest fashion brands?',
    answer: 'Absolutely. We work with fashion brands across all styles including modest fashion, which is a significant market in Bahrain and the GCC. We understand the aesthetic and cultural considerations involved.',
  },
]

const crossLinks = [
  {
    text: 'Need an e-commerce website for your fashion brand?',
    url: 'https://cinematicwebworks.com/ecommerce-website-bahrain',
    label: 'E-commerce Websites',
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
  name: 'Fashion Video Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://www.filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional fashion video production services in Bahrain for brands, boutiques, and designers.',
}

export default function FashionVideoProduction() {
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
        title="Fashion Video Production Bahrain"
        subtitle="Style in Motion"
        heroDescription="Stunning fashion videos that capture the beauty and movement of your collections with cinematic production that elevates your brand."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Fashion Comes Alive on Video</h2>
        <p>
          Fashion is about movement, texture, and emotion—elements that video captures better than 
          any other medium. At Film Production Bahrain, we create fashion videos that bring garments 
          to life, tell brand stories, and inspire desire in your audience.
        </p>
        <p>
          Whether you're a fashion designer launching a new collection, a boutique showcasing arrivals, 
          or an e-commerce brand needing product videos, we deliver polished fashion content that 
          matches the quality of your products.
        </p>

        <h2>Our Fashion Video Services</h2>
        
        <h3>Lookbook Videos</h3>
        <p>
          Showcase your collection with stylish lookbook videos that capture every piece beautifully. 
          We film models in carefully selected locations, capturing movement and detail that brings 
          garments to life and inspires customers.
        </p>

        <h3>Brand Campaign Films</h3>
        <p>
          Create aspirational campaign videos that communicate your brand identity and aesthetic. 
          Campaign films are about more than clothes—they're about the lifestyle and feeling your 
          brand represents. We craft cinematic content that resonates with your target audience.
        </p>

        <h3>E-Commerce Product Videos</h3>
        <p>
          Video on product pages increases conversion rates significantly. We produce efficient 
          product videos showing items from multiple angles, on models, and with detail shots. 
          Perfect for online stores and marketplaces.
        </p>

        <h3>Fashion Show Coverage</h3>
        <p>
          Document your fashion show with professional multi-camera coverage. We capture runway 
          walks, designer moments, audience reactions, and backstage preparation. The result is 
          content perfect for press, social media, and your brand archives.
        </p>

        <h3>Behind-the-Scenes Content</h3>
        <p>
          Audiences love seeing behind the curtain. We create engaging behind-the-scenes content 
          from photoshoots, design processes, and fashion events that builds brand connection and 
          performs well on social media.
        </p>

        <h3>Social Media Fashion Content</h3>
        <p>
          Short-form fashion content for Instagram, TikTok, and other platforms. We create trendy, 
          engaging videos that showcase your products in formats optimized for each platform's 
          audience and algorithm.
        </p>

        <h2>Our Fashion Production Approach</h2>
        
        <h3>Understanding Your Brand</h3>
        <p>
          Every fashion brand has a unique aesthetic. We take time to understand your brand identity, 
          target customer, and visual language before developing concepts that authentically represent 
          your label.
        </p>

        <h3>Creative Collaboration</h3>
        <p>
          We work closely with designers, stylists, and creative directors to bring your vision to 
          life. Whether you have a clear concept or need creative development, we're collaborative 
          partners in the process.
        </p>

        <h3>Attention to Detail</h3>
        <p>
          Fashion demands perfection. We pay meticulous attention to lighting, styling, movement, and 
          every detail that affects how garments appear on camera. Nothing distracts from the clothes.
        </p>

        <h3>Beautiful Imagery</h3>
        <p>
          We use cinema cameras and professional lighting to create imagery worthy of fashion's high 
          standards. Post-production includes careful color grading that enhances fabrics and tones.
        </p>

        <h2>Clients We Work With</h2>
        <ul>
          <li>Fashion designers and labels</li>
          <li>Boutiques and retailers</li>
          <li>E-commerce fashion brands</li>
          <li>Modest fashion brands</li>
          <li>Jewelry and accessories brands</li>
          <li>Footwear brands</li>
          <li>Fashion events and shows</li>
          <li>Fashion publications</li>
        </ul>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          We understand fashion's visual demands and bring the technical skill to meet them. Our team 
          knows how to make garments look their best on camera, working with movement, fabric, and 
          light to create compelling content. As part of the Cinematic Group, we can also help with 
          e-commerce websites to showcase your fashion videos effectively.
        </p>
      </ServicePageLayout>
    </>
  )
}
