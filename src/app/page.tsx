'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import VideoRow from '@/components/VideoRow'
import VideoModal from '@/components/VideoModal'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

// Video data - Main work
const mainVideos = [
  { id: 'ne15w87EA4Q', title: 'Cinematic Production' },
  { id: 'F2Mw7tngDXY', title: 'Brand Story' },
  { id: 'V_KYSgqXGLE', title: 'Commercial Film' },
  { id: 'fxhFx-VGxXg', title: 'Corporate Video' },
  { id: 'EAIhJ6V6ALw', title: 'Event Coverage' },
  { id: 'Uanc4fHO7h8', title: 'Documentary' },
  { id: 'nBkEOeIk5sw', title: 'Lifestyle Film' },
  { id: 'RwAU6591jxk', title: 'Brand Commercial' },
  { id: 'ZEzXKAJonkw', title: 'Corporate Story' },
  { id: 'O3Trz6ucsIU', title: 'Creative Film' },
  { id: 'OTH6HiqY7v0', title: 'Production Showcase' },
  { id: 'UHt7uhUsOqI', title: 'Visual Story' },
  { id: '9D3mbt5LI8M', title: 'Premium Content' },
]

// Video data - Shorts
const shortsVideos = [
  { id: 'SurvKFufnm0', title: 'Short Film' },
  { id: 'jlLbdcOu758', title: 'Quick Story' },
  { id: '1lWQjCAnA8g', title: 'Visual Moment' },
  { id: 'VkkpE2-TQaI', title: 'Creative Short' },
  { id: 'I3cFaJpgaqY', title: 'Cinematic Short' },
  { id: 'slqlSihBWoU', title: 'Brand Short' },
  { id: 'doOcRmaAo40', title: 'Mini Film' },
  { id: '6UPsb8en72Y', title: 'Quick Cut' },
]

interface Video {
  id: string
  title: string
}

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [isShort, setIsShort] = useState(false)

  const handleVideoClick = (video: Video, short: boolean = false) => {
    setSelectedVideo(video)
    setIsShort(short)
  }

  const handleCloseModal = () => {
    setSelectedVideo(null)
    setIsShort(false)
  }

  return (
    <main className="min-h-screen bg-film-black">
      {/* Hero Section */}
      <Hero />

      {/* Video Sections */}
      <section id="work" className="pt-8 pb-16">
        {/* Main Videos Row */}
        <VideoRow
          title="Our Work"
          videos={mainVideos}
          onVideoClick={(video) => handleVideoClick(video, false)}
        />

        {/* Shorts Row */}
        <VideoRow
          title="Short Films"
          videos={shortsVideos}
          onVideoClick={(video) => handleVideoClick(video, true)}
          isShorts={true}
        />
      </section>

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Video Modal */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={handleCloseModal}
        videoId={selectedVideo?.id || ''}
        title={selectedVideo?.title || ''}
        isShort={isShort}
      />
    </main>
  )
}
