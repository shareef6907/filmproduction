'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

interface HeroProps {
  headerVideo?: string
}

export default function Hero({ headerVideo }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    // Lazy load video after initial render for better LCP
    const timer = setTimeout(() => {
      if (videoRef.current && headerVideo) {
        const source = videoRef.current.querySelector('source')
        if (source && source.dataset.src) {
          source.src = source.dataset.src
          videoRef.current.load()
          videoRef.current.play().catch(() => {
            // Autoplay might be blocked
          })
          setIsVideoLoaded(true)
        }
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [headerVideo])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background or Gradient Animation */}
      {headerVideo ? (
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="none"
          poster="/header-video-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source data-src={headerVideo} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-film-black via-film-dark to-film-black">
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-film-gold/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-film-gold/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        </div>
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-film-black via-film-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-film-black/80 via-transparent to-film-black/80" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          {/* Pre-title */}
          <p className="heading-display text-film-gold text-sm md:text-base tracking-[0.3em] mb-6">
            Cinematic Group
          </p>
          
          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            Film Production <span className="gold-text">Bahrain</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-film-light/80 max-w-3xl mx-auto mb-10 font-light">
            Commercial-Grade Video Production for Brands That Demand More
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="#work" 
              className="btn-primary btn-glow inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              View Our Work
            </Link>
            <Link 
              href="#contact" 
              className="btn-secondary inline-flex items-center gap-2"
            >
              Get a Quote
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-film-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
