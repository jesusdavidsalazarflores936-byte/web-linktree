import { Card, Container, IconBadge } from '@/components/ui'
import { pillarsContent } from './content/pillars.content'

export function AboutPillars() {
  return (
    <Container className="py-16 lg:py-20">
      <ul className="grid gap-5 md:grid-cols-3">
        {pillarsContent.map((pillar, index) => (
          <li key={pillar.title}>
            <Card className="h-full">
              <IconBadge icon={pillar.icon} tone={index === 1 ? 'mint' : 'brand'} />
              <h2 className="mt-5 text-xl font-semibold">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{pillar.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Container>
  )
}
