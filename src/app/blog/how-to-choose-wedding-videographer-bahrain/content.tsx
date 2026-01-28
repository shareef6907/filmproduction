'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Choose a Wedding Videographer in Bahrain',
      description: 'Complete guide to choosing the perfect wedding videographer in Bahrain.',
      author: { '@type': 'Organization', name: 'Bahrain Nights', url: 'https://filmproductionbahrain.com' },
      publisher: { '@type': 'Organization', name: 'Bahrain Nights', url: 'https://filmproductionbahrain.com' },
      datePublished: '2025-01-27',
      dateModified: '2025-01-27',
      mainEntityOfPage: 'https://filmproductionbahrain.com/blog/how-to-choose-wedding-videographer-bahrain',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://filmproductionbahrain.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://filmproductionbahrain.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'Wedding Videographer Guide', item: 'https://filmproductionbahrain.com/blog/how-to-choose-wedding-videographer-bahrain' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a wedding videographer cost in Bahrain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wedding videography in Bahrain ranges from BHD 300-500 for basic coverage (single camera, edited highlight video), BHD 800-1,500 for premium packages (multi-camera, cinematic edit, drone footage), and BHD 2,000+ for luxury cinematic films with same-day edits and multiple deliverables.',
          },
        },
        {
          '@type': 'Question',
          name: 'When should I book my wedding videographer in Bahrain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Book 3-6 months before your wedding, especially during peak wedding season (October to April). The best videographers in Bahrain get booked early. For destination weddings or particularly popular dates, book 6-12 months ahead.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I look for in a wedding videographer portfolio?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Look for cinematic quality (not just documentation), emotional storytelling, good audio quality, smooth camera movements, creative use of light, consistent color grading, and experience with weddings similar to yours in size and cultural style.',
          },
        },
      ],
    },
  ],
}

export default function WeddingVideographerContent() {
  return (
    <main className="min-h-screen bg-film-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-film-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-16 py-4 flex items-center justify-between">
          <Link href="/"><span className="font-bold text-xl text-white">Bahrain Nights</span></Link>
          <div className="flex items-center gap-6">
            <Link href="/#work" className="font-body text-sm text-white/60 hover:text-white transition-colors hidden md:block">Our Work</Link>
            <Link href="/blog" className="font-body text-sm text-white/60 hover:text-white transition-colors hidden md:block">Blog</Link>
            <a href="https://wa.me/97339007750" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-4 py-2 rounded-lg font-body text-sm font-medium hover:bg-[#20bd5a] transition-all">WhatsApp Us</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-4 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link><span>/</span>
              <span className="text-white/60">Wedding Videographer Guide</span>
            </div>
            <p className="text-film-gold font-body text-sm tracking-widest uppercase mb-4">Guide</p>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium text-white mb-6">
              How to Choose a Wedding Videographer in Bahrain
            </h1>
            <div className="flex items-center gap-3 text-sm text-white/40">
              <time dateTime="2025-01-27">January 27, 2025</time><span>•</span><span>7 min read</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 md:px-12 lg:px-16 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <p className="font-body text-lg text-white/70 mb-10 leading-relaxed">
              Your wedding day passes in a blur — the emotions, the laughter, the tears of joy, the dancing. A professional wedding videographer captures all of these moments so you can relive them forever. But choosing the right videographer in Bahrain requires more than just picking a name from Instagram. Here&apos;s everything you need to know.
            </p>

            <h2 className="font-display text-2xl md:text-3xl text-white mb-4 mt-12">1. Review Their Portfolio — Carefully</h2>
            <p className="font-body text-white/60 mb-4 leading-relaxed">
              A wedding videographer&apos;s portfolio tells you everything. When reviewing portfolios of <Link href="/services/wedding-videography-bahrain" className="text-film-gold hover:underline">wedding videographers in Bahrain</Link>, look for:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Cinematic quality: Does the video look like a movie or a home recording? Professional videographers use cinema cameras, proper lighting, and creative techniques.',
                'Emotional storytelling: A great wedding video makes you feel something — even for strangers. It should tell the story of the day, not just document it.',
                'Audio quality: Can you hear the vows clearly? Is the background music well-mixed? Audio is often what separates amateur from professional.',
                'Consistency: Every video in their portfolio should be high quality, not just the highlight reel. Ask to see full wedding films, not just 60-second Instagram teasers.',
                'Cultural awareness: Bahrain weddings span many cultures — Arabic, Indian, Filipino, Western, and mixed. Look for experience with weddings similar to yours.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-film-gold mt-1.5">▸</span>
                  <span className="font-body text-white/60">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display text-2xl md:text-3xl text-white mb-4 mt-12">2. Understand Their Filming Style</h2>
            <p className="font-body text-white/60 mb-4 leading-relaxed">
              Wedding videography styles vary significantly. Understanding the differences helps you find the right match:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { style: 'Cinematic', desc: 'Film-like quality with dramatic shots, shallow depth of field, drone aerials, and careful color grading. Tells a story with emotional impact. This is what most couples in Bahrain want today.' },
                { style: 'Documentary', desc: 'Follows the day as it unfolds with minimal direction. Authentic and natural. Great for couples who want a true record of events without posed setups.' },
                { style: 'Traditional', desc: 'Straightforward coverage of ceremonies and speeches. Less creative but ensures all important moments are captured. Common for more traditional Bahraini weddings.' },
                { style: 'Hybrid', desc: 'Combines cinematic and documentary styles. Artistic storytelling with authentic moments. The most popular style for modern Bahrain weddings.' },
              ].map((item) => (
                <div key={item.style} className="bg-zinc-900/50 border border-white/10 rounded-xl p-5">
                  <h3 className="font-display text-lg text-white mb-2">{item.style}</h3>
                  <p className="font-body text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl md:text-3xl text-white mb-4 mt-12">3. Questions to Ask Your Wedding Videographer</h2>
            <p className="font-body text-white/60 mb-4 leading-relaxed">
              Before booking, ask these essential questions:
            </p>
            <div className="space-y-3 mb-8">
              {[
                'How many weddings have you filmed in Bahrain?',
                'How many cameras and operators will be at my wedding?',
                'What equipment do you use? (Cinema cameras vs consumer cameras matters)',
                'Do you offer drone/aerial footage?',
                'What\'s your turnaround time for the final edit?',
                'How many revisions are included?',
                'Do you have experience with my wedding venue?',
                'Can I see a full-length wedding film (not just highlights)?',
                'What happens if you\'re sick on the day — do you have a backup?',
                'Do you offer same-day edits for the reception?',
                'What deliverables are included (highlight reel, full ceremony, speeches, etc.)?',
                'Do you coordinate with the photographer?',
              ].map((q) => (
                <div key={q} className="flex items-start gap-3">
                  <span className="text-film-gold mt-0.5">?</span>
                  <span className="font-body text-white/60">{q}</span>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl md:text-3xl text-white mb-4 mt-12">4. Wedding Videography Pricing in Bahrain</h2>
            <p className="font-body text-white/60 mb-4 leading-relaxed">
              Understanding pricing helps you budget appropriately and know what you&apos;re getting:
            </p>
            <div className="space-y-4 mb-8">
              {[
                { tier: 'Essential Coverage', price: 'BHD 300-500', desc: 'Single camera operator, 4-6 hours coverage, edited highlight video (3-5 minutes). Suitable for smaller, intimate weddings.' },
                { tier: 'Premium Package', price: 'BHD 800-1,500', desc: 'Multi-camera setup (2-3 operators), full day coverage, cinematic highlight film, full ceremony edit, drone footage, and professionally mixed audio.' },
                { tier: 'Luxury Cinematic Film', price: 'BHD 2,000+', desc: 'Full cinematic production with 3+ cameras, same-day edit, extended highlight film, full ceremony and speeches, drone footage, custom soundtrack, and premium color grading.' },
              ].map((item) => (
                <div key={item.tier} className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-lg text-white">{item.tier}</h3>
                    <span className="text-film-gold font-body font-medium">{item.price}</span>
                  </div>
                  <p className="font-body text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl md:text-3xl text-white mb-4 mt-12">5. Tips for the Best Wedding Video</h2>
            <p className="font-body text-white/60 mb-4 leading-relaxed">
              Once you&apos;ve chosen your videographer, here are tips to ensure the best results:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Share a timeline early: Give your videographer the detailed schedule so they can plan their coverage.',
                'Discuss must-have shots: Family groups, specific traditions, or moments you absolutely want captured.',
                'Coordinate with your photographer: Professional videographers and photographers work together, not against each other.',
                'Plan for good light: If possible, schedule key moments (first look, outdoor photos) during golden hour for cinematic quality.',
                'Prepare the venue: Tidy rooms where you\'re getting ready — the videographer will film there.',
                'Write personal vows: If you\'re able to, personal vows make for the most emotional footage.',
                'Don\'t worry about the camera: The best moments happen when you forget you\'re being filmed. Trust your videographer and enjoy your day.',
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-3">
                  <span className="text-film-gold mt-1.5">▸</span>
                  <span className="font-body text-white/60">{tip}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display text-2xl md:text-3xl text-white mb-4 mt-12">6. Popular Wedding Venues for Video in Bahrain</h2>
            <p className="font-body text-white/60 mb-4 leading-relaxed">
              Some venues in Bahrain are particularly stunning on camera:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
              {['The Ritz-Carlton Bahrain', 'Four Seasons Bahrain Bay', 'Gulf Hotel', 'ART Rotana', 'Sofitel Bahrain', 'Al Areen Palace', 'Beach venues (Amwaj/Durrat)', 'Bahrain Fort (outdoor)', 'Private villas'].map((v) => (
                <div key={v} className="bg-zinc-900/50 border border-white/10 rounded-lg p-3 text-center">
                  <span className="font-body text-white/70 text-sm">{v}</span>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <h2 className="font-display text-2xl md:text-3xl text-white mb-6 mt-12">Frequently Asked Questions</h2>
            <div className="space-y-3 mb-12">
              {[
                { q: 'How much does a wedding videographer cost in Bahrain?', a: 'Basic coverage starts at BHD 300-500, premium multi-camera packages BHD 800-1,500, and luxury cinematic films BHD 2,000+.' },
                { q: 'When should I book my wedding videographer?', a: 'Book 3-6 months before your wedding, especially during peak season (October-April). For popular dates, book 6-12 months ahead.' },
                { q: 'What should I look for in a portfolio?', a: 'Cinematic quality, emotional storytelling, good audio, smooth camera work, creative lighting, consistent color grading, and experience with weddings similar to yours.' },
              ].map((faq) => (
                <details key={faq.q} className="bg-zinc-900/50 border border-white/10 rounded-xl group">
                  <summary className="p-5 cursor-pointer font-display text-white hover:text-film-gold transition-colors list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-film-gold ml-2 group-open:rotate-45 transition-transform text-xl">+</span>
                  </summary>
                  <p className="px-5 pb-5 font-body text-white/60">{faq.a}</p>
                </details>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-zinc-900/80 border border-film-gold/30 rounded-2xl p-8 md:p-12 text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-white mb-4">Looking for a Wedding Videographer in Bahrain?</h2>
              <p className="font-body text-white/60 max-w-xl mx-auto mb-8">
                Bahrain Nights creates cinematic <Link href="/services/wedding-videography-bahrain" className="text-film-gold hover:underline">wedding films</Link> that capture every emotion. Let&apos;s discuss your wedding.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://wa.me/97339007750?text=Hello%2C%20I'm%20interested%20in%20wedding%20videography." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-body font-medium hover:bg-[#20bd5a] transition-all w-full sm:w-auto text-center">WhatsApp Us</a>
                <a href="tel:+97339007750" className="border border-white/20 text-white px-8 py-4 rounded-lg font-body font-medium hover:border-film-gold/50 transition-all w-full sm:w-auto text-center">Call +973 3900 7750</a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                { href: '/services/video-production-bahrain', label: 'Video Production' },
                { href: '/services/film-production-company-bahrain', label: 'Film Production' },
                { href: '/services/corporate-video-bahrain', label: 'Corporate Video' },
                { href: '/services/wedding-videography-bahrain', label: 'Wedding Videography' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="bg-zinc-900/50 border border-white/10 hover:border-film-gold/50 rounded-xl p-5 text-center transition-colors duration-300">
                  <span className="font-body text-white/80 hover:text-white">{link.label}</span>
                </Link>
              ))}
            </div>

            <div className="flex justify-between items-center pt-8 border-t border-white/10">
              <Link href="/blog/corporate-video-production-bahrain-guide" className="font-body text-film-gold hover:underline">← Corporate Video Guide</Link>
              <Link href="/blog/why-business-needs-video-bahrain" className="font-body text-film-gold hover:underline">Next: Why Businesses Need Video →</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
