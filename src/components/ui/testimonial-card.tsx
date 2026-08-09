import { Avatar } from './avatar'
import { Card } from './card'
import { Stars } from './stars'
import type { Testimonial } from '@/types'

export function TestimonialCard({
  quote,
  name,
  role,
  initials,
  gradient,
  withAvatar = false,
}: Testimonial & { withAvatar?: boolean }) {
  return (
    <Card className="flex h-full flex-col">
      <Stars className="mb-4" />

      <blockquote className="flex-1 text-sm italic leading-relaxed text-slate-300">
        “{quote}”
      </blockquote>

      <footer className="mt-6 flex items-center gap-3">
        {withAvatar && <Avatar initials={initials} gradient={gradient} />}
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="mt-0.5 font-mono text-[11px] text-fg-muted">{role}</p>
        </div>
      </footer>
    </Card>
  )
}
