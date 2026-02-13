import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Virtual Event Production Bahrain | Online Event Services',
  description: 'Professional virtual event production in Bahrain. Virtual conferences, online summits, webinars, virtual trade shows, and remote event production with engaging digital experiences.',
  keywords: ['virtual event production bahrain', 'online event bahrain', 'virtual conference bahrain', 'webinar production bahrain', 'digital event bahrain'],
  openGraph: {
    title: 'Virtual Event Production Bahrain | Film Production Bahrain',
    description: 'Professional virtual event production in Bahrain. Virtual conferences and online events.',
    url: 'https://www.filmproductionbahrain.com/virtual-event-production',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.filmproductionbahrain.com/virtual-event-production',
  },
}

const faqs = [
  {
    question: 'What virtual event platforms do you work with?',
    answer: 'We work with all major platforms including Zoom, Microsoft Teams, Hopin, Airmeet, vFairs, custom web platforms, and streaming platforms like YouTube and Vimeo. We can recommend the best platform for your specific needs and audience.',
  },
  {
    question: 'How do you make virtual events engaging?',
    answer: 'We create engaging experiences through professional production quality, dynamic presentations, interactive elements, live polling, Q&A sessions, networking features, and varied content formats that maintain audience attention throughout.',
  },
  {
    question: 'How much does virtual event production cost?',
    answer: 'Simple webinars with basic production start at BD 300-500. Virtual conferences with multiple sessions range from BD 1,500-5,000. Large-scale virtual events with custom platforms and full production can range from BD 5,000-15,000+.',
  },
  {
    question: 'Can speakers present remotely from different locations?',
    answer: 'Yes, we regularly produce events with speakers joining from multiple locations globally. We coordinate with remote speakers, ensure their technical setup is optimized, and integrate them seamlessly into the broadcast.',
  },
  {
    question: 'Do you provide speaker coaching?',
    answer: 'Yes, we offer pre-event speaker preparation including technical setup guidance, on-camera coaching, and rehearsals. Helping speakers look and sound their best is key to a successful virtual event.',
  },
]

const crossLinks = [
  {
    text: 'Need a website for your virtual event?',
    url: 'https://cinematicwebworks.com',
    label: 'CinematicWebWorks.com',
  },
  {
    text: 'Planning a hybrid event with in-person components?',
    url: 'https://eventsbahrain.com',
    label: 'EventsBahrain.com',
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
  name: 'Virtual Event Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://www.filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional virtual event production services in Bahrain for conferences, webinars, and online events.',
}

export default function VirtualEventProduction() {
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
        title="Virtual Event Production Bahrain"
        subtitle="Events Without Boundaries"
        heroDescription="Professional virtual event production that creates engaging online experiences for global audiences with broadcast-quality production."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Professional Virtual Events</h2>
        <p>
          Virtual events have become a permanent part of the event landscape, offering reach and 
          accessibility that physical events can't match. But successful virtual events require more 
          than just turning on a webcam—they need professional production to engage audiences and 
          deliver value.
        </p>
        <p>
          At Film Production Bahrain, we produce virtual events that captivate audiences from start 
          to finish. Whether you're hosting a global conference, company-wide meeting, or client 
          webinar, we bring broadcast-quality production to your online event.
        </p>

        <h2>Our Virtual Event Services</h2>
        
        <h3>Virtual Conferences</h3>
        <p>
          Full-scale virtual conferences with multiple tracks, keynotes, breakout sessions, and 
          networking opportunities. We handle platform selection, speaker management, technical 
          production, and attendee experience design to deliver events that rival in-person experiences.
        </p>

        <h3>Webinars and Webcasts</h3>
        <p>
          Professional webinar production that elevates your content above typical video calls. 
          We provide professional visuals, smooth transitions, integrated graphics, and technical 
          support so your presenters can focus on delivering value.
        </p>

        <h3>Virtual Summits</h3>
        <p>
          Multi-day online events bringing together industry leaders and audiences globally. We manage 
          complex production schedules, multiple speakers across time zones, and create engaging 
          experiences that keep audiences coming back each day.
        </p>

        <h3>Online Training Events</h3>
        <p>
          Virtual training and workshops that maintain engagement and ensure learning outcomes. We 
          incorporate interactive elements, breakout sessions, and varied formats to keep participants 
          active and engaged throughout.
        </p>

        <h3>Virtual Product Launches</h3>
        <p>
          Create excitement for product announcements with professional virtual launch events. We 
          produce polished broadcasts that showcase your product with the energy and production value 
          it deserves.
        </p>

        <h3>Hybrid Events</h3>
        <p>
          Combine physical and virtual attendance for maximum reach. We produce engaging experiences 
          for both in-person and remote audiences, ensuring virtual attendees feel as included and 
          engaged as those in the room.
        </p>

        <h2>What Sets Our Virtual Events Apart</h2>
        
        <h3>Broadcast-Quality Production</h3>
        <p>
          Professional cameras, lighting, and audio—even for remote speakers. We provide equipment 
          kits for key presenters and guide others to optimize their home setups. The result is 
          polished, professional visuals throughout your event.
        </p>

        <h3>Engaging Content Design</h3>
        <p>
          We help design event formats that maintain attention. Varied session types, interactive 
          elements, networking breaks, and engaging presentations keep audiences watching instead 
          of multitasking.
        </p>

        <h3>Seamless Technology</h3>
        <p>
          We handle all technical complexity: platform setup, speaker integration, screen sharing, 
          graphics, and troubleshooting. Attendees and speakers experience smooth, professional 
          events without technical hiccups.
        </p>

        <h3>Interactive Features</h3>
        <p>
          Polls, Q&A, chat moderation, networking rooms, and gamification keep audiences engaged 
          and create two-way experiences that make virtual events valuable for attendees.
        </p>

        <h2>Our Production Process</h2>
        
        <h3>Planning</h3>
        <p>
          We work with you to design your event: agenda, platforms, speaker requirements, and attendee 
          experience. We create detailed production plans and run of show documents.
        </p>

        <h3>Speaker Preparation</h3>
        <p>
          We coordinate with all speakers: providing technical requirements, optimizing setups, 
          conducting rehearsals, and ensuring everyone is comfortable with the technology.
        </p>

        <h3>Technical Setup</h3>
        <p>
          We configure platforms, set up streaming infrastructure, create graphics packages, and 
          test all systems thoroughly before go-live.
        </p>

        <h3>Live Production</h3>
        <p>
          On event day, our team manages all technical operations: switching, graphics, speaker 
          management, audience interaction, and troubleshooting. We run your event so you can focus 
          on content and guests.
        </p>

        <h3>Post-Event</h3>
        <p>
          We provide recordings, analytics, and edited content for on-demand distribution and 
          promotional use.
        </p>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          We bring professional broadcast experience to virtual events. Our team understands both 
          the technical and creative elements needed to produce engaging online experiences. As part 
          of the Cinematic Group, we can also support your virtual events with website development, 
          promotional videos, and post-event content creation.
        </p>
      </ServicePageLayout>
    </>
  )
}
