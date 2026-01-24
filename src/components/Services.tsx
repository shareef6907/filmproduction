'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Wedding Videography',
    description: 'Cinematic wedding films capturing your special day in Bahrain with stunning storytelling that you will cherish forever.',
  },
  {
    title: 'Corporate Videos',
    description: 'Professional corporate video production to showcase your Bahrain business and engage your audience with compelling content.',
  },
  {
    title: 'Event Coverage',
    description: 'Dynamic event videography in Bahrain covering conferences, concerts, and special events with professional quality.',
  },
  {
    title: 'TVC Advertisements',
    description: 'Capture the moment with precision and passion—your product deserves a cinematic spotlight.',
  },
  {
    title: 'Multi-Cam Live Streaming',
    description: 'Professional live streaming services in Bahrain with multiple camera angles for events, conferences and virtual experiences.',
  },
  {
    title: 'Podcast Filming',
    description: 'High-quality podcast video production in Bahrain with professional lighting, sound and cinematic visuals.',
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
              <div className="border-l-2 border-white/10 group-hover:border-film-gold pl-6 py-2 transition-colors duration-300">
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
