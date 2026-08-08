import Link from 'next/link'
import { siteConfig, footerNav } from '@/lib/site.config'
import { Container } from '@/components/ui'
import { Logo } from './logo'

export function Footer() {
  return (
    <footer className="border-t border-ink-600/70 bg-ink-950">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo withProduct />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-muted">
              {siteConfig.tagline}
            </p>
          </div>

          {footerNav.map((section) => (
            <div key={section.group}>
              <h2 className="mb-4 text-sm font-semibold text-slate-200">{section.group}</h2>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={`${section.group}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-fg-muted transition-colors hover:text-brand-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-600/70 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="font-mono text-xs text-fg-muted">
            © {new Date().getFullYear()} {siteConfig.company}. Todos los derechos reservados. Lima,
            Perú.
          </p>
          <p className="font-mono text-xs text-fg-muted">
            Hecho con <span className="text-brand-400">♥</span> para empresas que quieren crecer
          </p>
        </div>
      </Container>
    </footer>
  )
}
