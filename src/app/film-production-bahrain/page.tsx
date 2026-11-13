import { Metadata } from 'next'
import Link from 'next/link'
import ServicePageLayout from '@/components/ServicePageLayout'
import VideoHero from '@/components/VideoHero'

export const metadata: Metadata = {
  title: 'Film Production Company Bahrain',
  description: 'Film production company in Bahrain for brand films, documentaries, TV commercials and music videos. Scripting, cinematography, editing and colour grading in one team.',
  keywords: ['film production company in bahrain', 'film production bahrain', 'film company in bahrain', 'film production services bahrain', 'cinematic film production bahrain', 'film producers bahrain', 'bahrain film production company'],
  openGraph: {
    title: 'Film Production Company Bahrain | Film Production Bahrain',
    description: 'Film production in Bahrain: brand films, documentaries, TV commercials and music videos. Scripting, filming, post-production and delivery from one team.',
    url: 'https://www.filmproductionbahrain.com/film-production-bahrain',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.filmproductionbahrain.com/film-production-bahrain',
  },
}

const faqs = [
  {
    question: 'What does a film production company in Bahrain do?',
    answer: 'A film production company takes a project from the first conversation to a finished, delivered film. That covers creative development and scripting, pre-production planning, the shoot itself, and post-production including editing, colour grading, sound design and motion graphics. We also handle the practical side: locations, scheduling around the Bahraini working week, crew, equipment, and delivery of the master alongside the cutdowns your channels need.',
  },
  {
    question: 'How is film production different from video production?',
    answer: 'Video production usually answers a practical question: how a process works, what a product does, what happened at an event. Film production is built around a story: it introduces people, holds attention through structure, and leaves the viewer with something they remember. The distinction matters because a film needs more pre-production time, a written script, a director with a point of view, and a longer edit. If you are unsure which you need, we will say so in the brief rather than selling you the longer format.',
  },
  {
    question: 'How long does a film take to produce?',
    answer: 'A brand film or corporate film typically runs from three to six weeks from approved script to final delivery, depending on how many locations, interview subjects and shoot days are involved. A documentary with a research and archive stage usually takes longer, because the story is found in the edit as much as on the shoot. TV commercials are often faster, usually two to four weeks, because the format and duration are already fixed. We agree the schedule before the shoot is booked, and we plan around your deadline rather than around a generic production calendar.',
  },
  {
    question: 'Do you produce films outside Bahrain?',
    answer: 'Yes. We are based in Manama and regularly travel across the GCC for productions, so the same crew and the same post-production process follow the project wherever it goes. Travel and logistics are planned as part of pre-production rather than left to the last minute.',
  },
  {
    question: 'What do we receive at the end of the project?',
    answer: 'You receive a broadcast-ready master of the finished film, plus the formats your distribution channels need: horizontal and vertical edits, subtitled versions, and platform-ready exports for social channels. We deliver the master as well as the cutdowns, so the same shoot can serve your website, your sales team and your paid campaigns without anyone having to re-edit the film from scratch.',
  },
]

const crossLinks = [
  {
    text: 'Story-led brand films for companies',
    url: 'https://www.filmproductionbahrain.com/brand-film-production',
    label: 'Brand Film Production',
  },
  {
    text: 'Documentaries built from interviews and archive material',
    url: 'https://www.filmproductionbahrain.com/documentary-film-production',
    label: 'Documentary Film Production',
  },
  {
    text: 'TV commercials and advertising films',
    url: 'https://www.filmproductionbahrain.com/commercial-production',
    label: 'Commercial Production',
  },
  {
    text: 'Music videos and creative films for artists',
    url: 'https://www.filmproductionbahrain.com/music-video-production',
    label: 'Music Video Production',
  },
  {
    text: 'The wider production service we offer',
    url: 'https://www.filmproductionbahrain.com/video-production-bahrain',
    label: 'Video Production Bahrain',
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
  name: 'Film Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://www.filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Film production company in Bahrain producing brand films, corporate films, documentaries, TV commercials and music videos, with scripting, cinematography and post-production handled in-house.',
}

export default function FilmProductionBahrain() {
  return (
    <>
      <VideoHero
        videoId="ne15w87EA4Q"
        title="Film Production Bahrain"
        subtitle="Brand Films, Documentaries, Commercials"
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
        title="Film Production Company in Bahrain"
        subtitle="Cinematic Film Production"
        heroDescription="Narrative films for brands, organisations and artists. Scripted, shot and finished in Bahrain by one team that carries the project from the first brief to the final colour grade."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>What a Film Production Company in Bahrain Should Actually Deliver</h2>
        <p>
          When clients search for a film production company in Bahrain, they are usually not looking for
          someone to press record. They are looking for a partner who can take an idea that is still half
          formed, turn it into a script, shoot it properly on a real schedule, and hand back a finished film
          that holds up on a large screen and on a phone. That means the whole chain has to be covered: the
          writing, the photography, the lighting, the sound, the edit, and the grade.
        </p>
        <p>
          Film Production Bahrain is a Manama-based production company working in that way. We shoot on
          cinema cameras rather than consumer equipment, we plan shoot days properly instead of treating
          them as an improvised exercise, and our post-production is in-house, so the people who filmed your
          film are the people who finish it. We are part of Premiera Live, which means photography,
          animation and event production sit alongside film work under the same roof.
        </p>

        <h2>Film Production and Video Production: Where the Difference Matters</h2>
        <p>
          The words get used interchangeably, and the two formats overlap. The useful distinction is about
          what the finished piece has to do. A corporate video answers a question — how our process works,
          what the role involves, what the product does. A film earns attention and holds a point of view.
          Our{' '}
          <Link href="/video-production-bahrain" className="text-film-gold hover:underline">
            video production service in Bahrain
          </Link>{' '}
          covers the first category end to end; this page covers the second.
        </p>
        <p>
          In practice the difference shows up in three places. A film starts with a written script and a
          director with a point of view, not a shot list. It is given more pre-production time, because the
          shape of the story is decided before anyone spends a day of studio time. And it is edited for
          rhythm and emotion, not for speed. Clients who start with a short corporate video and later want
          something with more ambition usually come to us for exactly that reason.
        </p>

        <h2>The Kinds of Film We Produce</h2>

        <h3>Brand and Corporate Films</h3>
        <p>
          A brand film is usually two to five minutes and exists to say something about a company that a
          product page cannot. It introduces the people behind the work, shows how something is made or
          delivered, and gives a prospective client a reason to take the call. Our{' '}
          <Link href="/brand-film-production" className="text-film-gold hover:underline">
            brand film production
          </Link>{' '}
          service covers the craft in depth, and it is the most common way a Bahrain company starts a film
          project.
        </p>

        <h3>Documentary Film</h3>
        <p>
          Documentaries are built the other way round: the story is found rather than written in advance.
          That means a longer research stage, interviews with several participants, and an edit that
          reshapes the material into an argument. We shoot interviews and observational material, then
          structure it in the edit, which is where most documentaries are actually won or lost. Our{' '}
          <Link href="/documentary-film-production" className="text-film-gold hover:underline">
            documentary film production
          </Link>{' '}
          service handles heritage, cultural and corporate documentary work.
        </p>

        <h3>TV Commercials and Advertising Films</h3>
        <p>
          A commercial has a fixed duration, a fixed air date and a fixed cost, so every element is
          designed backwards from that constraint: the idea, the shots, the sound, the grade, the
          deliverables. We produce broadcast commercials for regional networks and digital-first films for
          social and pre-roll, and we deliver both from the same production so the campaign stays visually
          consistent. Our{' '}
          <Link href="/commercial-production" className="text-film-gold hover:underline">
            commercial production
          </Link>{' '}
          page covers formats and delivery in more detail.
        </p>

        <h3>Music Videos and Creative Films</h3>
        <p>
          For artists, labels and creative clients, the constraint is different again: the film has to
          work with the track, in the places it will be watched, and often it has to be shot to an
          existing schedule. We shoot performance pieces, narrative music videos and concept treatments,
          and we edit to picture as well as to beat. Our{' '}
          <Link href="/music-video-production" className="text-film-gold hover:underline">
            music video production
          </Link>{' '}
          service is the place to start if you are planning a release.
        </p>

        <h2>How a Film Is Made With Us</h2>

        <h3>Development and Script</h3>
        <p>
          We begin with the question the film has to answer and who it has to answer it to. From there we
          develop the angle, write the script, and agree what the film will look like before anything is
          filmed. Clients who want a documentary take a different path here — a lighter outline, an
          interview plan, and a story that is deliberately left to emerge in the edit.
        </p>

        <h3>Pre-Production</h3>
        <p>
          Pre-production is where projects are won or lost, and we do not compress it. We build the shot
          list, cast and crew, scout and lock locations, plan lighting for each setup, schedule the day
          around the availability of the people on camera, and confirm the logistics for each location.
          In Bahrain that means working around a working week where Friday and Saturday fall on the
          weekend, and planning for heat, dust, and the fact that a good interior and a good exterior are
          rarely available on the same day.
        </p>

        <h3>The Shoot</h3>
        <p>
          Every shoot day is run by a director, a cinematographer and an audio operator as a minimum, with
          additional crew as the film requires. We shoot on cinema cameras, use cinema prime lenses,
          stabilisers and sliders for movement, and light for the location rather than for the camera.
          Interviews are framed and lit consistently so a film cut across several rooms still holds
          together. We do not use drones, as they are illegal in Bahrain.
        </p>

        <h3>Post-Production</h3>
        <p>
          The edit is where a film is actually decided. We build the assembly from the shot list, cut it
          to a rhythm that matches the script, then grade the whole film to one look and finish the sound
          properly — dialogue, music, and effects mixed to broadcast standards. Motion graphics and titles
          are designed in-house to match the grade. You receive a master along with the cutdowns, subtitles
          and platform exports your channels need.
        </p>

        <h2>Filming in Bahrain: Locations and Conditions</h2>
        <p>
          Bahrain offers more variety on a small footprint than most production companies get to work
          with. The Manama waterfront and Bahrain Bay give modern architecture and open water. The older
          districts around Muharraq and Riffa give narrow lanes, heritage buildings and texture that a
          studio cannot fake. Interior locations, hotel and retail spaces, industrial sites, and the open
          desert areas to the south give the range needed to film more than one kind of story without
          travelling.
        </p>
        <p>
          Conditions shape the plan. Daytime light in Bahrain is hard and unforgiving, so interior work
          is often scheduled for the middle of the day and exteriors for the edges of it. Locations that
          look empty on a weekday are busy at the weekend and busy again when the working week restarts.
          A film production company that does not plan around those facts will shoot in the wrong light,
          and a film shot in the wrong light cannot be fixed in the grade.
        </p>

        <h2>What Working Locally Actually Gets You</h2>
        <ul>
          <li>A crew that is in Bahrain and available, without flight schedules and travel days</li>
          <li>Pre-production that accounts for local working hours, permissions, and location availability</li>
          <li>Post-production in the same time zone, with revisions handled quickly</li>
          <li>A team that can add photography, animation, or event coverage without a new vendor</li>
          <li>Delivery in the formats Bahrain's regional audiences actually watch on</li>
        </ul>

        <h2>How to Choose a Film Production Company in Bahrain</h2>
        <p>
          Look at the finished films rather than the camera list. Ask to see a project that was shot in
          difficult conditions and a project that was mostly interviews, because those two tests expose
          most of the weak producers. Ask who edits the work — a company that outsources editing has less
          control over the cut than it implies. Ask what happens if a shoot day is lost to weather or a
          client change, and whether the schedule has any room to absorb it. And ask to see the delivery
          formats, because a film that only arrives as a single high-resolution file has not been finished
          for the platforms where it will be watched.
        </p>

        <h2>Start a Film Project With Us</h2>
        <p>
          If you are planning a film, send us the brief, however rough it is, and we will come back with a
          clear read on what the project needs: the format, the scale, the approach, and a realistic
          schedule. Contact us to arrange a consultation and a detailed quote based on your project rather
          than a standard rate card.
        </p>
      </ServicePageLayout>
    </>
  )
}
