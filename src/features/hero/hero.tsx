import { Avatar, Container, Eyebrow, Stars } from '@/components/ui'
import { LinkPagePreview } from '@/components/mockups/link-page-preview'
import { heroContent, heroPreview } from './hero.content'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="bg-brand-600/20 pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full blur-[130px]"
      />

      <Container className="relative grid items-center gap-16 py-20 lg:grid-cols-2 lg:py-28">
        <div className="animate-fade-up">
          <Eyebrow dot>{heroContent.eyebrow}</Eyebrow>

          <h1 className="mt-6 text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl lg:text-[3.4rem]">
            {heroContent.titleStart}{' '}
            <span className="text-gradient">{heroContent.titleAccent}</span> {heroContent.titleEnd}
          </h1>

          <p className="text-fg-muted mt-6 max-w-lg text-base leading-relaxed sm:text-lg">
            {heroContent.description}
          </p>

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
          <LinkPagePreview {...heroPreview} />
        </div>
      </Container>
    </section>
  )
}
