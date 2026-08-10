import { ArrowRight } from 'lucide-react'
import { Avatar, ButtonLink, Container, Eyebrow, Stars } from '@/components/ui'
import { Showcase } from '@/features/showcase'
import { heroContent } from './hero.content'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="bg-brand-600/20 pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full blur-[130px]"
      />

      <Container className="relative grid items-center gap-14 py-14 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div className="animate-fade-up">
          <Eyebrow dot>{heroContent.eyebrow}</Eyebrow>

          <h1 className="mt-6 text-[2rem] leading-[1.15] font-bold tracking-tight sm:text-5xl sm:leading-[1.1] lg:text-[3.4rem]">
            {heroContent.titleStart}{' '}
            <span className="text-gradient">{heroContent.titleAccent}</span> {heroContent.titleEnd}
          </h1>

          <p className="text-fg-muted mt-6 max-w-lg text-base leading-relaxed sm:text-lg">
            {heroContent.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href={heroContent.primaryCta.href}>
              {heroContent.primaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href={heroContent.secondaryCta.href} variant="ghost">
              {heroContent.secondaryCta.label}
            </ButtonLink>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-2">
              {heroContent.avatars.map((avatar) => (
                <Avatar
                  key={avatar.initials}
                  initials={avatar.initials}
                  gradient={avatar.gradient}
                  className="border-ink-900 h-8 w-8 border-2 text-[10px]"
                />
              ))}
            </div>

            <div>
              <Stars />
              <p className="text-fg-muted mt-1 text-xs">{heroContent.socialProof}</p>
            </div>
          </div>
        </div>

        <div className="animate-fade-up lg:pl-6">
          <Showcase />
        </div>
      </Container>
    </section>
  )
}
