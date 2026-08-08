import { cn } from '@/lib/cn'
import { Container } from './container'

type Tone = 'default' | 'raised'

const toneStyles: Record<Tone, string> = {
  default: '',
  raised: 'border-y border-ink-600/60 bg-ink-850/40',
}

/**
 * Bloque vertical de la página: aplica el ritmo vertical y el fondo.
 * Envuelve su contenido en un Container salvo que se indique lo contrario.
 */
export function Section({
  id,
  tone = 'default',
  bare = false,
  className,
  children,
}: {
  id?: string
  tone?: Tone
  /** true = sin Container, para secciones que necesitan ancho completo */
  bare?: boolean
  className?: string
  children: React.ReactNode
}) {
  const content = bare ? children : <Container>{children}</Container>

  return (
    <section id={id} className={cn('py-20 lg:py-28', toneStyles[tone], className)}>
      {content}
    </section>
  )
}
