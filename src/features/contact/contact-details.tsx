import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { Card, IconBadge } from '@/components/ui'
import { contactDetails, demoInviteContent, whatsappCta } from './content/details.content'

export function ContactDetails() {
  return (
    <div className="space-y-4">
      <a
        href={whatsappCta.href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 p-5 transition-colors hover:border-[#25D366]/60 hover:bg-[#25D366]/15"
      >
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#25D366] text-white">
          <IconoWhatsApp />
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-white">{whatsappCta.label}</span>
          <span className="text-fg-muted mt-0.5 block text-xs">{whatsappCta.note}</span>
        </span>
      </a>

      {contactDetails.map((detail) => {
        const body = (
          <>
            <IconBadge icon={detail.icon} tone={detail.tone} />
            <div className="min-w-0">
              <p className="text-fg-muted font-mono text-[11px] tracking-wider uppercase">
                {detail.label}
              </p>
              <p className="mt-1 font-semibold break-words">{detail.value}</p>
              <p className="text-fg-muted mt-0.5 text-xs">{detail.note}</p>
            </div>
          </>
        )

        return detail.href ? (
          <a key={detail.label} href={detail.href} className="block">
            <Card className="flex items-start gap-4">{body}</Card>
          </a>
        ) : (
          <Card key={detail.label} className="flex items-start gap-4">
            {body}
          </Card>
        )
      })}

      <div className="border-brand-600/30 from-brand-600/15 to-ink-800/50 rounded-2xl border bg-gradient-to-br p-6">
        <h2 className="text-sm font-semibold">{demoInviteContent.title}</h2>
        <p className="text-fg-muted mt-2 text-xs leading-relaxed">
          {demoInviteContent.description}
        </p>

        <Link
          href={demoInviteContent.cta.href}
          className="text-brand-300 hover:text-brand-200 mt-5 inline-flex items-center gap-1.5 py-1 text-sm font-semibold"
        >
          {demoInviteContent.cta.label}
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </div>
  )
}

function IconoWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.896 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
    </svg>
  )
}
