import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Aerial Photography & Drone Services Bahrain | Drone Video',
  description: 'Professional aerial photography and drone videography services in Bahrain. Drone photography, aerial video, real estate aerials, construction documentation, and licensed drone operators.',
  keywords: ['aerial photography bahrain', 'drone photography bahrain', 'drone video bahrain', 'aerial videography bahrain', 'drone services bahrain'],
  openGraph: {
    title: 'Aerial Photography & Drone Services Bahrain | Film Production Bahrain',
    description: 'Professional aerial photography and drone videography services in Bahrain.',
    url: 'https://www.filmproductionbahrain.com/aerial-photography-bahrain',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.filmproductionbahrain.com/aerial-photography-bahrain',
  },
}

const faqs = [
  {
    question: 'Are your drone operators licensed in Bahrain?',
    answer: 'Yes, our drone operators are fully licensed by Bahrain\'s Civil Aviation Affairs. We carry all required insurance and follow all local regulations regarding drone operation, including restricted airspace and privacy requirements.',
  },
  {
    question: 'Where can you fly drones in Bahrain?',
    answer: 'We can operate in most areas of Bahrain with proper permissions. Some areas near airports, military installations, and government buildings require special authorization, which we handle on your behalf. We assess each location and obtain necessary permits.',
  },
  {
    question: 'How much does drone photography cost in Bahrain?',
    answer: 'Basic drone photography sessions start at BD 150-300 for 1-2 hours. Real estate aerial packages range from BD 200-500. Video projects with complex shots and editing start at BD 400-800. We provide detailed quotes based on your requirements.',
  },
  {
    question: 'What equipment do you use?',
    answer: 'We use professional DJI drones including the Inspire and Mavic series, capable of 4K/6K video and high-resolution photography. Our equipment includes gimbal stabilization for smooth footage and various camera configurations for different needs.',
  },
  {
    question: 'Can you fly at night or in difficult conditions?',
    answer: 'Night flights require special authorization, which we can obtain for appropriate projects. We monitor weather conditions carefully and reschedule if conditions are unsafe. Safety is always our priority.',
  },
]

const crossLinks = [
  {
    text: 'Need real estate video with aerials?',
    url: 'https://www.filmproductionbahrain.com/real-estate-video-tours',
    label: 'Real Estate Video Tours',
  },
  {
    text: 'Need a real estate website?',
    url: 'https://cinematicwebworks.com/real-estate-website-bahrain',
    label: 'Real Estate Websites',
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
  name: 'Aerial Photography & Drone Services Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://www.filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional aerial photography and drone videography services in Bahrain with licensed operators.',
}

export default function AerialPhotographyBahrain() {
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
        title="Aerial Photography & Drone Services Bahrain"
        subtitle="Stunning Perspectives"
        heroDescription="Professional aerial photography and drone videography that captures breathtaking perspectives with licensed, insured operators."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Elevate Your Perspective</h2>
        <p>
          Aerial photography and videography provide perspectives impossible to achieve from the ground. 
          Drone footage adds production value to any project, from real estate marketing to corporate 
          videos. At Film Production Bahrain, our licensed drone operators capture stunning aerial 
          content safely and professionally.
        </p>
        <p>
          Whether you need sweeping establishing shots for a promotional video, aerial photography of a 
          property, or ongoing construction documentation, our drone services deliver dramatic results 
          while maintaining full compliance with Bahrain's aviation regulations.
        </p>

        <h2>Our Aerial Services</h2>
        
        <h3>Real Estate Aerial Photography</h3>
        <p>
          Showcase properties from their best angle with aerial photos that capture homes, buildings, 
          and surrounding areas. Aerial views are essential for real estate marketing, showing property 
          boundaries, neighborhood context, and proximity to amenities.
        </p>

        <h3>Aerial Videography</h3>
        <p>
          Cinematic drone footage for commercials, promotional videos, and corporate content. We capture 
          smooth, stabilized video with dynamic movements: reveals, orbits, tracking shots, and dramatic 
          flybys. Our footage integrates seamlessly with ground-based production.
        </p>

        <h3>Construction Progress Documentation</h3>
        <p>
          Regular aerial documentation of construction sites provides stakeholder updates and creates 
          valuable project records. We can establish recurring visits or integrate with our timelapse 
          services for comprehensive construction documentation.
        </p>

        <h3>Event Coverage</h3>
        <p>
          Capture events from above with aerial footage that shows scale and atmosphere. Aerial shots 
          are dramatic additions to event highlight videos, from outdoor festivals to corporate 
          gatherings and sporting events.
        </p>

        <h3>Industrial Inspections</h3>
        <p>
          Drone inspections of roofs, towers, and industrial facilities are safer and more cost-effective 
          than traditional methods. We provide detailed aerial imagery for maintenance assessment, 
          insurance documentation, and safety inspections.
        </p>

        <h3>Hospitality and Tourism</h3>
        <p>
          Hotels, resorts, and tourism destinations benefit enormously from aerial content. Showcase 
          beach frontage, pool areas, surrounding attractions, and overall property layouts with 
          dramatic drone footage.
        </p>

        <h2>What We Capture</h2>
        <ul>
          <li>4K and 6K video footage</li>
          <li>High-resolution still photography</li>
          <li>360° aerial panoramas</li>
          <li>Vertical/top-down perspectives</li>
          <li>Cinematic motion shots</li>
          <li>Time-lapse sequences</li>
        </ul>

        <h2>Licensed and Insured</h2>
        <p>
          Flying drones in Bahrain requires proper licensing and adherence to regulations. Our operators 
          are fully licensed by Bahrain's Civil Aviation Affairs. We carry comprehensive liability 
          insurance and follow all safety protocols. When you hire us, you're protected from the 
          regulatory and liability risks of drone operation.
        </p>

        <h2>Our Equipment</h2>
        <p>
          We operate professional DJI drones chosen for reliability, image quality, and safety features. 
          Our aircraft include obstacle avoidance systems, redundant motors, and return-to-home safety 
          features. We use multiple drones to ensure backup capability for important shoots.
        </p>

        <h2>The Process</h2>
        
        <h3>Site Assessment</h3>
        <p>
          We assess your location for flight safety, airspace restrictions, and optimal shooting 
          positions. We identify any permits needed and handle the authorization process.
        </p>

        <h3>Flight Planning</h3>
        <p>
          We plan specific shots based on your objectives, considering lighting, weather, and 
          safety factors. Complex shoots may involve multiple flights at different times of day.
        </p>

        <h3>Production</h3>
        <p>
          Our pilots execute planned shots while maintaining visual line of sight and safety 
          protocols. We capture multiple takes to ensure you have options.
        </p>

        <h3>Post-Production</h3>
        <p>
          Footage is color graded, stabilized if needed, and delivered in your required formats. 
          We can edit aerial footage into larger productions or deliver raw footage for your 
          own editing.
        </p>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          Our drone services combine technical expertise with creative vision. We're not just pilots—
          we're filmmakers who understand how to capture compelling shots. As a full-service production 
          company, we can integrate aerial footage into complete video productions, maximizing the 
          value of every drone flight.
        </p>
      </ServicePageLayout>
    </>
  )
}
