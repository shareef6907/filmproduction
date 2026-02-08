import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Drone Videography Bahrain | Aerial Cinematography & Photography',
  description: 'Professional drone videography in Bahrain. Licensed aerial cinematography for real estate, events, tourism, and commercial projects. Stunning 4K footage from above.',
  keywords: ['drone videography bahrain', 'aerial video bahrain', 'drone photography bahrain', 'aerial cinematography bahrain', 'drone filming bahrain'],
  openGraph: {
    title: 'Drone Videography Bahrain | Film Production Bahrain',
    description: 'Professional drone videography in Bahrain. Aerial cinematography for real estate, events, and commercial projects.',
    url: 'https://filmproductionbahrain.com/drone-videography',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://filmproductionbahrain.com/drone-videography',
  },
}

const faqs = [
  {
    question: 'Do you have permits for drone flying in Bahrain?',
    answer: 'Yes, we are fully licensed and registered with Bahrain Civil Aviation Affairs (CAA). We handle all necessary permits and flight permissions for your project, ensuring legal compliance.',
  },
  {
    question: 'What drone equipment do you use?',
    answer: 'We use professional-grade DJI drones including the Inspire 3 and Mavic 3 Pro, capable of capturing 4K and 6K footage with cinema-quality cameras. Our equipment includes obstacle avoidance, extended battery life, and professional gimbal systems.',
  },
  {
    question: 'Can you fly drones at events?',
    answer: 'Yes, we can fly at many outdoor events with proper permits and safety measures. We conduct risk assessments and work with venue managers to ensure safe operations. Some restricted areas may require additional permissions.',
  },
  {
    question: 'What is the cost of drone videography in Bahrain?',
    answer: 'Drone videography starts from BD 200 for simple shoots and scales based on complexity, duration, and post-production requirements. Real estate shoots typically range BD 200-500, while larger commercial projects vary based on scope.',
  },
  {
    question: 'How do weather conditions affect drone filming?',
    answer: 'We monitor weather closely and schedule shoots for optimal conditions. Light wind is manageable, but we reschedule in heavy winds, rain, or sandstorms. We always have backup dates planned for weather-dependent projects.',
  },
]

const crossLinks = [
  {
    text: 'Need real estate website with aerial tours?',
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
  name: 'Drone Videography Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional drone videography and aerial cinematography services in Bahrain for real estate, events, and commercial projects.',
}

export default function DroneVideography() {
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
        title="Drone Videography Bahrain"
        subtitle="Aerial Cinematography"
        heroDescription="Capture breathtaking aerial perspectives that elevate your projects. Licensed, professional drone videography for real estate, events, tourism, and commercial productions."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>A New Perspective on Your Projects</h2>
        <p>
          Aerial footage transforms ordinary videos into extraordinary visual experiences. At Film 
          Production Bahrain, our professional drone videography services capture stunning perspectives 
          that ground-level cameras simply cannot achieve. From sweeping establishing shots to dynamic 
          tracking movements, drone footage adds production value and visual impact to any project.
        </p>
        <p>
          As licensed drone operators in Bahrain, we navigate the regulatory requirements so you don't 
          have to. Our team handles all permits, safety assessments, and flight planning, ensuring 
          legal compliance while delivering exceptional aerial content.
        </p>

        <h2>Our Drone Videography Services</h2>
        
        <h3>Real Estate Aerial Tours</h3>
        <p>
          Show properties from their best angles with stunning aerial footage. We capture estate 
          overviews, neighborhood context, and property features that ground-level photography 
          cannot convey. Our real estate drone packages include smooth fly-throughs, orbit shots 
          around properties, and establishing shots that help buyers visualize the full picture.
        </p>
        <p>
          For luxury properties, waterfront estates, and large developments, aerial footage is 
          essential for showcasing the scope, location advantages, and lifestyle potential. We 
          work with real estate agents, developers, and property owners across Bahrain.
        </p>

        <h3>Construction and Development Progress</h3>
        <p>
          Document your construction projects from above with regular aerial progress updates. 
          Our drone footage provides stakeholders, investors, and marketing teams with compelling 
          visual documentation of development milestones. Time-lapse compilations show the full 
          construction journey from groundbreaking to completion.
        </p>

        <h3>Tourism and Hospitality</h3>
        <p>
          Bahrain's hotels, resorts, and attractions look spectacular from the air. We create 
          sweeping aerial content for hospitality marketing, destination promotion, and tourism 
          campaigns. From beach resorts to city hotels, our drone footage showcases facilities, 
          surroundings, and the overall guest experience.
        </p>

        <h3>Event Coverage</h3>
        <p>
          Add a cinematic dimension to your event coverage with aerial footage. Outdoor events, 
          festivals, sports competitions, and large gatherings benefit from the unique perspectives 
          that drone cinematography provides. We capture crowd shots, venue overviews, and dynamic 
          action from above.
        </p>

        <h3>Commercial and Brand Films</h3>
        <p>
          Elevate your commercials and brand films with professional aerial sequences. Whether 
          you need establishing shots, dramatic reveals, or dynamic tracking moves, our drone 
          cinematography adds Hollywood-level production value to your content.
        </p>

        <h2>Our Equipment and Capabilities</h2>
        <p>
          We invest in the best drone technology to deliver exceptional results:
        </p>
        <ul>
          <li><strong>DJI Inspire 3:</strong> Cinema-grade drone with interchangeable lenses and 8K ProRes capture</li>
          <li><strong>DJI Mavic 3 Pro:</strong> Versatile drone with triple camera system for various applications</li>
          <li><strong>4K/6K/8K Video:</strong> Ultra-high resolution footage for the highest quality output</li>
          <li><strong>HDR Capability:</strong> Extended dynamic range for challenging lighting conditions</li>
          <li><strong>Advanced Stabilization:</strong> Smooth, cinematic movement in all conditions</li>
          <li><strong>Precision GPS:</strong> Accurate positioning for complex flight paths and repeatable shots</li>
        </ul>

        <h2>Safety and Compliance</h2>
        <p>
          Operating drones in Bahrain requires proper authorization and adherence to aviation 
          regulations. Our team is:
        </p>
        <ul>
          <li>Registered with Bahrain Civil Aviation Affairs (CAA)</li>
          <li>Trained in safe flight operations and emergency procedures</li>
          <li>Experienced in obtaining location-specific flight permissions</li>
          <li>Fully insured for commercial drone operations</li>
          <li>Knowledgeable about restricted zones and flight limitations</li>
        </ul>
        <p>
          We conduct thorough site assessments before every shoot and maintain the highest safety 
          standards. Our priority is capturing great footage while ensuring the safety of people, 
          property, and aircraft in the area.
        </p>

        <h2>Locations We Cover</h2>
        <p>
          We operate throughout Bahrain, including:
        </p>
        <ul>
          <li>Manama and the financial district</li>
          <li>Amwaj Islands and Durrat Al Bahrain</li>
          <li>Bahrain Bay and Reef Island</li>
          <li>Industrial areas and construction sites</li>
          <li>Resort properties and beach locations</li>
          <li>Cultural and heritage sites (with appropriate permissions)</li>
        </ul>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          Drone footage is only as good as the operator behind the controls. Our experienced 
          pilots combine technical flying skills with a cinematographer's eye for composition 
          and movement. We don't just fly drones—we create aerial cinema. Contact us today to 
          discuss your aerial videography needs.
        </p>
      </ServicePageLayout>
    </>
  )
}
