'use client'

import { motion } from 'framer-motion'

const testimonials = [
  { quote: "Exceptional quality and professionalism. The team at Bahrain Nights delivered a corporate film that exceeded all our expectations.", author: "Ahmed Al Khalifa", role: "Marketing Director", company: "Leading Bahrain Bank", rating: 5 },
  { quote: "We've worked with many production companies, but none match the creative vision and technical excellence of this team.", author: "Sarah Johnson", role: "CEO", company: "International Tech Startup", rating: 5 },
  { quote: "From concept to final delivery, the entire process was seamless. They understood our vision immediately.", author: "Mohammed Hassan", role: "Events Manager", company: "Bahrain Exhibition Centre", rating: 5 },
  { quote: "The documentary they produced for us won recognition at multiple festivals. Their storytelling ability is world-class.", author: "Dr. Fatima Al Doseri", role: "Director", company: "Bahrain Cultural Foundation", rating: 5 },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-12 lg:px-16 bg-film-black">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <p className="text-film-gold font-body text-sm tracking-widest uppercase mb-3">Client Success Stories</p>
          <h2 className="font-display text-2xl md:text-4xl font-medium text-white mb-4">What Our Clients Say</h2>
          <p className="font-body text-white/50 max-w-xl mx-auto">Don't just take our word for it. Here's what industry leaders say about working with us.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.author} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-zinc-900/50 border border-white/5 hover:border-film-gold/20 rounded-xl p-6 md:p-8 transition-colors duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-film-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <blockquote className="font-body text-white/80 text-base md:text-lg leading-relaxed mb-6">"{testimonial.quote}"</blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-film-gold/20 rounded-full flex items-center justify-center">
                  <span className="font-display text-film-gold text-lg">{testimonial.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-body font-medium text-white">{testimonial.author}</p>
                  <p className="font-body text-sm text-white/50">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (<svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}
            </div>
            <span className="font-body text-white/70 text-sm"><strong className="text-white">4.9</strong> rating on Google • <strong className="text-white">50+</strong> reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
