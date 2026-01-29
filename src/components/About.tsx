'use client'

import { motion } from 'framer-motion'

const milestones = [
  { year: '2014', event: 'Founded in Manama, Bahrain' },
  { year: '2016', event: 'First international production' },
  { year: '2018', event: 'Expanded to GCC markets' },
  { year: '2020', event: '500+ projects milestone' },
  { year: '2022', event: 'Cinema-grade equipment upgrade' },
  { year: '2024', event: '900+ projects delivered' },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-film-gold font-body text-sm tracking-widest uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-8">
              A Decade of Cinematic Excellence
            </h2>
            <div className="space-y-6 font-body text-lg text-white/70 leading-relaxed">
              <p>
                <strong className="text-white">Bahrain Nights</strong> is a premier award-winning 
                film production company based in the heart of Manama, Bahrain. Since 2014, 
                we've been at the forefront of visual storytelling in the Gulf region.
              </p>
              <p>
                Our team of seasoned filmmakers, cinematographers, and creative directors 
                brings together decades of combined experience from international productions. 
                We believe every brand has a story worth telling — and we're here to tell it 
                with cinematic precision.
              </p>
              <p>
                From corporate giants to ambitious startups, from government institutions to 
                international brands, we've partnered with over <strong className="text-white">100+ clients</strong> across 
                diverse industries to create content that captivates, inspires, and delivers results.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { icon: '🎯', text: 'Results-driven approach' },
                { icon: '⚡', text: 'Fast turnaround times' },
                { icon: '🎨', text: 'Creative excellence' },
                { icon: '🤝', text: 'Dedicated support' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-body text-sm text-white/60">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Stats & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              {[
                { number: '10+', label: 'Years', sublabel: 'Experience' },
                { number: '900+', label: 'Projects', sublabel: 'Delivered' },
                { number: '100+', label: 'Clients', sublabel: 'Worldwide' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-zinc-900/30 border border-white/5 rounded-xl">
                  <div className="font-display text-3xl md:text-4xl text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="font-body text-sm text-white/60">
                    {stat.label}
                  </div>
                  <div className="font-body text-xs text-white/30">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="bg-zinc-900/20 border border-white/5 rounded-xl p-6">
              <h3 className="font-display text-lg text-white mb-6">Our Journey</h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-4"
                  >
                    <span className="font-display text-film-gold text-sm w-12">
                      {milestone.year}
                    </span>
                    <div className="w-2 h-2 bg-film-gold/50 rounded-full" />
                    <span className="font-body text-white/60 text-sm">
                      {milestone.event}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications/Badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                'Licensed in Bahrain',
                '4K Cinema',
                'Broadcast Quality',
                'GCC Coverage',
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 bg-film-gold/10 border border-film-gold/30 rounded-full text-xs font-body text-film-gold"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
