import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { getVideoData, updateHeaderVideo } from '@/lib/videos'

export async function GET() {
  try {
    const data = await getVideoData()
    return NextResponse.json({ headerVideo: data.headerVideo })
  } catch (error) {
    console.error('Error fetching header video:', error)
    return NextResponse.json(
      { error: 'Failed to fetch header video' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const authenticated = await isAuthenticated()
    if (!authenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { videoPath } = await request.json()

    if (!videoPath) {
      return NextResponse.json(
        { error: 'Video path is required' },
        { status: 400 }
      )
    }

    await updateHeaderVideo(videoPath)
    return NextResponse.json({ success: true, headerVideo: videoPath })
  } catch (error) {
    console.error('Error updating header video:', error)
    return NextResponse.json(
      { error: 'Failed to update header video' },
      { status: 500 }
    )
  }
}
