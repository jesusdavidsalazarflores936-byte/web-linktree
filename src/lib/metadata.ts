import type { Metadata } from 'next'
import { siteConfig } from './site.config'

export function buildMetadata({
  title,
  description,
  path = '/',
}: {
  title: string
  description: string
  path?: string
}): Metadata {
  const url = `${siteConfig.url}${path}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
