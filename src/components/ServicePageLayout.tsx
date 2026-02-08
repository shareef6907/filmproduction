'use client'

import Link from 'next/link'
import Footer from './Footer'

interface FAQ {
  question: string
  answer: string
}

interface ServicePageLayoutProps {
  title: string
  subtitle: string
  heroDescription: string
  children: React.ReactNode
  faqs?: FAQ[]
  crossLinks?: {
    text: string
    url: string
    label: string
  }[]
}

export default function ServicePageLayout({
  title,
  subtitle,
  heroDescription,
  children,
  faqs = [],
  crossLinks = [],
}: ServicePageLayoutProps) {
  const whatsappLink = 'https://wa.me/97339007750'

  return (
    <main className="min-h-screen bg-film-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-film-black/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-display text-xl text-white hover:text-film-gold transition-colors">
            Film Production <span className="text-film-gold">Bahrain</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#work" className="text-film-light/70 hover:text-white text-sm hidden md:block">
              Our Work
            </Link>
            <Link href="/#services" className="text-film-light/70 hover:text-white text-sm hidden md:block">
              Services
            </Link>
            <Link href="/blog" className="text-film-light/70 hover:text-white text-sm hidden md:block">
              Blog
            </Link>
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-4"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-film-dark via-film-black to-film-black" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-film-gold/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="heading-display text-film-gold text-sm tracking-[0.3em] mb-4">
            {subtitle}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-film-light/70 text-lg max-w-2xl mx-auto mb-8">
            {heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={whatsappLink} target="_blank" className="btn-primary btn-glow">
              Get a Free Quote
            </Link>
            <Link href="/#work" className="btn-secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg">
            {children}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="py-16 bg-film-dark">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-film-gray/50 rounded-lg border border-white/5 overflow-hidden"
                >
                  <summary className="flex justify-between items-center cursor-pointer p-6 text-white font-medium hover:text-film-gold transition-colors">
                    {faq.question}
                    <svg
                      className="w-5 h-5 text-film-gold transform group-open:rotate-180 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-film-light/70">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cross Links Section */}
      {crossLinks.length > 0 && (
        <section className="py-12 bg-film-gray/30 border-y border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6">
              {crossLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-film-black/50 rounded-lg border border-white/5 hover:border-film-gold/30 transition-all group"
                >
                  <p className="text-film-light/60 text-sm mb-2">{link.text}</p>
                  <p className="text-film-gold font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    {link.label}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-film-black">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-film-light/70 mb-8">
            Contact us today for a free consultation and quote. Let's create something cinematic together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={whatsappLink} target="_blank" className="btn-primary btn-glow inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </Link>
            <Link href="mailto:hello@filmproductionbahrain.com" className="btn-secondary">
              Email Us
            </Link>
          </div>
        </div>
      </section>

      {/* Website Cross-link */}
      <section className="py-8 bg-film-dark border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-film-light/50 text-sm">
            Need a website with your video as the header?{' '}
            <Link
              href="https://cinematicwebworks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-film-gold hover:underline"
            >
              Visit CinematicWebWorks.com →
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
