export interface Video {
  id: string
  title: string
  order: number
}

export interface VideoData {
  mainVideos: Video[]
  shortVideos: Video[]
  headerVideo: string
}

export interface AuthState {
  isAuthenticated: boolean
  email?: string
}
