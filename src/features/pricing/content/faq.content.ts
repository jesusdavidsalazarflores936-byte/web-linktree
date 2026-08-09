export interface FaqItem {
  question: string
  answer: string
}

export const faqContent = {
  title: 'Preguntas frecuentes',
  items: [
    {
      question: '¿Puedo cambiar de plan en cualquier momento?',
      answer:
        'Sí. Puedes actualizar o reducir tu plan desde el panel de configuración. El cambio se aplica en el siguiente ciclo de facturación.',
    },
    {
      question: '¿Hay un período de prueba gratuito?',
      answer:
        'Todos los planes incluyen 14 días de prueba gratuita. No se requiere tarjeta de crédito para comenzar.',
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer:
        'Aceptamos tarjetas de crédito y débito (Visa, Mastercard), transferencia bancaria y depósito en cuenta.',
    },
    {
      question: '¿Puedo cancelar en cualquier momento?',
      answer:
        'Sí, sin penalidades ni permanencias. Cancelas cuando quieras desde tu panel y no se genera ningún cobro adicional.',
    },
    {
      question: '¿El plan Enterprise incluye capacitación?',
      answer:
        'Sí. El plan Enterprise incluye sesiones de onboarding y capacitación personalizada para tu equipo.',
    },
    {
      question: '¿Puedo tener soporte en español?',
      answer:
        'Por supuesto. Todo nuestro equipo de soporte opera en español, con atención enfocada en empresas peruanas y latinoamericanas.',
    },
  ] satisfies readonly FaqItem[],
} as const
