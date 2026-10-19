/** true = incluido · false = no incluido · texto = se muestra tal cual */
export type ComparisonValue = boolean | string

export interface ComparisonRow {
  feature: string
  values: readonly [ComparisonValue, ComparisonValue, ComparisonValue]
}

export const comparisonContent = {
  title: 'Qué incluye cada plan',
  columns: ['Free', 'Básico', 'Premium'],
  /** Columna destacada (la del plan recomendado) */
  featuredColumn: 1,
  rows: [
    {
      feature: 'Administración de tu página',
      values: ['Alta inicial', 'Configuración completa', 'Te lo administramos todo'],
    },
    { feature: 'Páginas', values: ['1', '1', 'Ilimitadas (vitrinas)'] },
    { feature: 'Enlaces', values: ['Hasta 7', 'Ilimitados', 'Ilimitados'] },
    { feature: 'Redes sociales', values: ['Hasta 4', '+20', '+20'] },
    { feature: 'WhatsApp con mensaje precargado', values: [true, true, true] },
    { feature: 'Códigos QR', values: ['PNG de tu página', 'PNG y SVG, cada enlace', '+ por sucursal'] },
    { feature: 'Folleto A4', values: ['Automático', 'Diseñado con tu marca', 'Por sucursal y campaña'] },
    { feature: 'Portada', values: ['Solo logo', 'Banner único', 'Inmersiva + carrusel'] },
    { feature: 'Analítica', values: [false, 'Clics', 'Clics, vistas y CTR'] },
    { feature: 'Diseño', values: ['Colores y contraste', '+ brillo y estilos', 'Motor completo'] },
    { feature: 'Carruseles de banner', values: ['1 de 2 slides', '1 de 3 slides', 'Ilimitados'] },
    { feature: 'Catálogo, galerías y video', values: [false, 'Versión inicial', 'Ilimitados'] },
    { feature: 'Plantillas', values: ['Clásica', '+ Perfil profesional', 'Todas'] },
    { feature: 'Sello "Hecho con MR.SOFT Tree"', values: ['Visible', 'Sin sello', 'Sin sello'] },
  ] satisfies readonly ComparisonRow[],
} as const
