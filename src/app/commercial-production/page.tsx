import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Commercial Production Bahrain | TV Commercials & Brand Films',
  description: 'Award-winning commercial production in Bahrain. TV commercials, social media ads, brand films, and advertising campaigns. Cinematic quality that captivates audiences.',
  keywords: ['commercial production bahrain', 'tv commercial bahrain', 'tvc production bahrain', 'advertising video bahrain', 'brand film bahrain', 'social media ads bahrain'],
  openGraph: {
    title: 'Commercial Production Bahrain | Film Production Bahrain',
    description: 'Award-winning commercial production in Bahrain. TV commercials, social media ads, and brand films.',
    url: 'https://www.filmproductionbahrain.com/commercial-production',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.filmproductionbahrain.com/commercial-production',
  },
}

const faqs = [
  {
    question: 'What is the cost of a TV commercial in Bahrain?',
    answer: 'TV commercial production in Bahrain typically ranges from BD 2,000 for simple productions to BD 20,000+ for premium campaigns with talent, multiple locations, and complex post-production. We provide detailed quotes based on your creative vision and broadcast requirements.',
  },
  {
    question: 'How long does it take to produce a commercial?',
    answer: 'Standard commercial production takes 3-6 weeks from concept to delivery. This includes creative development, pre-production, filming (1-3 days typically), and post-production. Fast-track productions can be completed in 2 weeks when necessary.',
  },
  {
    question: 'Do you handle casting and talent?',
    answer: 'Yes, we provide full casting services including talent scouting, auditions, and talent management. We work with professional actors, models, and voiceover artists to bring your commercial to life.',
  },
  {
    question: 'What formats do you deliver for broadcast and digital?',
    answer: 'We deliver in all standard broadcast formats including HD and 4K, plus optimized versions for digital platforms like YouTube, Instagram, TikTok, and Facebook. Each platform gets a properly formatted version for best performance.',
  },
  {
    question: 'Can you help with the creative concept?',
    answer: 'Absolutely. Our creative team develops concepts, scripts, and storyboards that align with your brand and marketing objectives. We collaborate closely with your team throughout the creative process.',
  },
]

const crossLinks = [
  {
    text: 'Need a landing page for your campaign?',
    url: 'https://cinematicwebworks.com',
    label: 'CinematicWebWorks.com',
  },
  {
    text: 'Launching a product or event?',
    url: 'https://bahrainnights.com',
    label: 'Promote on BahrainNights.com',
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
  name: 'Commercial Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://www.filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional commercial production services in Bahrain including TV commercials, social media ads, and brand films.',
}

export default function CommercialProduction() {
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
        title="Commercial Production Bahrain"
        subtitle="TV Commercials & Brand Films"
        heroDescription="Create compelling commercials that capture attention, build brand recognition, and drive sales. Cinematic production quality for broadcast and digital platforms."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Advertising That Makes an Impact</h2>
        <p>
          In the competitive advertising landscape of Bahrain and the GCC, your commercial needs to do more 
          than just inform—it needs to captivate, inspire, and compel action. At Film Production Bahrain, 
          we specialize in creating commercials that break through the noise and leave a lasting impression 
          on your audience.
        </p>
        <p>
          Our commercial production team combines creative storytelling with technical excellence to produce 
          advertising content that performs. Whether you're launching a new product, building brand awareness, 
          or driving sales, we craft commercials that achieve your marketing objectives.
        </p>

        <h2>Our Commercial Production Services</h2>
        
        <h3>Television Commercials (TVCs)</h3>
        <p>
          Television remains one of the most powerful advertising mediums in the GCC. Our broadcast-quality 
          TV commercials meet the technical standards of all major networks while delivering creative 
          content that engages viewers. From 15-second spots to longer format advertisements, we produce 
          TVCs that command attention and communicate your message effectively.
        </p>

        <h3>Digital and Social Media Ads</h3>
        <p>
          Digital advertising requires a different approach than traditional broadcast. We create optimized 
          video ads for platforms like YouTube, Instagram, Facebook, TikTok, and Snapchat. Each ad is 
          formatted specifically for its platform, with attention-grabbing hooks, compelling narratives, 
          and clear calls to action that drive conversions.
        </p>

        <h3>Brand Films</h3>
        <p>
          Brand films go beyond traditional advertising to tell your brand's story in a cinematic, 
          emotionally resonant way. These longer-format pieces are perfect for website headers, 
          presentations, and content marketing. We create brand films that communicate your values, 
          culture, and unique positioning in the market.
        </p>

        <h3>Product Videos</h3>
        <p>
          Showcase your products in their best light with professionally produced product videos. 
          Whether it's a lifestyle video showing your product in use, a detailed demonstration, or a 
          sleek product beauty shot, we create content that makes your offerings irresistible.
        </p>

        <h3>Campaign Videos</h3>
        <p>
          Major marketing campaigns require a suite of video content. We produce comprehensive campaign 
          packages including hero videos, cut-downs, social teasers, and behind-the-scenes content. 
          Our integrated approach ensures consistency across all touchpoints while maximizing your 
          production investment.
        </p>

        <h2>The Production Process</h2>
        
        <h3>Creative Development</h3>
        <p>
          Every great commercial starts with a great idea. Our creative team works with you to develop 
          concepts that align with your brand identity and marketing objectives. We consider your target 
          audience, competitive landscape, and key messages to craft creative that resonates and performs.
        </p>

        <h3>Pre-Production Planning</h3>
        <p>
          Meticulous planning is the foundation of a successful production. We handle casting, location 
          scouting, wardrobe, props, crew coordination, and all logistics. Our detailed production 
          planning ensures smooth filming and optimal use of your budget.
        </p>

        <h3>Production Excellence</h3>
        <p>
          On set, our experienced crew brings your vision to life using professional cinema cameras, 
          lighting, and grip equipment. Whether we're shooting on location around Bahrain or in a 
          controlled studio environment, we maintain the highest production standards.
        </p>

        <h3>Post-Production Magic</h3>
        <p>
          In post-production, we transform raw footage into polished commercials. Our editors, colorists, 
          and motion graphics artists add the finishing touches that elevate your content. Professional 
          color grading, visual effects, and audio mixing ensure broadcast-ready quality.
        </p>

        <h2>Industries We Serve</h2>
        <p>
          We have produced successful commercial campaigns for diverse industries including:
        </p>
        <ul>
          <li>Retail and E-commerce</li>
          <li>Banking and Financial Services</li>
          <li>Telecommunications</li>
          <li>Automotive</li>
          <li>Food and Beverage</li>
          <li>Healthcare</li>
          <li>Real Estate</li>
          <li>Consumer Electronics</li>
          <li>Fashion and Beauty</li>
        </ul>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          As part of the Cinematic Group, we bring a filmmaker's eye to advertising. Our commercials 
          don't just sell—they entertain and engage. We understand the unique dynamics of the Bahrain 
          and GCC market, including cultural considerations and consumer preferences.
        </p>
        <p>
          Our end-to-end production capabilities mean you work with one team from concept to completion. 
          No fragmentation, no communication gaps, just seamless execution of your vision. Contact us 
          today to discuss your commercial production needs.
        </p>
      </ServicePageLayout>
    </>
  )
}
