'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Video, VideoData } from '@/types/video'

export default function AdminDashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [videoData, setVideoData] = useState<VideoData | null>(null)
  const [activeTab, setActiveTab] = useState<'main' | 'short' | 'header'>('main')
  const [showAddModal, setShowAddModal] = useState(false)
  const [editingVideo, setEditingVideo] = useState<Video | null>(null)
  const [draggedVideo, setDraggedVideo] = useState<Video | null>(null)
  const [dragOverVideo, setDragOverVideo] = useState<string | null>(null)

  // Form states
  const [newUrl, setNewUrl] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [headerVideoPath, setHeaderVideoPath] = useState('')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('/api/videos')
      if (response.ok) {
        const data = await response.json()
        setVideoData(data)
        setHeaderVideoPath(data.headerVideo)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }, [])

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check')
        const data = await response.json()
        if (!data.authenticated) {
          router.push('/admin/login')
          return
        }
        await fetchData()
      } catch {
        router.push('/admin/login')
      } finally {
        setLoading(false)
      }
    }
    checkAuth()
  }, [router, fetchData])

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text })
    setTimeout(() => setMessage(null), 3000)
  }

  const handleAddVideo = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const response = await fetch('/api/videos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: activeTab,
          url: newUrl,
          title: newTitle,
        }),
      })

      if (response.ok) {
        showMessage('success', 'Video added successfully')
        setShowAddModal(false)
        setNewUrl('')
        setNewTitle('')
        await fetchData()
      } else {
        const data = await response.json()
        showMessage('error', data.error || 'Failed to add video')
      }
    } catch {
      showMessage('error', 'An error occurred')
    } finally {
      setSaving(false)
    }
  }

  const handleEditVideo = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingVideo) return
    setSaving(true)

    try {
      const response = await fetch('/api/videos', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: activeTab,
          id: editingVideo.id,
          title: newTitle,
        }),
      })

      if (response.ok) {
        showMessage('success', 'Video updated successfully')
        setEditingVideo(null)
        setNewTitle('')
        await fetchData()
      } else {
        const data = await response.json()
        showMessage('error', data.error || 'Failed to update video')
      }
    } catch {
      showMessage('error', 'An error occurred')
    } finally {
      setSaving(false)
    }
  }

  const handleDeleteVideo = async (id: string) => {
    if (!confirm('Are you sure you want to delete this video?')) return

    try {
      const response = await fetch(`/api/videos?type=${activeTab}&id=${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        showMessage('success', 'Video deleted successfully')
        await fetchData()
      } else {
        const data = await response.json()
        showMessage('error', data.error || 'Failed to delete video')
      }
    } catch {
      showMessage('error', 'An error occurred')
    }
  }

  const handleDragStart = (e: React.DragEvent, video: Video) => {
    setDraggedVideo(video)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', video.id)
    // Add a slight delay to allow the drag image to be set
    setTimeout(() => {
      const target = e.target as HTMLElement
      target.style.opacity = '0.5'
    }, 0)
  }

  const handleDragEnd = (e: React.DragEvent) => {
    const target = e.target as HTMLElement
    target.style.opacity = '1'
    setDraggedVideo(null)
    setDragOverVideo(null)
  }

  const handleDragOver = (e: React.DragEvent, videoId: string) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    if (draggedVideo && draggedVideo.id !== videoId) {
      setDragOverVideo(videoId)
    }
  }

  const handleDragLeave = () => {
    setDragOverVideo(null)
  }

  const handleDrop = async (e: React.DragEvent, targetVideo: Video) => {
    e.preventDefault()
    setDragOverVideo(null)

    if (!draggedVideo || draggedVideo.id === targetVideo.id || !videoData) {
      setDraggedVideo(null)
      return
    }

    const videos = activeTab === 'main' ? [...videoData.mainVideos] : [...videoData.shortVideos]
    const draggedIndex = videos.findIndex((v) => v.id === draggedVideo.id)
    const targetIndex = videos.findIndex((v) => v.id === targetVideo.id)

    if (draggedIndex === -1 || targetIndex === -1) {
      setDraggedVideo(null)
      return
    }

    // Remove dragged video and insert at target position
    const [removed] = videos.splice(draggedIndex, 1)
    videos.splice(targetIndex, 0, removed)

    // Optimistically update UI
    const updatedData = { ...videoData }
    if (activeTab === 'main') {
      updatedData.mainVideos = videos.map((v, i) => ({ ...v, order: i + 1 }))
    } else {
      updatedData.shortVideos = videos.map((v, i) => ({ ...v, order: i + 1 }))
    }
    setVideoData(updatedData)

    const orderedIds = videos.map((v) => v.id)

    try {
      const response = await fetch('/api/videos/reorder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: activeTab, orderedIds }),
      })

      if (response.ok) {
        showMessage('success', 'Videos reordered successfully')
      } else {
        // Revert on failure
        await fetchData()
        showMessage('error', 'Failed to reorder videos')
      }
    } catch {
      await fetchData()
      showMessage('error', 'Failed to reorder videos')
    }

    setDraggedVideo(null)
  }

  const handleUpdateHeaderVideo = async () => {
    setSaving(true)
    try {
      const response = await fetch('/api/header-video', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videoPath: headerVideoPath }),
      })

      if (response.ok) {
        showMessage('success', 'Header video updated successfully')
        await fetchData()
      } else {
        const data = await response.json()
        showMessage('error', data.error || 'Failed to update header video')
      }
    } catch {
      showMessage('error', 'An error occurred')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-film-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  const currentVideos =
    activeTab === 'main'
      ? videoData?.mainVideos || []
      : activeTab === 'short'
      ? videoData?.shortVideos || []
      : []

  return (
    <div className="min-h-screen bg-film-black">
      {/* Header */}
      <header className="bg-zinc-900 border-b border-zinc-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/logo-white.png"
              alt="Film Production Bahrain"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
            <span className="text-zinc-500">|</span>
            <span className="text-white font-medium">Admin Panel</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/"
              target="_blank"
              className="text-zinc-400 hover:text-white text-sm transition-colors"
            >
              View Site &rarr;
            </a>
            <button
              onClick={handleLogout}
              className="text-zinc-400 hover:text-red-400 text-sm transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Message Toast */}
      {message && (
        <div
          className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg ${
            message.type === 'success'
              ? 'bg-green-500/90 text-white'
              : 'bg-red-500/90 text-white'
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Main Content */}
      <main className="p-6">
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('main')}
            className={`px-4 py-2 rounded font-medium transition-colors ${
              activeTab === 'main'
                ? 'bg-film-gold text-film-black'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            Main Videos ({videoData?.mainVideos.length || 0})
          </button>
          <button
            onClick={() => setActiveTab('short')}
            className={`px-4 py-2 rounded font-medium transition-colors ${
              activeTab === 'short'
                ? 'bg-film-gold text-film-black'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            Short Films ({videoData?.shortVideos.length || 0})
          </button>
          <button
            onClick={() => setActiveTab('header')}
            className={`px-4 py-2 rounded font-medium transition-colors ${
              activeTab === 'header'
                ? 'bg-film-gold text-film-black'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            Header Video
          </button>
        </div>

        {/* Header Video Tab */}
        {activeTab === 'header' && (
          <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
            <h2 className="text-xl font-medium text-white mb-4">Header Video Settings</h2>
            <p className="text-zinc-400 text-sm mb-6">
              Enter the path to the video file (e.g., /header-video.mp4). The video should be
              placed in the public folder.
            </p>

            <div className="flex gap-4">
              <input
                type="text"
                value={headerVideoPath}
                onChange={(e) => setHeaderVideoPath(e.target.value)}
                className="flex-1 bg-zinc-800 border border-zinc-700 rounded px-4 py-3 text-white focus:outline-none focus:border-film-gold"
                placeholder="/header-video.mp4"
              />
              <button
                onClick={handleUpdateHeaderVideo}
                disabled={saving}
                className="bg-film-gold text-film-black px-6 py-3 rounded font-medium hover:bg-film-gold/90 transition-colors disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Update'}
              </button>
            </div>

            <div className="mt-6 p-4 bg-zinc-800 rounded">
              <p className="text-zinc-400 text-sm">
                <strong className="text-white">Current video:</strong> {videoData?.headerVideo}
              </p>
            </div>
          </div>
        )}

        {/* Videos List */}
        {(activeTab === 'main' || activeTab === 'short') && (
          <>
            {/* Add Button */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium text-white">
                {activeTab === 'main' ? 'Main Videos (Our Work)' : 'Short Films'}
              </h2>
              <button
                onClick={() => setShowAddModal(true)}
                className="bg-film-gold text-film-black px-4 py-2 rounded font-medium hover:bg-film-gold/90 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Video
              </button>
            </div>

            <p className="text-zinc-400 text-sm mb-4">
              Drag and drop videos to reorder them. Click edit to change the title.
            </p>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {currentVideos
                .sort((a, b) => a.order - b.order)
                .map((video) => (
                  <div
                    key={video.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, video)}
                    onDragEnd={handleDragEnd}
                    onDragOver={(e) => handleDragOver(e, video.id)}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, video)}
                    className={`bg-zinc-900 rounded-lg border-2 overflow-hidden cursor-move transition-all ${
                      draggedVideo?.id === video.id
                        ? 'opacity-50 scale-95 border-zinc-800'
                        : dragOverVideo === video.id
                          ? 'border-film-gold scale-105'
                          : 'border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className="aspect-video relative">
                      <Image
                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <a
                          href={`https://youtube.com/watch?v=${video.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-sm p-3 rounded-full"
                        >
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </a>
                      </div>
                      <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                        #{video.order}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <h3 className="text-white font-medium truncate mb-1">{video.title}</h3>
                      <p className="text-zinc-500 text-xs truncate mb-3">{video.id}</p>

                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setEditingVideo(video)
                            setNewTitle(video.title)
                          }}
                          className="flex-1 bg-zinc-800 text-zinc-300 px-3 py-2 rounded text-sm hover:bg-zinc-700 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteVideo(video.id)}
                          className="bg-red-500/20 text-red-400 px-3 py-2 rounded text-sm hover:bg-red-500/30 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {currentVideos.length === 0 && (
              <div className="text-center py-12 text-zinc-500">
                No videos yet. Click &quot;Add Video&quot; to get started.
              </div>
            )}
          </>
        )}
      </main>

      {/* Add Video Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6 w-full max-w-md">
            <h2 className="text-xl font-medium text-white mb-4">Add New Video</h2>

            <form onSubmit={handleAddVideo} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  YouTube URL
                </label>
                <input
                  type="text"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded px-4 py-3 text-white focus:outline-none focus:border-film-gold"
                  placeholder="https://youtube.com/watch?v=..."
                  required
                />
                <p className="text-zinc-500 text-xs mt-1">
                  Supports regular videos and Shorts URLs
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded px-4 py-3 text-white focus:outline-none focus:border-film-gold"
                  placeholder="Video title"
                  required
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false)
                    setNewUrl('')
                    setNewTitle('')
                  }}
                  className="flex-1 bg-zinc-800 text-zinc-300 py-3 rounded font-medium hover:bg-zinc-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 bg-film-gold text-film-black py-3 rounded font-medium hover:bg-film-gold/90 transition-colors disabled:opacity-50"
                >
                  {saving ? 'Adding...' : 'Add Video'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Video Modal */}
      {editingVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6 w-full max-w-md">
            <h2 className="text-xl font-medium text-white mb-4">Edit Video</h2>

            <form onSubmit={handleEditVideo} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Video ID
                </label>
                <input
                  type="text"
                  value={editingVideo.id}
                  disabled
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded px-4 py-3 text-zinc-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded px-4 py-3 text-white focus:outline-none focus:border-film-gold"
                  placeholder="Video title"
                  required
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setEditingVideo(null)
                    setNewTitle('')
                  }}
                  className="flex-1 bg-zinc-800 text-zinc-300 py-3 rounded font-medium hover:bg-zinc-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 bg-film-gold text-film-black py-3 rounded font-medium hover:bg-film-gold/90 transition-colors disabled:opacity-50"
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
