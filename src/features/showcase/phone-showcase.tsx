'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PHONE_ASPECT, PhoneFrame } from '@/components/mockups/phone-frame'
import { cn } from '@/lib/cn'
import { Inclinacion3D } from './inclinacion-3d'
import type { EjemploMedido } from './medir-ejemplos'

/** Segundos que tarda en recorrer una pantalla de contenido. */
const SEGUNDOS_POR_PANTALLA = 7

export function PhoneShowcase({
  ejemplos,
  className,
}: {
  ejemplos: readonly EjemploMedido[]
  className?: string
}) {
  const pista = useRef<HTMLDivElement>(null)
  const [activo, setActivo] = useState(0)

  function irA(indice: number) {
    const destino = (indice + ejemplos.length) % ejemplos.length
    const contenedor = pista.current
    if (!contenedor) return

    contenedor.scrollTo({ left: contenedor.clientWidth * destino, behavior: 'smooth' })
    setActivo(destino)
  }

  function alDesplazar() {
    const contenedor = pista.current
    if (!contenedor) return

    const indice = Math.round(contenedor.scrollLeft / contenedor.clientWidth)
    if (indice !== activo) setActivo(indice)
  }

  const actual = ejemplos[activo]

  return (
    <div className={cn('mx-auto w-full max-w-[300px]', className)}>
      <Inclinacion3D>
        <PhoneFrame>
          <div
            ref={pista}
            onScroll={alDesplazar}
            className="sin-barra flex h-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden"
          >
            {ejemplos.map((ejemplo, indice) => {
              // Alto de la imagen medido en pantallas del teléfono
              const pantallas = (ejemplo.height / ejemplo.width) * PHONE_ASPECT
              // Cuánto hay que subirla para que su pie coincida con el del marco
              const recorrido = 1 - 1 / pantallas

              return (
                <div key={ejemplo.slug} className="relative h-full w-full shrink-0 snap-center">
                  <Image
                    src={ejemplo.src}
                    alt={`Página de enlaces de ${ejemplo.name}`}
                    width={ejemplo.width}
                    height={ejemplo.height}
                    sizes="300px"
                    priority={indice === 0}
                    className="cinematica w-full"
                    style={
                      {
                        '--desplazamiento': `-${(recorrido * 100).toFixed(3)}%`,
                        '--duracion': `${Math.round(pantallas * SEGUNDOS_POR_PANTALLA)}s`,
                      } as React.CSSProperties
                    }
                  />
                </div>
              )
            })}
          </div>
        </PhoneFrame>
      </Inclinacion3D>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => irA(activo - 1)}
          aria-label="Ejemplo anterior"
          className="border-ink-600 text-fg-muted hover:border-brand-600/60 grid h-11 w-11 place-items-center rounded-full border transition-colors hover:text-white"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
        </button>

        <div className="min-w-[9rem] text-center">
          <p className="text-sm font-semibold">{actual?.name}</p>
          <p className="text-fg-muted font-mono text-[11px]">{actual?.sector}</p>
        </div>

        <button
          type="button"
          onClick={() => irA(activo + 1)}
          aria-label="Ejemplo siguiente"
          className="border-ink-600 text-fg-muted hover:border-brand-600/60 grid h-11 w-11 place-items-center rounded-full border transition-colors hover:text-white"
        >
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {ejemplos.map((ejemplo, indice) => (
          <button
            key={ejemplo.slug}
            type="button"
            onClick={() => irA(indice)}
            aria-label={`Ver ${ejemplo.name}`}
            aria-current={indice === activo}
            className={cn(
              'h-1.5 rounded-full transition-all',
              indice === activo ? 'bg-brand-500 w-6' : 'bg-ink-600 hover:bg-ink-700 w-1.5',
            )}
          />
        ))}
      </div>
    </div>
  )
}
