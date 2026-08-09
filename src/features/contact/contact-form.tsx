'use client'

import { useState } from 'react'
import { AlertCircle, Check, Loader2, Send } from 'lucide-react'
import { Button, Field, Input, Select, Surface, Textarea } from '@/components/ui'
import { siteConfig } from '@/lib/site.config'
import { contactFormContent } from './content/form.content'
import {
  buildMailtoUrl,
  emptyContactForm,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from './contact.validation'

type Status = 'idle' | 'sending' | 'success' | 'error'

const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? ''
const { fields, reasons, success } = contactFormContent

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(emptyContactForm)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  function update(field: keyof ContactFormValues) {
    return (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
      if (errors[field]) {
        setErrors((current) => ({ ...current, [field]: undefined }))
      }
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const found = validateContactForm(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('sending')

    if (!endpoint) {
      window.location.href = buildMailtoUrl(values, siteConfig.contact.email)
      setValues(emptyContactForm)
      setStatus('success')
      return
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })

      if (!response.ok) throw new Error(String(response.status))

      setValues(emptyContactForm)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <Surface className="flex min-h-[420px] flex-col items-center justify-center p-6 text-center lg:p-8">
        <span className="bg-mint-500/15 text-mint-400 ring-mint-500/25 grid h-14 w-14 place-items-center rounded-full ring-1">
          <Check className="h-7 w-7" aria-hidden />
        </span>

        <h2 className="mt-6 text-xl font-bold">{success.title}</h2>
        <p className="text-fg-muted mt-3 max-w-sm text-sm leading-relaxed">{success.description}</p>

        <Button type="button" variant="ghost" className="mt-8" onClick={() => setStatus('idle')}>
          {success.again}
        </Button>
      </Surface>
    )
  }

  return (
    <Surface className="p-6 lg:p-8">
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label={fields.nombre.label} htmlFor="nombre" required error={errors.nombre}>
            <Input
              id="nombre"
              name="nombre"
              autoComplete="name"
              placeholder={fields.nombre.placeholder}
              value={values.nombre}
              onChange={update('nombre')}
              invalid={Boolean(errors.nombre)}
              aria-describedby={errors.nombre ? 'nombre-error' : undefined}
            />
          </Field>

          <Field label={fields.email.label} htmlFor="email" required error={errors.email}>
            <Input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder={fields.email.placeholder}
              value={values.email}
              onChange={update('email')}
              invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
          </Field>

          <Field label={fields.empresa.label} htmlFor="empresa">
            <Input
              id="empresa"
              name="empresa"
              autoComplete="organization"
              placeholder={fields.empresa.placeholder}
              value={values.empresa}
              onChange={update('empresa')}
            />
          </Field>

          <Field label={fields.telefono.label} htmlFor="telefono" error={errors.telefono}>
            <Input
              id="telefono"
              name="telefono"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder={fields.telefono.placeholder}
              value={values.telefono}
              onChange={update('telefono')}
              invalid={Boolean(errors.telefono)}
              aria-describedby={errors.telefono ? 'telefono-error' : undefined}
            />
          </Field>
        </div>

        <Field label={fields.motivo.label} htmlFor="motivo">
          <Select id="motivo" name="motivo" value={values.motivo} onChange={update('motivo')}>
            <option value="">{fields.motivo.placeholder}</option>
            {reasons.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </Select>
        </Field>

        <Field label={fields.mensaje.label} htmlFor="mensaje" required error={errors.mensaje}>
          <Textarea
            id="mensaje"
            name="mensaje"
            rows={6}
            placeholder={fields.mensaje.placeholder}
            value={values.mensaje}
            onChange={update('mensaje')}
            invalid={Boolean(errors.mensaje)}
            aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
          />
        </Field>

        {status === 'error' && (
          <p
            role="alert"
            className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
          >
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden />
            {contactFormContent.error} {siteConfig.contact.email}.
          </p>
        )}

        <Button type="submit" fullWidth disabled={status === 'sending'}>
          {status === 'sending' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              {contactFormContent.sending}
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden />
              {contactFormContent.submit}
            </>
          )}
        </Button>

        <p className="text-fg-muted text-center text-xs leading-relaxed">
          {contactFormContent.legal}
        </p>
      </form>
    </Surface>
  )
}
