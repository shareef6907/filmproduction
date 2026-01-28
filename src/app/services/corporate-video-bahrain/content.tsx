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
      name: 'Corporate Video Production Bahrain',
      description: 'Professional corporate video production services in Bahrain for company profiles, training videos, investor presentations, and internal communications.',
      provider: { '@id': 'https://filmproductionbahrain.com/#business' },
      areaServed: 'Bahrain',
      serviceType: 'Corporate Video Production',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a corporate video cost in Bahrain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Corporate video production in Bahrain starts from BHD 500 for a simple interview or testimonial video. Company profile videos typically range from BHD 1,000-3,000, and multi-day productions with complex requirements are custom-quoted. Contact us for a tailored proposal.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you film at our office or business location in Bahrain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we specialize in on-location filming at offices, factories, retail spaces, and business facilities across Bahrain. We bring all necessary equipment including lighting, audio, and cameras — no studio needed.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you produce corporate videos in Arabic and English?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, our bilingual team produces corporate videos in both English and Arabic. We offer scriptwriting, voiceover, subtitling, and on-screen text in both languages to reach your full audience in Bahrain and across the GCC.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to produce a corporate video?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A standard corporate video typically takes 1-2 weeks from filming to final delivery. Company profiles and multi-segment productions may take 2-3 weeks. We offer expedited delivery for urgent projects.',
          },
        },
        {
          '@type': 'Question',
          name: 'What types of corporate videos do you produce?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We produce company profiles, executive interviews, training videos, investor presentations, product demos, internal communications, event coverage, testimonials, and recruitment videos for businesses across all industries in Bahrain.',
          },
        },
      ],
    },
  ],
}

export default function CorporateVideoContent() {
  return (
    <ServicePageLayout
      title="Corporate Video Bahrain"
      subtitle="Professional Business Video Production"
      heroDescription="Elevate your corporate communications with polished, professional videos that build trust, engage stakeholders, and drive business results."
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
                Corporate Video Production That Delivers Results
              </h2>
              <p className="font-body text-white/70 text-lg leading-relaxed">
                In today&apos;s business landscape, <strong className="text-white">corporate video in Bahrain</strong> is no longer optional — it&apos;s essential. Video content drives more engagement, builds stronger trust, and communicates complex messages more effectively than any other medium. At Bahrain Nights, we specialize in producing corporate videos that meet the highest professional standards while authentically representing your brand.
              </p>
              <p className="font-body text-white/70 text-lg leading-relaxed mt-4">
                Whether you&apos;re a financial institution in Bahrain Financial Harbour, a tech startup in Bahrain Bay, or a manufacturing company in Hidd — our <strong className="text-white">corporate video production services in Bahrain</strong> are tailored to your industry, audience, and objectives.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                Corporate Video Services We Offer
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Company Profile Videos', desc: 'Showcase your organization\'s mission, values, capabilities, and culture through a cinematic company profile that impresses clients, partners, and investors.' },
                { title: 'Executive Interviews', desc: 'Professional multi-camera interview setups with expert lighting and sound. Perfect for CEO messages, thought leadership content, and stakeholder communications.' },
                { title: 'Training & Onboarding Videos', desc: 'Engaging training content that improves retention and standardizes knowledge transfer across your organization. From safety protocols to software tutorials.' },
                { title: 'Investor & Stakeholder Presentations', desc: 'Polished video presentations for annual general meetings, investor roadshows, and board presentations that communicate your performance and vision.' },
                { title: 'Product & Service Demos', desc: 'Clear, compelling demonstrations of your products and services that help prospects understand your value proposition and drive purchase decisions.' },
                { title: 'Internal Communications', desc: 'Town halls, quarterly updates, and change management videos that keep your workforce informed, aligned, and engaged — whether in-office or remote.' },
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
                Industries We Serve in Bahrain
              </h2>
              <p className="font-body text-white/70 text-lg leading-relaxed">
                Our <strong className="text-white">corporate video production team in Bahrain</strong> has extensive experience working across the Kingdom&apos;s key industries. We understand the unique requirements, compliance considerations, and communication styles of each sector.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
                {[
                  'Banking & Finance',
                  'Oil & Gas',
                  'Real Estate',
                  'Healthcare',
                  'Technology',
                  'Government',
                  'Education',
                  'Hospitality',
                  'Retail & E-Commerce',
                ].map((industry) => (
                  <div key={industry} className="bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-3 text-center">
                    <span className="font-body text-white/70 text-sm">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                Why Bahrain Businesses Choose Us
              </h2>
              <p className="font-body text-white/70 text-lg leading-relaxed">
                Bahrain Nights has earned the trust of leading organizations across the Kingdom because we deliver more than just videos — we deliver business outcomes. Our corporate clients return to us because of our reliability, professionalism, and ability to translate complex business messages into engaging visual content.
              </p>
              <p className="font-body text-white/70 text-lg leading-relaxed mt-4">
                We offer flexible scheduling that works around your business hours, on-location filming at your offices or facilities, and fast turnaround times when you need content urgently. Our bilingual team can produce content in both English and Arabic, ensuring your message reaches every segment of your audience in Bahrain and across the GCC.
              </p>
              <p className="font-body text-white/70 text-lg leading-relaxed mt-4">
                Every corporate video we produce is shot in 4K with professional lighting, cinema-grade audio, and broadcast-quality color grading. The result is content that positions your brand alongside the best in the world — because in business, perception is everything.
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
              { q: 'How much does a corporate video cost in Bahrain?', a: 'Starts from BHD 500 for interviews/testimonials. Company profiles range from BHD 1,000-3,000. Complex productions are custom-quoted.' },
              { q: 'Can you film at our office or business location?', a: 'Yes, we specialize in on-location filming at offices, factories, retail spaces, and business facilities across Bahrain. We bring all equipment needed.' },
              { q: 'Do you produce videos in Arabic and English?', a: 'Yes, our bilingual team handles scriptwriting, voiceover, subtitling, and on-screen text in both English and Arabic.' },
              { q: 'How long does it take to produce a corporate video?', a: 'Standard corporate videos take 1-2 weeks. Company profiles and multi-segment productions may take 2-3 weeks. Expedited delivery is available.' },
              { q: 'What types of corporate videos do you produce?', a: 'Company profiles, executive interviews, training videos, investor presentations, product demos, internal comms, event coverage, testimonials, and recruitment videos.' },
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
