'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { question: 'How long does a typical video production project take?', answer: "Project timelines vary based on complexity. A simple corporate video might take 2-3 weeks from concept to delivery, while a commercial or documentary can take 4-8 weeks. We'll provide a detailed timeline during our initial consultation." },
  { question: 'What is included in your video production services?', answer: 'Our full-service packages include pre-production (concept development, scripting, storyboarding), production (filming with professional crew and equipment), and post-production (editing, color grading, sound design, and final delivery in multiple formats).' },
  { question: 'Do you offer drone/aerial filming in Bahrain?', answer: 'Yes! We are licensed for aerial drone filming in Bahrain. Our team holds the necessary permits and insurance to operate drones legally, allowing us to capture stunning aerial footage for your production.' },
  { question: 'Can you work with international clients?', answer: 'Absolutely. We regularly work with international brands and production companies. Our team is fluent in English and Arabic, and we can coordinate shoots anywhere in the GCC region.' },
  { question: 'What video formats do you deliver?', answer: 'We deliver in all standard formats including 4K, HD, and social media-optimized versions. Our standard delivery includes files optimized for broadcast, YouTube, Instagram, LinkedIn, and TikTok.' },
  { question: 'How much does video production cost in Bahrain?', answer: 'Costs depend on project scope, duration, and complexity. Our packages start from BD 500 for simple projects and scale up for larger productions. We provide detailed quotes after understanding your specific requirements.' },
  { question: 'Do you provide scriptwriting services?', answer: 'Yes, we offer complete pre-production services including concept development, scriptwriting, and storyboarding. Our creative team will work with you to craft a compelling narrative for your video.' },
  { question: "What makes Bahrain Nights different from other production companies?", answer: "With over 10 years of experience and 900+ completed projects, we bring unmatched expertise to every production. Our cinema-grade equipment, award-winning team, and commitment to storytelling excellence sets us apart." },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-28 px-4 md:px-12 lg:px-16 bg-zinc-950">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <p className="text-film-gold font-body text-sm tracking-widest uppercase mb-3">Common Questions</p>
          <h2 className="font-display text-2xl md:text-4xl font-medium text-white mb-4">Frequently Asked Questions</h2>
          <p className="font-body text-white/50">Everything you need to know about working with us</p>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.05 }} className="border border-white/10 rounded-xl overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-5 text-left bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
                <span className="font-body font-medium text-white pr-4">{faq.question}</span>
                <motion.span animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
                  <svg className="w-5 h-5 text-film-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                    <div className="p-5 pt-0 bg-zinc-900/30"><p className="font-body text-white/60 leading-relaxed">{faq.answer}</p></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-12 text-center">
          <p className="font-body text-white/40 text-sm mb-4">Still have questions?</p>
          <a href="https://wa.me/97339007750?text=Hello%2C%20I%20have%20a%20question%20about%20your%20services" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-film-gold hover:text-white transition-colors font-body">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat with us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
