'use client'

import { useState } from 'react'

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-24 bg-film-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-film-gold to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-film-gold to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="heading-display text-film-gold text-sm tracking-[0.3em] mb-4">
            Our Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            Watch Our Showreel
          </h2>
          <p className="text-film-light/70 max-w-xl mx-auto">
            A curated collection of our best work across commercials, corporate films, 
            and cinematic productions.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
          {!isPlaying ? (
            <>
              {/* Placeholder/Thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-film-gray to-film-black">
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-5" 
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                  }} 
                />
              </div>
              
              {/* Play Button */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Play showreel"
              >
                <div className="relative">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-film-gold/30 scale-150 group-hover:scale-[1.7] transition-transform duration-500" />
                  {/* Inner circle */}
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-film-gold/90 flex items-center justify-center group-hover:bg-film-gold transition-all duration-300 group-hover:scale-110">
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-film-black ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </button>
              
              {/* Duration badge */}
              <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded text-sm text-white/80">
                2:45
              </div>
            </>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/ne15w87EA4Q?autoplay=1&rel=0"
              title="Film Production Bahrain Showreel"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Stats below showreel */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { value: '500+', label: 'Projects Delivered' },
            { value: '10+', label: 'Years Experience' },
            { value: '150+', label: 'Happy Clients' },
            { value: '6', label: 'GCC Countries' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl text-film-gold mb-2">
                {stat.value}
              </div>
              <div className="text-film-light/60 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
