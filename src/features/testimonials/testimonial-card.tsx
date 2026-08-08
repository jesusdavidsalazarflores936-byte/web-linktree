import { Card, Stars } from '@/components/ui'
import type { Testimonial } from '@/types'

export function TestimonialCard({ quote, name, role }: Testimonial) {
  return (
    <Card className="flex h-full flex-col">
      <Stars className="mb-4" />

      <blockquote className="flex-1 text-sm leading-relaxed text-slate-300 italic">
        “{quote}”
      </blockquote>

      <footer className="mt-6">
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-fg-muted mt-0.5 font-mono text-[11px]">{role}</p>
      </footer>
    </Card>
  )
}
