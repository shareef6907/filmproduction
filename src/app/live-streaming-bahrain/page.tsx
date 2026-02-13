import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Live Streaming Services Bahrain | Professional Livestream Production',
  description: 'Professional live streaming services in Bahrain. Multi-camera livestreams, corporate webcasts, hybrid events, YouTube/Facebook Live, and virtual event production.',
  keywords: ['live streaming bahrain', 'livestream production bahrain', 'webcast bahrain', 'virtual event streaming bahrain', 'facebook live bahrain'],
  openGraph: {
    title: 'Live Streaming Services Bahrain | Film Production Bahrain',
    description: 'Professional live streaming services in Bahrain. Multi-camera livestreams and webcasts.',
    url: 'https://www.filmproductionbahrain.com/live-streaming-bahrain',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.filmproductionbahrain.com/live-streaming-bahrain',
  },
}

const faqs = [
  {
    question: 'What platforms can you stream to?',
    answer: 'We can stream to any platform including YouTube Live, Facebook Live, LinkedIn Live, Zoom, Microsoft Teams, custom RTMP destinations, and private streaming platforms. We can also simulcast to multiple platforms simultaneously.',
  },
  {
    question: 'How much does live streaming cost in Bahrain?',
    answer: 'Basic single-camera livestreams start at BD 300-500. Multi-camera professional productions range from BD 800-2,500. Complex hybrid events with multiple locations can range from BD 2,000-5,000+. We provide detailed quotes based on your requirements.',
  },
  {
    question: 'What internet speeds do you need?',
    answer: 'We recommend minimum 20 Mbps upload speed for HD streaming, 50+ Mbps for 4K. We test connections before events and can provide bonded cellular backup for critical streams to ensure reliability.',
  },
  {
    question: 'Can you record the livestream as well?',
    answer: 'Yes, we always record livestreams as backup and provide you with the recording for on-demand viewing. We can also edit the recording into highlight videos or polished on-demand content after the event.',
  },
  {
    question: 'Do you provide graphics and lower thirds?',
    answer: 'Yes, we create custom graphics packages including lower thirds, titles, transitions, and animated elements that match your brand. Graphics are controlled live during the stream for a professional broadcast look.',
  },
]

const crossLinks = [
  {
    text: 'Need event equipment for your livestream?',
    url: 'https://eventsbahrain.com',
    label: 'EventsBahrain.com',
  },
  {
    text: 'Need a website for your virtual event?',
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
  name: 'Live Streaming Services Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://www.filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional live streaming and webcast services in Bahrain for corporate events, conferences, and virtual events.',
}

export default function LiveStreamingBahrain() {
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
        title="Live Streaming Services Bahrain"
        subtitle="Broadcast Your Event"
        heroDescription="Professional live streaming that brings your events to global audiences with broadcast-quality production and reliable delivery."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Professional Live Streaming</h2>
        <p>
          Live streaming has become essential for reaching audiences beyond your physical venue. Whether 
          you're hosting a corporate conference, product launch, or special event, professional live 
          streaming extends your reach globally while maintaining broadcast-quality production values.
        </p>
        <p>
          At Film Production Bahrain, we provide end-to-end live streaming services that handle all 
          technical complexity so you can focus on your content. From single-camera streams to 
          multi-camera productions with graphics and effects, we deliver reliable, professional livestreams.
        </p>

        <h2>Our Live Streaming Services</h2>
        
        <h3>Corporate Webcasts</h3>
        <p>
          Professional streaming for corporate communications: earnings calls, town halls, training 
          sessions, and executive announcements. We handle everything from camera setup to platform 
          delivery, ensuring your corporate message reaches employees and stakeholders reliably.
        </p>

        <h3>Conference and Event Streaming</h3>
        <p>
          Multi-camera coverage of conferences, seminars, and events. We stream main stage presentations, 
          panel discussions, and keynotes with professional switching, graphics, and audio. Extend your 
          event's reach to remote attendees worldwide.
        </p>

        <h3>Hybrid Events</h3>
        <p>
          Combine in-person and virtual attendance with hybrid event production. We create engaging 
          experiences for both audiences, managing live streaming, virtual attendee interaction, and 
          seamless integration between physical and digital participants.
        </p>

        <h3>Product Launches</h3>
        <p>
          Build excitement with live-streamed product reveals. We create dynamic, engaging broadcasts 
          that showcase your product with multiple camera angles, graphics, and professional presentation 
          that matches the significance of your launch.
        </p>

        <h3>Social Media Live</h3>
        <p>
          Professional production for Facebook Live, Instagram Live, YouTube Live, and LinkedIn Live. 
          We bring production quality that stands out from amateur streams while maintaining the 
          authentic, real-time feel that social audiences expect.
        </p>

        <h3>Private Streaming</h3>
        <p>
          Secure, private streams for internal communications, board meetings, and confidential events. 
          We can stream to password-protected platforms, private servers, or custom solutions with 
          access controls.
        </p>

        <h2>Technical Capabilities</h2>
        <ul>
          <li>Multi-camera switching with professional video mixer</li>
          <li>Broadcast-quality cameras and lenses</li>
          <li>Professional audio mixing</li>
          <li>Custom graphics and lower thirds</li>
          <li>Screen sharing and presentation integration</li>
          <li>Pre-recorded video playback</li>
          <li>Remote guest integration</li>
          <li>Multi-platform simulcasting</li>
          <li>Redundant internet connectivity</li>
          <li>HD and 4K streaming options</li>
        </ul>

        <h2>Our Streaming Process</h2>
        
        <h3>Pre-Production</h3>
        <p>
          We plan every detail: run of show, camera positions, graphics, transitions, and contingencies. 
          We coordinate with your team and test all technology before going live.
        </p>

        <h3>Site Setup</h3>
        <p>
          Our crew arrives early to set up cameras, audio, switching equipment, and streaming infrastructure. 
          We test all connections and run technical rehearsals to ensure everything works perfectly.
        </p>

        <h3>Live Production</h3>
        <p>
          During the event, our technical director switches between cameras, triggers graphics, manages 
          audio, and monitors stream quality in real-time. We handle all technical operations so you 
          can focus on content.
        </p>

        <h3>Post-Event</h3>
        <p>
          We provide recordings in multiple formats for on-demand distribution. We can also create 
          edited highlight videos and clips for social media from your livestream footage.
        </p>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          We bring broadcast experience to every livestream. Our team has produced live content for 
          major events and knows how to handle the pressure of real-time production. As part of the 
          Cinematic Group, we can also provide event equipment, AV support, and post-event video 
          production to maximize the value of your live content.
        </p>
      </ServicePageLayout>
    </>
  )
}
