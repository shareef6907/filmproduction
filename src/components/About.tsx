'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-film-gold font-body text-sm tracking-widest uppercase mb-4">
            About Us
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-8">
            A Decade of Visual Excellence
          </h2>
          <p className="font-body text-lg md:text-xl text-white/70 leading-relaxed mb-8">
            Bahrain Nights is a premier film production agency with over 10 years of experience 
            crafting cinematic stories for discerning clients. From concept to final cut, 
            every project receives our complete creative dedication.
          </p>
          <p className="font-body text-lg md:text-xl text-white/70 leading-relaxed">
            We've partnered with leading brands, international productions, and visionary 
            businesses to create content that resonates and endures.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-3 gap-8"
        >
          {[
            { number: '10+', label: 'Years Experience' },
            { number: '900+', label: 'Projects Delivered' },
            { number: '100+', label: 'Global Clients' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl text-white mb-2">
                {stat.number}
              </div>
              <div className="font-body text-sm text-white/50 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
