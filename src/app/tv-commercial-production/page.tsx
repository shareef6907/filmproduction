import { Metadata } from 'next'
import Link from 'next/link'
import ServicePageLayout from '@/components/ServicePageLayout'
import VideoHero from '@/components/VideoHero'

export const metadata: Metadata = {
  title: 'TV Commercial Production Bahrain',
  description:
    'TV commercial production in Bahrain: scripts, storyboards, casting, shoot and broadcast-ready edits with cutdowns, captions and social versions.',
  keywords: [
    'tv commercial production bahrain',
    'tv commercial bahrain',
    'tvc production bahrain',
    'television commercial bahrain',
    'broadcast advertising bahrain',
    'tv ad production bahrain',
  ],
  openGraph: {
    title: 'TV Commercial Production Bahrain | Film Production Bahrain',
    description:
      'TV commercial production in Bahrain: broadcast-ready commercials, cutdowns and social versions from one shoot.',
    url: 'https://www.filmproductionbahrain.com/tv-commercial-production',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.filmproductionbahrain.com/tv-commercial-production',
  },
}

const faqs = [
  {
    question: 'How long does it take to produce a TV commercial in Bahrain?',
    answer:
      'The schedule is driven by three things: how much of the creative is still open, how many locations and cast members are involved, and how many versions the broadcaster needs. A single-location commercial with a locked script is the fastest route through. Multi-location shoots with casting, product handling and several cutdowns take longer, because every extra version is a separate edit rather than a shortcut.',
  },
  {
    question: 'Can one shoot deliver the TV commercial and the social media videos?',
    answer:
      'Yes, and it is the sensible way to run a campaign. A commercial shot for broadcast is planned wide enough to be re-cut vertically and square for social platforms. We deliver the broadcast master alongside cutdowns and vertical versions so the same shoot funds the whole campaign instead of repeating it.',
  },
  {
    question: 'What does a TV commercial need to work when people scroll past it?',
    answer:
      'It has to work with the sound off, because most viewers start muted and decide whether to unmute based on the first second. That means the message has to be readable from the picture, the brand should be identified early, and captions should be delivered with the file so the spot works on a muted phone screen and for viewers with hearing loss.',
  },
  {
    question: 'Do you handle casting and voiceover for commercials?',
    answer:
      'We handle casting and voiceover as part of the production, including talent direction on set and recording voice sessions for the finished cut. If the script works better with a voiceover artist than on-camera talent, that is a decision we make early, because it changes the shooting plan and the edit.',
  },
  {
    question: 'Do you produce for brands outside Bahrain?',
    answer:
      'We produce for brands based in Bahrain and for regional teams running campaigns across the GCC. When a campaign is planned in another market but shot here, we plan the shoot around Bahrain conditions and deliver to the specifications your media buyer requires.',
  },
]

const crossLinks = [
  {
    text: 'Need more than a TV commercial?',
    url: 'https://www.filmproductionbahrain.com/commercial-production',
    label: 'Commercial Production Bahrain',
  },
  {
    text: 'Launching a product or event?',
    url: 'https://bahrainnights.com',
    label: 'Promote on BahrainNights.com',
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
  name: 'TV Commercial Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://www.filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description:
    'TV commercial production in Bahrain for broadcast and digital, covering script development, casting, filming, editing and delivery of cutdowns, captions and platform versions.',
}

export default function TvCommercialProduction() {
  return (
    <>
      <VideoHero
        videoId="F2Mw7tngDXY"
        title="TV Commercial Production"
        subtitle="Broadcast-ready advertising in Bahrain"
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
        title="TV Commercial Production Bahrain"
        subtitle="TV Commercials & Broadcast Advertising"
        heroDescription="Television commercials written for the screen they will be watched on, shot and edited to broadcast delivery standards, and cut down for every platform that follows."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>What a TV Commercial Has to Do in Bahrain</h2>
        <p>
          A television commercial is watched by a family in a living room, not by a scrolling thumb on a
          phone. That single difference changes almost every decision in the production. There is no
          soundtrack to scroll past, no headline to click, and no second attempt. The spot either earns the
          next twenty seconds of attention or it is gone.
        </p>
        <p>
          In Bahrain, television still carries weight that online video alone has not replaced. Families
          watch during the evening, campaigns are planned around broadcast windows, and a TVC is often
          the film that a brand later re-cuts for social. The commercial is not one asset in a campaign.
          It is usually the asset the rest of the campaign is built from.
        </p>
        <p>
          That is why we treat a TVC as its own discipline rather than as a marketing video with a
          different filename. Different structure, different pacing, different delivery requirements, and
          a different audience mindset from the person watching a feed on a phone.
        </p>

        <h2>How a TV Commercial Is Built</h2>
        <h3>Brief, script and storyboard</h3>
        <p>
          Every commercial starts as a written idea. We develop the concept against the objective you
          are working towards, then write the script and storyboard it before anyone sets up a camera.
          A storyboard exists so that everyone can see the plan, not only the writer. When the client, the
          agency and the production team are looking at the same frames, the argument about the product
          happens in a meeting instead of on set, where it is expensive.
        </p>

        <h3>Casting and direction</h3>
        <p>
          Casting is part of the design, not a search that happens the night before. A commercial aimed at
          families needs faces that read as credible in a living room. A product demonstration needs hands
          that handle the product convincingly. We shortlist, direct, and rehearse on set so the talent
          performs to the script rather than improvising around it.
        </p>

        <h3>The shoot</h3>
        <p>
          Commercial shoots are planned around lighting, not around convenience. We schedule interior work
          when the sun is hard, exterior work when it is low and warm, and we protect the schedule with
          a plan for what happens if weather or a location falls through. We do not use drones, as they
          are illegal in Bahrain.
        </p>

        <h3>Edit, grade and version</h3>
        <p>
          The edit decides the commercial. We assemble against the shot list, cut to the rhythm of the
          script, then grade the whole spot to one look and mix dialogue, music and effects to the
          standard the broadcaster expects. From that master we cut the shorter versions, the vertical
          versions and the captioned files, all of which are finished edits rather than quick exports.
          Post-production is covered in more detail on our{' '}
          <Link href="/video-editing-services" className="text-film-gold hover:underline">
            video editing services
          </Link>{' '}
          page.
        </p>

        <h2>Script Structures That Work on Television</h2>
        <p>
          The structure of the script matters more than the production technique behind it. A handful of
          formats carry almost all of television advertising, and each one suits a different kind of
          message.
        </p>
        <ul>
          <li>
            <strong>Problem and solution.</strong> The commercial opens on a situation the audience
            recognises, names the frustration, and presents the product as the way out of it. It suits
            household products and services that solve a daily irritation.
          </li>
          <li>
            <strong>Demonstration.</strong> The product is shown doing the thing it exists to do. Nothing
            sells a demonstration like a demonstration, and it is the strongest structure for anything
            whose value is not obvious from a name.
          </li>
          <li>
            <strong>Testimonial.</strong> A real person describes an experience in their own words. It
            carries more trust than a polished voice because the delivery cannot be written.
          </li>
          <li>
            <strong>Lifestyle.</strong> The product sits inside a scene the audience wants to be in. It is
            slower than the other structures and works best for food, hospitality, fashion and travel.
          </li>
          <li>
            <strong>Offer-led.</strong> The commercial leads with the message of the sale and gives the
            reason to act quickly. It is the most direct structure and the easiest to over-run, so it
            needs discipline in the edit.
          </li>
        </ul>
        <p>
          If your brand also needs longer storytelling content, the same crew and the same footage often
          produce both, and we build the two together so the brand film and the commercial look like they
          came from one production.
        </p>

        <h2>Delivering for Broadcast and for Everything After It</h2>
        <p>
          A broadcast delivery is a master built for a specific technical specification, and a campaign
          delivery is a set of versions built for specific screens. Mixing the two up is the most common
          way a commercial loses impact.
        </p>
        <ul>
          <li>
            <strong>The broadcast master.</strong> Full-frame for television, with the sound mixed to the
            level broadcasters expect and the graphics placed inside the safe area so nothing important
            sits too close to the edge of the screen.
          </li>
          <li>
            <strong>Cutdowns.</strong> The same edit tightened to the shorter lengths a campaign buys, with
            the ending rebuilt rather than simply trimmed. A cutdown that ends mid-sentence is a cutdown
            that loses the viewer.
          </li>
          <li>
            <strong>Vertical and square versions.</strong> Reframed for mobile, not cropped. If the hero
            moment sits in the centre of the frame, the vertical version loses the commercial. We compose
            for the crop or plan a second setup for it.
          </li>
          <li>
            <strong>Captions and subtitles.</strong> Delivered with the files, so the spot works muted and
            for viewers who need them. Text is kept short enough to read in the time it is on screen.
          </li>
          <li>
            <strong>Music and rights.</strong> Cleared before the edit is locked, so the spot can run in
            every channel and territory you buy, without a rights question appearing at the end of the
            campaign.
          </li>
        </ul>
        <p>
          The same footage also feeds the digital campaign. If you need social assets alongside the
          commercial, we plan those versions from the start rather than as an afterthought, and our{' '}
          <Link href="/social-media-video-content" className="text-film-gold hover:underline">
            social media video content
          </Link>{' '}
          page covers how those formats are built.
        </p>

        <h2>Filming a TV Commercial in Bahrain</h2>
        <p>
          Bahrain gives a commercial more range than its size suggests. The Manama waterfront and Bahrain
          Bay provide modern glass and open water. The older districts around Muharraq and Riffa give
          narrow lanes, heritage buildings and texture that a studio cannot manufacture. Interiors in
          hotels, retail spaces and offices, industrial sites, and open desert to the south cover the rest
          of the range a script might ask for.
        </p>
        <p>
          Working conditions are what separate a plan that survives the week from one that does not.
          Midday light is punishing, so interior and exterior work is scheduled against it. Locations that
          are empty on a weekday are busy at the weekend and busy again when the working week restarts.
          Voiceover and music sessions have to be booked against the same week, not after it. A producer
          who plans around those facts gets a production that holds together; one who does not, ends up
          shooting in the wrong light and hoping the grade will save it.
        </p>

        <h2>One Shoot, a Whole Campaign</h2>
        <p>
          A commercial shoot is expensive to set up and cheap to reuse. Shot with the campaign in mind,
          one production day can deliver the television commercial, the cutdowns, the vertical versions
          for social, teaser content for the campaign launch, and behind-the-scenes material that gives
          the brand something human to post. Planning the shoot that way is the difference between one
          production cost and several.
        </p>
        <p>
          If you are building a campaign rather than a single spot, the wider commercial offering is
          covered on our{' '}
          <Link href="/commercial-production" className="text-film-gold hover:underline">
            commercial production
          </Link>{' '}
          page, and promotional films for offers and launches sit under{' '}
          <Link href="/promotional-video-bahrain" className="text-film-gold hover:underline">
            promotional video
          </Link>
          .
        </p>

        <h2>How to Choose a TV Commercial Producer</h2>
        <p>
          Ask to see commercials, not showreels. A showreel proves a producer can film; a commercial proves
          they can write, edit and deliver to a specification, which is the part that decides whether your
          spot works when it airs. Ask who writes the script and who cuts the edit, because a company that
          outsources both has less control over the finished commercial than it implies. Ask for the
          delivery list in writing before you commit, so you know exactly how many versions you are
          getting and in which formats. And ask what happens if a shoot day is lost in Bahrain heat or a
          client change, because the answer tells you how much of the schedule is real.
        </p>
        <p>
          For a broader view of how we work, read about our full video production setup on the{' '}
          <Link href="/video-production-bahrain" className="text-film-gold hover:underline">
            video production Bahrain
          </Link>{' '}
          page, or the wider{' '}
          <Link href="/film-production-bahrain" className="text-film-gold hover:underline">
            film production
          </Link>{' '}
          process.
        </p>

        <h2>Start a TV Commercial Project</h2>
        <p>
          Send us the brief, however rough it is, and we will come back with a clear read on what the
          commercial needs: the structure that fits the message, the production scale, the versions
          required for broadcast and social, and a realistic schedule. We will quote on the project rather
          than from a standard rate card, because two television commercials with the same runtime can
          differ completely in cost depending on what happens on the day.
        </p>
      </ServicePageLayout>
    </>
  )
}
