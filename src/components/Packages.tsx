'use client'

import { motion } from 'framer-motion'

const packages = [
  {
    name: 'Essential',
    description: 'Perfect for small businesses and startups',
    price: 'From BD 500',
    features: ['Up to 2 minutes final video', 'Half-day shoot (4 hours)', '1 camera setup', 'Basic lighting', 'Professional editing', 'Background music', 'HD delivery (1080p)', '1 revision round'],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    description: 'Ideal for corporate and commercial projects',
    price: 'From BD 1,500',
    features: ['Up to 5 minutes final video', 'Full-day shoot (8 hours)', '2-3 camera setup', 'Professional lighting kit', 'Advanced editing & color grading', 'Licensed music', '4K delivery', 'Social media cuts included', '2 revision rounds'],
    popular: true,
    cta: 'Most Popular',
  },
  {
    name: 'Premium',
    description: 'For high-end productions and campaigns',
    price: 'Custom Quote',
    features: ['Multi-day production', 'Multi-camera cinema setup', 'Full crew (Director, DP, Audio)', 'Advanced color grading', 'Motion graphics & VFX', 'Aerial drone footage', 'Cinema-grade delivery', 'Multiple format exports', 'Unlimited revisions', 'Dedicated project manager'],
    popular: false,
    cta: 'Contact Us',
  },
]

export default function Packages() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 md:py-28 px-4 md:px-12 lg:px-16 bg-film-black">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <p className="text-film-gold font-body text-sm tracking-widest uppercase mb-3">Transparent Pricing</p>
          <h2 className="font-display text-2xl md:text-4xl font-medium text-white mb-4">Production Packages</h2>
          <p className="font-body text-white/50 max-w-2xl mx-auto">Every project is unique. These packages serve as a starting point — we'll customize a solution that fits your exact needs and budget.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <motion.div key={pkg.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className={`relative rounded-2xl p-6 md:p-8 ${pkg.popular ? 'bg-gradient-to-b from-film-gold/20 to-zinc-900/50 border-2 border-film-gold/50' : 'bg-zinc-900/30 border border-white/10'}`}>
              {pkg.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="bg-film-gold text-film-black px-4 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-wider">Most Popular</span></div>}
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl text-white mb-2">{pkg.name}</h3>
                <p className="font-body text-sm text-white/50 mb-4">{pkg.description}</p>
                <div className="font-display text-3xl md:text-4xl text-white">{pkg.price}</div>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-film-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="font-body text-sm text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>
              <button onClick={scrollToContact} className={`w-full py-3 rounded-lg font-body font-medium transition-all ${pkg.popular ? 'bg-film-gold text-film-black hover:bg-film-gold/90' : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'}`}>{pkg.cta}</button>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-12 text-center">
          <p className="font-body text-white/40 text-sm">Have a specific project in mind? <button onClick={scrollToContact} className="text-film-gold hover:underline">Get a custom quote</button> — we respond within 24 hours.</p>
        </motion.div>
      </div>
    </section>
  )
}
