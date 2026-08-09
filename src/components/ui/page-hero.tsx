import { Container } from './container'
import { SectionHeading } from './heading'
import { cn } from '@/lib/cn'

export function PageHero({
  eyebrow,
  tone = 'brand',
  title,
  accent,
  description,
  className,
}: {
  eyebrow?: string
  tone?: 'brand' | 'mint'
  title: string
  accent?: string
  description?: string
  className?: string
}) {
  return (
    <section className={cn('border-ink-600/50 relative overflow-hidden border-b', className)}>
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full blur-[130px]',
          tone === 'mint' ? 'bg-mint-500/10' : 'bg-brand-600/15',
        )}
      />

      <Container className="relative py-14 sm:py-20 lg:py-24">
        <SectionHeading
          as="h1"
          eyebrow={eyebrow}
          tone={tone}
          title={title}
          accent={accent}
          description={description}
        />
      </Container>
    </section>
  )
}
