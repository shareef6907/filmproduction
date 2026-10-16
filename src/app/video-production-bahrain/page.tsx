import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'
import VideoHero from '@/components/VideoHero'

export const metadata: Metadata = {
  title: 'Video Production Bahrain | Professional Video Services Kingdom-Wide',
  description: 'Video production Bahrain: full-service filming, post-production, drone-free cinematography, and delivery. From corporate videos to commercials, we produce in Bahrain and across the GCC.',
  keywords: ['video production bahrain', 'video production company bahrain', 'professional video production bahrain', 'corporate video bahrain', 'commercial video bahrain', 'filming in bahrain'],
  openGraph: {
    title: 'Video Production Bahrain | Film Production Bahrain',
    description: 'Full-service video production in Bahrain. Corporate, commercial, and creative video services for businesses across the GCC.',
    url: 'https://www.filmproductionbahrain.com/video-production-bahrain',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.filmproductionbahrain.com/video-production-bahrain',
  },
}

const faqs = [
  {
    question: 'What types of video do you produce in Bahrain?',
    answer: 'We produce a full range of video content: corporate videos, TV commercials, social media ads, event coverage, wedding films, real estate tours, music videos, documentaries, training videos, and explainer animations. If it involves a camera, we can make it.',
  },
  {
    question: 'Do you film outside Bahrain?',
    answer: 'Yes. While we are based in Manama, we regularly travel across the GCC including Saudi Arabia, the UAE, Qatar, and Kuwait for productions. Travel logistics and permits are handled as part of our production planning.',
  },
  {
    question: 'What equipment do you use?',
    answer: 'We shoot on professional cinema cameras including Sony FX series and Canon cinema line, paired with cinema prime lenses, professional lighting rigs, stabilisers, sliders, and professional audio equipment. We do not use drones, as they are illegal in Bahrain.',
  },
  {
    question: 'How long does a typical video production take?',
    answer: 'A typical corporate video takes 2-4 weeks from brief to delivery. TV commercials and brand films take 3-6 weeks. Simpler content like social media videos can be turned around in 1-2 weeks. We plan timelines carefully during pre-production.',
  },
  {
    question: 'Can you handle post-production as well as filming?',
    answer: 'Yes, we offer complete end-to-end production. Our in-house post-production covers editing, colour grading, motion graphics, sound design, and delivery in all formats. You deal with one team from concept to final file.',
  },
]

const crossLinks = [
  {
    text: 'Need corporate or training videos?',
    url: 'https://www.filmproductionbahrain.com/corporate-video-production',
    label: 'Corporate Video Production',
  },
  {
    text: 'Planning a TV commercial or brand film?',
    url: 'https://www.filmproductionbahrain.com/commercial-production',
    label: 'Commercial Production',
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
  name: 'Video Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://www.filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Full-service video production in Bahrain. Corporate videos, commercials, event coverage, wedding films, real estate tours, and more.',
}

export default function VideoProductionBahrain() {
  return (
    <>
      <VideoHero
        videoId="F2Mw7tngDXY"
        title="Video Production Bahrain"
        subtitle="Full-Service Video Production"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageLayout
        title="Video Production Bahrain"
        subtitle="Full-Service Video Production"
        heroDescription="From initial brief to final delivery, we handle every stage of video production in Bahrain. Corporate, commercial, event, and creative content — filmed to broadcast standard."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Video Production Built Around Your Objectives</h2>
        <p>
          Video production in Bahrain means something specific when you work with Film Production Bahrain: a
          single team that understands your brief, manages every technical detail, and delivers a finished
          video that actually works for your business. We are not a post house that outsources filming,
          nor a freelance broker who disappears mid-project. We are a production company based in Manama
          with full in-house capability for every stage of the process.
        </p>
        <p>
          Bahrain is a compact market with international standards. The businesses that succeed here
          understand that their video content needs to compete regionally, not just locally. That means
          proper pre-production planning, cinema-grade equipment, and post-production that meets broadcast
          specifications. We deliver exactly that, whether you are a local restaurant, a government
          entity, a startup, or a multinational with a Manama office.
        </p>

        <h2>What We Produce</h2>

        <h3>Corporate Video Production</h3>
        <p>
          Company profiles, executive interviews, internal communications, and training content. Corporate
          video is the most requested service in Bahrain because every business needs to communicate
          internally and externally, and video is the most effective medium for doing both. We have
          produced corporate content for financial institutions, government agencies, logistics companies,
          and professional services firms across the Kingdom.
        </p>

        <h3>Commercial and Advertising Video</h3>
        <p>
          TV commercials, social media advertisements, and brand films. Commercial production requires
          a different approach from corporate work: tighter storytelling, faster pacing, and output
          optimised for specific platforms. We produce commercials for broadcast on regional networks
          and digital-first content for Instagram, YouTube, TikTok, and LinkedIn.
        </p>

        <h3>Event Coverage</h3>
        <p>
          Conferences, gala dinners, product launches, award ceremonies, and corporate events. Bahrain
          hosts a significant number of regional and international events each year, and capturing
          them properly requires multi-camera setups, experienced audio operators, and editors who
          understand event pacing. We have covered events ranging from intimate board meetings to
          large-scale conferences at the Bahrain International Exhibition and Convention Centre.
        </p>

        <h3>Real Estate and Property Video</h3>
        <p>
          Property tours, architectural walkthroughs, and real estate marketing content. Bahrain's
          property market is active across residential, commercial, and hospitality sectors, and
          video has become essential for marketing developments both off-plan and completed. We
          produce cinematic property content using stabilised camera movements and professional
          lighting that presents properties at their best.
        </p>

        <h3>Wedding and Personal Event Films</h3>
        <p>
          Cinematic wedding films and personal event coverage. Bahrain's wedding season brings
          significant demand for quality videography, and we approach each wedding as a documentary
          filmmaker: capturing genuine moments alongside the polished formal sequences. Our wedding
          packages cover everything from intimate ceremonies to large-scale celebrations.
        </p>

        <h3>Music Videos and Creative Projects</h3>
        <p>
          Music video production, short films, and creative content for artists and creators.
          Bahrain has a growing creative scene, and we provide full production services for
          artists who need professional visual content to accompany their music.
        </p>

        <h2>Our Production Process</h2>

        <h3>Brief and Discovery</h3>
        <p>
          Every project starts with understanding what you are trying to achieve. A video that
          works for employee onboarding has different requirements from one designed to win a
          new client or build brand awareness. We ask the right questions at the start so that
          the creative direction is clear before a camera is booked.
        </p>

        <h3>Pre-Production</h3>
        <p>
          Pre-production covers scripting, shot lists, location scouting, casting, equipment
          planning, and scheduling. For complex productions, this phase includes storyboarding
          and mood references. A well-run pre-production is the single biggest factor in a
          smooth shoot day. We do not skip this phase regardless of timeline pressure.
        </p>

        <h3>Production</h3>
        <p>
          Our shoot days are run by experienced crews: director, cinematographer, and audio
          operator as a minimum, with additional crew as project scope requires. We use
          professional cinema cameras, prime lenses, and proper lighting setups. We do not
          shoot on consumer equipment, and we do not cut corners on audio, which is the
          most common failure point in professional video.
        </p>

        <h3>Post-Production</h3>
        <p>
          Editing, colour grading, motion graphics, sound design, and final delivery. Our
          editors work in professional non-linear editing suites with calibrated monitors.
          All footage is backed up and organised during logging before editing begins.
          We deliver in whatever format your distribution channels require, from broadcast
          masters to platform-optimised social files.
        </p>

        <h2>Why Work With Film Production Bahrain</h2>
        <p>
          We are a Manama-based team, not a remote freelancer network. When you commission
          a video from us, the crew that films your project is part of our regular team,
          not a booking made the week before. This means consistent quality, predictable
          timelines, and someone who answers the phone when you call.
        </p>
        <p>
          As part of the Cinematic Group, we have access to supplementary services including
          photography, animation, website development, and event production. For clients
          with broader needs, this integrated approach reduces the overhead of managing
          multiple vendors.
        </p>
        <p>
          Contact us to discuss your next video project. We provide free initial consultations
          and detailed quotes based on your brief, not a standardised rate card.
        </p>
      </ServicePageLayout>
    </>
  )
}
