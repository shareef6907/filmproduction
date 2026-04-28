'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

interface VideoHeroProps {
  videoId: string;
  title: string;
  subtitle?: string;
}

// Global YouTube API reference
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

// Extract YouTube video ID from various URL formats
function getYouTubeId(url: string): string | null {
  if (!url) return null;
  
  // Handle direct video IDs (11 chars)
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
    return url;
  }
  
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/v\/([a-zA-Z0-9_-]{11})/,
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  
  return null;
}

export default function VideoHero({ videoId, title, subtitle }: VideoHeroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [ytApiReady, setYtApiReady] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const playerRef = useRef<any>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Load YouTube IFrame Player API
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.YT && window.YT.Player) {
        setYtApiReady(true);
        return;
      }
      
      (window as any).onYouTubeIframeAPIReady = () => {
        setYtApiReady(true);
      };
      
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }
  }, []);

  // Create player when API is ready
  useEffect(() => {
    if (!ytApiReady || !videoId || !playerContainerRef.current || initializedRef.current) return;

    try {
      const player = new window.YT.Player(playerContainerRef.current.id, {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          mute: 1, // Required for mobile autoplay
          controls: 0,
          showinfo: 0,
          rel: 0,
          loop: 1,
          playsinline: 1,
          modestbranding: 1,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
        },
        events: {
          onReady: (event: { target: any }) => {
            event.target.playVideo();
            setIsPlayerReady(true);
          },
          onStateChange: (event: { target: any; data: number }) => {
            // Loop when video ends
            if (event.data === 0) {
              event.target.seekTo(0);
              event.target.playVideo();
            }
          },
        },
      });
      
      playerRef.current = player;
      initializedRef.current = true;
    } catch (e) {
      console.error('Failed to create YouTube player:', e);
    }
  }, [ytApiReady, videoId]);

  // Toggle mute
  const toggleMute = () => {
    if (playerRef.current) {
      try {
        if (isMuted) {
          playerRef.current.unMute();
          playerRef.current.setVolume(50);
        } else {
          playerRef.current.mute();
        }
      } catch (e) {
        // Ignore errors
      }
    }
    setIsMuted(!isMuted);
  };

  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{ 
        height: isMobile ? '60vh' : '80vh',
        minHeight: isMobile ? '400px' : '600px',
        marginLeft: 'calc(-50vw + 50%)',
        width: '100vw',
        marginBottom: '-1px',
      }}
    >
      {/* YouTube Player Container - object-fit cover approach */}
      <div 
        id="video-hero-player"
        ref={playerContainerRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ 
          transform: 'scale(1.05)',
          transformOrigin: 'center center',
        }}
      />

      {/* Top gradient - subtle darkening */}
      <div 
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 30%)' }}
      />

      {/* Bottom gradient - smooth fade into page */}
      <div 
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.7) 80%, #000000 100%)' }}
      />

      {/* Side vignette */}
      <div 
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.3), transparent 15%, transparent 85%, rgba(0,0,0,0.3))' }}
      />

      {/* Fallback if no video */}
      {!isPlayerReady && videoId && (
        <div className="absolute inset-0 bg-gray-900 -z-10" />
      )}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-end justify-start pb-12 md:pb-16 px-6 md:px-12 lg:px-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 drop-shadow-2xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-300 max-w-xl drop-shadow-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Mute/Unmute Button - inside video area */}
      <button
        onClick={toggleMute}
        className={`absolute ${isMobile ? 'bottom-4 right-4' : 'bottom-4 right-4'} p-3 z-20 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition ${
          isMobile ? 'animate-pulse' : ''
        }`}
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
    </div>
  );
}