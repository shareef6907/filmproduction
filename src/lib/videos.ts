import { promises as fs } from 'fs'
import path from 'path'
import { VideoData, Video } from '@/types/video'

const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'videos.json')

export async function getVideoData(): Promise<VideoData> {
  try {
    const data = await fs.readFile(DATA_FILE_PATH, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading video data:', error)
    // Return default data if file doesn't exist
    return {
      mainVideos: [],
      shortVideos: [],
      headerVideo: '/header-video.mp4'
    }
  }
}

export async function saveVideoData(data: VideoData): Promise<void> {
  try {
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8')
  } catch (error) {
    console.error('Error saving video data:', error)
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
