import { Container, PageHero } from '@/components/ui'
import { ContactDetails, ContactForm, contactHeroContent } from '@/features/contact'
import { buildMetadata } from '@/lib/metadata'
import { routes } from '@/lib/site.config'

export const metadata = buildMetadata({
  title: 'Contacto',
  description:
    'Escríbenos y un especialista de MR.SOFT se pondrá en contacto contigo en menos de 24 horas hábiles.',
  path: routes.contact,
})

export default function ContactPage() {
  return (
    <>
      <PageHero {...contactHeroContent} className="border-b-0" />

      <Container className="pb-16 sm:pb-24">
        <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
    </>
  )
}
