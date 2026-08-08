import { Card, IconBadge, Section, SectionHeading } from '@/components/ui'
import { capabilitiesContent, capabilitiesHeading } from './capabilities.content'

export function Capabilities() {
  return (
    <Section id="caracteristicas">
      <SectionHeading {...capabilitiesHeading} />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {capabilitiesContent.map((item, index) => (
          <li key={item.title}>
            <Card className="h-full">
              <IconBadge icon={item.icon} tone={index % 3 === 1 ? 'mint' : 'brand'} />
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="text-fg-muted mt-2 text-sm leading-relaxed">{item.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  )
}
