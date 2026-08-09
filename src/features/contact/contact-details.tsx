import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { Card, IconBadge } from '@/components/ui'
import { contactDetails, demoInviteContent } from './content/details.content'

export function ContactDetails() {
  return (
    <div className="space-y-4">
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
