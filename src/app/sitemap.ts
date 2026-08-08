import type { MetadataRoute } from 'next'
import { siteConfig, routes } from '@/lib/site.config'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return Object.values(routes).map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: path === routes.home ? 1 : 0.8,
  }))
}
