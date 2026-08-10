import { Container } from '@/components/ui'
import { statsContent } from './stats.content'

export function Stats() {
  return (
    <section className="border-ink-600/60 bg-ink-850/40 border-y">
      <Container>
        <dl className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-3 sm:py-12">
          {statsContent.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                {stat.value}
              </dd>
              <p className="text-fg-muted mx-auto mt-2 max-w-[18ch] text-xs text-balance">
                {stat.label}
              </p>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
