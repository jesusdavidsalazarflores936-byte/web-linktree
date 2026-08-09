export interface ContactFormValues {
  nombre: string
  email: string
  empresa: string
  telefono: string
  motivo: string
  mensaje: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

export const emptyContactForm: ContactFormValues = {
  nombre: '',
  email: '',
  empresa: '',
  telefono: '',
  motivo: '',
  mensaje: '',
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE = /^[+\d\s()-]{6,20}$/
const MIN_MESSAGE = 10

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!values.nombre.trim()) {
    errors.nombre = 'Ingresa tu nombre completo.'
  }

  if (!values.email.trim()) {
    errors.email = 'Ingresa un email de contacto.'
  } else if (!EMAIL.test(values.email.trim())) {
    errors.email = 'El email no tiene un formato válido.'
  }

  if (values.telefono.trim() && !PHONE.test(values.telefono.trim())) {
    errors.telefono = 'El teléfono no parece válido.'
  }

  if (!values.mensaje.trim()) {
    errors.mensaje = 'Cuéntanos brevemente en qué podemos ayudarte.'
  } else if (values.mensaje.trim().length < MIN_MESSAGE) {
    errors.mensaje = `El mensaje debe tener al menos ${MIN_MESSAGE} caracteres.`
  }

  return errors
}

/** Respaldo cuando no hay endpoint: abre el correo del visitante con el mensaje redactado. */
export function buildMailtoUrl(values: ContactFormValues, to: string): string {
  const subject = `[Web] ${values.motivo || 'Consulta'} — ${values.nombre}`
  const body = [
    `Nombre: ${values.nombre}`,
    `Email: ${values.email}`,
    `Empresa: ${values.empresa || '—'}`,
    `Teléfono: ${values.telefono || '—'}`,
    `Motivo: ${values.motivo || '—'}`,
    '',
    values.mensaje,
  ].join('\n')

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
