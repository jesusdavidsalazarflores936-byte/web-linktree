export const contactFormContent = {
  fields: {
    nombre: { label: 'Nombre completo', placeholder: 'Juan García' },
    email: { label: 'Email de contacto', placeholder: 'juan@empresa.com' },
    empresa: { label: 'Empresa u organización', placeholder: 'Nombre de tu empresa' },
    telefono: { label: 'Teléfono / WhatsApp', placeholder: '+51 9XX XXX XXX' },
    motivo: { label: 'Motivo de contacto', placeholder: 'Selecciona una opción' },
    mensaje: {
      label: 'Mensaje',
      placeholder: 'Cuéntanos sobre tu empresa y cómo podemos ayudarte...',
    },
  },
  reasons: [
    'Quiero contratar un plan',
    'Solicitar una demo personalizada',
    'Consulta sobre precios',
    'Soporte técnico',
    'Alianzas o partnership',
    'Otro',
  ],
  submit: 'Enviar mensaje',
  sending: 'Enviando...',
  legal:
    'Al enviar aceptas nuestra política de privacidad. Tus datos están protegidos y no serán compartidos con terceros.',
  success: {
    title: '¡Mensaje enviado!',
    description:
      'Gracias por escribirnos. Un especialista de MR.SOFT te responderá en menos de 24 horas hábiles.',
    again: 'Enviar otro mensaje',
  },
  error: 'No pudimos enviar el mensaje. Escríbenos directamente a',
} as const
