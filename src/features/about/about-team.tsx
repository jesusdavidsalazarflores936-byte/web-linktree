import { Award } from 'lucide-react'
import { Avatar, Container } from '@/components/ui'
import { teamContent } from './content/team.content'

export function AboutTeam() {
  return (
    <Container className="pb-24">
      <div className="border-mint-500/20 from-mint-500/8 to-brand-600/8 rounded-2xl border bg-gradient-to-r p-6 sm:p-8">
        <div className="flex flex-col items-center gap-7 lg:flex-row">
          <div className="flex -space-x-3">
            {teamContent.avatars.map((avatar) => (
              <span key={avatar.initials} className="ring-ink-900 rounded-full ring-2">
                <Avatar
                  initials={avatar.initials}
                  gradient={avatar.gradient}
                  className="h-11 w-11"
                />
              </span>
            ))}
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-lg font-semibold">{teamContent.title}</h2>
            <p className="text-fg-muted mt-2 text-sm leading-relaxed">{teamContent.description}</p>
          </div>

          <p className="border-mint-500/30 bg-ink-850 text-mint-400 inline-flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-medium">
            <Award className="h-4 w-4" aria-hidden />
            {teamContent.badge}
          </p>
        </div>
      </div>
    </Container>
  )
}
