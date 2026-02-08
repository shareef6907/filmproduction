import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Video Production Blog | Tips, Guides & Industry Insights',
  description: 'Expert insights on video production in Bahrain. Tips, guides, and industry knowledge for businesses and brands looking to leverage video content.',
  openGraph: {
    title: 'Video Production Blog | Film Production Bahrain',
    description: 'Expert insights on video production in Bahrain. Tips, guides, and industry knowledge.',
    url: 'https://filmproductionbahrain.com/blog',
    type: 'website',
  },
  alternates: {
    canonical: 'https://filmproductionbahrain.com/blog',
  },
}

const blogPosts = [
  {
    slug: 'video-production-costs-bahrain-2026',
    title: 'Video Production Costs in Bahrain: What to Expect in 2026',
    description: 'A comprehensive guide to video production pricing in Bahrain. Understand costs for different video types and learn what factors affect your production budget.',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Industry Guide',
  },
  {
    slug: 'why-restaurants-need-promo-video',
    title: 'Why Every Restaurant in Bahrain Needs a Professional Promo Video',
    description: 'Discover how professional video content can transform your restaurant marketing, increase bookings, and build a loyal customer base in Bahrain\'s competitive dining scene.',
    date: '2025-01-10',
    readTime: '7 min read',
    category: 'Marketing',
  },
  {
    slug: 'corporate-video-production-guide',
    title: 'Corporate Video Production: The Complete Guide for Bahrain Businesses',
    description: 'Everything you need to know about creating effective corporate videos. Types, planning, production process, and maximizing ROI from your video investment.',
    date: '2025-01-05',
    readTime: '10 min read',
    category: 'Corporate',
  },
]

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-film-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-film-black/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-display text-xl text-white hover:text-film-gold transition-colors">
            Film Production <span className="text-film-gold">Bahrain</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#services" className="text-film-light/70 hover:text-white text-sm hidden md:block">
              Services
            </Link>
            <Link href="/#work" className="text-film-light/70 hover:text-white text-sm hidden md:block">
              Our Work
            </Link>
            <Link
              href="https://wa.me/97339007750"
              target="_blank"
              className="btn-primary text-sm py-2 px-4"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-film-dark to-film-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="heading-display text-film-gold text-sm tracking-[0.3em] mb-4">
            Insights & Guides
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-white mb-6">
            Video Production Blog
          </h1>
          <p className="text-film-light/70 max-w-2xl mx-auto">
            Expert insights, tips, and guides on video production in Bahrain. 
            Learn how to leverage video content for your business.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-film-gray/30 rounded-xl border border-white/5 overflow-hidden hover:border-film-gold/30 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <span className="text-film-gold">{post.category}</span>
                    <span className="text-film-light/40">•</span>
                    <span className="text-film-light/40">{post.date}</span>
                    <span className="text-film-light/40">•</span>
                    <span className="text-film-light/40">{post.readTime}</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl text-white mb-4 group-hover:text-film-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-film-light/60 leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <span className="inline-flex items-center text-film-gold font-medium group-hover:gap-3 gap-2 transition-all">
                    Read Article
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-film-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl text-white mb-6">
            Ready to Create Your Video?
          </h2>
          <p className="text-film-light/70 mb-8">
            Get in touch to discuss your project and receive a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/97339007750" target="_blank" className="btn-primary btn-glow">
              WhatsApp Us
            </Link>
            <Link href="/#contact" className="btn-secondary">
              Contact Page
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
