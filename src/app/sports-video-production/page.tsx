import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Sports Video Production Bahrain | Athletic Content & Highlights',
  description: 'Professional sports video production in Bahrain. Game highlights, athlete profiles, training videos, sports commercials, and athletic content for teams, athletes, and sports brands.',
  keywords: ['sports video production bahrain', 'sports highlights bahrain', 'athlete video bahrain', 'sports commercial bahrain', 'fitness video bahrain'],
  openGraph: {
    title: 'Sports Video Production Bahrain | Film Production Bahrain',
    description: 'Professional sports video production in Bahrain. Highlights, profiles, and athletic content.',
    url: 'https://www.filmproductionbahrain.com/sports-video-production',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.filmproductionbahrain.com/sports-video-production',
  },
}

const faqs = [
  {
    question: 'What types of sports videos do you produce?',
    answer: 'We produce game and match highlights, athlete profiles and documentaries, training and technique videos, sports commercials, team promotional content, fitness and workout videos, sports event coverage, and content for athletes\' social media.',
  },
  {
    question: 'Can you capture high-speed action effectively?',
    answer: 'Yes, we use cameras capable of high frame rates for slow-motion capture of fast action. Our crew has experience filming sports including football, motorsports, water sports, combat sports, and athletics.',
  },
  {
    question: 'How much does sports video production cost?',
    answer: 'Athlete profile videos start at BD 500-1,000. Game highlight packages range from BD 300-800 per event. Full sports commercials and campaigns range from BD 1,500-5,000+. We provide quotes based on specific requirements.',
  },
  {
    question: 'Do you work with individual athletes?',
    answer: 'Yes, we produce content for individual athletes including professional profiles, sponsorship pitch videos, social media content, and personal brand development. We help athletes build their media presence.',
  },
  {
    question: 'Can you livestream sporting events?',
    answer: 'Yes, we offer live streaming services for sporting events including multi-camera coverage, graphics, and commentary integration. Contact us about live production packages.',
  },
]

const crossLinks = [
  {
    text: 'Need a website for your sports organization?',
    url: 'https://cinematicwebworks.com',
    label: 'CinematicWebWorks.com',
  },
  {
    text: 'Planning a sports event?',
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
  name: 'Sports Video Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://www.filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional sports video production services in Bahrain for teams, athletes, and sports organizations.',
}

export default function SportsVideoProduction() {
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
        title="Sports Video Production Bahrain"
        subtitle="Capture the Action"
        heroDescription="Dynamic sports videos that capture athletic excellence, inspire audiences, and showcase the passion of competition."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Professional Sports Video</h2>
        <p>
          Sports video requires a unique combination of technical skill and athletic understanding. 
          At Film Production Bahrain, we create dynamic sports content that captures the speed, skill, 
          and emotion of athletic competition. From highlight reels to athlete profiles, we produce 
          content that inspires.
        </p>
        <p>
          Bahrain has a vibrant sports scene, from Formula 1 to football, martial arts to water sports. 
          We've captured action across many disciplines and understand how to position cameras, 
          anticipate action, and edit footage to create compelling sports content.
        </p>

        <h2>Our Sports Video Services</h2>
        
        <h3>Game and Match Highlights</h3>
        <p>
          Professional highlight packages that capture the best moments from games and competitions. 
          We deliver fast turnaround for same-day or next-day highlights, with packages suitable for 
          social media, websites, and broadcast.
        </p>

        <h3>Athlete Profile Videos</h3>
        <p>
          Tell an athlete's story with compelling profile videos that combine action footage with 
          personal interviews. Profile videos are essential for sponsorship pitches, recruitment, 
          and building personal brands.
        </p>

        <h3>Team and Club Promotional Content</h3>
        <p>
          Build support for your team with professional promotional videos. We create content that 
          showcases team identity, engages fans, attracts sponsors, and recruits new members.
        </p>

        <h3>Training and Technique Videos</h3>
        <p>
          Document training methods and techniques for coaching purposes, educational content, and 
          performance analysis. We can capture technical details that help athletes improve and 
          coaches communicate.
        </p>

        <h3>Sports Commercials</h3>
        <p>
          Dynamic commercials for sports brands, equipment, facilities, and events. We create 
          high-energy content that communicates the excitement of sport and motivates action.
        </p>

        <h3>Sports Event Coverage</h3>
        <p>
          Comprehensive video coverage of sporting events, tournaments, and competitions. We 
          capture action, atmosphere, and key moments for highlight reels, documentaries, and 
          promotional content.
        </p>

        <h3>Fitness and Workout Content</h3>
        <p>
          Professional videos for gyms, personal trainers, and fitness brands. We create workout 
          tutorials, facility showcases, transformation stories, and promotional content for the 
          fitness industry.
        </p>

        <h2>Sports We Cover</h2>
        <ul>
          <li>Football (soccer)</li>
          <li>Motorsports and karting</li>
          <li>Combat sports (MMA, boxing, jiu-jitsu)</li>
          <li>Water sports (sailing, diving, jet skiing)</li>
          <li>Basketball</li>
          <li>Tennis and padel</li>
          <li>Golf</li>
          <li>Athletics and running</li>
          <li>CrossFit and functional fitness</li>
          <li>Equestrian</li>
        </ul>

        <h2>Technical Capabilities</h2>
        <ul>
          <li>High frame rate cameras for slow motion</li>
          <li>Long lenses for field-level capture</li>
          <li>Stabilized gimbal for smooth tracking</li>
          <li>Drone footage for aerial perspectives</li>
          <li>Multi-camera coverage for events</li>
          <li>Underwater housing for water sports</li>
          <li>Action cameras for POV footage</li>
        </ul>

        <h2>Our Production Approach</h2>
        
        <h3>Understanding the Sport</h3>
        <p>
          We research each sport we film to understand the action, key moments, and what makes 
          compelling footage. This preparation helps us anticipate action and capture the shots 
          that matter.
        </p>

        <h3>Strategic Camera Placement</h3>
        <p>
          We position cameras to capture the best angles while staying out of the way of competition. 
          For events, we scout venues and plan coverage to ensure comprehensive capture.
        </p>

        <h3>Fast Turnaround</h3>
        <p>
          Sports content often needs quick delivery. We have workflows for same-day highlight delivery 
          and can accommodate tight deadlines for time-sensitive content.
        </p>

        <h3>Dynamic Editing</h3>
        <p>
          Sports editing requires energy and pacing that matches the action. Our editors know how 
          to cut sports footage to music, build tension, and create emotional impact.
        </p>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          We combine professional production quality with genuine passion for sports. Our team includes 
          crew members who are athletes and sports fans—we understand the culture and what makes sports 
          content connect with audiences. As part of the Cinematic Group, we can also help with websites 
          and event services for sports organizations.
        </p>
      </ServicePageLayout>
    </>
  )
}
