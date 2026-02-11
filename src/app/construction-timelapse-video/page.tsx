import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Construction Timelapse Video Bahrain | Project Documentation',
  description: 'Professional construction timelapse video production in Bahrain. Document your building project from ground-breaking to completion with stunning timelapse footage.',
  keywords: ['construction timelapse bahrain', 'building timelapse bahrain', 'construction video bahrain', 'project documentation video bahrain', 'timelapse video production bahrain'],
  openGraph: {
    title: 'Construction Timelapse Video Bahrain | Film Production Bahrain',
    description: 'Professional construction timelapse video production in Bahrain. Document your building projects.',
    url: 'https://filmproductionbahrain.com/construction-timelapse-video',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://filmproductionbahrain.com/construction-timelapse-video',
  },
}

const faqs = [
  {
    question: 'How does construction timelapse work?',
    answer: 'We install weatherproof cameras on-site that capture images at regular intervals throughout your project. These images are compiled into stunning timelapse videos that condense months or years of construction into minutes of compelling footage.',
  },
  {
    question: 'How much does construction timelapse cost?',
    answer: 'Pricing depends on project duration and camera setups. Single camera installations start at BD 300/month. Multi-camera setups for large projects range from BD 500-1,500/month. We also offer project-based packages for the full construction duration.',
  },
  {
    question: 'What equipment do you use?',
    answer: 'We use professional-grade weatherproof timelapse cameras designed for construction environments. Our cameras capture high-resolution images, operate in all weather conditions, and include remote monitoring. We handle all installation and maintenance.',
  },
  {
    question: 'Can we access footage during the project?',
    answer: 'Yes, our systems provide remote access to captured images. You can view progress remotely, use images for project updates, and even create interim timelapse videos during construction. Full footage is processed into final videos upon project completion.',
  },
  {
    question: 'Do you provide drone footage as well?',
    answer: 'Yes, we can combine fixed-camera timelapse with periodic drone footage to provide aerial perspectives of your construction progress. Drone footage adds production value and shows site context that ground-level cameras miss.',
  },
]

const crossLinks = [
  {
    text: 'Need a website for your development project?',
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
  name: 'Construction Timelapse Video Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional construction timelapse video production services in Bahrain for project documentation and marketing.',
}

export default function ConstructionTimelapseVideo() {
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
        title="Construction Timelapse Video Bahrain"
        subtitle="Document Your Vision"
        heroDescription="Professional timelapse documentation that transforms months of construction into captivating videos showcasing your project's journey from foundation to completion."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Capture Your Construction Journey</h2>
        <p>
          Construction timelapse videos are powerful tools for documentation, marketing, and stakeholder 
          communication. At Film Production Bahrain, we provide comprehensive timelapse services that 
          capture every phase of your construction project in stunning detail.
        </p>
        <p>
          Whether you're building a commercial tower, residential development, industrial facility, or 
          infrastructure project, our timelapse documentation preserves your achievement for posterity 
          and creates compelling content for marketing, investor updates, and internal records.
        </p>

        <h2>Benefits of Construction Timelapse</h2>
        
        <h3>Marketing and Sales</h3>
        <p>
          Timelapse videos are incredibly engaging marketing assets. Real estate developers use them to 
          showcase completed projects, demonstrate construction quality, and build confidence with buyers. 
          Contractors use them to demonstrate capabilities and win new business.
        </p>

        <h3>Stakeholder Communication</h3>
        <p>
          Keep investors, partners, and clients informed with visual progress updates. A timelapse video 
          communicates progress more effectively than reports or still photos. Monthly or quarterly 
          timelapse compilations make excellent update materials.
        </p>

        <h3>Project Documentation</h3>
        <p>
          Create a permanent record of your construction process. Timelapse footage is valuable for 
          resolving disputes, analyzing project timelines, and documenting methodology. The visual 
          record can prove construction quality and timeline compliance.
        </p>

        <h3>Remote Monitoring</h3>
        <p>
          Our timelapse systems include remote access, allowing project managers to check on site 
          progress from anywhere. Monitor activity, verify progress, and identify issues without 
          being on-site.
        </p>

        <h2>Our Timelapse Services</h2>
        
        <h3>Camera Installation</h3>
        <p>
          We install professional weatherproof cameras in optimal positions to capture your construction. 
          Our team handles all mounting, power, and connectivity. Cameras are secured and unobtrusive 
          to avoid interference with construction activities.
        </p>

        <h3>Continuous Capture</h3>
        <p>
          Our cameras operate 24/7, capturing images at intervals you specify—typically every 15-60 
          minutes. All images are stored securely and backed up to prevent data loss. We handle all 
          technical aspects throughout your project.
        </p>

        <h3>Remote Access</h3>
        <p>
          Access your images remotely through our secure portal. View the latest captures, download 
          images for reports, and monitor site activity. We can also provide real-time camera feeds 
          for live viewing.
        </p>

        <h3>Video Production</h3>
        <p>
          Upon project completion, we produce polished timelapse videos from your captured footage. 
          This includes image selection, stabilization, color correction, music, and professional 
          editing. We deliver multiple versions for different uses.
        </p>

        <h3>Drone Integration</h3>
        <p>
          Enhance your timelapse with periodic drone footage. We can visit your site monthly or quarterly 
          to capture aerial perspectives that complement your fixed-camera footage, providing comprehensive 
          documentation from all angles.
        </p>

        <h2>Project Types We Document</h2>
        <ul>
          <li>High-rise towers and commercial buildings</li>
          <li>Residential developments and villas</li>
          <li>Industrial facilities and warehouses</li>
          <li>Hotels and hospitality projects</li>
          <li>Infrastructure and civil works</li>
          <li>Renovations and fit-outs</li>
          <li>Event setup and installations</li>
          <li>Landscaping and outdoor projects</li>
        </ul>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          We understand construction environments and know how to capture projects effectively. Our 
          equipment is built for the demands of construction sites—heat, dust, and extended deployment. 
          As part of the Cinematic Group, we can also produce additional video content for your project: 
          promotional videos, virtual tours, and marketing materials that leverage your timelapse footage.
        </p>
      </ServicePageLayout>
    </>
  )
}
