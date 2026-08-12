import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export interface Medidas {
  width: number
  height: number
}

/** Lee ancho y alto de la cabecera de un WebP, sin decodificar la imagen. */
function leerCabeceraWebp(datos: Buffer): Medidas | null {
  if (datos.toString('ascii', 0, 4) !== 'RIFF' || datos.toString('ascii', 8, 12) !== 'WEBP') {
    return null
  }

  const formato = datos.toString('ascii', 12, 16)

  if (formato === 'VP8X') {
    return { width: 1 + datos.readUIntLE(24, 3), height: 1 + datos.readUIntLE(27, 3) }
  }

  if (formato === 'VP8 ') {
    return { width: datos.readUInt16LE(26) & 0x3fff, height: datos.readUInt16LE(28) & 0x3fff }
  }

  if (formato === 'VP8L') {
    const bits = datos.readUInt32LE(21)
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 }
  }

  return null
}

/**
 * Mide un WebP de la carpeta public durante el build.
 * Devuelve null si falta o no se puede leer, para no romper la página.
 */
export async function medirWebpPublico(rutaRelativa: string): Promise<Medidas | null> {
  try {
    return leerCabeceraWebp(await readFile(join(process.cwd(), 'public', rutaRelativa)))
  } catch {
    return null
  }
}
