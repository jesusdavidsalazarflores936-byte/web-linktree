import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { linktreeExamples, type LinktreeExample } from './content/examples.content'

export interface EjemploMedido extends LinktreeExample {
  src: string
  width: number
  height: number
}

/** Lee ancho y alto de la cabecera de un WebP sin cargar la imagen entera. */
function medirWebp(datos: Buffer): { width: number; height: number } | null {
  if (datos.toString('ascii', 0, 4) !== 'RIFF' || datos.toString('ascii', 8, 12) !== 'WEBP') {
    return null
  }

  const formato = datos.toString('ascii', 12, 16)

  if (formato === 'VP8X') {
    return {
      width: 1 + datos.readUIntLE(24, 3),
      height: 1 + datos.readUIntLE(27, 3),
    }
  }

  if (formato === 'VP8 ') {
    return {
      width: datos.readUInt16LE(26) & 0x3fff,
      height: datos.readUInt16LE(28) & 0x3fff,
    }
  }

  if (formato === 'VP8L') {
    const bits = datos.readUInt32LE(21)
    return {
      width: (bits & 0x3fff) + 1,
      height: ((bits >> 14) & 0x3fff) + 1,
    }
  }

  return null
}

/**
 * Se ejecuta en el servidor durante el build. Si falta un archivo o está
 * corrupto, ese ejemplo se descarta en lugar de romper la página.
 */
export async function medirEjemplos(): Promise<EjemploMedido[]> {
  const medidos = await Promise.all(
    linktreeExamples.map(async (ejemplo) => {
      const ruta = join(process.cwd(), 'public', 'examples', `${ejemplo.slug}.webp`)

      try {
        const medidas = medirWebp(await readFile(ruta))
        if (!medidas) throw new Error('formato no reconocido')

        return { ...ejemplo, src: `/examples/${ejemplo.slug}.webp`, ...medidas }
      } catch {
        console.warn(`[showcase] No se pudo leer public/examples/${ejemplo.slug}.webp`)
        return null
      }
    }),
  )

  return medidos.filter((ejemplo): ejemplo is EjemploMedido => ejemplo !== null)
}
