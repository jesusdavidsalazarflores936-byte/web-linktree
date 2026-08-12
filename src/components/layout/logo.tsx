import Link from 'next/link'
import Image from 'next/image'
import { routes } from '@/lib/site.config'
import { cn } from '@/lib/cn'

export function Logo({ className }: { className?: string }) {
  return (
    <Link href={routes.home} className={cn('group flex items-center gap-2.5', className)}>
      <Image
        src="/logo.webp"
        alt=""
        width={36}
        height={36}
        priority
        className="h-9 w-9 object-contain transition-transform group-hover:scale-105"
      />
      <span className="text-lg font-bold tracking-tight">
        MR.<span className="text-brand-400">SOFT</span>
        <span className="ml-1 font-medium text-slate-200">Tree</span>
      </span>
      <span className="sr-only">Ir al inicio</span>
    </Link>
  )
}
