'use client'

import {
  DashboardSidebar,
  DashboardSidebarHeader,
  DashboardSidebarMain,
  DashboardSidebarNav,
  DashboardSidebarNavMain,
  DashboardSidebarNavLink,
  DashboardSidebarNavHeader,
  DashboardSidebarNavHeaderTitle,
  DashboardSidebarFooter,
} from '@/components/dashboard/sidebar'
import { usePathname } from 'next/navigation'
import { HomeIcon, MixerVerticalIcon, LightningBoltIcon, EnvelopeClosedIcon, ExclamationTriangleIcon, CubeIcon, HeartFilledIcon } from '@radix-ui/react-icons'
import { UserDropdown } from './user-dropdown'
import { Logo } from '@/components/logo'
import { Session } from 'next-auth'

type MainSidebarProps = {
  user: Session['user']
}

export function MainSidebar({ user }: MainSidebarProps) {
  const pathname = usePathname()
  const isActive = (path: string) => {
    return pathname === path
  }

  if (!user) return

  return (
    <DashboardSidebar>
      <DashboardSidebarHeader>
        <Logo />
      </DashboardSidebarHeader>
      <DashboardSidebarMain className="flex flex-col flex-grow">
        <DashboardSidebarNav>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="/app" active={isActive('/app')}>
              <HomeIcon className="w-3 h-3 mr-3" />
              Início
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/app/settings"
              active={isActive('/app/settings')}
            >
              <MixerVerticalIcon className="w-3 h-3 mr-3" />
              Configurações
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/app/pricing"
              active={isActive('/app/pricing')}
            >
              <LightningBoltIcon className="w-3 h-3 mr-3" />
              Seu plano
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href=""
              active={isActive('#')}
            >
              <CubeIcon className="w-3 h-3 mr-3" />
              Trilhas de aprendizado
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href=""
              active={isActive('#')}
            >
              <HeartFilledIcon className="w-3 h-3 mr-3" />
              Plano de estudo personalizado
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/app/pendingActivities"
              active={isActive('/app/pendingActivities')}
            >
              <ExclamationTriangleIcon className="w-3 h-3 mr-3" />
              Atividades Pendentes
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href=""
              active={isActive('#')}
            >
              <EnvelopeClosedIcon className="w-3 h-3 mr-3" />
              Caixa de mensagens
            </DashboardSidebarNavLink>

          </DashboardSidebarNavMain>
        </DashboardSidebarNav>
        <DashboardSidebarNav className="mt-auto">
          <DashboardSidebarNavHeader>
            <DashboardSidebarNavHeaderTitle>
              Links Extras
            </DashboardSidebarNavHeaderTitle>
          </DashboardSidebarNavHeader>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="/">
              Precisa de ajuda?
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink href="/">Site</DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>
      </DashboardSidebarMain>
      <DashboardSidebarFooter>
        <UserDropdown user={user} />
      </DashboardSidebarFooter>
    </DashboardSidebar>
  )
}
