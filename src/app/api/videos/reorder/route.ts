import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { reorderVideos } from '@/lib/videos'

export async function POST(request: NextRequest) {
  try {
    const authenticated = await isAuthenticated()
    if (!authenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { type, orderedIds } = await request.json()

    if (!type || !orderedIds || !Array.isArray(orderedIds)) {
      return NextResponse.json(
        { error: 'Type and orderedIds are required' },
        { status: 400 }
      )
    }

    await reorderVideos(type, orderedIds)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error reordering videos:', error)
    return NextResponse.json(
      { error: 'Failed to reorder videos' },
      { status: 500 }
    )
  }
}
