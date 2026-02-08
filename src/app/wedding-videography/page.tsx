import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Wedding Videography Bahrain | Cinematic Wedding Films',
  description: 'Cinematic wedding videography in Bahrain. Capture your special day with beautiful wedding films, engagement videos, and highlight reels. Experienced wedding videographers for ceremonies across Bahrain and the GCC.',
  keywords: ['wedding videography bahrain', 'wedding video bahrain', 'wedding videographer bahrain', 'wedding film bahrain', 'engagement video bahrain'],
  openGraph: {
    title: 'Wedding Videography Bahrain | Film Production Bahrain',
    description: 'Cinematic wedding videography in Bahrain. Beautiful wedding films that capture your special day forever.',
    url: 'https://filmproductionbahrain.com/wedding-videography',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://filmproductionbahrain.com/wedding-videography',
  },
}

const faqs = [
  {
    question: 'How much does wedding videography cost in Bahrain?',
    answer: 'Wedding videography packages in Bahrain range from BD 800 for basic coverage to BD 3,000+ for premium packages with multiple videographers, drone coverage, and same-day edits. We offer packages for different budgets and requirements.',
  },
  {
    question: 'How long will it take to receive our wedding video?',
    answer: 'Standard delivery is 8-12 weeks for fully edited wedding films. Highlight reels (3-5 minutes) can be delivered within 4 weeks. Rush delivery is available for an additional fee.',
  },
  {
    question: 'How many videographers will cover our wedding?',
    answer: 'Our standard package includes two videographers to capture multiple angles and moments simultaneously. Premium packages include additional videographers for larger weddings or multi-location events.',
  },
  {
    question: 'Do you cover destination weddings?',
    answer: 'Yes, we cover weddings throughout the GCC and internationally. Travel packages are available for destination weddings in Saudi Arabia, UAE, Qatar, Kuwait, and beyond.',
  },
  {
    question: 'What style of wedding films do you create?',
    answer: 'We specialize in cinematic, documentary-style wedding films that tell your love story authentically. We blend candid moments, emotional highlights, and beautiful b-roll into films that feel like movies.',
  },
]

const crossLinks = [
  {
    text: 'Need a wedding website?',
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
  name: 'Wedding Videography Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional cinematic wedding videography services in Bahrain for ceremonies, engagements, and celebrations.',
}

export default function WeddingVideography() {
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
        title="Wedding Videography Bahrain"
        subtitle="Cinematic Wedding Films"
        heroDescription="Your wedding day deserves to be remembered forever. Our cinematic wedding films capture every emotion, every moment, every detail of your special day."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Preserving Your Love Story</h2>
        <p>
          Your wedding is one of the most important days of your life—a celebration of love, 
          family, and the beginning of a new chapter. At Film Production Bahrain, we create 
          wedding films that capture not just what happened, but how it felt. Our cinematic 
          approach transforms your wedding footage into a beautiful film you'll treasure 
          forever.
        </p>
        <p>
          We believe wedding videography is about storytelling. From the nervous excitement 
          of getting ready to the joyful tears during vows, from the energy of the dance 
          floor to the quiet moments between the chaos—we capture it all. Years from now, 
          when you watch your wedding film, you'll be transported back to that magical day.
        </p>

        <h2>Our Wedding Video Services</h2>
        
        <h3>Full Wedding Day Coverage</h3>
        <p>
          Our comprehensive wedding day coverage begins with preparations and continues 
          through your last dance. We're there for the getting ready moments, the ceremony, 
          the reception, and everything in between. With multiple videographers, we capture 
          both the bride's and groom's perspectives simultaneously.
        </p>

        <h3>Cinematic Highlight Films</h3>
        <p>
          Your highlight film is the emotional heart of your wedding video—a 5-8 minute 
          cinematic edit set to music that captures the essence of your day. This is the 
          film you'll share with friends and family, post on social media, and watch on 
          anniversaries. We craft each highlight film as a mini-movie, with careful attention 
          to pacing, music selection, and emotional arc.
        </p>

        <h3>Full Ceremony & Speeches Edit</h3>
        <p>
          Beyond the highlight film, we provide complete edits of your ceremony and speeches. 
          These longer edits preserve every word of your vows, readings, and toasts so you 
          can relive these meaningful moments in their entirety.
        </p>

        <h3>Engagement Session Videos</h3>
        <p>
          Start your wedding video journey with a pre-wedding engagement session. These 
          relaxed filming sessions give us a chance to get to know you as a couple while 
          creating beautiful content for your save-the-dates, wedding website, or reception 
          slideshow.
        </p>

        <h3>Same-Day Edit</h3>
        <p>
          Surprise your guests with a same-day edit shown during your reception. Our team 
          edits footage from the day in real-time, creating a short film that plays before 
          dinner or dancing begins. It's an unforgettable moment for everyone attending.
        </p>

        <h2>Our Approach to Wedding Films</h2>
        
        <h3>Cinematic Quality</h3>
        <p>
          We use professional cinema cameras, prime lenses, gimbals, and drones to capture 
          your wedding with the production values of a feature film. Every shot is carefully 
          composed, every movement smooth, every frame beautiful.
        </p>

        <h3>Documentary Style</h3>
        <p>
          We're not interested in stiff, posed video. Our documentary approach captures 
          authentic moments as they happen—the genuine laughter, happy tears, and spontaneous 
          joy that make weddings special. We blend into the background while never missing 
          a significant moment.
        </p>

        <h3>Professional Audio</h3>
        <p>
          Beautiful footage means nothing without clear audio. We use wireless microphones 
          on the couple and officiant, plus backup recorders to ensure we capture every 
          word of your ceremony and speeches with crystal clarity.
        </p>

        <h3>Color Grading</h3>
        <p>
          In post-production, we apply cinematic color grading that gives your footage a 
          timeless, film-like quality. We work with you to understand your aesthetic 
          preferences and create a look that matches your vision.
        </p>

        <h2>Wedding Packages</h2>
        
        <h3>Essential Package</h3>
        <ul>
          <li>Single videographer</li>
          <li>6 hours of coverage</li>
          <li>5-minute highlight film</li>
          <li>Ceremony edit</li>
          <li>Digital delivery</li>
        </ul>

        <h3>Premium Package</h3>
        <ul>
          <li>Two videographers</li>
          <li>Full day coverage (10+ hours)</li>
          <li>8-10 minute highlight film</li>
          <li>Ceremony and speeches edits</li>
          <li>Drone coverage</li>
          <li>USB delivery in keepsake box</li>
        </ul>

        <h3>Luxury Package</h3>
        <ul>
          <li>Three videographers</li>
          <li>Multi-day coverage</li>
          <li>Extended highlight film</li>
          <li>Same-day edit</li>
          <li>Engagement session</li>
          <li>Drone and specialty shots</li>
          <li>Raw footage delivery</li>
        </ul>

        <h2>Venues We've Filmed At</h2>
        <p>
          We've had the privilege of filming weddings at beautiful venues across Bahrain:
        </p>
        <ul>
          <li>Four Seasons Hotel Bahrain Bay</li>
          <li>The Ritz-Carlton Bahrain</li>
          <li>ART Rotana Amwaj Islands</li>
          <li>Gulf Hotel Bahrain</li>
          <li>Sofitel Bahrain Zallaq Thalassa</li>
          <li>The Merchant House</li>
          <li>Beach clubs and private estates</li>
        </ul>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          We understand that choosing a wedding videographer is a significant decision. 
          You're trusting us to capture one of the most important days of your life. Our 
          experienced team brings professionalism, creativity, and genuine care to every 
          wedding we film. We're not just documenting your day—we're crafting a film that 
          tells your unique love story. Contact us to check availability for your wedding date.
        </p>
      </ServicePageLayout>
    </>
  )
}
