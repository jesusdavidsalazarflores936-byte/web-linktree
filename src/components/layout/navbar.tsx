import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { routes } from '@/lib/site.config'
import { Container } from '@/components/ui'
import { Logo } from './logo'
import { NavLinks } from './nav-links'
import { MobileMenu } from './mobile-menu'

/**
 * Cabecera del sitio. Se renderiza en el servidor; solo los enlaces
 * (que necesitan saber la ruta activa) y el menú móvil son cliente.
 */
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-600/40 bg-ink-950/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Principal">
          <Logo />
          <NavLinks />

          <div className="flex items-center gap-2">
            <Link
              href={routes.demo}
              className="hidden items-center gap-1.5 rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-500 sm:inline-flex"
            >
              Demo
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </Link>
            <MobileMenu />
          </div>
        </nav>
      </Container>
    </header>
  )
}
