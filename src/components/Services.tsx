'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Wedding Videography',
    description: 'Cinematic wedding films capturing your special day in Bahrain with stunning storytelling that you will cherish forever.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Corporate Videos',
    description: 'Professional corporate video production to showcase your Bahrain business and engage your audience with compelling content.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Event Coverage',
    description: 'Dynamic event videography in Bahrain covering conferences, concerts, and special events with professional quality.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    title: 'TVC Advertisements',
    description: 'Capture the moment with precision and passion—your product deserves a cinematic spotlight.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Multi-Cam Live Streaming',
    description: 'Professional live streaming services in Bahrain with multiple camera angles for events, conferences and virtual experiences.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
      </svg>
    ),
  },
  {
    title: 'Podcast Filming',
    description: 'High-quality podcast video production in Bahrain with professional lighting, sound and cinematic visuals.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-12 lg:px-16 bg-film-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-film-gold font-body text-sm tracking-widest uppercase mb-4">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white">
            Full-Service Production
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-zinc-900/50 border border-white/10 group-hover:border-film-gold/50 rounded-xl p-6 transition-colors duration-300 h-full">
                <div className="text-film-gold mb-4">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl md:text-2xl text-white mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-16 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-white mb-4">
                Technical Excellence
              </h3>
              <p className="font-body text-white/60 max-w-xl">
                We shoot in 4K up to 120fps, 10-bit color depth with cinema-grade color science. 
                Every frame is crafted for broadcast and digital delivery.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['4K 120fps', '10-bit Color', 'S-Log3', 'HDR Ready'].map((spec) => (
                <span
                  key={spec}
                  className="px-4 py-2 border border-white/20 rounded-full text-sm font-body text-white/70"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
