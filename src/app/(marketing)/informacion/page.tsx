import { PageHero } from '@/components/ui'
import {
  InfoWhatIs,
  InfoAdminFeatures,
  InfoManagement,
  InfoTestimonials,
  infoHeroContent,
} from '@/features/info'
import { buildMetadata } from '@/lib/metadata'
import { routes } from '@/lib/site.config'

export const metadata = buildMetadata({
  title: 'Información',
  description:
    'Qué es MR.SOFT Tree, cómo funciona el panel administrativo y todo lo que puedes gestionar sin escribir código.',
  path: routes.info,
})

export default function InfoPage() {
  return (
    <>
      <PageHero {...infoHeroContent} />
      <InfoWhatIs />
      <InfoAdminFeatures />
      <InfoManagement />
      <InfoTestimonials />
    </>
  )
}
