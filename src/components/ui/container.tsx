import { cn } from '@/lib/cn'

/**
 * Ancho máximo y padding horizontal consistentes en todo el sitio.
 * Es el único sitio donde se define el ancho de la página.
 */
export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8', className)}>{children}</div>
  )
}
