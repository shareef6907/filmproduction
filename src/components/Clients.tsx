'use client'

import { motion } from 'framer-motion'

const clients = [
  { name: 'Economic Development Board', category: 'Government' },
  { name: 'Ministry of Youth Affairs', category: 'Government' },
  { name: 'Dubai World Trade Centre', category: 'Events' },
  { name: 'Bahrain International Airshow', category: 'Events' },
  { name: 'UAE Space Agency', category: 'Government' },
  { name: 'Bahrain International Circuit', category: 'Motorsport' },
  { name: 'WEC World Endurance', category: 'Motorsport' },
  { name: 'Linde', category: 'Industry' },
  { name: 'Invest Bank Sharjah', category: 'Banking' },
  { name: 'Coca-Cola', category: 'F&B' },
  { name: "Jamie's Italian", category: 'Hospitality' },
  { name: 'Four Seasons', category: 'Hospitality' },
  { name: 'Audi', category: 'Automotive' },
  { name: 'Lotus', category: 'Automotive' },
  { name: 'Jeep', category: 'Automotive' },
  { name: 'Calvin Klein', category: 'Fashion' },
  { name: 'Tommy Hilfiger', category: 'Fashion' },
  { name: 'Aldo', category: 'Fashion' },
  { name: 'American School of Bahrain', category: 'Education' },
  { name: "St Christopher's School", category: 'Education' },
]

const industries = ['Government', 'Motorsport', 'Automotive', 'Fashion & Retail', 'Banking & Finance', 'F&B & Hospitality', 'Education', 'Events', 'Industry']

export default function Clients() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-12 lg:px-16 bg-zinc-950 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <p className="text-film-gold font-body text-sm tracking-widest uppercase mb-3">Trusted By Industry Leaders</p>
          <h2 className="font-display text-2xl md:text-4xl font-medium text-white">Brands We've Worked With</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mb-16">
          {clients.map((client, index) => (
            <motion.div key={client.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.03 }} className="flex flex-col items-center justify-center p-4 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/10 rounded-lg transition-all duration-300 group">
              <span className="font-display text-sm md:text-base text-white/60 group-hover:text-white/80 text-center transition-colors">{client.name}</span>
              <span className="text-[10px] text-white/30 mt-1 uppercase tracking-wider">{client.category}</span>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center">
          <p className="text-white/40 font-body text-sm mb-4">Industries We Serve</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {industries.map((industry) => (
              <span key={industry} className="px-3 py-1.5 bg-white/5 rounded-full text-xs md:text-sm text-white/50 font-body">{industry}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
