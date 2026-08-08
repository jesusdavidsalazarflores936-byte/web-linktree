import { Container } from '@/components/ui'
import { timelineContent } from './content/timeline.content'

export function AboutTimeline() {
  const { milestones } = timelineContent
  const lastIndex = milestones.length - 1

  return (
    <Container className="py-16 lg:py-24">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
        {timelineContent.title}
      </h2>

      <ol className="mx-auto mt-14 max-w-3xl">
        {milestones.map((milestone, index) => (
          <li key={milestone.year} className="grid grid-cols-[64px_28px_1fr] gap-2">
            <p className="pt-0.5 text-right font-mono text-sm font-medium text-brand-400">
              {milestone.year}
            </p>

            <div className="relative flex justify-center" aria-hidden>
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-500 ring-4 ring-brand-600/15" />
              {index < lastIndex && <span className="absolute top-5 h-full w-px bg-ink-600" />}
            </div>

            <p className="pb-10 text-sm leading-relaxed text-fg-muted">{milestone.description}</p>
          </li>
        ))}
      </ol>
    </Container>
  )
}
