'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/cn'

/** Giro máximo en grados a cada lado. Por encima de 10 cuesta leer la captura. */
const MAX_Y = 8
const MAX_X = 4

/** Postura cuando el cursor no está en la ventana. */
const REPOSO_Y = -6
const REPOSO_X = 2

const PERSPECTIVA = 1400

/**
 * Inclina a sus hijos siguiendo al cursor. Se activa solo en pantallas
 * grandes con ratón: en táctil no hay cursor y el espacio horizontal es justo.
 */
export function Inclinacion3D({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const referencia = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elemento = referencia.current
    if (!elemento) return

    const conRaton = window.matchMedia('(min-width: 1024px) and (pointer: fine)')
    const movimientoReducido = window.matchMedia('(prefers-reduced-motion: reduce)')

    let cuadroPendiente = 0

    function aplicar(giroY: number, giroX: number) {
      if (!elemento) return
      elemento.style.transform = `perspective(${PERSPECTIVA}px) rotateY(${giroY.toFixed(2)}deg) rotateX(${giroX.toFixed(2)}deg)`
    }

    function volverAReposo() {
      aplicar(REPOSO_Y, REPOSO_X)
    }

    function alMover(evento: MouseEvent) {
      if (cuadroPendiente || !elemento) return

      cuadroPendiente = requestAnimationFrame(() => {
        cuadroPendiente = 0

        const caja = elemento.getBoundingClientRect()
        const desdeCentroX = (evento.clientX - (caja.left + caja.width / 2)) / (caja.width * 1.5)
        const desdeCentroY = (evento.clientY - (caja.top + caja.height / 2)) / (caja.height * 0.9)

        const limitar = (valor: number) => Math.max(-1, Math.min(1, valor))

        // Signo invertido en Y para que el lado más cercano al cursor se acerque
        aplicar(-limitar(desdeCentroX) * MAX_Y, limitar(desdeCentroY) * MAX_X)
      })
    }

    function activar() {
      if (!conRaton.matches || movimientoReducido.matches) {
        if (elemento) elemento.style.transform = ''
        window.removeEventListener('mousemove', alMover)
        window.removeEventListener('mouseleave', volverAReposo)
        return
      }

      volverAReposo()
      window.addEventListener('mousemove', alMover, { passive: true })
      window.addEventListener('mouseleave', volverAReposo)
    }

    activar()
    conRaton.addEventListener('change', activar)
    movimientoReducido.addEventListener('change', activar)

    return () => {
      cancelAnimationFrame(cuadroPendiente)
      window.removeEventListener('mousemove', alMover)
      window.removeEventListener('mouseleave', volverAReposo)
      conRaton.removeEventListener('change', activar)
      movimientoReducido.removeEventListener('change', activar)
    }
  }, [])

  return (
    <div
      ref={referencia}
      className={cn('transition-transform duration-300 ease-out will-change-transform', className)}
    >
      {children}
    </div>
  )
}
