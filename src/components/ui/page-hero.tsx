import { Container } from './container'
import { SectionHeading } from './heading'
import { cn } from '@/lib/cn'

/**
 * Cabecera de las páginas internas: halo de color + titular centrado.
 * Unifica el arranque visual de Nosotros, Información, Precios y Contacto.
 */
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
    <section className={cn('relative overflow-hidden border-b border-ink-600/50', className)}>
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full blur-[130px]',
          tone === 'mint' ? 'bg-mint-500/10' : 'bg-brand-600/15',
        )}
      />

      <Container className="relative py-20 lg:py-24">
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
