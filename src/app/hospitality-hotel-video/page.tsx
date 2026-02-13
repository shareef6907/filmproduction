import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Hotel & Hospitality Video Production Bahrain | Resort Videos',
  description: 'Professional hotel and hospitality video production in Bahrain. Hotel promotional videos, resort films, restaurant videos, spa content, and tourism marketing for the hospitality industry.',
  keywords: ['hotel video production bahrain', 'hospitality video bahrain', 'resort video bahrain', 'hotel promotional video bahrain', 'tourism video bahrain'],
  openGraph: {
    title: 'Hotel & Hospitality Video Production Bahrain | Film Production Bahrain',
    description: 'Professional hotel and hospitality video production in Bahrain. Hotel and resort videos.',
    url: 'https://www.filmproductionbahrain.com/hospitality-hotel-video',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.filmproductionbahrain.com/hospitality-hotel-video',
  },
}

const faqs = [
  {
    question: 'What types of hospitality videos do you produce?',
    answer: 'We produce hotel promotional videos, virtual tours, room walkthroughs, amenity showcases, restaurant and F&B content, spa and wellness videos, event space tours, and destination marketing content for hotels, resorts, and hospitality businesses.',
  },
  {
    question: 'How much does hotel video production cost?',
    answer: 'Room tour videos start at BD 200-400 per room type. Full hotel promotional videos range from BD 2,000-5,000. Comprehensive video packages covering rooms, amenities, restaurants, and experiences range from BD 5,000-15,000 depending on scope.',
  },
  {
    question: 'Do you work with international hotel brands?',
    answer: 'Yes, we have experience working with international hotel chains and understand brand guidelines and approval processes. We can produce content that meets your brand standards while showcasing your specific property.',
  },
  {
    question: 'Can you include guest experiences in the video?',
    answer: 'Absolutely. We can feature talent or real guests (with permission) enjoying your facilities. Showing people experiencing your property makes videos more relatable and helps viewers envision their own stay.',
  },
  {
    question: 'How do you handle filming during hotel operations?',
    answer: 'We work around your operations to minimize disruption. We can film rooms during turnover times, public areas during quiet periods, and plan shoots to avoid impacting guest experience. Early morning and late evening shoots often work best.',
  },
]

const crossLinks = [
  {
    text: 'Need a website for your hotel?',
    url: 'https://cinematicwebworks.com/hotel-website-design',
    label: 'Hotel Website Design',
  },
  {
    text: 'List your events on BahrainNights',
    url: 'https://bahrainnights.com',
    label: 'BahrainNights.com',
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
  name: 'Hotel & Hospitality Video Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://www.filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional hotel and hospitality video production services in Bahrain for hotels, resorts, and tourism businesses.',
}

export default function HospitalityHotelVideo() {
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
        title="Hotel & Hospitality Video Production Bahrain"
        subtitle="Showcase Your Experience"
        heroDescription="Cinematic hotel and hospitality videos that capture the essence of your guest experience and inspire travelers to book their stay."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Video Marketing for Hospitality</h2>
        <p>
          In hospitality, you're selling an experience—and video is the best way to communicate that 
          experience before a guest arrives. At Film Production Bahrain, we specialize in creating 
          hospitality videos that capture the feeling of your property and inspire travelers to book.
        </p>
        <p>
          Bahrain's growing tourism industry means competition for guests is fierce. Professional video 
          content differentiates your property, increases booking conversions, and commands higher rates. 
          We help hotels, resorts, restaurants, and hospitality businesses across Bahrain showcase their 
          best with cinematic video.
        </p>

        <h2>Our Hospitality Video Services</h2>
        
        <h3>Hotel Promotional Videos</h3>
        <p>
          Comprehensive promotional videos that showcase your entire property: rooms, amenities, dining, 
          service, and atmosphere. These flagship videos work on your website homepage, social media, 
          travel agency listings, and advertising campaigns.
        </p>

        <h3>Room Tours and Virtual Walkthroughs</h3>
        <p>
          Let potential guests explore your room categories before booking. We create elegant room 
          tours that highlight space, design, views, and amenities. These videos reduce booking 
          uncertainty and increase direct conversion rates.
        </p>

        <h3>Restaurant and F&B Videos</h3>
        <p>
          Food and beverage is a major differentiator. We produce appetizing videos showcasing your 
          restaurants, bars, room service, and culinary experiences. From chef features to food 
          preparation, we make viewers hungry to dine with you.
        </p>

        <h3>Spa and Wellness Content</h3>
        <p>
          Wellness tourism is growing rapidly. We create serene, aspirational videos for spas, 
          fitness centers, and wellness programs that communicate relaxation and rejuvenation.
        </p>

        <h3>Event Space Tours</h3>
        <p>
          Showcase your meeting rooms, ballrooms, and event facilities to corporate and wedding clients. 
          Virtual tours help event planners visualize their events in your space and make booking 
          decisions confidently.
        </p>

        <h3>Destination Marketing</h3>
        <p>
          Go beyond your property to showcase the destination. Videos featuring local attractions, 
          culture, and experiences help position your hotel as a gateway to memorable travel experiences.
        </p>

        <h2>Video Types We Produce</h2>
        <ul>
          <li>Brand story and promotional videos</li>
          <li>Room category showcases</li>
          <li>360° virtual tours</li>
          <li>Social media content (Reels, TikTok, Stories)</li>
          <li>Behind-the-scenes and staff features</li>
          <li>Guest testimonial videos</li>
          <li>Seasonal and campaign content</li>
          <li>Aerial drone footage</li>
          <li>Timelapse (sunrise, sunset, events)</li>
        </ul>

        <h2>Our Production Approach</h2>
        
        <h3>Pre-Visit Planning</h3>
        <p>
          We study your property, brand positioning, and target guests before filming. We identify 
          key selling points, plan shots, and coordinate with your team to ensure efficient use of 
          filming time.
        </p>

        <h3>Minimal Disruption</h3>
        <p>
          We understand hospitality operations. Our crew works efficiently and discretely, planning 
          shoots to minimize impact on guest experience. We're experienced at filming around check-ins, 
          restaurant service, and daily operations.
        </p>

        <h3>Cinematic Quality</h3>
        <p>
          Hospitality demands premium production values. We use cinema cameras, professional lighting, 
          and stabilization equipment to capture your property at its absolute best. Post-production 
          includes color grading that enhances atmosphere and luxury.
        </p>

        <h3>Multi-Platform Delivery</h3>
        <p>
          We deliver videos optimized for every platform: your website, OTAs, social media, and 
          advertising. Different aspect ratios, durations, and formats ensure your content performs 
          everywhere you need it.
        </p>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          We specialize in making spaces look their best on camera. Our team understands the hospitality 
          industry and what motivates travel decisions. As part of the Cinematic Group, we can also 
          help with hospitality websites, ensuring seamless integration of video content into your 
          digital presence.
        </p>
      </ServicePageLayout>
    </>
  )
}
