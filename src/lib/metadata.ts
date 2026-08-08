import type { Metadata } from 'next'
import { siteConfig } from './site.config'

/**
 * Genera la metadata de una página a partir de su título y descripción.
 * Cada page.tsx la usa para tener SEO y Open Graph correctos sin repetir código.
 */
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
