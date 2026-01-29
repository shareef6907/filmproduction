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
      name: 'Video Production Bahrain',
      description: 'Professional video production services in Bahrain including brand films, commercials, event coverage, and corporate videos.',
      provider: { '@id': 'https://filmproductionbahrain.com/#business' },
      areaServed: 'Bahrain',
      serviceType: 'Video Production',
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
          name: 'Video Production',
          item: 'https://filmproductionbahrain.com/services/video-production-bahrain',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does video production cost in Bahrain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Video production costs in Bahrain vary based on project scope. Social media content starts from BHD 200, corporate videos from BHD 500, brand films from BHD 1,500, and TV commercials from BHD 3,000. Contact us for a detailed quote tailored to your project.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to produce a video in Bahrain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Timeline depends on complexity. Social media content can be delivered in 3-5 days, corporate videos in 1-2 weeks, and brand films or commercials in 2-4 weeks. Rush delivery is available for urgent projects.',
          },
        },
        {
          '@type': 'Question',
          name: 'What equipment do you use for video production?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We shoot on cinema-grade cameras including Sony FX6 and FX3 in 4K at up to 120fps with 10-bit 4:2:2 color depth. Our kit includes professional lighting, cinema lenses, gimbals, and wireless audio systems for broadcast-quality results.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide scriptwriting and creative direction?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we offer full pre-production services including creative concept development, scriptwriting, storyboarding, location scouting, casting, and production planning. Our creative directors work with you from initial idea to final delivery.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you produce videos for social media platforms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. We create platform-optimized content for Instagram Reels, TikTok, YouTube, LinkedIn, and other social media platforms. This includes vertical and square formats, captions, and platform-specific editing styles.',
          },
        },
      ],
    },
  ],
}

export default function VideoProductionContent() {
  return (
    <ServicePageLayout
      title="Video Production Bahrain"
      subtitle="Professional Videography Services"
      heroDescription="From concept to final cut, we create stunning videos that captivate audiences and elevate your brand. Bahrain's most trusted video production team."
      schemaMarkup={schemaMarkup}
    >
      {/* Main Content */}
      <section className="py-16 px-4 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert max-w-none"
          >
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                  Bahrain&apos;s Premier Video Production Company
                </h2>
                <p className="font-body text-white/70 text-lg leading-relaxed">
                  Bahrain Nights is a full-service <strong className="text-white">video production company in Bahrain</strong> delivering cinematic-quality content for brands, businesses, and individuals across the Kingdom. With over a decade of experience, our team of filmmakers, editors, and creative directors transforms ideas into compelling visual stories that resonate with audiences.
                </p>
                <p className="font-body text-white/70 text-lg leading-relaxed mt-4">
                  Whether you need a polished brand film, a dynamic social media campaign, or comprehensive event coverage, our <strong className="text-white">video production services in Bahrain</strong> cover every stage of the filmmaking process — from pre-production planning through to final delivery.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Brand Films', desc: 'Cinematic storytelling that communicates your brand\'s values, mission, and unique identity to your target audience.' },
                  { title: 'Commercial Videos', desc: 'High-impact advertisements designed for TV, digital platforms, and social media that drive engagement and conversions.' },
                  { title: 'Social Media Content', desc: 'Scroll-stopping short-form video content optimized for Instagram, TikTok, YouTube Shorts, and other platforms.' },
                  { title: 'Event Videography', desc: 'Multi-camera event coverage for conferences, product launches, exhibitions, and special occasions across Bahrain.' },
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
                  Our Video Production Process
                </h2>
                <p className="font-body text-white/70 text-lg leading-relaxed">
                  Every successful video starts with a clear vision. Our production process is designed to be collaborative, transparent, and efficient — ensuring you get exactly what you envisioned, on time and within budget.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { step: '01', title: 'Discovery & Pre-Production', desc: 'We begin with an in-depth consultation to understand your goals, audience, and message. Our team then develops the creative concept, script, storyboard, and production schedule.' },
                  { step: '02', title: 'Production & Filming', desc: 'Using state-of-the-art equipment including 4K cameras shooting up to 120fps, professional lighting, and cinema-grade audio, we capture your story with precision and artistry.' },
                  { step: '03', title: 'Post-Production & Delivery', desc: 'Our editors and colorists craft the final product with professional editing, color grading using S-Cinetone, sound design, motion graphics, and visual effects as needed.' },
                ].map((item) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex gap-6 items-start"
                  >
                    <span className="text-film-gold font-display text-4xl font-medium shrink-0">{item.step}</span>
                    <div>
                      <h3 className="font-display text-xl text-white mb-2">{item.title}</h3>
                      <p className="font-body text-white/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                  Why Choose Our Video Production Services in Bahrain?
                </h2>
                <p className="font-body text-white/70 text-lg leading-relaxed">
                  Bahrain Nights stands apart as a <strong className="text-white">video production agency in Bahrain</strong> that combines creative excellence with technical precision. Our in-house team includes directors, cinematographers, editors, colorists, and motion graphics artists — everything you need under one roof.
                </p>
                <p className="font-body text-white/70 text-lg leading-relaxed mt-4">
                  We serve clients across all industries in Bahrain, from startups and SMEs to government bodies and multinational corporations. Our portfolio spans brand films, documentaries, corporate videos, TV commercials, music videos, and digital content — all shot and produced right here in the Kingdom of Bahrain.
                </p>
                <p className="font-body text-white/70 text-lg leading-relaxed mt-4">
                  With shooting capabilities in 4K at 120fps, 10-bit 4:2:2 color depth, and full-frame sensor technology, every frame we capture meets broadcast and cinema standards. We don&apos;t just make videos — we craft visual experiences that leave lasting impressions.
                </p>
              </div>
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
              { q: 'How much does video production cost in Bahrain?', a: 'Social media content starts from BHD 200, corporate videos from BHD 500, brand films from BHD 1,500, and TV commercials from BHD 3,000. Contact us for a detailed quote.' },
              { q: 'How long does it take to produce a video?', a: 'Social media content can be delivered in 3-5 days, corporate videos in 1-2 weeks, and brand films or commercials in 2-4 weeks. Rush delivery is available.' },
              { q: 'What equipment do you use?', a: 'We shoot on cinema-grade cameras including Sony FX6 and FX3 in 4K at up to 120fps with 10-bit 4:2:2 color depth, professional lighting, cinema lenses, gimbals, and wireless audio.' },
              { q: 'Do you provide scriptwriting and creative direction?', a: 'Yes, we offer full pre-production including creative concepts, scriptwriting, storyboarding, location scouting, casting, and production planning.' },
              { q: 'Can you produce videos for social media?', a: 'Absolutely. We create platform-optimized content for Instagram Reels, TikTok, YouTube, LinkedIn, and more — including vertical formats, captions, and platform-specific editing.' },
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
