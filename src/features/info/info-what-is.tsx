import { ExternalLink } from 'lucide-react'
import { ButtonLink, Container, RichText } from '@/components/ui'
import { whatIsBenefits, whatIsContent } from './content/what-is.content'

export function InfoWhatIs() {
  return (
    <Container className="py-12 sm:py-16 lg:py-20">
      <div className="border-brand-600/25 from-brand-600/10 to-ink-800/40 rounded-2xl border bg-gradient-to-br p-5 sm:p-7 lg:p-9">
        <div className="grid gap-9 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">{whatIsContent.title}</h2>

            <div className="mt-5 space-y-4">
              {whatIsContent.paragraphs.map((paragraph) => (
                <RichText
                  key={paragraph.slice(0, 32)}
                  text={paragraph}
                  className="text-fg-muted text-sm leading-relaxed"
                />
              ))}
            </div>

            <ButtonLink
              href={whatIsContent.cta.href}
              variant="ghost"
              external={whatIsContent.cta.external}
              className="mt-7"
            >
              {whatIsContent.cta.label}
              <ExternalLink className="h-4 w-4" aria-hidden />
            </ButtonLink>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {whatIsBenefits.map((benefit) => (
              <li
                key={benefit.title}
                className="border-ink-600/70 bg-ink-850/70 rounded-xl border p-5"
              >
                <benefit.icon
                  className="text-brand-300 mb-3 h-5 w-5"
                  strokeWidth={1.8}
                  aria-hidden
                />
                <h3 className="text-sm font-semibold">{benefit.title}</h3>
                <p className="text-fg-muted mt-2 text-xs leading-relaxed">{benefit.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  )
}
