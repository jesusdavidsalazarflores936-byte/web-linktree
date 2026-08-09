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
    'Vitrinas por sucursal, catálogos y video dentro de tu página, códigos QR imprimibles y analítica. Todo desde un panel en español.',
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
