import { Card, Stars } from '@/components/ui'
import type { Testimonial } from '@/types'

export function TestimonialCard({ quote, name, role }: Testimonial) {
  return (
    <Card className="flex h-full flex-col">
      <Stars className="mb-4" />

      <blockquote className="flex-1 text-sm italic leading-relaxed text-slate-300">
        “{quote}”
      </blockquote>

      <footer className="mt-6">
        <p className="text-sm font-semibold">{name}</p>
        <p className="mt-0.5 font-mono text-[11px] text-fg-muted">{role}</p>
      </footer>
    </Card>
  )
}
