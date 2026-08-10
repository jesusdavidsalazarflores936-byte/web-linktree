import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { ClienteConLogo } from './buscar-logos'

/** Formas alternas, como en las galerías de referencia: nunca dos iguales seguidas. */
const FORMAS = ['rounded-[2.5rem]', 'rounded-full', 'rounded-[1.5rem]'] as const

export function ClientCard({ client, indice }: { client: ClienteConLogo; indice: number }) {
  const forma = FORMAS[indice % FORMAS.length]

  return (
    <a
      href={client.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Ver la página de enlaces de ${client.name}`}
      className="volteo-grupo group block w-44 shrink-0 sm:w-56 lg:w-64"
      style={{ perspective: '1200px' }}
    >
      <div className="volteo relative aspect-square w-full">
        <div
          className={cn(
            'cara bg-ink-800 absolute inset-0 grid place-items-center overflow-hidden ring-1 ring-white/10',
            forma,
          )}
        >
          {client.logo ? (
            <Image
              src={client.logo}
              alt={client.name}
              width={256}
              height={256}
              sizes="256px"
              className="h-full w-full object-cover"
            />
          ) : (
            <span
              className={cn(
                'grid h-full w-full place-items-center bg-gradient-to-br text-3xl font-bold tracking-tight text-white/90',
                client.gradient,
              )}
              aria-hidden
            >
              {client.initials}
            </span>
          )}
        </div>

        <div
          className={cn(
            'cara cara-trasera from-brand-600 to-ink-900 absolute inset-0 flex flex-col items-center justify-center gap-1 bg-gradient-to-br p-6 text-center ring-1 ring-white/15',
            forma,
          )}
        >
          <p className="text-base font-semibold">{client.name}</p>
          <p className="font-mono text-[11px] text-white/60">{client.sector}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-white">
            Ver su página
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </span>
        </div>
      </div>
    </a>
  )
}
