import { medirWebpPublico } from '@/lib/medir-imagen'
import { linktreeExamples, type LinktreeExample } from './content/examples.content'

export interface EjemploMedido extends LinktreeExample {
  src: string
  width: number
  height: number
}

/**
 * Se ejecuta en el servidor durante el build. Si falta un archivo,
 * ese ejemplo se descarta en lugar de romper la página.
 */
export async function medirEjemplos(): Promise<EjemploMedido[]> {
  const medidos = await Promise.all(
    linktreeExamples.map(async (ejemplo) => {
      const ruta = `examples/${ejemplo.slug}.webp`
      const medidas = await medirWebpPublico(ruta)

      if (!medidas) {
        console.warn(`[showcase] Falta public/${ruta}`)
        return null
      }

      return { ...ejemplo, src: `/${ruta}`, ...medidas }
    }),
  )

  return medidos.filter((ejemplo): ejemplo is EjemploMedido => ejemplo !== null)
}
