import { Card, Container, IconBadge } from '@/components/ui'
import { pillarsContent } from './content/pillars.content'

export function AboutPillars() {
  return (
    <Container className="py-12 sm:py-16 lg:py-20">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pillarsContent.map((pillar, index) => (
          <li key={pillar.title}>
            <Card className="h-full">
              <IconBadge icon={pillar.icon} tone={index === 1 ? 'mint' : 'brand'} />
              <h2 className="mt-5 text-xl font-semibold">{pillar.title}</h2>
              <p className="text-fg-muted mt-3 text-sm leading-relaxed">{pillar.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Container>
  )
}
