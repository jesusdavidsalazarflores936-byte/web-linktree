import Link from 'next/link'
import { Link2 } from 'lucide-react'
import { routes } from '@/lib/site.config'
import { cn } from '@/lib/cn'

export function Logo({ withProduct = false, className }: { withProduct?: boolean; className?: string }) {
  return (
    <Link href={routes.home} className={cn('group flex items-center gap-2.5', className)}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-glow transition-transform group-hover:scale-105">
        <Link2 className="h-4 w-4 text-white" strokeWidth={2} aria-hidden />
      </span>
      <span className="text-lg font-bold tracking-tight">
        MR.<span className="text-brand-400">SOFT</span>
        {withProduct && <span className="ml-1 font-medium text-slate-200">Tree</span>}
      </span>
      <span className="sr-only">Ir al inicio</span>
    </Link>
  )
}
