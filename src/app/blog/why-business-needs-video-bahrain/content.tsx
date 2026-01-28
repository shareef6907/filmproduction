'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Why Every Business in Bahrain Needs Professional Video Content',
      description: 'Why professional video content is essential for businesses in Bahrain — engagement, trust, SEO, and conversions.',
      author: { '@type': 'Organization', name: 'Bahrain Nights', url: 'https://filmproductionbahrain.com' },
      publisher: { '@type': 'Organization', name: 'Bahrain Nights', url: 'https://filmproductionbahrain.com' },
      datePublished: '2025-01-26',
      dateModified: '2025-01-26',
      mainEntityOfPage: 'https://filmproductionbahrain.com/blog/why-business-needs-video-bahrain',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://filmproductionbahrain.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://filmproductionbahrain.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'Why Businesses Need Video', item: 'https://filmproductionbahrain.com/blog/why-business-needs-video-bahrain' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why is video important for businesses in Bahrain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Video content generates 1200% more shares than text and images combined, increases website conversion rates by up to 80%, and is preferred by 72% of customers over text for learning about products. In Bahrain\'s competitive market, video helps businesses stand out, build trust, and reach customers on platforms like Instagram, YouTube, and LinkedIn.',
          },
        },
        {
          '@type': 'Question',
          name: 'What type of video content should a Bahrain business start with?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Start with a company profile video for your website and a set of short social media clips. These provide immediate ROI by improving your website conversion rate and building your social media presence. From there, add testimonial videos, product demos, and regular social content.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does business video production cost in Bahrain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Professional business video production in Bahrain starts from BHD 500 for simple social media content. Company profile videos range from BHD 1,000-3,000. A full content package with multiple videos for website and social media typically costs BHD 2,000-5,000.',
          },
        },
      ],
    },
  ],
}

export default function BusinessVideoContent() {
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
              <span className="text-white/60">Why Businesses Need Video</span>
            </div>
            <p className="text-film-gold font-body text-sm tracking-widest uppercase mb-4">Insights</p>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium text-white mb-6">
              Why Every Business in Bahrain Needs Professional Video Content
            </h1>
            <div className="flex items-center gap-3 text-sm text-white/40">
              <time dateTime="2025-01-26">January 26, 2025</time><span>•</span><span>7 min read</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 md:px-12 lg:px-16 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <p className="font-body text-lg text-white/70 mb-10 leading-relaxed">
              In Bahrain&apos;s competitive business landscape, professional video content is no longer a luxury — it&apos;s a necessity. From startups in Bahrain FinTech Bay to established enterprises in Seef District, businesses that invest in video consistently outperform those that don&apos;t. Here&apos;s why, and how you can start.
            </p>

            <h2 className="font-display text-2xl md:text-3xl text-white mb-4 mt-12">1. Video Builds Trust Faster Than Any Other Medium</h2>
            <p className="font-body text-white/60 mb-4 leading-relaxed">
              In a market where personal relationships drive business — especially in Bahrain — video is the next best thing to meeting in person. When potential customers see your team, hear your voice, and watch your operation, they form a connection that no amount of text or stock photography can create.
            </p>
            <p className="font-body text-white/60 mb-4 leading-relaxed">
              A professional <Link href="/services/corporate-video-bahrain" className="text-film-gold hover:underline">company profile video</Link> on your website homepage can increase the time visitors spend on your site by 88% and boost conversion rates by up to 80%. In Bahrain, where many business decisions are relationship-driven, putting a human face on your brand through video is incredibly powerful.
            </p>
            <div className="bg-zinc-900/50 border border-film-gold/20 rounded-xl p-6 mb-8">
              <p className="font-body text-white/70 italic">&ldquo;64% of consumers are more likely to buy a product after watching a video about it. For B2B businesses in Bahrain, that number is even higher — decision-makers prefer video over any other content format.&rdquo;</p>
            </div>

            <h2 className="font-display text-2xl md:text-3xl text-white mb-4 mt-12">2. Social Media in Bahrain is Video-First</h2>
            <p className="font-body text-white/60 mb-4 leading-relaxed">
              Bahrain has one of the highest social media penetration rates in the world — over 98% of the population is active on social media. And the platforms they use are increasingly video-dominated:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { platform: 'Instagram', insight: 'Reels get 2x more reach than static posts. Bahrain\'s Instagram-savvy audience engages heavily with short-form video content.' },
                { platform: 'YouTube', insight: 'The second largest search engine. Bahraini consumers search YouTube for product reviews, tutorials, and business information.' },
                { platform: 'LinkedIn', insight: 'Video posts get 5x more engagement. Essential for B2B companies targeting Bahrain\'s business community.' },
                { platform: 'TikTok', insight: 'Rapidly growing in Bahrain, especially among younger demographics. Short, creative videos drive massive organic reach.' },
              ].map((item) => (
                <div key={item.platform} className="bg-zinc-900/50 border border-white/10 rounded-xl p-5">
                  <h3 className="font-display text-lg text-white mb-2">{item.platform}</h3>
                  <p className="font-body text-white/60 text-sm">{item.insight}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-white/60 mb-4 leading-relaxed">
              Without video content, your business is invisible on the platforms where your customers spend their time. A single professional shoot with <Link href="/services/video-production-bahrain" className="text-film-gold hover:underline">Bahrain Nights</Link> can produce content for months of social media posts.
            </p>

            <h2 className="font-display text-2xl md:text-3xl text-white mb-4 mt-12">3. Video Dramatically Improves SEO</h2>
            <p className="font-body text-white/60 mb-4 leading-relaxed">
              Google loves video. Websites with video content are 53x more likely to rank on the first page of Google search results. For Bahrain businesses competing for local search visibility, video is a game-changer:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Pages with video have a 41% higher click-through rate in search results.',
                'Video increases average time on page — a key Google ranking factor.',
                'YouTube videos appear in Google search results, giving you double the visibility.',
                'Video content generates backlinks naturally, improving your domain authority.',
                'Google\'s search algorithm increasingly favors rich media content including video.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-film-gold mt-1.5">▸</span>
                  <span className="font-body text-white/60">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display text-2xl md:text-3xl text-white mb-4 mt-12">4. Video Content Types That Drive Business Results</h2>
            <p className="font-body text-white/60 mb-4 leading-relaxed">
              Not all videos are created equal. Here are the types that deliver the best ROI for businesses in Bahrain:
            </p>
            <div className="space-y-4 mb-8">
              {[
                { type: 'Company Profile Video', impact: 'Your digital handshake. Put it on your homepage and watch conversion rates climb. Shows who you are, what you do, and why customers choose you.' },
                { type: 'Customer Testimonials', impact: 'The most powerful form of social proof. Real customers sharing real experiences builds trust faster than any marketing copy.' },
                { type: 'Product/Service Demos', impact: 'Show, don\'t tell. Demonstrating your product or service in action removes uncertainty and drives purchasing decisions.' },
                { type: 'Behind-the-Scenes Content', impact: 'Humanizes your brand. Show your team, your process, your culture. Bahrain customers value authenticity and personal connection.' },
                { type: 'Social Media Shorts', impact: 'Short, punchy videos (15-60 seconds) optimized for Instagram Reels, TikTok, and LinkedIn. High volume, high impact, cost-effective.' },
                { type: 'Event Highlight Videos', impact: 'Capture conferences, product launches, and corporate events. Content for post-event marketing and proof of your industry presence.' },
              ].map((item) => (
                <div key={item.type} className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <h3 className="font-display text-lg text-white mb-2">{item.type}</h3>
                  <p className="font-body text-white/60 text-sm">{item.impact}</p>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl md:text-3xl text-white mb-4 mt-12">5. The Cost of NOT Having Video</h2>
            <p className="font-body text-white/60 mb-4 leading-relaxed">
              Many businesses in Bahrain hesitate to invest in video, thinking it&apos;s too expensive. But consider the cost of not having video:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Your competitors who use video are getting 66% more qualified leads per year.',
                'You\'re invisible on the fastest-growing content platforms (Instagram Reels, YouTube, TikTok).',
                'Your website has lower engagement, higher bounce rates, and poorer SEO performance.',
                'Potential customers can\'t connect with your brand emotionally — they choose competitors they feel they "know."',
                'Your sales team lacks powerful presentation tools for proposals and pitches.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-film-gold mt-1.5">▸</span>
                  <span className="font-body text-white/60">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display text-2xl md:text-3xl text-white mb-4 mt-12">6. Getting Started: A Practical Plan</h2>
            <p className="font-body text-white/60 mb-4 leading-relaxed">
              Here&apos;s a practical video content roadmap for Bahrain businesses, whether you&apos;re just starting out or scaling up:
            </p>
            <div className="space-y-4 mb-8">
              {[
                { phase: 'Phase 1: Foundation', budget: 'BHD 1,000-2,000', items: 'Company profile video + 5-10 social media clips from the same shoot. Enough content for 2-3 months of social media posts.' },
                { phase: 'Phase 2: Social Proof', budget: 'BHD 500-1,000', items: '3-5 customer testimonial videos. Film them over 1-2 sessions. Use on website, social media, and in sales presentations.' },
                { phase: 'Phase 3: Ongoing Content', budget: 'BHD 500-1,500/month', items: 'Monthly or bi-monthly content shoots: behind-the-scenes, product updates, team stories, industry insights. Build a consistent video presence.' },
              ].map((item) => (
                <div key={item.phase} className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-lg text-white">{item.phase}</h3>
                    <span className="text-film-gold font-body font-medium text-sm">{item.budget}</span>
                  </div>
                  <p className="font-body text-white/60 text-sm">{item.items}</p>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl md:text-3xl text-white mb-4 mt-12">7. Why Professional Video Matters</h2>
            <p className="font-body text-white/60 mb-8 leading-relaxed">
              In the age of smartphones, anyone can shoot video. But there&apos;s a world of difference between phone footage and professional <Link href="/services/film-production-company-bahrain" className="text-film-gold hover:underline">film production</Link>. Professional video means cinema-grade cameras, professional lighting, crystal-clear audio, creative storytelling, and polished editing. It means your brand looks as good on screen as it is in reality. In a market like Bahrain, where quality and reputation matter, amateur video can actually hurt your brand more than having no video at all.
            </p>

            {/* FAQ */}
            <h2 className="font-display text-2xl md:text-3xl text-white mb-6 mt-12">Frequently Asked Questions</h2>
            <div className="space-y-3 mb-12">
              {[
                { q: 'Why is video important for businesses in Bahrain?', a: 'Video generates 1200% more shares than text/images, increases conversions by up to 80%, and is preferred by 72% of customers for learning about products. With Bahrain\'s 98%+ social media penetration, video is essential for reaching customers.' },
                { q: 'What type of video should a Bahrain business start with?', a: 'Start with a company profile video for your website and short social media clips. These provide immediate ROI by improving website conversions and building social presence.' },
                { q: 'How much does business video production cost in Bahrain?', a: 'Starting from BHD 500 for social media content. Company profiles: BHD 1,000-3,000. Full content packages: BHD 2,000-5,000.' },
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
              <h2 className="font-display text-2xl md:text-3xl text-white mb-4">Ready to Start Your Video Journey?</h2>
              <p className="font-body text-white/60 max-w-xl mx-auto mb-8">
                Bahrain Nights produces professional <Link href="/services/video-production-bahrain" className="text-film-gold hover:underline">video content</Link> for businesses across Bahrain. From company profiles to ongoing social media content, we&apos;ll help you build a video presence that drives results.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://wa.me/97339007750?text=Hello%2C%20I'm%20interested%20in%20video%20production%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-body font-medium hover:bg-[#20bd5a] transition-all w-full sm:w-auto text-center">WhatsApp Us</a>
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
              <Link href="/blog/how-to-choose-wedding-videographer-bahrain" className="font-body text-film-gold hover:underline">← Wedding Videographer Guide</Link>
              <Link href="/blog" className="font-body text-film-gold hover:underline">Back to Blog →</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
