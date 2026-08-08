import { PageHero } from '@/components/ui'
import {
  AboutPillars,
  AboutStory,
  AboutTimeline,
  AboutTeam,
  aboutHeroContent,
} from '@/features/about'
import { buildMetadata } from '@/lib/metadata'
import { routes } from '@/lib/site.config'

export const metadata = buildMetadata({
  title: 'Nosotros',
  description:
    'Somos MR.SOFT, empresa de desarrollo de software fundada en Lima con más de 10 años creando soluciones tecnológicas para empresas peruanas.',
  path: routes.about,
})

export default function AboutPage() {
  return (
    <>
      <PageHero {...aboutHeroContent} />
      <AboutPillars />
      <AboutStory />
      <AboutTimeline />
      <AboutTeam />
    </>
  )
}
