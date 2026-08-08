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
        'Más de 200 clientes activos en Lima, Arequipa y Trujillo. Primer reconocimiento como empresa tecnológica innovadora',
    },
    {
      year: '2023',
      description:
        'Panel administrativo v2.0 con analíticas avanzadas, multi-usuario y personalización total sin código',
    },
    {
      year: '2025',
      description:
        'Más de 500 empresas peruanas confían en MR.SOFT Tree para gestionar su presencia digital',
    },
  ] satisfies readonly Milestone[],
} as const
