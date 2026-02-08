import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Event Videography Bahrain | Conferences, Galas & Corporate Events',
  description: 'Professional event videography in Bahrain. Corporate events, conferences, galas, product launches, and live streaming. Capture every moment with cinematic quality.',
  keywords: ['event videography bahrain', 'corporate event video bahrain', 'conference videography bahrain', 'gala video production bahrain', 'live streaming bahrain'],
  openGraph: {
    title: 'Event Videography Bahrain | Film Production Bahrain',
    description: 'Professional event videography in Bahrain. Conferences, galas, and corporate events captured with cinematic quality.',
    url: 'https://filmproductionbahrain.com/event-videography',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://filmproductionbahrain.com/event-videography',
  },
}

const faqs = [
  {
    question: 'How many videographers do you send to events?',
    answer: 'The number of videographers depends on event size and requirements. Small events typically need 1-2 videographers, while large conferences or galas may require 3-4+ to capture multiple angles and breakout sessions simultaneously.',
  },
  {
    question: 'Do you provide live streaming services?',
    answer: 'Yes, we offer professional live streaming for events of all sizes. We can stream to YouTube, Facebook, LinkedIn, or custom platforms with multiple camera feeds, graphics overlays, and professional switching.',
  },
  {
    question: 'How quickly can we receive the highlight video?',
    answer: 'Standard delivery is 2-3 weeks for fully edited highlight videos. Same-day or next-day edits are available for urgent needs, perfect for social media or immediate distribution.',
  },
  {
    question: 'What types of events do you cover?',
    answer: 'We cover corporate conferences, product launches, award ceremonies, galas, exhibitions, seminars, workshops, annual meetings, team building events, and more. Both indoor and outdoor events.',
  },
  {
    question: 'Do you capture speaker presentations?',
    answer: 'Yes, we specialize in capturing speaker presentations with professional multi-camera setups. We can integrate presentation slides into the final video and provide individual speaker clips.',
  },
]

const crossLinks = [
  {
    text: 'Planning an event? Get more visibility',
    url: 'https://bahrainnights.com',
    label: 'Promote on BahrainNights.com',
  },
  {
    text: 'Need a website for your event?',
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
  name: 'Event Videography Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional event videography services in Bahrain including corporate events, conferences, and live streaming.',
}

export default function EventVideography() {
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
        title="Event Videography Bahrain"
        subtitle="Corporate Events & Conferences"
        heroDescription="Capture the energy, insights, and key moments of your events with professional videography that extends your event's impact long after the last guest leaves."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Extend Your Event's Reach</h2>
        <p>
          Your event is a significant investment of time, money, and effort. Professional event videography 
          ensures that investment pays dividends long after the event concludes. At Film Production Bahrain, 
          we capture the essence of your events—the keynote insights, networking moments, brand activations, 
          and emotional highlights—creating content that continues to engage and inspire.
        </p>
        <p>
          Whether you're hosting an intimate executive retreat or a large-scale industry conference, our 
          experienced event videography team documents every important moment. We understand that events 
          move fast and moments can't be recreated, which is why we bring the expertise and equipment 
          to capture it all the first time.
        </p>

        <h2>Our Event Videography Services</h2>
        
        <h3>Conference and Summit Coverage</h3>
        <p>
          Conferences and summits are packed with valuable content. We deploy multi-camera setups to 
          capture keynote presentations, panel discussions, and breakout sessions. Our team ensures 
          that speaker content is captured with crystal-clear audio and professional visuals, ready 
          for distribution to attendees who couldn't make it or for training and marketing purposes.
        </p>

        <h3>Gala and Award Ceremony Coverage</h3>
        <p>
          Galas and award ceremonies are celebratory occasions that deserve to be remembered. We capture 
          the glamour, the recognition moments, the speeches, and the networking that make these events 
          special. Our cinematic approach ensures your highlight video reflects the prestige of the occasion.
        </p>

        <h3>Product Launch Events</h3>
        <p>
          Product launches are pivotal moments for any brand. We capture the reveal, audience reactions, 
          executive presentations, and product demonstrations. This footage becomes valuable marketing 
          content for ongoing campaigns, social media, and sales enablement.
        </p>

        <h3>Exhibition and Trade Show Coverage</h3>
        <p>
          Trade shows and exhibitions are opportunities to capture your brand presence, booth interactions, 
          and industry networking. We create engaging recap videos that showcase your participation and 
          generate content for future marketing efforts.
        </p>

        <h3>Live Streaming</h3>
        <p>
          Extend your event's reach beyond the physical venue with professional live streaming. We provide 
          multi-camera streaming with professional switching, graphics overlays, and reliable connectivity. 
          Stream to any platform—YouTube, Facebook, LinkedIn, or your own website—with broadcast-quality 
          production values.
        </p>

        <h2>What We Deliver</h2>
        
        <h3>Highlight Reels</h3>
        <p>
          Dynamic 2-5 minute highlight videos that capture the best moments, key takeaways, and overall 
          energy of your event. Perfect for social media, email campaigns, and promotional use.
        </p>

        <h3>Full Session Recordings</h3>
        <p>
          Complete recordings of presentations, panels, and sessions for distribution to attendees, 
          on-demand viewing, or internal archives. Professional editing ensures polished final products.
        </p>

        <h3>Social Media Content</h3>
        <p>
          Platform-optimized clips for Instagram, LinkedIn, Twitter, and TikTok. Quick turnaround 
          available for same-day posting during multi-day events.
        </p>

        <h3>Speaker Clips</h3>
        <p>
          Individual clips of each speaker or presenter for their personal use, thought leadership 
          content, or promotional purposes. A valuable takeaway for your speakers and panelists.
        </p>

        <h2>Our Approach</h2>
        <p>
          We work closely with your event team during the planning phase to understand the schedule, 
          key moments, and priorities. On event day, our crew arrives early to set up and test all 
          equipment, ensuring we're ready when the first attendee walks through the door.
        </p>
        <p>
          During the event, our videographers move discreetly to capture footage without disrupting 
          the experience. We're experienced in working around tight spaces, varied lighting conditions, 
          and the unpredictable nature of live events.
        </p>

        <h2>Venues We've Worked At</h2>
        <p>
          We have experience filming at major venues across Bahrain, including:
        </p>
        <ul>
          <li>Four Seasons Hotel Bahrain Bay</li>
          <li>The Ritz-Carlton Bahrain</li>
          <li>Bahrain International Exhibition Centre</li>
          <li>Gulf Hotel Bahrain Convention Centre</li>
          <li>ART Rotana Amwaj Islands</li>
          <li>Sofitel Bahrain Zallaq Thalassa</li>
          <li>And many more corporate and private venues</li>
        </ul>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          Events are live, one-time opportunities. You need a team that's prepared, professional, and 
          experienced. Our event videographers have covered hundreds of events across Bahrain and the 
          GCC, and we bring that experience to every project. Contact us today to discuss your 
          upcoming event.
        </p>
      </ServicePageLayout>
    </>
  )
}
