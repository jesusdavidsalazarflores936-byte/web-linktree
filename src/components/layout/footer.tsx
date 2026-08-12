import Link from 'next/link'
import { siteConfig, footerNav } from '@/lib/site.config'
import { Container } from '@/components/ui'
import { Logo } from './logo'

export function Footer() {
  return (
    <footer className="border-ink-600/70 bg-ink-950 border-t">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="text-fg-muted mt-4 max-w-xs text-sm leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {footerNav.map((section) => (
            <div key={section.group}>
              <h2 className="mb-4 text-sm font-semibold text-slate-200">{section.group}</h2>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={`${section.group}-${link.label}`}>
                    {'href' in link && link.href ? (
                      <Link
                        href={link.href}
                        className="text-fg-muted hover:text-brand-300 inline-block py-1 text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <span className="text-fg-muted/60 inline-block py-1 text-sm">
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-ink-600/70 mt-12 flex flex-col gap-3 border-t pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-fg-muted font-mono text-xs">
            © {new Date().getFullYear()} {siteConfig.company}. Todos los derechos reservados.
            Lambayeque, Perú.
          </p>
          <p className="text-fg-muted font-mono text-xs">
            Hecho con <span className="text-brand-400">♥</span> para empresas que quieren crecer
          </p>
        </div>
      </Container>
    </footer>
  )
}
