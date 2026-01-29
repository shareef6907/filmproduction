'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Corporate Video Production in Bahrain: What to Expect',
      description: 'Complete guide to corporate video production in Bahrain including process, costs, timelines, and tips.',
      author: { '@type': 'Organization', name: 'Bahrain Nights', url: 'https://filmproductionbahrain.com' },
      publisher: { '@type': 'Organization', name: 'Bahrain Nights', url: 'https://filmproductionbahrain.com' },
      datePublished: '2025-01-28',
      dateModified: '2025-01-28',
      mainEntityOfPage: 'https://filmproductionbahrain.com/blog/corporate-video-production-bahrain-guide',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://filmproductionbahrain.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://filmproductionbahrain.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'Corporate Video Production Guide', item: 'https://filmproductionbahrain.com/blog/corporate-video-production-bahrain-guide' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does corporate video production cost in Bahrain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Corporate video production in Bahrain starts from BHD 500 for simple interview or testimonial videos. Company profile videos typically range from BHD 1,000-3,000. Complex multi-day productions with aerial footage, multiple locations, and advanced post-production range from BHD 3,000-10,000+.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to produce a corporate video in Bahrain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A typical corporate video takes 2-4 weeks from brief to final delivery. Simple testimonial videos can be turned around in 1-2 weeks. Complex company profiles or brand films with multiple locations and extensive post-production may take 4-8 weeks.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I prepare before a corporate video shoot in Bahrain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Prepare your key messages and talking points, confirm filming locations and any permits needed, brief participants on what to expect, have your brand guidelines (logos, colors, fonts) ready, and plan wardrobe (avoid stripes and busy patterns on camera).',
          },
        },
      ],
    },
  ],
}

export default function CorporateVideoGuideContent() {
  return (
    <main className="min-h-screen bg-film-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-film-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-16 py-4 flex items-center justify-between">
          <Link href="/">
            <span className="font-bold text-xl text-white">Bahrain Nights</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#work" className="font-body text-sm text-white/60 hover:text-white transition-colors hidden md:block">Our Work</Link>
            <Link href="/blog" className="font-body text-sm text-white/60 hover:text-white transition-colors hidden md:block">Blog</Link>
            <a href="https://wa.me/97339007750" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-4 py-2 rounded-lg font-body text-sm font-medium hover:bg-[#20bd5a] transition-all">
              WhatsApp Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/60">Corporate Video Guide</span>
            </div>
            <p className="text-film-gold font-body text-sm tracking-widest uppercase mb-4">Guide</p>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium text-white mb-6">
              Corporate Video Production in Bahrain: What to Expect
            </h1>
            <div className="flex items-center gap-3 text-sm text-white/40">
              <time dateTime="2025-01-28">January 28, 2025</time>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 md:px-12 lg:px-16 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <p className="font-body text-lg text-white/70 mb-10 leading-relaxed">
              Investing in corporate video production is one of the smartest marketing decisions a business in Bahrain can make. But if you&apos;ve never worked with a professional video production company, the process can feel daunting. This guide walks you through exactly what to expect — from the initial brief to final delivery — so you can approach your project with confidence.
            </p>

            {/* Phase 1 */}
            <h2 className="font-display text-2xl md:text-3xl text-white mb-4 mt-12">1. Pre-Production: Planning Your Corporate Video</h2>
            <p className="font-body text-white/60 mb-4 leading-relaxed">
              Pre-production is where your video takes shape before a single frame is filmed. This is arguably the most important phase, and a good <Link href="/services/corporate-video-bahrain" className="text-film-gold hover:underline">corporate video production company</Link> will invest significant time here. Here&apos;s what happens:
            </p>
            <div className="space-y-4 mb-8">
              {[
                { title: 'Discovery Brief', desc: 'We meet to understand your business, target audience, key messages, and goals. What do you want viewers to feel, know, and do after watching your video?' },
                { title: 'Creative Concept', desc: 'Based on your brief, we develop creative concepts — the storytelling approach, visual style, tone, and structure of your video.' },
                { title: 'Scriptwriting', desc: 'A detailed script or interview outline is written and refined. For testimonial-style videos, we prepare guiding questions. For narrated pieces, a full voiceover script is developed.' },
                { title: 'Storyboarding', desc: 'Visual planning of key shots and sequences. This gives you a clear preview of the final video\'s look and flow before filming.' },
                { title: 'Logistics Planning', desc: 'Location scouting, filming schedule, talent coordination, equipment list, and permits (if needed for public locations in Bahrain).' },
              ].map((item, i) => (
                <div key={item.title} className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <span className="bg-film-gold text-black font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</span>
                    <div>
                      <h3 className="font-display text-lg text-white mb-1">{item.title}</h3>
                      <p className="font-body text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Phase 2 */}
            <h2 className="font-display text-2xl md:text-3xl text-white mb-4 mt-12">2. Production: The Film Shoot</h2>
            <p className="font-body text-white/60 mb-4 leading-relaxed">
              Production day is where your video comes to life. Here&apos;s what a typical corporate video shoot in Bahrain looks like:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Our crew arrives early to set up camera equipment, lighting rigs, and audio gear at your location.',
                'We use cinema-grade cameras (RED, Sony FX series, or Blackmagic) to capture footage in 4K or higher resolution.',
                'Professional lighting ensures your team and spaces look their best — even in challenging office environments.',
                'Wireless lavalier microphones and shotgun mics capture crystal-clear audio for interviews and dialogue.',
                'We direct on-camera talent with care, putting interviewees at ease and coaching for natural delivery.',
                'B-roll footage is captured: your office, team at work, products, facilities, and Bahrain location shots.',
                'For dynamic movement, we use professional gimbals and stabilizers to capture smooth, cinematic shots of your facilities.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-film-gold mt-1.5">▸</span>
                  <span className="font-body text-white/60">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-white/60 mb-8 leading-relaxed">
              Most <Link href="/services/corporate-video-bahrain" className="text-film-gold hover:underline">corporate videos</Link> in Bahrain are filmed in 1-2 days. Company profile videos with multiple departments and locations may require 2-3 days. We handle all the technical complexity so your team can focus on delivering authentic content.
            </p>

            {/* Phase 3 */}
            <h2 className="font-display text-2xl md:text-3xl text-white mb-4 mt-12">3. Post-Production: Editing &amp; Delivery</h2>
            <p className="font-body text-white/60 mb-4 leading-relaxed">
              Post-production is where raw footage becomes a polished corporate video. This phase includes:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Video Editing', desc: 'We select the best takes, structure the narrative, and craft a compelling story from your footage.' },
                { title: 'Color Grading', desc: 'Professional color correction and grading gives your video a cinematic look that matches your brand aesthetic.' },
                { title: 'Sound Design', desc: 'Audio mixing, noise reduction, music selection, and sound effects create a professional audio experience.' },
                { title: 'Motion Graphics', desc: 'Animated titles, lower thirds, logos, infographics, and visual effects that reinforce your messaging.' },
                { title: 'Voiceover', desc: 'Professional voiceover recording in English, Arabic, or other languages with male or female talent.' },
                { title: 'Review & Revisions', desc: 'You review the draft edit and provide feedback. We include 2-3 rounds of revisions to ensure you\'re 100% satisfied.' },
              ].map((item) => (
                <div key={item.title} className="bg-zinc-900/50 border border-white/10 rounded-xl p-5">
                  <h3 className="font-display text-lg text-white mb-2">{item.title}</h3>
                  <p className="font-body text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Types */}
            <h2 className="font-display text-2xl md:text-3xl text-white mb-4 mt-12">4. Types of Corporate Videos We Produce in Bahrain</h2>
            <p className="font-body text-white/60 mb-4 leading-relaxed">
              Different business objectives call for different video formats. Here are the most popular corporate video types in Bahrain:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                { type: 'Company Profile Videos', desc: 'Showcase your business, team, facilities, and values. Essential for websites and investor presentations.' },
                { type: 'Testimonial Videos', desc: 'Real customers sharing their experiences. The most powerful form of social proof for Bahrain businesses.' },
                { type: 'Product/Service Videos', desc: 'Demonstrate your products or explain your services in a clear, engaging format.' },
                { type: 'Training & Onboarding Videos', desc: 'Standardize training with professional video content. Cost-effective for growing companies.' },
                { type: 'Event Highlight Videos', desc: 'Capture conferences, launches, and corporate events for post-event marketing.' },
                { type: 'Social Media Content', desc: 'Short-form videos optimized for LinkedIn, Instagram, and YouTube. Multiple formats from one shoot.' },
              ].map((item) => (
                <li key={item.type} className="flex items-start gap-3">
                  <span className="text-film-gold mt-1.5">▸</span>
                  <div>
                    <span className="font-body text-white font-medium">{item.type}:</span>
                    <span className="font-body text-white/60 ml-1">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Costs */}
            <h2 className="font-display text-2xl md:text-3xl text-white mb-4 mt-12">5. Corporate Video Production Costs in Bahrain</h2>
            <p className="font-body text-white/60 mb-4 leading-relaxed">
              Transparent pricing matters. Here&apos;s a general guide to corporate video production costs in Bahrain:
            </p>
            <div className="space-y-4 mb-8">
              {[
                { tier: 'Simple Interview / Testimonial', price: 'BHD 500-1,000', desc: 'Single location, 1-2 interviews, basic editing. Perfect for testimonials and quick social content.' },
                { tier: 'Company Profile Video', price: 'BHD 1,000-3,000', desc: 'Multiple locations, interviews, b-roll, motion graphics, professional voiceover. The standard for business websites.' },
                { tier: 'Premium Brand Film', price: 'BHD 3,000-10,000+', desc: 'Cinematic quality, multiple shoot days, aerial footage, advanced post-production, custom music. For premium brands and high-stakes presentations.' },
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

            {/* FAQ */}
            <h2 className="font-display text-2xl md:text-3xl text-white mb-6 mt-12">Frequently Asked Questions</h2>
            <div className="space-y-3 mb-12">
              {[
                { q: 'How much does corporate video production cost in Bahrain?', a: 'Starting from BHD 500 for simple interviews. Company profiles range BHD 1,000-3,000. Complex productions with aerial footage and multiple locations: BHD 3,000-10,000+.' },
                { q: 'How long does it take to produce a corporate video?', a: 'Typically 2-4 weeks from brief to delivery. Simple videos can be done in 1-2 weeks. Complex brand films may take 4-8 weeks.' },
                { q: 'What should I prepare before the shoot?', a: 'Prepare key messages and talking points, confirm locations, brief participants, have brand guidelines ready, and plan wardrobe (avoid stripes and busy patterns on camera).' },
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
              <h2 className="font-display text-2xl md:text-3xl text-white mb-4">Ready to Produce Your Corporate Video?</h2>
              <p className="font-body text-white/60 max-w-xl mx-auto mb-8">
                Contact Bahrain Nights for a free consultation. We&apos;ll discuss your objectives and provide a tailored proposal for your corporate video production.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://wa.me/97339007750?text=Hello%2C%20I'm%20interested%20in%20corporate%20video%20production." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-body font-medium hover:bg-[#20bd5a] transition-all w-full sm:w-auto text-center">
                  WhatsApp Us
                </a>
                <a href="tel:+97339007750" className="border border-white/20 text-white px-8 py-4 rounded-lg font-body font-medium hover:border-film-gold/50 transition-all w-full sm:w-auto text-center">
                  Call +973 3900 7750
                </a>
              </div>
            </div>

            {/* Internal Links */}
            <h3 className="font-display text-xl text-white mb-4">Explore Our Services</h3>
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
              <Link href="/blog" className="font-body text-film-gold hover:underline">← Back to Blog</Link>
              <Link href="/blog/how-to-choose-wedding-videographer-bahrain" className="font-body text-film-gold hover:underline">Next: Wedding Videographer Guide →</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
