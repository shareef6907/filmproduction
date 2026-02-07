'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Play, Film, Building2, PartyPopper, Camera, Plane, ChevronRight } from 'lucide-react';
import Footer from '@/components/Footer';

const portfolioCategories = [
  {
    id: 'corporate',
    title: 'Corporate Videos',
    icon: Building2,
    description: 'Brand films, company profiles, and corporate communications that elevate your business image.',
    videos: [
      { id: 'ne15w87EA4Q', title: 'Luxury Resort Brand Film', client: 'Hospitality Client', year: '2024' },
      { id: 'F2Mw7tngDXY', title: 'Financial Services Profile', client: 'Finance Sector', year: '2024' },
      { id: 'fxhFx-VGxXg', title: 'CEO Interview Series', client: 'Corporate Client', year: '2024' },
      { id: 'ZEzXKAJonkw', title: 'Company Vision Story', client: 'Enterprise', year: '2023' },
      { id: 'UHt7uhUsOqI', title: 'Tech Startup Profile', client: 'Technology', year: '2024' },
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial & Advertising',
    icon: Film,
    description: 'High-impact commercials and advertising content designed to drive results.',
    videos: [
      { id: 'V_KYSgqXGLE', title: 'Product Launch Commercial', client: 'Retail Brand', year: '2024' },
      { id: 'nBkEOeIk5sw', title: 'Lifestyle Fashion Campaign', client: 'Fashion Brand', year: '2024' },
      { id: 'OTH6HiqY7v0', title: 'Real Estate Property Tour', client: 'Real Estate', year: '2024' },
      { id: '9D3mbt5LI8M', title: 'Hotel Promotional Video', client: 'Hospitality', year: '2023' },
    ],
  },
  {
    id: 'events',
    title: 'Event Coverage',
    icon: PartyPopper,
    description: 'Professional coverage of corporate events, conferences, and special occasions.',
    videos: [
      { id: 'EAIhJ6V6ALw', title: 'Annual Gala Highlight', client: 'Corporate Event', year: '2024' },
      { id: 'I3cFaJpgaqY', title: 'Conference Recap', client: 'Business Conference', year: '2024' },
    ],
  },
  {
    id: 'documentary',
    title: 'Documentary',
    icon: Camera,
    description: 'Compelling documentary content that tells powerful stories.',
    videos: [
      { id: 'Uanc4fHO7h8', title: 'Heritage Story Documentary', client: 'Cultural Project', year: '2024' },
    ],
  },
  {
    id: 'aerial',
    title: 'Drone & Aerial',
    icon: Plane,
    description: 'Stunning aerial cinematography using professional DJI drone systems.',
    videos: [
      { id: 'OTH6HiqY7v0', title: 'Aerial Property Showcase', client: 'Real Estate', year: '2024' },
    ],
  },
];

const VideoCard = ({ video, onPlay }: { video: { id: string; title: string; client: string; year: string }, onPlay: (id: string) => void }) => {
  return (
    <div 
      className="group relative aspect-video bg-white/5 rounded-xl overflow-hidden cursor-pointer"
      onClick={() => onPlay(video.id)}
    >
      <img
        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
        alt={video.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
          <Play className="w-7 h-7 text-white fill-white ml-1" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-bold text-lg mb-1">{video.title}</h3>
        <p className="text-gray-400 text-sm">{video.client} • {video.year}</p>
      </div>
    </div>
  );
};

export default function PortfolioPage() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handlePlay = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  const handleClose = () => {
    setPlayingVideo(null);
  };

  return (
    <>
      <main className="min-h-screen bg-black text-white">
        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-black to-black" />
          <div className="relative text-center px-6">
            <h1 className="text-5xl md:text-7xl font-black mb-4">
              Our <span className="text-red-500">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A showcase of our finest work in corporate video, commercials, events, and documentary filmmaking.
            </p>
          </div>
        </section>

        {/* Portfolio Sections */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          {portfolioCategories.map((category) => (
            <section key={category.id} id={category.id} className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-red-700">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                  <p className="text-gray-400">{category.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.videos.map((video) => (
                  <VideoCard key={video.id} video={video} onPlay={handlePlay} />
                ))}
              </div>
            </section>
          ))}

          {/* Equipment Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Our Equipment</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'RED Komodo 6K', desc: 'Cinema-quality 6K footage' },
                { name: 'Blackmagic Pocket 6K Pro', desc: 'Professional documentary camera' },
                { name: 'DJI Inspire 3', desc: 'Professional drone cinematography' },
                { name: 'DJI Ronin 4D', desc: 'Stabilized cinema camera system' },
                { name: 'Aputure 600D Pro', desc: 'Professional LED lighting' },
                { name: 'Zoom F6', desc: 'Professional audio recording' },
                { name: 'Atomos Ninja V', desc: 'External ProRes recording' },
                { name: 'DaVinci Resolve', desc: 'Hollywood-grade color grading' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-red-900/30 to-red-600/30 border border-red-500/30 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Something Cinematic?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and bring it to life with world-class video production.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/97339007750"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-colors flex items-center gap-2"
              >
                Get a Quote <ChevronRight className="w-4 h-4" />
              </a>
              <Link
                href="/services"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-colors"
              >
                View Services
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Video Modal */}
      {playingVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={handleClose}>
          <div className="relative w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleClose}
              className="absolute -top-12 right-0 text-white hover:text-red-500 text-lg font-bold"
            >
              Close ✕
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1&rel=0`}
              className="w-full h-full rounded-xl"
              allowFullScreen
              allow="autoplay; encrypted-media"
            />
          </div>
        </div>
      )}

      <Footer />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Film Production Bahrain Portfolio',
            description: 'Video production portfolio showcasing corporate videos, commercials, events, and documentaries.',
            url: 'https://filmproductionbahrain.com/portfolio',
            mainEntity: portfolioCategories.flatMap(cat => 
              cat.videos.map(video => ({
                '@type': 'VideoObject',
                name: video.title,
                description: `${video.title} - ${cat.title}`,
                thumbnailUrl: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
                embedUrl: `https://www.youtube.com/embed/${video.id}`,
                uploadDate: `${video.year}-01-01`,
              }))
            ),
          }),
        }}
      />
    </>
  );
}
