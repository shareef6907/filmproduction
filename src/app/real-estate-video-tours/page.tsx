import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Real Estate Video Tours Bahrain | Property Walkthroughs & Virtual Tours',
  description: 'Professional real estate video tours in Bahrain. Property walkthroughs, virtual tours, drone footage, and listing videos that sell properties faster. For agents, developers, and property owners.',
  keywords: ['real estate video bahrain', 'property video bahrain', 'virtual tour bahrain', 'property walkthrough video', 'real estate videography bahrain'],
  openGraph: {
    title: 'Real Estate Video Tours Bahrain | Film Production Bahrain',
    description: 'Professional real estate video tours in Bahrain. Property walkthroughs and virtual tours that sell properties faster.',
    url: 'https://filmproductionbahrain.com/real-estate-video-tours',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://filmproductionbahrain.com/real-estate-video-tours',
  },
}

const faqs = [
  {
    question: 'How much does a real estate video cost in Bahrain?',
    answer: 'Real estate video packages in Bahrain start from BD 150 for apartments and villas, with premium packages including drone footage starting from BD 300. Large developments and commercial properties are quoted based on scope.',
  },
  {
    question: 'How quickly can you produce a property video?',
    answer: 'Standard turnaround is 3-5 business days. Same-week rush delivery is available for urgent listings. We work with your timeline to ensure videos are ready when you need them.',
  },
  {
    question: 'Do you include drone footage?',
    answer: 'Drone footage can be added to any package. It is particularly valuable for villas, waterfront properties, and developments where aerial perspective showcases the property and surroundings effectively.',
  },
  {
    question: 'What do I need to prepare before filming?',
    answer: 'Properties should be clean, decluttered, and staged for filming. We provide a pre-shoot checklist and can coordinate with cleaning and staging services if needed. Natural daylight filming produces the best results.',
  },
  {
    question: 'Can you add floor plans and property information overlays?',
    answer: 'Yes, we can incorporate floor plans, room dimensions, amenity icons, and property information graphics into your video. These elements help buyers understand the property layout and features.',
  },
]

const crossLinks = [
  {
    text: 'Need a real estate website with video integration?',
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
  name: 'Real Estate Video Tours Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional real estate video tours and property walkthrough services in Bahrain for agents, developers, and property owners.',
}

export default function RealEstateVideoTours() {
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
        title="Real Estate Video Tours Bahrain"
        subtitle="Property Marketing Videos"
        heroDescription="Sell properties faster with professional video tours that give buyers an immersive experience. Showcase every room, feature, and view with cinematic quality."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Video Sells Properties Faster</h2>
        <p>
          In Bahrain's competitive real estate market, properties with video content receive 
          significantly more inquiries than those with photos alone. At Film Production Bahrain, 
          we create professional property videos that give potential buyers a true sense of 
          the space, helping them connect emotionally with the property before they even 
          schedule a viewing.
        </p>
        <p>
          Our real estate video services cater to agents, developers, and property owners 
          across Bahrain. From luxury villas to modern apartments, from commercial spaces 
          to large-scale developments, we create video content that showcases properties 
          at their absolute best.
        </p>

        <h2>Our Real Estate Video Services</h2>
        
        <h3>Property Walkthrough Videos</h3>
        <p>
          Our signature walkthrough videos take viewers on a seamless journey through the 
          property, flowing naturally from room to room. Using gimbal stabilization for 
          smooth movement and wide-angle lenses to capture space, we create videos that 
          feel like a personal tour. Every key feature, from architectural details to 
          premium finishes, is highlighted along the way.
        </p>

        <h3>Aerial Property Tours</h3>
        <p>
          Drone footage adds a dramatic dimension to property marketing. We capture sweeping 
          aerial views that show the property in context—its neighborhood, proximity to 
          amenities, and surrounding landscape. For waterfront properties, estates, and 
          developments, aerial footage is essential for conveying the full scope and appeal.
        </p>

        <h3>Development Marketing Videos</h3>
        <p>
          For developers launching new projects, we create comprehensive marketing videos 
          that combine rendered visuals, site footage, amenity showcases, and neighborhood 
          highlights. These videos support sales launches, marketing campaigns, and investor 
          presentations.
        </p>

        <h3>Virtual Tours</h3>
        <p>
          Interactive 360° virtual tours allow buyers to explore properties at their own 
          pace, clicking through rooms and viewing in any direction. These are particularly 
          valuable for international buyers who cannot visit in person, and for filtering 
          serious inquiries from casual browsers.
        </p>

        <h3>Agent Profile Videos</h3>
        <p>
          Stand out from other agents with a professional profile video. Introduce yourself, 
          showcase your expertise and listings, and build trust with potential clients 
          before the first meeting. Video profiles generate more leads and establish you 
          as a market professional.
        </p>

        <h2>What's Included</h2>
        
        <h3>Standard Package</h3>
        <ul>
          <li>Professional walkthrough video (2-3 minutes)</li>
          <li>HD/4K quality filming</li>
          <li>Stabilized gimbal movement</li>
          <li>Professional color grading</li>
          <li>Background music and title cards</li>
          <li>Optimized for social media and portals</li>
        </ul>

        <h3>Premium Package</h3>
        <ul>
          <li>Everything in Standard package</li>
          <li>Aerial drone footage</li>
          <li>Extended video length</li>
          <li>Neighborhood and amenity shots</li>
          <li>Property information graphics</li>
          <li>Twilight/golden hour filming</li>
        </ul>

        <h2>Areas We Serve</h2>
        <p>
          We cover all of Bahrain's key real estate areas including:
        </p>
        <ul>
          <li>Manama and Juffair</li>
          <li>Seef and Diplomatic Area</li>
          <li>Amwaj Islands</li>
          <li>Durrat Al Bahrain</li>
          <li>Riffa and Saar</li>
          <li>Bahrain Bay and Reef Island</li>
          <li>Commercial and industrial zones</li>
        </ul>

        <h2>Property Types</h2>
        <p>
          We have experience filming diverse property types:
        </p>
        <ul>
          <li>Luxury villas and estates</li>
          <li>Apartments and penthouses</li>
          <li>Commercial offices and retail</li>
          <li>New development projects</li>
          <li>Hotels and hospitality properties</li>
          <li>Industrial and warehouse spaces</li>
        </ul>

        <h2>Working with Agents and Developers</h2>
        <p>
          We understand the real estate business. We work efficiently to minimize disruption 
          to occupied properties, coordinate with your showing schedules, and deliver videos 
          quickly so you can get them live on portals and social media without delay.
        </p>
        <p>
          For agents handling multiple listings, we offer bulk packages that reduce per-property 
          costs. For developers, we provide ongoing partnerships that cover all phases of a 
          project from launch to sell-out.
        </p>

        <h2>Why Video Outperforms Photos</h2>
        <p>
          Research consistently shows that real estate listings with video:
        </p>
        <ul>
          <li>Generate 403% more inquiries than listings without video</li>
          <li>Keep viewers engaged 5x longer on listing pages</li>
          <li>Result in faster sales and higher closing prices</li>
          <li>Build stronger emotional connections with buyers</li>
          <li>Pre-qualify serious buyers before viewings</li>
        </ul>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          We bring a filmmaker's eye to real estate. Our videos don't just document properties—
          they sell them. With smooth camera movements, beautiful lighting, and professional 
          editing, we create content that makes properties look their best. Contact us today 
          to schedule your property video.
        </p>
      </ServicePageLayout>
    </>
  )
}
