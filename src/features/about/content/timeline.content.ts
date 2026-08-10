export interface Milestone {
  year: string
  description: string
}

export const timelineContent = {
  title: 'Nuestra trayectoria',
  milestones: [
    {
      year: '2013',
      description:
        'Fundación de MR.SOFT en Lima con foco en desarrollo de software a medida para el mercado peruano',
    },
    {
      year: '2016',
      description:
        'Expansión del equipo y primeros proyectos para medianas y grandes empresas en el sector retail y servicios',
    },
    {
      year: '2019',
      description:
        'Lanzamiento de la primera versión de MR.SOFT Tree, plataforma de gestión de enlaces empresariales',
    },
    {
      year: '2021',
      description:
        'Primeras empresas usando la plataforma en producción, con códigos QR y material impreso en sus locales',
    },
    {
      year: '2023',
      description:
        'Panel administrativo v2.0: analíticas por enlace, control de usuarios y personalización sin escribir código',
    },
    {
      year: '2025',
      description:
        'Módulo Vitrinas, catálogos y video dentro de la página, y modelo por módulos: cada empresa paga solo lo que usa',
    },
  ] satisfies readonly Milestone[],
} as const
