'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ExternalLink } from 'lucide-react'
import { mainNav, siteConfig } from '@/lib/site.config'
import { cn } from '@/lib/cn'

export function MobileMenu() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [lastPathname, setLastPathname] = useState(pathname)

  // Cerrar al navegar: ajustar estado en render evita el render extra de useEffect
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
        className="border-ink-600 grid h-11 w-11 place-items-center rounded-xl border text-slate-300 md:hidden"
      >
        {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
      </button>

      {open && (
        <div className="border-ink-600/70 bg-ink-950/95 absolute inset-x-0 top-16 border-t backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4 sm:px-6">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-lg px-4 py-3 text-sm transition-colors',
                  pathname === item.href
                    ? 'bg-brand-600/20 font-medium text-white'
                    : 'text-slate-400 hover:text-white',
                )}
              >
                {item.label}
              </Link>
            ))}

            <a
              href={siteConfig.exampleUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-brand-600 mt-3 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white"
            >
              Ver demo
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
