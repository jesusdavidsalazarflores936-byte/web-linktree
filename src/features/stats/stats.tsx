import { Container } from '@/components/ui'
import { statsContent } from './stats.content'

export function Stats() {
  return (
    <section className="border-ink-600/60 bg-ink-850/40 border-y">
      <Container>
        <dl className="grid grid-cols-2 gap-8 py-10 sm:py-12 lg:grid-cols-4">
          {statsContent.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-3xl font-bold tracking-tight sm:text-4xl">{stat.value}</dd>
              <p className="text-fg-muted mt-2 text-xs">{stat.label}</p>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
