import { cn } from '@/lib/cn'
import { Container } from './container'

type Tone = 'default' | 'raised'

const toneStyles: Record<Tone, string> = {
  default: '',
  raised: 'border-y border-ink-600/60 bg-ink-850/40',
}

export function Section({
  id,
  tone = 'default',
  bare = false,
  className,
  children,
}: {
  id?: string
  tone?: Tone
  /** Sin Container, para secciones a ancho completo */
  bare?: boolean
  className?: string
  children: React.ReactNode
}) {
  const content = bare ? children : <Container>{children}</Container>

  return (
    <section id={id} className={cn('py-14 sm:py-20 lg:py-28', toneStyles[tone], className)}>
      {content}
    </section>
  )
}
