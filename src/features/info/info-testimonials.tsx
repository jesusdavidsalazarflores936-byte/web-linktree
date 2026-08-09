import { Container, TestimonialCard } from '@/components/ui'
import { infoTestimonialsContent } from './content/testimonials.content'

export function InfoTestimonials() {
  return (
    <Container className="pb-24">
      <h2 className="text-center text-[1.75rem] font-bold tracking-tight sm:text-4xl">
        Lo que dicen nuestros clientes
      </h2>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
        {infoTestimonialsContent.map((testimonial) => (
          <li key={testimonial.name}>
            <TestimonialCard {...testimonial} withAvatar />
          </li>
        ))}
      </ul>
    </Container>
  )
}
