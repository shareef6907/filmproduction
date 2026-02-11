import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://filmproductionbahrain.com'
  const currentDate = new Date().toISOString()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Service pages
  const servicePages = [
    'corporate-video-production',
    'commercial-production',
    'event-videography',
    'drone-videography',
    'music-video-production',
    'real-estate-video-tours',
    'food-and-restaurant-video',
    'wedding-videography',
    'documentary-film-production',
    'product-video-production',
    'social-media-video-content',
    'animation-motion-graphics',
    'explainer-video-production',
    'testimonial-video-production',
    'brand-film-production',
    'promotional-video-bahrain',
    'construction-timelapse-video',
    'hospitality-hotel-video',
    'healthcare-medical-video',
    'educational-video-production',
    'video-editing-services',
    'aerial-photography-bahrain',
    'live-streaming-bahrain',
    'virtual-event-production',
    'automotive-video-production',
    'fashion-video-production',
    'sports-video-production',
    'photography-services-bahrain',
    'behind-the-scenes-content',
    'influencer-video-content',
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Blog posts
  const blogPosts = [
    'video-production-costs-bahrain-2026',
    'why-restaurants-need-promo-video',
    'corporate-video-production-guide',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages, ...blogPosts]
}
