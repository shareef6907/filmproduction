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
      name: 'Wedding Videography Bahrain',
      description: 'Cinematic wedding videography services in Bahrain. 4K multi-camera coverage, highlight reels, and full-length wedding films.',
      provider: { '@id': 'https://filmproductionbahrain.com/#business' },
      areaServed: 'Bahrain',
      serviceType: 'Wedding Videography',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://filmproductionbahrain.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Wedding Videography',
          item: 'https://filmproductionbahrain.com/services/wedding-videography-bahrain',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does wedding videography cost in Bahrain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wedding videography in Bahrain starts from BHD 500 for a highlight reel package. Full wedding film packages range from BHD 800-1,500, and premium packages with same-day edits and multi-camera setups start from BHD 1,500. Contact us for a custom quote.',
          },
        },
        {
          '@type': 'Question',
          name: 'How far in advance should I book a wedding videographer in Bahrain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We recommend booking at least 2-3 months before your wedding, especially during peak season (October to April). Popular dates book up quickly, so early booking ensures you secure your preferred videography team.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you film both the ceremony and reception?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, our wedding packages cover the full day including preparations, ceremony, and reception. We can also cover pre-wedding events like henna nights, engagement parties, and rehearsal dinners as add-on services.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you accommodate cultural and religious wedding traditions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. We have extensive experience filming Arabic, South Asian, Filipino, Western, and multicultural weddings in Bahrain. We understand and respect the traditions, customs, and privacy requirements of every culture.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long until we receive our wedding video?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Highlight reels are typically delivered within 2-3 weeks. Full wedding films take 4-6 weeks for editing, color grading, and sound design. Premium packages include a same-day edit screened at your reception.',
          },
        },
      ],
    },
    {
      '@type': 'VideoObject',
      name: 'Bahrain Wedding Videography Showreel',
      description: 'Cinematic wedding films captured across Bahrain\'s most beautiful venues.',
      thumbnailUrl: '/og-image.jpg',
      uploadDate: '2024-01-01',
      contentUrl: 'https://filmproductionbahrain.com',
    },
  ],
}

export default function WeddingVideographyContent() {
  return (
    <ServicePageLayout
      title="Wedding Videography Bahrain"
      subtitle="Cinematic Wedding Films"
      heroDescription="Your love story deserves to be told beautifully. We create stunning cinematic wedding films that capture every emotion, every detail, and every magical moment."
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
                Bahrain&apos;s Premier Wedding Videographers
              </h2>
              <p className="font-body text-white/70 text-lg leading-relaxed">
                Your wedding day is one of the most important days of your life — and it deserves to be captured with the same artistry and emotion you put into planning it. Bahrain Nights is the leading <strong className="text-white">wedding videography company in Bahrain</strong>, specializing in cinematic wedding films that you&apos;ll treasure for a lifetime.
              </p>
              <p className="font-body text-white/70 text-lg leading-relaxed mt-4">
                We approach every wedding as a unique story. Using cinema-grade cameras, stabilized rigs, and professional audio equipment, our team captures the laughter, the tears, the vows, and the celebrations in stunning 4K quality. From intimate nikah ceremonies to grand ballroom receptions, we have the experience and sensitivity to document your day beautifully.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                Our Wedding Video Packages
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Highlight Reel',
                  features: ['3-5 minute cinematic edit', 'Best moments curated', 'Licensed music', 'Color graded', 'Perfect for social sharing'],
                },
                {
                  title: 'Full Wedding Film',
                  features: ['20-40 minute feature', 'Complete ceremony coverage', 'Reception highlights', 'Speeches & toasts', 'Cinematic storytelling'],
                },
                {
                  title: 'Premium Package',
                  features: ['Highlight reel + full film', 'Same-day edit preview', 'Multi-camera coverage', 'Cinematic slow motion', 'Behind-the-scenes footage'],
                },
              ].map((pkg, i) => (
                <motion.div
                  key={pkg.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-zinc-900/50 border border-white/10 rounded-xl p-6"
                >
                  <h3 className="font-display text-xl text-white mb-4">{pkg.title}</h3>
                  <ul className="space-y-2">
                    {pkg.features.map((f) => (
                      <li key={f} className="font-body text-white/60 text-sm flex items-start gap-2">
                        <span className="text-film-gold mt-1">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                What Makes Our Wedding Films Special
              </h2>
              <p className="font-body text-white/70 text-lg leading-relaxed">
                Unlike standard <strong className="text-white">wedding videographers in Bahrain</strong>, we bring a cinematic filmmaking approach to every wedding. We don&apos;t just record — we direct, compose, and craft every shot to create a narrative that unfolds like a beautiful short film.
              </p>
              <p className="font-body text-white/70 text-lg leading-relaxed mt-4">
                Our team uses the same 4K cinema cameras and stabilization systems we use for commercial productions. We shoot in slow motion at 120fps to capture those fleeting emotional moments — the first look, the ring exchange, the first dance — in breathtaking detail. Professional color grading gives your film a warm, timeless aesthetic that will look as beautiful in 20 years as it does today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Cultural Sensitivity', desc: 'We have extensive experience filming weddings across Bahrain\'s diverse communities — Arabic, South Asian, Filipino, Western, and multicultural celebrations. We understand and respect the traditions, customs, and privacy requirements of every culture.' },
                { title: 'Venue Experience', desc: 'From the Ritz-Carlton Bahrain and Four Seasons to Gulf Hotel, ART Rotana, and private villas — we\'ve filmed at nearly every major wedding venue in Bahrain. We know the best angles, lighting conditions, and logistics of each location.' },
                { title: 'Same-Day Edits', desc: 'Want to surprise your guests? Our same-day edit service delivers a 2-3 minute highlight reel that\'s screened at your reception, giving everyone a taste of the day\'s most magical moments while the celebration is still going.' },
                { title: 'Discreet & Professional', desc: 'Our team operates with minimal intrusion. We use long lenses and ambient lighting techniques to capture candid, authentic moments without disrupting the flow of your celebration. Your guests won\'t even notice us.' },
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

            <div className="bg-zinc-900/50 border border-film-gold/30 rounded-xl p-8">
              <h3 className="font-display text-2xl text-white mb-4">Book Your Wedding Videographer</h3>
              <p className="font-body text-white/70 leading-relaxed">
                Wedding dates book up quickly, especially during peak season (October through April) in Bahrain. We recommend reaching out at least 2-3 months before your wedding to secure your date. Contact us via WhatsApp or email for a free consultation — we&apos;d love to hear about your wedding plans and create a custom package that fits your vision and budget.
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
              { q: 'How much does wedding videography cost in Bahrain?', a: 'Highlight reels start from BHD 500. Full wedding films range from BHD 800-1,500. Premium packages with same-day edits and multi-camera start from BHD 1,500.' },
              { q: 'How far in advance should I book?', a: 'At least 2-3 months before your wedding, especially during peak season (October to April). Popular dates book up quickly.' },
              { q: 'Do you film both the ceremony and reception?', a: 'Yes, our packages cover the full day including preparations, ceremony, and reception. Pre-wedding events like henna nights are available as add-ons.' },
              { q: 'Can you accommodate cultural and religious traditions?', a: 'Absolutely. We have extensive experience with Arabic, South Asian, Filipino, Western, and multicultural weddings in Bahrain.' },
              { q: 'How long until we receive our wedding video?', a: 'Highlight reels in 2-3 weeks, full films in 4-6 weeks. Premium packages include a same-day edit screened at your reception.' },
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
