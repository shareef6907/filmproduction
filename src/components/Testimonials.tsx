'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface TestimonialsProps {
  videoId?: string
}

export default function Testimonials({ videoId = '8s_0Gcg-5xw' }: TestimonialsProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-20 md:py-32 px-4 md:px-12 lg:px-16 bg-film-black">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-film-gold font-body text-sm tracking-widest uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="font-body text-white/60 max-w-2xl mx-auto">
            Hear directly from our clients about their experience working with us.
          </p>
        </motion.div>

        {/* Video Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 shadow-2xl"
        >
          {!isPlaying ? (
            <>
              {/* Thumbnail */}
              <Image
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Client Testimonial"
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  if (target.src.includes('maxresdefault')) {
                    target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                  }
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Play Button */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Play testimonial video"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-film-gold rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-film-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>

              {/* Label */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-display text-lg md:text-xl">
                  Watch Client Testimonial
                </p>
              </div>
            </>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="Client Testimonial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          )}
        </motion.div>
      </div>
    </section>
  )
}
