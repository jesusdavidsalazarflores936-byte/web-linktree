import { ExternalLink } from 'lucide-react'
import { siteConfig } from '@/lib/site.config'
import { Container } from '@/components/ui'
import { Logo } from './logo'
import { NavLinks } from './nav-links'
import { MobileMenu } from './mobile-menu'

export function Navbar() {
  return (
    <header className="border-ink-600/40 bg-ink-950/80 sticky top-0 z-50 border-b backdrop-blur-xl">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Principal">
          <Logo />
          <NavLinks />

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.exampleUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-brand-600 shadow-glow hover:bg-brand-500 hidden items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition sm:inline-flex"
            >
              Demo
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
            <MobileMenu />
          </div>
        </nav>
      </Container>
    </header>
  )
}
