'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import Achievements from '@/components/Achievements'
import VideoRow from '@/components/VideoRow'
import VideoModal from '@/components/VideoModal'
import Services from '@/components/Services'
import Showreel from '@/components/Showreel'
import CinematicGroup from '@/components/CinematicGroup'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { VideoData } from '@/types/video'
import { isMobile, getYouTubeUrl } from '@/lib/utils'

interface Video {
  id: string
  title: string
}

const fallbackData: VideoData = {
  mainVideos: [
    { id: 'ne15w87EA4Q', title: 'Luxury Resort | Brand Film', order: 1 },
    { id: 'F2Mw7tngDXY', title: 'Corporate Profile | Finance', order: 2 },
    { id: 'V_KYSgqXGLE', title: 'Product Launch | Commercial', order: 3 },
    { id: 'fxhFx-VGxXg', title: 'CEO Interview | Corporate', order: 4 },
    { id: 'EAIhJ6V6ALw', title: 'Annual Gala | Event Highlight', order: 5 },
    { id: 'Uanc4fHO7h8', title: 'Heritage Story | Documentary', order: 6 },
    { id: 'nBkEOeIk5sw', title: 'Lifestyle Campaign | Fashion', order: 7 },
    { id: 'ZEzXKAJonkw', title: 'Company Vision | Brand Story', order: 8 },
    { id: 'OTH6HiqY7v0', title: 'Real Estate | Property Tour', order: 9 },
    { id: 'UHt7uhUsOqI', title: 'Tech Startup | Profile Film', order: 10 },
    { id: '9D3mbt5LI8M', title: 'Hospitality | Hotel Promo', order: 11 },
  ],
  shortVideos: [
    { id: 'SurvKFufnm0', title: 'Social Reel | Restaurant', order: 1 },
    { id: 'jlLbdcOu758', title: 'Behind the Scenes | BTS', order: 2 },
    { id: '1lWQjCAnA8g', title: 'Product Teaser | Launch', order: 3 },
    { id: 'VkkpE2-TQaI', title: 'Instagram Story | Retail', order: 4 },
    { id: 'I3cFaJpgaqY', title: 'Event Recap | Conference', order: 5 },
    { id: 'slqlSihBWoU', title: 'Quick Promo | Brand', order: 6 },
    { id: 'doOcRmaAo40', title: 'Testimonial Clip | Client', order: 7 },
    { id: '6UPsb8en72Y', title: 'TikTok Ad | Campaign', order: 8 },
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
      }
    }
    fetchVideos()
  }, [])

  const handleVideoClick = (video: Video, short: boolean = false) => {
    if (isMobile()) {
      window.open(getYouTubeUrl(video.id, short), '_blank', 'noopener,noreferrer')
      return
    }
    setSelectedVideo(video)
    setIsShort(short)
  }

  const handleCloseModal = () => {
    setSelectedVideo(null)
    setIsShort(false)
  }

  const mainVideos = [...videoData.mainVideos].sort((a, b) => a.order - b.order)
  const shortVideos = [...videoData.shortVideos].sort((a, b) => a.order - b.order)

  return (
    <main className="min-h-screen bg-film-black">
      {/* Hero Section */}
      <Hero headerVideo={videoData.headerVideo} />

      {/* Achievement Banner */}
      <Achievements />

      {/* Video Portfolio */}
      <section id="work" className="pt-8 pb-16">
        <VideoRow
          title="Our Work"
          videos={mainVideos}
          onVideoClick={(video) => handleVideoClick(video, false)}
        />
        <VideoRow
          title="Short Films"
          videos={shortVideos}
          onVideoClick={(video) => handleVideoClick(video, true)}
          isShorts={true}
        />
      </section>

      {/* Services Section */}
      <Services />

      {/* Showreel Section */}
      <Showreel />

      {/* Cinematic Group Section */}
      <CinematicGroup />

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
