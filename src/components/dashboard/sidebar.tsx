import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

export type DashboardSideBarGenericProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

export function DashboardSidebar({ className, children }: DashboardSideBarGenericProps) {
  return (
    <aside
      className={cn([
        'border-r border-border flex flex-col space-y-6 bg-slate-300',
        className,
      ])}
    >
      {children}
    </aside>
  )
}

export function DashboardSidebarHeader({ className, children }: DashboardSideBarGenericProps) {
  return (
    <header className={cn(['px-6 py-3 border-b border-border', className])}>
      {children}
    </header>
  )
}

export function DashboardSidebarMain({ className, children }: DashboardSideBarGenericProps) {
  return <main className={cn(['px-3', className])}>{children}</main>
}

export function DashboardSidebarNav({ className, children }: DashboardSideBarGenericProps) {
  return <nav className={cn(['', className])}>{children}</nav>
}

export function DashboardSidebarNavHeader({
  className,
  children,
}: DashboardSideBarGenericProps) {
  return <header className={cn(['', className])}>{children}</header>
}

export function DashboardSidebarNavHeaderTitle({
  className,
  children,
}: DashboardSideBarGenericProps) {
  return (
    <div
      className={cn([
        'text-xs uppercase text-muted-foreground ml-3',
        className,
      ])}
    >
      {children}
    </div>
  )
}

export function DashboardSidebarNavMain({ className, children }: DashboardSideBarGenericProps) {
  return <main className={cn(['flex flex-col', className])}>{children}</main>
}

type SiderbarNavLinkProps = {
  href: string
  active?: boolean
}
export function DashboardSidebarNavLink({
  className,
  children,
  href,
  active,
}: DashboardSideBarGenericProps) {
  return (
    <Link
      href={href}
      className={cn([
        'flex items-center text-xs px-3 py-2 rounded-md ',
        active && 'bg-secondary',
        className,
      ])}
    >
      {children}
    </Link>
  )
}

export function DashboardSidebarFooter({ className, children }: DashboardSideBarGenericProps) {
  return (
    <footer className={cn(['p-6 mt-auto border-t border-border', className])}>
      {children}
    </footer>
  )
}
