'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ExternalLink } from 'lucide-react'
import { mainNav, routes } from '@/lib/site.config'
import { cn } from '@/lib/cn'

/** Botón hamburguesa + panel desplegable. Se cierra al cambiar de ruta. */
export function MobileMenu() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [lastPathname, setLastPathname] = useState(pathname)

  // Cerrar el menú al navegar. Ajustar estado durante el render es el patrón
  // recomendado por React frente a un useEffect: evita un render extra.
  if (pathname !== lastPathname) {
    setLastPathname(pathname)
    setOpen(false)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        className="grid h-10 w-10 place-items-center rounded-xl border border-ink-600 text-slate-300 md:hidden"
      >
        {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-16 border-t border-ink-600/70 bg-ink-950/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4 sm:px-6">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-lg px-4 py-2.5 text-sm transition-colors',
                  pathname === item.href
                    ? 'bg-brand-600/20 font-medium text-white'
                    : 'text-slate-400 hover:text-white',
                )}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={routes.demo}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white"
            >
              Ver demo
              <ExternalLink className="h-4 w-4" aria-hidden />
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
