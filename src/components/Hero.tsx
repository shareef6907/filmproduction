'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          poster="/poster.jpg"
        >
          <source src="/header-video.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-64 gradient-bottom" />
        {/* Top Gradient for nav area */}
        <div className="absolute top-0 left-0 right-0 h-32 gradient-top" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-30 px-4 md:px-12 lg:px-16 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/logo-white.png"
              alt="Bahrain Nights - Film Production"
              width={220}
              height={60}
              className="h-12 md:h-16 w-auto"
              priority
            />
          </motion.div>

          {/* Nav Links - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            <button 
              onClick={scrollToWork}
              className="text-white/80 hover:text-white font-body text-sm tracking-wide transition-colors"
            >
              Our Work
            </button>
            <a 
              href="#services"
              className="text-white/80 hover:text-white font-body text-sm tracking-wide transition-colors"
            >
              Services
            </a>
            <button
              onClick={scrollToContact}
              className="btn-glow bg-white text-film-black px-6 py-2.5 rounded font-body text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            onClick={scrollToContact}
            className="md:hidden btn-glow bg-white text-film-black px-4 py-2 rounded font-body text-sm font-medium"
          >
            Contact
          </motion.button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-end pb-24 md:pb-32 px-4 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl"
        >
          {/* Tagline */}
          <p className="text-film-gold font-body text-sm md:text-base tracking-widest uppercase mb-4">
            Bahrain's Leading Production Agency
          </p>
          
          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-tight mb-6">
            Cinematic Stories,
            <br />
            <span className="text-gradient">Crafted with Precision</span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-white/70 max-w-xl mb-8">
            Premium film production for brands, businesses, and visionaries. 
            Over a decade of bringing visions to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToContact}
              className="btn-glow bg-white text-film-black px-8 py-3.5 rounded font-body font-medium hover:bg-white/90 transition-all"
            >
              Start a Project
            </button>
            <button
              onClick={scrollToWork}
              className="border border-white/30 text-white px-8 py-3.5 rounded font-body font-medium hover:bg-white/10 hover:border-white/50 transition-all"
            >
              View Our Work
            </button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/50"
          >
            <span className="text-xs font-body tracking-wider">SCROLL</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
