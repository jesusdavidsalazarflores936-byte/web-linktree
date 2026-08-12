'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/cn'
import { modulosPanel } from './content/modulos.content'
import type { Medidas } from '@/lib/medir-imagen'
import type { MedidasPorModulo } from './medir-modulos'

/** Proporción del marco donde se muestran las capturas. */
const MARCO = 16 / 9

/** Segundos que tarda en recorrer una pantalla de contenido. */
const SEGUNDOS_POR_PANTALLA = 6

/** Alto de la captura medido en pantallas del marco */
const pantallas = (m: Medidas) => (m.height / m.width) * MARCO

/** Cuánto hay que subirla para que su pie coincida con el del marco */
const recorrido = (m: Medidas) => 1 - 1 / pantallas(m)

export function PanelTabs({ medidas }: { medidas: MedidasPorModulo }) {
  const [activo, setActivo] = useState(0)
  const modulo = modulosPanel[activo] ?? modulosPanel[0]

  if (!modulo) return null

  return (
    <div>
      <div className="sin-barra -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <div role="tablist" aria-label="Módulos del panel" className="flex w-max gap-2 sm:w-auto">
          {modulosPanel.map((item, indice) => {
            const seleccionado = indice === activo

            return (
              <button
                key={item.slug}
                type="button"
                role="tab"
                aria-selected={seleccionado}
                aria-controls={`panel-${item.slug}`}
                onClick={() => setActivo(indice)}
                className={cn(
                  'inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm transition-colors',
                  seleccionado
                    ? 'bg-brand-600/20 text-brand-200 ring-brand-600/40 font-medium ring-1'
                    : 'text-fg-muted hover:bg-ink-800 hover:text-slate-200',
                )}
              >
                <item.icon className="h-4 w-4" aria-hidden />
                {item.tab}
              </button>
            )
          })}
        </div>
      </div>

      <div
        id={`panel-${modulo.slug}`}
        role="tabpanel"
        className="border-ink-600/70 bg-ink-850/60 mt-6 overflow-hidden rounded-2xl border"
      >
        <div className="border-ink-600/60 flex items-center gap-3 border-b px-4 py-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="bg-mint-400/70 h-2.5 w-2.5 rounded-full" />
          </div>
          <p className="bg-ink-900/80 text-fg-muted flex-1 truncate rounded-lg px-3 py-1 font-mono text-[11px]">
            panel.mrsoft-tree.com
          </p>
        </div>

        {/* En móvil la captura conserva su tamaño y se desplaza en horizontal:
            encogida al ancho del teléfono, el texto del panel sería ilegible. */}
        {/* Las seis se montan a la vez: así el navegador las descarga cuando la
            sección entra en pantalla y cambiar de pestaña es instantáneo. */}
        <div className="bg-ink-900/60 sin-barra overflow-x-auto p-3 sm:p-5 lg:overflow-visible">
          <div className="ring-ink-600/60 relative h-[240px] w-[427px] overflow-hidden rounded-lg ring-1 sm:h-[300px] sm:w-[533px] lg:aspect-video lg:h-auto lg:w-full">
            {modulosPanel.map((item, indice) => {
              const visible = indice === activo
              const medida = medidas[item.slug] ?? null
              const recorre = item.recorrido && medida

              const comun = {
                src: `/panel/${item.slug}.webp`,
                sizes: '(max-width: 1024px) 533px, 900px',
              }
              const alt = `Panel de administración — ${item.tab}`

              return (
                <div
                  key={item.slug}
                  aria-hidden={!visible}
                  className={cn(
                    'absolute inset-0 overflow-hidden transition-opacity duration-300',
                    visible ? 'opacity-100' : 'pointer-events-none opacity-0',
                  )}
                >
                  {recorre && medida ? (
                    <Image
                      {...comun}
                      alt={alt}
                      width={medida.width}
                      height={medida.height}
                      className={cn('absolute inset-x-0 top-0 w-full', visible && 'cinematica')}
                      style={
                        {
                          '--desplazamiento': `-${(recorrido(medida) * 100).toFixed(3)}%`,
                          '--duracion': `${Math.round(pantallas(medida) * SEGUNDOS_POR_PANTALLA)}s`,
                        } as React.CSSProperties
                      }
                    />
                  ) : (
                    <Image {...comun} alt={alt} fill className="object-cover" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <p className="text-fg-muted border-ink-600/60 border-t px-5 py-2 font-mono text-[11px] lg:hidden">
          Desliza la imagen para verla completa →
        </p>

        <div className="border-ink-600/60 border-t p-5 sm:p-6">
          <h3 className="text-base font-semibold">{modulo.title}</h3>
          <p className="text-fg-muted mt-1.5 text-sm leading-relaxed">{modulo.description}</p>
        </div>
      </div>
    </div>
  )
}
