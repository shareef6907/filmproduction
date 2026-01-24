'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import VideoCard from './VideoCard'

interface Video {
  id: string
  title: string
}

interface VideoRowProps {
  title: string
  videos: Video[]
  onVideoClick: (video: Video) => void
  isShorts?: boolean
}

export default function VideoRow({ title, videos, onVideoClick, isShorts = false }: VideoRowProps) {
  const rowRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="relative py-6 md:py-10"
    >
      {/* Section Title */}
      <h2 className="text-xl md:text-2xl font-display font-medium text-white mb-4 md:mb-6 px-4 md:px-12 lg:px-16">
        {title}
      </h2>

      {/* Row Container */}
      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-full bg-gradient-to-r from-film-black/90 to-transparent items-center justify-start pl-2 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Scroll left"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Videos Row */}
        <div
          ref={rowRef}
          className="video-row hide-scrollbar px-4 md:px-12 lg:px-16"
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <VideoCard
                videoId={video.id}
                title={video.title}
                onClick={() => onVideoClick(video)}
                isShort={isShorts}
              />
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-full bg-gradient-to-l from-film-black/90 to-transparent items-center justify-end pr-2 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Scroll right"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.section>
  )
}
