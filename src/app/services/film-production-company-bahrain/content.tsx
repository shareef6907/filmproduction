'use client'

import { motion } from 'framer-motion'
import ServicePageLayout from '@/components/ServicePageLayout'

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://filmproductionbahrain.com/#business',
      name: 'Bahrain Nights - Film Production',
      url: 'https://filmproductionbahrain.com',
      telephone: '+97339007750',
      email: 'ceo@bahrainnights.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Manama',
        addressCountry: 'BH',
      },
      areaServed: 'Bahrain',
      priceRange: '$$',
    },
    {
      '@type': 'Service',
      name: 'Film Production Company Bahrain',
      description: 'Full-service film production company in Bahrain specializing in brand films, documentaries, commercials, and short films.',
      provider: { '@id': 'https://filmproductionbahrain.com/#business' },
      areaServed: 'Bahrain',
      serviceType: 'Film Production',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best film production company in Bahrain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bahrain Nights is one of the leading film production companies in Bahrain, offering a full in-house team including directors, cinematographers, editors, colorists, and VFX artists. We produce brand films, documentaries, commercials, and short films with cinema-grade quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer full-service film production in Bahrain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we handle every aspect of filmmaking — concept development, scriptwriting, pre-production planning, filming with cinema-grade equipment, editing, color grading, sound design, VFX, and final delivery. One team, one point of contact, from start to finish.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you produce content for international distribution?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. We shoot in 4K with broadcast-standard specifications including 10-bit color depth and Dolby-compliant audio. Our content meets technical requirements for TV broadcast, cinema, streaming platforms, and international film festivals.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work outside of Bahrain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, while based in Manama, Bahrain, we take on projects across the GCC region including Saudi Arabia, UAE, Kuwait, Qatar, and Oman. We travel with our equipment and crew for productions anywhere in the Gulf.',
          },
        },
        {
          '@type': 'Question',
          name: 'What makes Bahrain Nights different from other production companies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We maintain a complete in-house team (director, DP, editor, colorist, VFX, motion graphics, stylist, makeup) rather than outsourcing. This ensures consistent quality, faster turnaround, unified creative vision, and competitive pricing.',
          },
        },
      ],
    },
    {
      '@type': 'VideoObject',
      name: 'Bahrain Nights Film Production Showreel',
      description: 'Showcasing our cinematic film production work across Bahrain.',
      thumbnailUrl: '/og-image.jpg',
      uploadDate: '2024-01-01',
      contentUrl: 'https://filmproductionbahrain.com',
    },
  ],
}

export default function FilmProductionContent() {
  return (
    <ServicePageLayout
      title="Film Production Company Bahrain"
      subtitle="Cinematic Storytelling Excellence"
      heroDescription="Bahrain Nights is a premier film production house delivering award-quality films, documentaries, and commercials with a full in-house creative team."
      schemaMarkup={schemaMarkup}
    >
      <section className="py-16 px-4 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                A Full-Service Film Production House in Bahrain
              </h2>
              <p className="font-body text-white/70 text-lg leading-relaxed">
                Bahrain Nights is more than a <strong className="text-white">film production company in Bahrain</strong> — we are storytellers, visual artists, and technical experts united by a passion for cinema. Founded with the mission of bringing world-class film production to the Kingdom of Bahrain, we have spent over a decade crafting films that move audiences and deliver results.
              </p>
              <p className="font-body text-white/70 text-lg leading-relaxed mt-4">
                Our production house handles every aspect of filmmaking, from initial concept development and scriptwriting through to filming, editing, color grading, and final delivery. We are equipped with the latest cinema-grade technology and staffed by experienced professionals who have worked on projects spanning the Gulf region and beyond.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                What We Produce
              </h2>
              <p className="font-body text-white/70 text-lg leading-relaxed mb-6">
                As a versatile <strong className="text-white">film production company in Bahrain</strong>, we work across a wide range of formats and genres. Our diverse portfolio reflects our ability to adapt to any creative challenge while maintaining the highest production standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Brand Films & Commercials', desc: 'Cinematic brand stories and TV commercials that capture your identity and engage your audience. We produce content for broadcast television, cinema pre-rolls, and digital platforms across the GCC.' },
                { title: 'Documentaries', desc: 'Compelling documentary films that explore real stories with depth, nuance, and visual beauty. From cultural heritage pieces to corporate documentaries, we bring untold stories to life.' },
                { title: 'Short Films', desc: 'Narrative short films crafted for festivals, brand storytelling, and digital distribution. Our award-caliber productions showcase creative filmmaking at its finest.' },
                { title: 'Music Videos & Creative Content', desc: 'Visually stunning music videos and creative content that push boundaries. We collaborate with artists and brands to produce content that stands out in a crowded digital landscape.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-zinc-900/50 border border-white/10 rounded-xl p-6"
                >
                  <h3 className="font-display text-xl text-white mb-2">{item.title}</h3>
                  <p className="font-body text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                Our In-House Production Team
              </h2>
              <p className="font-body text-white/70 text-lg leading-relaxed">
                What sets Bahrain Nights apart from other <strong className="text-white">production houses in Bahrain</strong> is our complete in-house team. We employ a Creative Director, Producer, Director of Photography, DP Assistant, Audio Engineer, Editor, Colorist, VFX Artist, SFX Artist, Motion Graphics Designer, Stylist, and Makeup Artist — all working together seamlessly to deliver exceptional results.
              </p>
              <p className="font-body text-white/70 text-lg leading-relaxed mt-4">
                This integrated approach means faster turnaround times, consistent quality, and a unified creative vision from start to finish. You deal with one team, one point of contact, and one shared goal: making your project extraordinary.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                Cinema-Grade Equipment & Technology
              </h2>
              <p className="font-body text-white/70 text-lg leading-relaxed">
                We shoot in 4K resolution at up to 120 frames per second using full-frame cinema cameras with S-Cinetone color science and 10-bit 4:2:2 color sampling. This means every frame we capture has the dynamic range, color accuracy, and detail needed for broadcast, cinema, and high-end digital delivery.
              </p>
              <p className="font-body text-white/70 text-lg leading-relaxed mt-4">
                Our post-production suite includes professional editing, DaVinci Resolve color grading, Dolby-compliant sound mixing, and advanced visual effects capabilities. Whether your project is destined for the big screen, television, or social media, we deliver to the exact technical specifications required.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-film-gold/30 rounded-xl p-8">
              <h3 className="font-display text-2xl text-white mb-4">Serving All of Bahrain</h3>
              <p className="font-body text-white/70 leading-relaxed">
                Based in Manama, we serve clients throughout the Kingdom of Bahrain — from Muharraq and Riffa to Amwaj Islands and the Bahrain Financial Harbour. We also take on projects across the wider GCC region including Saudi Arabia, UAE, Kuwait, Qatar, and Oman. Wherever your story needs to be told, Bahrain Nights is ready to bring it to life.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              { q: 'What is the best film production company in Bahrain?', a: 'Bahrain Nights is one of the leading film production companies in Bahrain, with a full in-house team producing brand films, documentaries, commercials, and short films at cinema-grade quality.' },
              { q: 'Do you offer full-service film production?', a: 'Yes — concept development, scriptwriting, pre-production, filming, editing, color grading, sound design, VFX, and final delivery. One team from start to finish.' },
              { q: 'Can you produce content for international distribution?', a: 'Absolutely. We shoot in 4K with broadcast-standard specs including 10-bit color and Dolby-compliant audio, meeting requirements for TV, cinema, and streaming platforms.' },
              { q: 'Do you work outside of Bahrain?', a: 'Yes, we take on projects across the GCC — Saudi Arabia, UAE, Kuwait, Qatar, and Oman. We travel with our equipment and crew.' },
              { q: 'What makes Bahrain Nights different?', a: 'A complete in-house team (director, DP, editor, colorist, VFX, motion graphics, stylist, makeup) ensures consistent quality, faster turnaround, and competitive pricing.' },
            ].map((faq) => (
              <details key={faq.q} className="bg-zinc-900/50 border border-white/10 rounded-xl group">
                <summary className="p-5 cursor-pointer font-display text-white hover:text-film-gold transition-colors list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-film-gold ml-2 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="px-5 pb-5 font-body text-white/60 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
