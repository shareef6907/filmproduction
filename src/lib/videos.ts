import { Redis } from '@upstash/redis'
import { VideoData, Video } from '@/types/video'

// Initialize Redis client
const redis = new Redis({
  url: process.env.KV_REST_API_URL || '',
  token: process.env.KV_REST_API_TOKEN || '',
})

const VIDEO_DATA_KEY = 'video_data'

// Default data (used for initial setup)
const defaultVideoData: VideoData = {
  mainVideos: [
    { id: 'ne15w87EA4Q', title: 'Cinematic Production', order: 1 },
    { id: 'F2Mw7tngDXY', title: 'Brand Story', order: 2 },
    { id: 'V_KYSgqXGLE', title: 'Commercial Film', order: 3 },
    { id: 'fxhFx-VGxXg', title: 'Corporate Video', order: 4 },
    { id: 'EAIhJ6V6ALw', title: 'Event Coverage', order: 5 },
    { id: 'Uanc4fHO7h8', title: 'Documentary', order: 6 },
    { id: 'nBkEOeIk5sw', title: 'Lifestyle Film', order: 7 },
    { id: 'RwAU6591jxk', title: 'Brand Commercial', order: 8 },
    { id: 'ZEzXKAJonkw', title: 'Corporate Story', order: 9 },
    { id: 'O3Trz6ucsIU', title: 'Creative Film', order: 10 },
    { id: 'OTH6HiqY7v0', title: 'Production Showcase', order: 11 },
    { id: 'UHt7uhUsOqI', title: 'Visual Story', order: 12 },
    { id: '9D3mbt5LI8M', title: 'Premium Content', order: 13 },
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

export async function getVideoData(): Promise<VideoData> {
  try {
    // Check if Redis is configured
    if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
      console.log('Redis not configured, using default data')
      return defaultVideoData
    }

    const data = await redis.get<VideoData>(VIDEO_DATA_KEY)

    if (!data) {
      // Initialize with default data if nothing exists
      await redis.set(VIDEO_DATA_KEY, defaultVideoData)
      return defaultVideoData
    }

    return data
  } catch (error) {
    console.error('Error reading video data from Redis:', error)
    return defaultVideoData
  }
}

export async function saveVideoData(data: VideoData): Promise<void> {
  try {
    if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
      throw new Error('Redis not configured')
    }
    await redis.set(VIDEO_DATA_KEY, data)
  } catch (error) {
    console.error('Error saving video data to Redis:', error)
    throw new Error('Failed to save video data')
  }
}

export async function addVideo(type: 'main' | 'short', video: Omit<Video, 'order'>): Promise<Video> {
  const data = await getVideoData()
  const videos = type === 'main' ? data.mainVideos : data.shortVideos

  const newVideo: Video = {
    ...video,
    order: videos.length + 1
  }

  if (type === 'main') {
    data.mainVideos.push(newVideo)
  } else {
    data.shortVideos.push(newVideo)
  }

  await saveVideoData(data)
  return newVideo
}

export async function updateVideo(type: 'main' | 'short', id: string, updates: Partial<Video>): Promise<Video | null> {
  const data = await getVideoData()
  const videos = type === 'main' ? data.mainVideos : data.shortVideos

  const index = videos.findIndex(v => v.id === id)
  if (index === -1) return null

  videos[index] = { ...videos[index], ...updates }

  await saveVideoData(data)
  return videos[index]
}

export async function deleteVideo(type: 'main' | 'short', id: string): Promise<boolean> {
  const data = await getVideoData()
  const videos = type === 'main' ? data.mainVideos : data.shortVideos

  const index = videos.findIndex(v => v.id === id)
  if (index === -1) return false

  videos.splice(index, 1)

  // Reorder remaining videos
  videos.forEach((v, i) => {
    v.order = i + 1
  })

  await saveVideoData(data)
  return true
}

export async function reorderVideos(type: 'main' | 'short', orderedIds: string[]): Promise<void> {
  const data = await getVideoData()
  const videos = type === 'main' ? data.mainVideos : data.shortVideos

  const reordered = orderedIds.map((id, index) => {
    const video = videos.find(v => v.id === id)
    if (video) {
      return { ...video, order: index + 1 }
    }
    return null
  }).filter(Boolean) as Video[]

  if (type === 'main') {
    data.mainVideos = reordered
  } else {
    data.shortVideos = reordered
  }

  await saveVideoData(data)
}

export async function updateHeaderVideo(videoPath: string): Promise<void> {
  const data = await getVideoData()
  data.headerVideo = videoPath
  await saveVideoData(data)
}

export function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }

  return null
}
