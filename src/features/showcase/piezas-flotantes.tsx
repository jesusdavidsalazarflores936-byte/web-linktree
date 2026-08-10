'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { piezas3D } from './content/piezas-3d.content'

/**
 * Piezas decorativas alrededor del teléfono. Cada una se desplaza con el cursor
 * en proporción a su profundidad, lo que crea la sensación de capas.
 * Solo en pantallas grandes con ratón: en móvil no caben ni hay cursor.
 */
export function PiezasFlotantes() {
  const contenedor = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elemento = contenedor.current
    if (!elemento) return

    const conRaton = window.matchMedia('(min-width: 1280px) and (pointer: fine)')
    const movimientoReducido = window.matchMedia('(prefers-reduced-motion: reduce)')

    let cuadroPendiente = 0

    function alMover(evento: MouseEvent) {
      if (cuadroPendiente) return

      cuadroPendiente = requestAnimationFrame(() => {
        cuadroPendiente = 0
        const desdeCentroX = evento.clientX / window.innerWidth - 0.5
        const desdeCentroY = evento.clientY / window.innerHeight - 0.5

        elemento?.style.setProperty('--raton-x', desdeCentroX.toFixed(3))
        elemento?.style.setProperty('--raton-y', desdeCentroY.toFixed(3))
      })
    }

    function activar() {
      window.removeEventListener('mousemove', alMover)

      if (!conRaton.matches || movimientoReducido.matches) {
        elemento?.style.setProperty('--raton-x', '0')
        elemento?.style.setProperty('--raton-y', '0')
        return
      }

      window.addEventListener('mousemove', alMover, { passive: true })
    }

    activar()
    conRaton.addEventListener('change', activar)
    movimientoReducido.addEventListener('change', activar)

    return () => {
      cancelAnimationFrame(cuadroPendiente)
      window.removeEventListener('mousemove', alMover)
      conRaton.removeEventListener('change', activar)
      movimientoReducido.removeEventListener('change', activar)
    }
  }, [])

  return (
    <div
      ref={contenedor}
      aria-hidden
      className="pointer-events-none absolute -inset-x-28 -inset-y-6 hidden xl:block"
      style={{ '--raton-x': 0, '--raton-y': 0 } as React.CSSProperties}
    >
      {piezas3D.map((pieza) => (
        <div
          key={pieza.archivo}
          className="absolute transition-transform duration-500 ease-out"
          style={{
            top: pieza.arriba,
            left: pieza.izquierda,
            transform: `translate(calc(var(--raton-x) * ${pieza.profundidad}px), calc(var(--raton-y) * ${pieza.profundidad}px))`,
          }}
        >
          <div
            className="flota"
            style={
              {
                '--flotacion': `${pieza.segundos}s`,
                '--retraso': `${pieza.retraso}s`,
              } as React.CSSProperties
            }
          >
            <Image
              src={`/3d/${pieza.archivo}.webp`}
              alt={pieza.alt}
              width={pieza.tamano}
              height={pieza.tamano}
              sizes={`${pieza.tamano}px`}
              className="drop-shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
