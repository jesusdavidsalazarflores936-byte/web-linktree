export interface Pieza3D {
  archivo: string
  alt: string
  /** Posición dentro del marco ampliado que rodea al teléfono, en porcentaje */
  arriba: string
  izquierda: string
  tamano: number
  /** Desplazamiento con el cursor: a mayor valor, más cerca parece */
  profundidad: number
  segundos: number
  retraso: number
}

/**
 * El contenedor se extiende 7rem a cada lado del teléfono, que ocupa el centro
 * (del 21% al 79%). Las piezas se quedan fuera de esa franja para no taparlo.
 */
export const piezas3D: readonly Pieza3D[] = [
  // Columna izquierda
  {
    archivo: 'qr',
    alt: 'Código QR',
    arriba: '2%',
    izquierda: '1%',
    tamano: 104,
    profundidad: 26,
    segundos: 6,
    retraso: 0,
  },
  {
    archivo: 'paleta',
    alt: 'Personalización de marca',
    arriba: '29%',
    izquierda: '7%',
    tamano: 66,
    profundidad: 12,
    segundos: 8,
    retraso: 2.1,
  },
  {
    archivo: 'folleto',
    alt: 'Folleto imprimible',
    arriba: '53%',
    izquierda: '0%',
    tamano: 92,
    profundidad: 30,
    segundos: 6.5,
    retraso: 1.2,
  },
  {
    archivo: 'grafico',
    alt: 'Analítica',
    arriba: '78%',
    izquierda: '5%',
    tamano: 80,
    profundidad: 18,
    segundos: 6.8,
    retraso: 1.8,
  },

  // Columna derecha
  {
    archivo: 'megafono',
    alt: 'Campañas',
    arriba: '1%',
    izquierda: '80%',
    tamano: 88,
    profundidad: 16,
    segundos: 7.2,
    retraso: 0.9,
  },
  {
    archivo: 'whatsapp',
    alt: 'WhatsApp',
    arriba: '27%',
    izquierda: '86%',
    tamano: 82,
    profundidad: 20,
    segundos: 7,
    retraso: 0.6,
  },
  {
    archivo: 'tienda',
    alt: 'Vitrina por sucursal',
    arriba: '52%',
    izquierda: '80%',
    tamano: 96,
    profundidad: 24,
    segundos: 7.5,
    retraso: 0.3,
  },
  {
    archivo: 'play',
    alt: 'Video integrado',
    arriba: '79%',
    izquierda: '85%',
    tamano: 74,
    profundidad: 22,
    segundos: 6.2,
    retraso: 1.5,
  },
]
