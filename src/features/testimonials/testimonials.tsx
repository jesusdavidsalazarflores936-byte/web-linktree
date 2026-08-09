import { Section, SectionHeading, TestimonialCard } from '@/components/ui'
import { testimonialsContent, testimonialsHeading } from './testimonials.content'

export function Testimonials() {
  return (
    <Section id="testimonios">
      <SectionHeading {...testimonialsHeading} />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {testimonialsContent.map((testimonial) => (
          <li key={testimonial.name}>
            <TestimonialCard {...testimonial} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
