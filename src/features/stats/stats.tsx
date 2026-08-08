import { Container } from '@/components/ui'
import { statsContent } from './stats.content'

/** Banda de métricas que separa el hero del resto de la página. */
export function Stats() {
  return (
    <section className="border-y border-ink-600/60 bg-ink-850/40">
      <Container>
        <dl className="grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {statsContent.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-3xl font-bold tracking-tight sm:text-4xl">{stat.value}</dd>
              <p className="mt-2 text-xs text-fg-muted">{stat.label}</p>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
