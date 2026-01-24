'use client'

import { useState } from 'react'
import Image from 'next/image'

interface VideoCardProps {
  videoId: string
  title: string
  onClick: () => void
  isShort?: boolean
}

export default function VideoCard({ videoId, title, onClick, isShort = false }: VideoCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  
  // Use maxresdefault for best quality, fallback handled by onError
  const thumbnailUrl = isShort 
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`video-card relative group cursor-pointer rounded-md overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-film-gold ${
        isShort ? 'w-[140px] md:w-[180px]' : 'w-[280px] md:w-[320px]'
      }`}
      aria-label={`Play ${title}`}
    >
      {/* Thumbnail Container */}
      <div className={`relative ${isShort ? 'aspect-[9/16]' : 'aspect-video'} bg-film-gray`}>
        {/* Loading Shimmer */}
        {!imageLoaded && (
          <div className="absolute inset-0 img-loading" />
        )}
        
        {/* Thumbnail Image */}
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          sizes={isShort ? '180px' : '320px'}
          className={`object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            // Fallback to hqdefault if maxres not available
            const target = e.target as HTMLImageElement
            if (target.src.includes('maxresdefault')) {
              target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            }
          }}
        />
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Play Button */}
        <div className={`play-icon absolute inset-0 flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 md:opacity-70'}`}>
          <div className="w-[70px] h-[70px] md:w-20 md:h-20 bg-white/95 rounded-full flex items-center justify-center shadow-2xl">
            <svg className="w-[30px] h-[30px] md:w-9 md:h-9 text-film-black ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white text-sm font-body font-medium truncate">{title}</p>
      </div>
    </button>
  )
}
