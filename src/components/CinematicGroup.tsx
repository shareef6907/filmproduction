'use client'

import Link from 'next/link'

const companies = [
  {
    name: 'Cinematic Web Works',
    tagline: 'Need a website with your video as the header?',
    description: 'Premium web design and development with cinematic video integration. Turn your production into a powerful website.',
    url: 'https://cinematicwebworks.com',
    cta: 'CinematicWebWorks.com',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Bahrain Nights',
    tagline: 'Promote your event to thousands?',
    description: 'The premier nightlife and events guide for Bahrain. Get your venue, event, or brand in front of the right audience.',
    url: 'https://bahrainnights.com',
    cta: 'BahrainNights.com',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
]

export default function CinematicGroup() {
  return (
    <section className="py-24 bg-gradient-to-b from-film-black via-film-dark to-film-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-film-gold/50" />
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-film-gold/50" />
              <span className="heading-display text-film-gold text-sm tracking-[0.3em]">
                Part of the
              </span>
              <div className="w-12 h-px bg-film-gold/50" />
            </div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            The Cinematic Group
          </h2>
          <p className="text-film-light/70 max-w-2xl mx-auto">
            Film Production Bahrain is part of a family of creative companies, 
            offering integrated solutions for brands that want more than just a video.
          </p>
        </div>

        {/* Company Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {companies.map((company) => (
            <Link
              key={company.url}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 md:p-10 rounded-xl bg-film-gray/30 border border-white/5 hover:border-film-gold/30 transition-all duration-500"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-film-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="text-film-gold mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {company.icon}
                </div>
                
                <p className="text-film-gold text-sm font-medium mb-2">
                  {company.tagline}
                </p>
                
                <h3 className="font-display text-2xl md:text-3xl text-white mb-4 group-hover:text-film-gold transition-colors">
                  {company.name}
                </h3>
                
                <p className="text-film-light/60 mb-6 leading-relaxed">
                  {company.description}
                </p>
                
                <div className="inline-flex items-center text-film-gold font-medium group-hover:gap-3 gap-2 transition-all">
                  <span>{company.cta}</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Connecting message */}
        <div className="mt-16 text-center">
          <p className="text-film-light/50 text-sm max-w-xl mx-auto">
            Looking for a complete package? We can produce your video, build your website with 
            that video as a stunning header, and promote your launch through Bahrain Nights.
          </p>
        </div>
      </div>
    </section>
  )
}
