import { ChevronRight } from 'lucide-react'
import { ButtonLink, Container } from '@/components/ui'
import { pricingCtaContent } from './content/cta.content'

export function PricingCta() {
  return (
    <Container className="pb-16 sm:pb-24">
      <div className="border-brand-600/25 from-brand-600/10 rounded-2xl border bg-gradient-to-b to-transparent px-5 py-10 text-center sm:px-6 sm:py-12">
        <h2 className="text-xl font-bold sm:text-2xl">{pricingCtaContent.title}</h2>

        <p className="text-fg-muted mx-auto mt-3 max-w-xl text-sm leading-relaxed">
          {pricingCtaContent.description}
        </p>

        <ButtonLink href={pricingCtaContent.cta.href} className="mt-8">
          {pricingCtaContent.cta.label}
          <ChevronRight className="h-4 w-4" aria-hidden />
        </ButtonLink>
      </div>
    </Container>
  )
}
