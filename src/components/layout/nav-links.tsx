'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { mainNav } from '@/lib/site.config'
import { cn } from '@/lib/cn'

export function NavLinks() {
  const pathname = usePathname()

  return (
    <div className="hidden items-center gap-1 md:flex">
      {mainNav.map((item) => {
        const isActive = pathname === item.href

        const estilos = cn(
          'rounded-lg px-4 py-2 text-sm transition-colors',
          isActive
            ? 'bg-brand-600/20 ring-brand-600/40 font-medium text-white ring-1'
            : 'text-slate-400 hover:text-white',
        )

        if ('external' in item && item.external) {
          return (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={estilos}
            >
              {item.label}
            </a>
          )
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
            className={estilos}
          >
            {item.label}
          </Link>
        )
      })}
    </div>
  )
}
