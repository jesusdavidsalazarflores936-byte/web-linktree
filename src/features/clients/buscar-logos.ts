import { access } from 'node:fs/promises'
import { join } from 'node:path'
import { clients, type Client } from './content/clients.content'

export interface ClienteConLogo extends Client {
  /** Ruta del logo, o null si aún no se ha subido */
  logo: string | null
}

/**
 * Comprueba en el build qué clientes ya tienen su logo en public/logos.
 * Los que no lo tengan muestran sus iniciales, sin romper nada.
 */
export async function buscarLogos(): Promise<ClienteConLogo[]> {
  return Promise.all(
    clients.map(async (client) => {
      const ruta = join(process.cwd(), 'public', 'logos', `${client.slug}.webp`)

      try {
        await access(ruta)
        return { ...client, logo: `/logos/${client.slug}.webp` }
      } catch {
        return { ...client, logo: null }
      }
    }),
  )
}
