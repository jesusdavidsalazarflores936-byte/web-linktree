import { Container, TestimonialCard } from '@/components/ui'
import { infoTestimonialsContent } from './content/testimonials.content'

export function InfoTestimonials() {
  return (
    <Container className="pb-24">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
        Lo que dicen nuestros clientes
      </h2>

      <ul className="mt-12 grid gap-5 md:grid-cols-3">
        {infoTestimonialsContent.map((testimonial) => (
          <li key={testimonial.name}>
            <TestimonialCard {...testimonial} withAvatar />
          </li>
        ))}
      </ul>
    </Container>
  )
}
