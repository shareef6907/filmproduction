'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import VideoRow from '@/components/VideoRow'
import VideoModal from '@/components/VideoModal'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { VideoData } from '@/types/video'

interface Video {
  id: string
  title: string
}

// Fallback data in case API fails
const fallbackData: VideoData = {
  mainVideos: [
    { id: 'ne15w87EA4Q', title: 'Cinematic Production', order: 1 },
    { id: 'F2Mw7tngDXY', title: 'Brand Story', order: 2 },
    { id: 'V_KYSgqXGLE', title: 'Commercial Film', order: 3 },
    { id: 'fxhFx-VGxXg', title: 'Corporate Video', order: 4 },
    { id: 'EAIhJ6V6ALw', title: 'Event Coverage', order: 5 },
    { id: 'Uanc4fHO7h8', title: 'Documentary', order: 6 },
    { id: 'nBkEOeIk5sw', title: 'Lifestyle Film', order: 7 },
    { id: 'ZEzXKAJonkw', title: 'Corporate Story', order: 8 },
    { id: 'OTH6HiqY7v0', title: 'Production Showcase', order: 9 },
    { id: 'UHt7uhUsOqI', title: 'Visual Story', order: 10 },
    { id: '9D3mbt5LI8M', title: 'Premium Content', order: 11 },
  ],
  shortVideos: [
    { id: 'SurvKFufnm0', title: 'Short Film', order: 1 },
    { id: 'jlLbdcOu758', title: 'Quick Story', order: 2 },
    { id: '1lWQjCAnA8g', title: 'Visual Moment', order: 3 },
    { id: 'VkkpE2-TQaI', title: 'Creative Short', order: 4 },
    { id: 'I3cFaJpgaqY', title: 'Cinematic Short', order: 5 },
    { id: 'slqlSihBWoU', title: 'Brand Short', order: 6 },
    { id: 'doOcRmaAo40', title: 'Mini Film', order: 7 },
    { id: '6UPsb8en72Y', title: 'Quick Cut', order: 8 },
  ],
  headerVideo: '/header-video.mp4'
}

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [isShort, setIsShort] = useState(false)
  const [videoData, setVideoData] = useState<VideoData>(fallbackData)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/videos')
        if (response.ok) {
          const data = await response.json()
          setVideoData(data)
        }
      } catch (error) {
        console.error('Error fetching videos:', error)
        // Keep using fallback data
      }
    }
    fetchVideos()
  }, [])

  const handleVideoClick = (video: Video, short: boolean = false) => {
    setSelectedVideo(video)
    setIsShort(short)
  }

  const handleCloseModal = () => {
    setSelectedVideo(null)
    setIsShort(false)
  }

  // Sort videos by order
  const mainVideos = [...videoData.mainVideos].sort((a, b) => a.order - b.order)
  const shortVideos = [...videoData.shortVideos].sort((a, b) => a.order - b.order)

  return (
    <main className="min-h-screen bg-film-black">
      {/* Hero Section */}
      <Hero headerVideo={videoData.headerVideo} />

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
          videos={shortVideos}
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
