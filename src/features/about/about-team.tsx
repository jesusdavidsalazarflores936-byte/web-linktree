import { Award } from 'lucide-react'
import { Avatar, Container } from '@/components/ui'
import { teamContent } from './content/team.content'

export function AboutTeam() {
  return (
    <Container className="pb-24">
      <div className="rounded-2xl border border-mint-500/20 bg-gradient-to-r from-mint-500/8 to-brand-600/8 p-8">
        <div className="flex flex-col items-center gap-7 lg:flex-row">
          <div className="flex -space-x-3">
            {teamContent.avatars.map((avatar) => (
              <span key={avatar.initials} className="rounded-full ring-2 ring-ink-900">
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
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">{teamContent.description}</p>
          </div>

          <p className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-mint-500/30 bg-ink-850 px-4 py-2.5 text-xs font-medium text-mint-400">
            <Award className="h-4 w-4" aria-hidden />
            {teamContent.badge}
          </p>
        </div>
      </div>
    </Container>
  )
}
