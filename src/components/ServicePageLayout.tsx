'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Footer from './Footer'

interface ServicePageLayoutProps {
  title: string
  subtitle: string
  heroDescription: string
  children: React.ReactNode
  schemaMarkup: object
}

export default function ServicePageLayout({
  title,
  subtitle,
  heroDescription,
  children,
  schemaMarkup,
}: ServicePageLayoutProps) {
  const whatsappLink = `https://wa.me/97339007750?text=Hello%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(title)}%20services.`
  const emailLink = `mailto:ceo@bahrainnights.com?subject=${encodeURIComponent(title)}%20Inquiry`

  return (
    <main className="min-h-screen bg-film-black">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-film-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-16 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo-white.png"
              alt="Bahrain Nights - Film Production"
              width={240}
              height={66}
              className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#work" className="font-body text-sm text-white/60 hover:text-white transition-colors hidden md:block">
              Our Work
            </Link>
            <Link href="/#services" className="font-body text-sm text-white/60 hover:text-white transition-colors hidden md:block">
              Services
            </Link>
            <Link href="/#contact" className="font-body text-sm text-white/60 hover:text-white transition-colors hidden md:block">
              Contact
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-4 py-2 rounded-lg font-body text-sm font-medium hover:bg-[#20bd5a] transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-film-gold font-body text-sm tracking-widest uppercase mb-4">
              {subtitle}
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6">
              {title}
            </h1>
            <p className="font-body text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
              {heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-lg font-body font-medium hover:bg-[#20bd5a] transition-all w-full sm:w-auto justify-center"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:+97339007750"
                className="flex items-center gap-3 border border-white/20 text-white px-8 py-4 rounded-lg font-body font-medium hover:border-film-gold/50 transition-all w-full sm:w-auto justify-center"
              >
                Call +973 3900 7750
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Page Content */}
      {children}

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 md:px-12 lg:px-16 bg-film-dark">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="font-body text-lg text-white/60 max-w-xl mx-auto mb-10">
              Contact us today for a free consultation. We&apos;ll help bring your vision to life with cinematic quality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-lg font-body font-medium hover:bg-[#20bd5a] transition-all w-full sm:w-auto justify-center"
              >
                WhatsApp Us Now
              </a>
              <a
                href={emailLink}
                className="flex items-center gap-3 bg-white text-film-black px-8 py-4 rounded-lg font-body font-medium hover:bg-white/90 transition-all w-full sm:w-auto justify-center"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 px-4 md:px-12 lg:px-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display text-2xl md:text-3xl text-white mb-8 text-center">
            Explore Our Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/services/video-production-bahrain', label: 'Video Production' },
              { href: '/services/film-production-company-bahrain', label: 'Film Production' },
              { href: '/services/corporate-video-bahrain', label: 'Corporate Video' },
              { href: '/services/wedding-videography-bahrain', label: 'Wedding Videography' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-zinc-900/50 border border-white/10 hover:border-film-gold/50 rounded-xl p-5 text-center transition-colors duration-300"
              >
                <span className="font-body text-white/80 hover:text-white">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
