import { Star } from 'lucide-react'
import { cn } from '@/lib/cn'

/** Fila de estrellas de valoración. */
export function Stars({ count = 5, className }: { count?: number; className?: string }) {
  return (
    <div className={cn('flex gap-0.5 text-amber-400', className)} role="img" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: count }, (_, index) => (
        <Star key={index} className="h-4 w-4 fill-amber-400" aria-hidden />
      ))}
    </div>
  )
}
