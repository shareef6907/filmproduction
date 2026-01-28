import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Video Production Blog & Guides | Film Production Bahrain',
  description: 'Expert guides on corporate video, wedding videography, and professional video production in Bahrain. Tips and insights from Bahrain Nights.',
  alternates: {
    canonical: 'https://filmproductionbahrain.com/blog',
  },
  openGraph: {
    title: 'Video Production Blog & Guides | Film Production Bahrain',
    description: 'Expert guides on corporate video, wedding videography, and professional video production in Bahrain.',
    url: 'https://filmproductionbahrain.com/blog',
    type: 'website',
  },
}

const blogPosts = [
  {
    slug: 'corporate-video-production-bahrain-guide',
    title: 'Corporate Video Production in Bahrain: What to Expect',
    excerpt: 'A complete guide to the corporate video production process in Bahrain — from pre-production planning to final delivery.',
    date: '2025-01-28',
    readTime: '8 min read',
  },
  {
    slug: 'how-to-choose-wedding-videographer-bahrain',
    title: 'How to Choose a Wedding Videographer in Bahrain',
    excerpt: 'Everything you need to know about finding the perfect wedding videographer in Bahrain — what to look for, questions to ask, and what to expect.',
    date: '2025-01-27',
    readTime: '7 min read',
  },
  {
    slug: 'why-business-needs-video-bahrain',
    title: 'Why Every Business in Bahrain Needs Professional Video Content',
    excerpt: 'Discover why video content is essential for businesses in Bahrain and how professional video production drives growth, engagement, and sales.',
    date: '2025-01-26',
    readTime: '7 min read',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-film-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-film-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-16 py-4 flex items-center justify-between">
          <Link href="/">
            <span className="font-bold text-xl text-white">Bahrain Nights</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#work" className="font-body text-sm text-white/60 hover:text-white transition-colors hidden md:block">Our Work</Link>
            <Link href="/#services" className="font-body text-sm text-white/60 hover:text-white transition-colors hidden md:block">Services</Link>
            <Link href="/blog" className="font-body text-sm text-white hover:text-white transition-colors hidden md:block">Blog</Link>
            <a href="https://wa.me/97339007750" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-4 py-2 rounded-lg font-body text-sm font-medium hover:bg-[#20bd5a] transition-all">
              WhatsApp Us
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-4 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-film-gold font-body text-sm tracking-widest uppercase mb-4">Our Blog</p>
          <h1 className="font-display text-4xl md:text-6xl font-medium text-white mb-6">
            Video Production Guides
          </h1>
          <p className="font-body text-lg text-white/60 max-w-2xl mx-auto">
            Expert advice and insights on video production, filmmaking, and visual storytelling in Bahrain.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-12 lg:px-16 pb-20">
        <div className="max-w-4xl mx-auto space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-zinc-900/50 border border-white/10 hover:border-film-gold/50 rounded-xl p-8 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-3 text-sm text-white/40 mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-white group-hover:text-film-gold transition-colors mb-3">
                {post.title}
              </h2>
              <p className="font-body text-white/60">{post.excerpt}</p>
              <span className="inline-block mt-4 font-body text-film-gold font-medium">Read More →</span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
