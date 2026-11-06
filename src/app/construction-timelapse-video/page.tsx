import { Metadata } from 'next'
import Link from 'next/link'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Construction Timelapse Video Bahrain',
  description: 'Construction timelapse video production in Bahrain. Weatherproof site cameras document your project from ground-breaking to completion.',
  keywords: ['construction timelapse bahrain', 'building timelapse bahrain', 'construction video bahrain', 'project documentation video bahrain', 'timelapse video production bahrain', 'site progress video bahrain'],
  openGraph: {
    title: 'Construction Timelapse Video Bahrain | Film Production Bahrain',
    description: 'Construction timelapse video production in Bahrain. Document your building project from ground-breaking to completion.',
    url: 'https://www.filmproductionbahrain.com/construction-timelapse-video',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.filmproductionbahrain.com/construction-timelapse-video',
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
    question: 'What does an installation involve on a live construction site?',
    answer: 'A typical installation takes one to two hours. We agree the camera positions with your project engineer or site manager, mount the units on scaffolding, hoarding, or structural elements, conceal cabling, and run a short test capture to confirm the framing and power supply. We then hand over access details for the remote viewing platform so your team can follow progress from day one.',
  },
]

const crossLinks = [
  {
    text: 'Marketing a completed development to buyers?',
    url: 'https://www.filmproductionbahrain.com/real-estate-video-tours',
    label: 'Real Estate Video Tours',
  },
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
    url: 'https://www.filmproductionbahrain.com',
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
          and creates compelling content for marketing, investor updates, and internal records. A
          timelapse also solves a practical problem: your project team is busy building, and the story of
          that build rarely gets told until the opening photographs are taken. A timelapse camera keeps
          the record running from day one without asking anyone on site to hold a camera.
        </p>
        <p>
          This is part of our wider{' '}
          <Link href="/video-production-bahrain" className="text-film-gold hover:underline">
            video production service in Bahrain
          </Link>
          , so the same company that documents your build can also produce the launch film, the investor
          update, and the promotional campaign that runs after handover.
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
          We install professional weatherproof cameras in optimal positions to capture your construction. Our
          team handles all mounting, power, and connectivity. Cameras are secured and unobtrusive to
          avoid interference with construction activities.
        </p>
        <p>
          Positioning is where most of the craft sits. We choose mounting points that read the building's
          form rather than the site's clutter: a corner scaffold at an upper level for the wide
          establishing angle, a lower-level angle that catches the excavation and piling phase, and a
          third position facing the site entrance so the delivery rhythm and crane movements stay in
          frame. Every angle is reviewed against the final edit, because a camera that captures activity
          without composition produces footage that is accurate and useless.
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
          Upon project completion, we produce polished timelapse videos from your captured footage. This
          includes image selection, stabilization, color correction, music, and professional editing. We
          deliver multiple versions for different uses.
        </p>
        <p>
          The finishing stage is where raw captures become a story. We cut the sequence to the phases of
          the build, correct the colour so concrete, glass, and steel read correctly, and grade the
          finished piece for the tone you need. Deliverables are prepared as a polished marketing film
          with a music bed and titles, a shorter social cut for launch announcements, and a clean
          near-silent version for use behind sales conversations and site presentations.
        </p>

        <h2>Built for Bahrain's Working Conditions</h2>
        <p>
          Timelapse hardware is easy to specify and hard to keep alive. Bahrain's site environment is
          unforgiving on electronics, and equipment that fails in the first month of a two-year project
          delivers nothing. The units we install are rated for sustained outdoor operation in high
          ambient heat, with sealed housings that keep dust and humidity out of the sensor.
        </p>
        <p>
          Heat is only one variable. Sites in Bahrain also face fine dust from concrete cutting and
          breaking-out, salt-laden air near the coast, and high humidity that shortens the life of
          unprotected connectors. Power on a live site is a further consideration: we confirm the supply
          at installation rather than assuming it, and we agree cable routes with your site team so
          nothing crosses a walkway or a lifting zone.
        </p>
        <p>
          Site access is a scheduling matter we take seriously. Installations are booked around crane
          movements, deliveries, and the safety inductions your workers have completed. On occupied
          sites we work within the existing permit and method statement process. If your programme
          includes periods when work pauses, the camera keeps recording and the story stays intact
          without anyone having to remember to switch it on.
        </p>

        <h2>Where We Install</h2>
        <p>
          We cover construction activity across the Kingdom, including:
        </p>
        <ul>
          <li>Manama, Juffair, and the central business district</li>
          <li>Amwaj Islands and Bahrain Bay</li>
          <li>Durrat Al Bahrain and Diyar Al Muharraq</li>
          <li>Riffa, Saar, and the southern villa belt</li>
          <li>Industrial zones in the north and east</li>
          <li>Hotel, retail, and mixed-use developments</li>
        </ul>
        <p>
          For a development approaching handover, our{' '}
          <Link href="/real-estate-video-tours" className="text-film-gold hover:underline">
            real estate video tour service
          </Link>{' '}
          is the natural next step, giving buyers a walkthrough of the finished spaces alongside the
          timelapse that shows how they got there.
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
        <p>
          For companies that need the build documented alongside their people, staff updates, and
          recruitment material, our{' '}
          <Link href="/corporate-video-production" className="text-film-gold hover:underline">
            corporate film and video production
          </Link>{' '}
          service covers interview, internal communication, and company profile work on the same project.
        </p>
      </ServicePageLayout>
    </>
  )
}
