import { Card, Container } from '@/components/ui'
import { faqContent } from './content/faq.content'

export function PricingFaq() {
  return (
    <Container className="pb-14 sm:pb-20">
      <h2 className="text-center text-[1.75rem] font-bold tracking-tight sm:text-4xl">
        {faqContent.title}
      </h2>

      <dl className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2">
        {faqContent.items.map((item) => (
          <Card key={item.question}>
            <dt className="text-sm font-semibold">{item.question}</dt>
            <dd className="text-fg-muted mt-3 text-sm leading-relaxed">{item.answer}</dd>
          </Card>
        ))}
      </dl>
    </Container>
  )
}
