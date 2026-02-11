import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Photography Services Bahrain | Professional Commercial Photography',
  description: 'Professional photography services in Bahrain. Commercial photography, corporate headshots, product photography, event photography, and professional photo shoots for businesses.',
  keywords: ['photography services bahrain', 'commercial photography bahrain', 'corporate photography bahrain', 'product photography bahrain', 'professional photographer bahrain'],
  openGraph: {
    title: 'Photography Services Bahrain | Film Production Bahrain',
    description: 'Professional photography services in Bahrain. Commercial and corporate photography.',
    url: 'https://filmproductionbahrain.com/photography-services-bahrain',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://filmproductionbahrain.com/photography-services-bahrain',
  },
}

const faqs = [
  {
    question: 'What photography services do you offer?',
    answer: 'We offer corporate headshots, product photography, commercial photography, event photography, architectural and interior photography, food photography, fashion photography, and professional portraits for businesses and individuals.',
  },
  {
    question: 'How much does professional photography cost in Bahrain?',
    answer: 'Corporate headshot sessions start at BD 50-100 per person. Product photography ranges from BD 15-50 per product. Half-day commercial shoots start at BD 400-600. Event photography ranges from BD 200-500. We provide custom quotes for larger projects.',
  },
  {
    question: 'Do you offer combined photo and video packages?',
    answer: 'Yes, we often combine photography and video in single productions. This is more cost-effective and ensures consistent visual style across all your content. We can provide packages that include both services.',
  },
  {
    question: 'How quickly can we receive the final images?',
    answer: 'Standard delivery is 5-7 business days for edited images. Rush delivery within 24-48 hours is available for urgent projects. Raw/unedited images can be provided sooner if needed.',
  },
  {
    question: 'Do you provide photo retouching and editing?',
    answer: 'Yes, all our photography packages include professional editing and retouching. This includes color correction, exposure adjustment, skin retouching for portraits, and background cleanup. Advanced retouching is available for additional fees.',
  },
]

const crossLinks = [
  {
    text: 'Need a website to showcase your photos?',
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
  name: 'Photography Services Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional commercial and corporate photography services in Bahrain for businesses.',
}

export default function PhotographyServicesBahrain() {
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
        title="Photography Services Bahrain"
        subtitle="Professional Images"
        heroDescription="Professional photography that captures your brand, products, and people with stunning imagery that elevates your business."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Professional Photography for Business</h2>
        <p>
          Great photography is essential for any business. From your website to marketing materials, 
          social media to presentations, professional images communicate quality and build trust. At 
          Film Production Bahrain, our photography services deliver the professional imagery your 
          business needs.
        </p>
        <p>
          As a full-service production company, we understand how photography integrates with video 
          and broader marketing efforts. We can capture both photos and video in single sessions for 
          efficiency, ensuring consistent visual style across all your content.
        </p>

        <h2>Our Photography Services</h2>
        
        <h3>Corporate Headshots</h3>
        <p>
          Professional headshots for executives, team pages, LinkedIn profiles, and marketing materials. 
          We set up professional lighting at your office or our studio, ensuring everyone looks their 
          best with consistent, polished results.
        </p>

        <h3>Product Photography</h3>
        <p>
          High-quality product images for e-commerce, catalogs, and marketing. We shoot on white 
          backgrounds for clean listings or create lifestyle product shots that tell a story. 
          Professional product photos sell more products—it's that simple.
        </p>

        <h3>Commercial Photography</h3>
        <p>
          Custom photography for advertising, marketing campaigns, and brand content. We work with 
          you to develop concepts and execute shoots that deliver images aligned with your brand 
          and objectives.
        </p>

        <h3>Event Photography</h3>
        <p>
          Professional coverage of corporate events, conferences, launches, and celebrations. We 
          capture keynote moments, networking, and atmosphere, delivering images perfect for PR, 
          social media, and internal communications.
        </p>

        <h3>Architectural and Interior Photography</h3>
        <p>
          Showcase buildings, offices, hotels, and interior spaces with professional architectural 
          photography. We use proper techniques and equipment to capture spaces accurately and 
          beautifully for real estate, hospitality, and corporate use.
        </p>

        <h3>Food Photography</h3>
        <p>
          Mouth-watering food images for restaurants, cafes, food brands, and delivery apps. Our 
          food photography makes dishes look irresistible, driving orders and building appetite appeal.
        </p>

        <h3>Fashion Photography</h3>
        <p>
          Professional fashion photography for lookbooks, e-commerce, and campaigns. We work with 
          models, stylists, and creative teams to produce imagery that showcases garments beautifully.
        </p>

        <h2>Why Professional Photography Matters</h2>
        <ul>
          <li>First impressions are formed in seconds</li>
          <li>Professional images build trust and credibility</li>
          <li>Quality photos increase engagement and conversions</li>
          <li>Consistent imagery strengthens brand identity</li>
          <li>Professional content stands out from amateur competition</li>
        </ul>

        <h2>Our Photography Process</h2>
        
        <h3>Consultation</h3>
        <p>
          We discuss your needs, review examples of styles you like, and plan the shoot. Understanding 
          your goals ensures we deliver images that work for your intended use.
        </p>

        <h3>Planning</h3>
        <p>
          We prepare shot lists, coordinate logistics, and ensure everything is ready for an efficient 
          shoot day. For complex shoots, we may scout locations and develop detailed plans.
        </p>

        <h3>Photography Session</h3>
        <p>
          Our photographers capture your images using professional equipment and techniques. We review 
          shots during the session to ensure we're getting what you need.
        </p>

        <h3>Editing and Delivery</h3>
        <p>
          All images are professionally edited including color correction, retouching, and optimization 
          for your intended use. We deliver high-resolution files and web-optimized versions.
        </p>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          Our photographers bring technical expertise and creative vision to every shoot. As part of 
          a full-service production company, we understand how photography fits into broader marketing 
          efforts. We can combine photo and video production for efficiency, and help you use images 
          across websites, social media, and marketing materials.
        </p>
      </ServicePageLayout>
    </>
  )
}
