// Check if device is mobile
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth < 768
}

// Get YouTube URL based on video type
export function getYouTubeUrl(videoId: string, isShort: boolean = false): string {
  if (isShort) {
    return `https://www.youtube.com/shorts/${videoId}`
  }
  return `https://www.youtube.com/watch?v=${videoId}`
}
