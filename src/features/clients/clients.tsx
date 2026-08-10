import { Section, SectionHeading } from '@/components/ui'
import { ClientCard } from './client-card'
import { buscarLogos } from './buscar-logos'
import { clientsHeading } from './content/clients.content'

/** Segundos por tarjeta: mantiene la velocidad constante al añadir clientes. */
const SEGUNDOS_POR_TARJETA = 7

export async function Clients() {
  const conLogos = await buscarLogos()
  const duracion = conLogos.length * SEGUNDOS_POR_TARJETA

  return (
    <Section id="clientes">
      <SectionHeading {...clientsHeading} />

      <div
        className="desfile-contenedor relative mt-14 overflow-hidden"
        style={{ '--duracion-desfile': `${duracion}s` } as React.CSSProperties}
      >
        <div className="from-ink-900 pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r to-transparent" />
        <div className="from-ink-900 pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l to-transparent" />

        <ul className="desfile flex w-max gap-6 lg:gap-8">
          {[...conLogos, ...conLogos].map((client, indice) => (
            <li key={`${client.slug}-${indice}`} aria-hidden={indice >= conLogos.length}>
              <ClientCard client={client} indice={indice} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
