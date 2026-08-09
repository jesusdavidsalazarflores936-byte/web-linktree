import { ChevronRight } from 'lucide-react'
import { ButtonLink, Container, IconBadge } from '@/components/ui'
import { PanelPreview } from '@/components/mockups/panel-preview'
import { managementContent, managementPages, managementPoints } from './content/management.content'

export function InfoManagement() {
  return (
    <Container className="grid items-center gap-12 py-14 lg:grid-cols-2 lg:py-20">
      <div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{managementContent.title}</h2>

        <p className="text-fg-muted mt-5 text-base leading-relaxed sm:text-lg">
          {managementContent.description}
        </p>

        <ul className="mt-8 space-y-3.5">
          {managementPoints.map((point) => (
            <li key={point.label} className="flex items-center gap-3 text-sm text-slate-300">
              <IconBadge icon={point.icon} tone="mint" size="sm" className="rounded-lg" />
              {point.label}
            </li>
          ))}
        </ul>

        <ButtonLink href={managementContent.cta.href} variant="mint" className="mt-9">
          {managementContent.cta.label}
          <ChevronRight className="h-4 w-4" aria-hidden />
        </ButtonLink>
      </div>

      <div className="lg:pl-6">
        <PanelPreview pages={managementPages} />
      </div>
    </Container>
  )
}
