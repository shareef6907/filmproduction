import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Automotive Video Production Bahrain | Car Videos & Commercials',
  description: 'Professional automotive video production in Bahrain. Car commercials, vehicle showcases, dealership videos, automotive content, and car photography for dealers and brands.',
  keywords: ['automotive video bahrain', 'car video production bahrain', 'car commercial bahrain', 'dealership video bahrain', 'automotive photography bahrain'],
  openGraph: {
    title: 'Automotive Video Production Bahrain | Film Production Bahrain',
    description: 'Professional automotive video production in Bahrain. Car commercials and vehicle content.',
    url: 'https://www.filmproductionbahrain.com/automotive-video-production',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.filmproductionbahrain.com/automotive-video-production',
  },
}

const faqs = [
  {
    question: 'What types of automotive videos do you produce?',
    answer: 'We produce car commercials, vehicle showcase videos, walkaround videos, test drive content, dealership promotional videos, service department content, car launch videos, and social media content for automotive brands and dealers.',
  },
  {
    question: 'Do you have experience with luxury and sports cars?',
    answer: 'Yes, we have extensive experience filming luxury and exotic vehicles. We understand the angles, lighting, and motion techniques that showcase high-end vehicles at their best. We treat every vehicle with the care and respect it deserves.',
  },
  {
    question: 'How much does automotive video production cost?',
    answer: 'Simple vehicle walkaround videos start at BD 200-400. Professional automotive commercials range from BD 1,000-5,000. Large-scale productions with multiple vehicles, locations, and talent can range higher. We provide detailed quotes.',
  },
  {
    question: 'Can you film driving footage safely?',
    answer: 'Yes, we use proper rigging equipment, follow-vehicles, and safety protocols for dynamic driving footage. We can capture everything from interior shots to dramatic tracking footage while maintaining safety standards.',
  },
  {
    question: 'Do you provide automotive photography as well?',
    answer: 'Yes, we offer combined photography and video packages. Getting both during one session is cost-effective and ensures consistent visual branding across all your automotive content.',
  },
]

const crossLinks = [
  {
    text: 'Need a website for your dealership?',
    url: 'https://cinematicwebworks.com/automotive-website-design',
    label: 'Automotive Website Design',
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
  name: 'Automotive Video Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://www.filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional automotive video production services in Bahrain for car dealers, automotive brands, and enthusiasts.',
}

export default function AutomotiveVideoProduction() {
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
        title="Automotive Video Production Bahrain"
        subtitle="Vehicles in Motion"
        heroDescription="Cinematic automotive videos that capture the beauty, power, and emotion of vehicles with professional production that drives results."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Professional Automotive Video</h2>
        <p>
          Cars deserve to be filmed like the objects of desire they are. At Film Production Bahrain, 
          we specialize in automotive video production that captures the design, performance, and 
          emotion that make vehicles special. From dealership content to brand commercials, we create 
          automotive videos that drive interest and sales.
        </p>
        <p>
          Bahrain's car culture is strong, and buyers expect quality content when shopping for vehicles. 
          Whether you're a dealership showcasing inventory, a brand launching a new model, or an 
          enthusiast documenting your collection, we deliver professional automotive video that 
          stands out.
        </p>

        <h2>Our Automotive Video Services</h2>
        
        <h3>Car Commercials</h3>
        <p>
          Cinematic commercials that position your brand or dealership as the destination for 
          automotive excellence. We combine dramatic driving footage, beautiful static shots, and 
          compelling messaging to create commercials that drive showroom traffic.
        </p>

        <h3>Vehicle Showcase Videos</h3>
        <p>
          Detailed showcase videos that highlight every feature and angle of specific vehicles. 
          Perfect for websites, social media, and sales presentations. We capture exteriors, 
          interiors, details, and features in a format that helps buyers make decisions.
        </p>

        <h3>Walkaround Videos</h3>
        <p>
          Efficient walkaround videos for inventory marketing. We can film multiple vehicles in a 
          session, providing cost-effective content for online listings that helps vehicles sell 
          faster than static images alone.
        </p>

        <h3>Driving and Action Footage</h3>
        <p>
          Dynamic footage of vehicles in motion: highway cruising, spirited driving, launches, and 
          performance demonstrations. We use professional rigging and techniques to capture dramatic 
          driving content safely.
        </p>

        <h3>Launch Event Coverage</h3>
        <p>
          Document new model launches, unveilings, and automotive events with professional video 
          coverage. We capture the excitement and create content for marketing, social media, and 
          press distribution.
        </p>

        <h3>Dealership Content</h3>
        <p>
          Comprehensive video content for dealerships: facility tours, service department videos, 
          staff introductions, and customer testimonials. Build trust and showcase your dealership 
          experience.
        </p>

        <h2>Techniques We Use</h2>
        <ul>
          <li>Gimbal-stabilized smooth motion shots</li>
          <li>Drone aerials for dramatic reveals</li>
          <li>Car-to-car chase footage</li>
          <li>Interior POV and detail shots</li>
          <li>Rolling rig for close tracking</li>
          <li>Slow-motion highlights</li>
          <li>Time-lapse and hyperlapse</li>
          <li>Professional studio lighting</li>
          <li>Golden hour and night shoots</li>
        </ul>

        <h2>Our Automotive Production Process</h2>
        
        <h3>Planning</h3>
        <p>
          We discuss your objectives, the vehicles involved, and desired style. We plan locations, 
          timing (lighting is crucial for automotive), and shot lists to maximize production efficiency.
        </p>

        <h3>Vehicle Preparation</h3>
        <p>
          Vehicles need to look their best on camera. We coordinate preparation including detailing, 
          positioning, and any equipment installation (rigging, cameras).
        </p>

        <h3>Production</h3>
        <p>
          Our experienced automotive crew captures all planned footage. We take the time to get every 
          angle right—automotive production requires patience and precision.
        </p>

        <h3>Post-Production</h3>
        <p>
          We edit footage with appropriate pacing, color grade to enhance the vehicle's appearance, 
          and add music and graphics. The result is polished content that makes vehicles irresistible.
        </p>

        <h2>Industries We Serve</h2>
        <ul>
          <li>Car dealerships (new and used)</li>
          <li>Automotive brands</li>
          <li>Luxury and exotic car dealers</li>
          <li>Motorcycle dealers</li>
          <li>Automotive aftermarket</li>
          <li>Car rental companies</li>
          <li>Automotive events</li>
          <li>Private collectors</li>
        </ul>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          We're car enthusiasts who understand what makes vehicles special. Our team knows the angles, 
          movements, and techniques that make automotive content stand out. As part of the Cinematic 
          Group, we can also help with automotive websites and comprehensive marketing solutions for 
          dealerships and brands.
        </p>
      </ServicePageLayout>
    </>
  )
}
