import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.akshayvt.com'

  // Location pages
  const locations = [
    'dubai', 'kerala', 'sydney', 'doha', 'riyadh',
    'jeddah', 'dammam', 'khobar', 'mecca', 'medina'
  ]

  const locationPages = locations.map(city => ({
    url: `${baseUrl}/locations/${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog posts
  const blogSlugs = [
    'why-nextjs-for-small-business',
    'seo-checklist-2024',
    'freelancing-in-uae',
    'lighthouse-score-90-plus',
    'react-vs-wordpress',
    'client-red-flags'
  ]

  const blogPages = blogSlugs.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Service pages (000-036)
  const serviceIds = Array.from({ length: 37 }, (_, i) => String(i).padStart(3, '0'))

  const servicePages = serviceIds.map(id => ({
    url: `${baseUrl}/services/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    // Main pages
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },

    // Location pages
    { url: `${baseUrl}/locations`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/locations/saudi-arabia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...locationPages,

    // SEO landing pages
    { url: `${baseUrl}/freelance-web-developer-dubai`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/freelance-web-developer-uae`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/freelance-web-developer-kerala`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/freelance-web-developer-india`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Blog posts
    ...blogPages,

    // Service detail pages
    ...servicePages,
  ]
}
