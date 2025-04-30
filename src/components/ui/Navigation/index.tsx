import path from 'path'

import { useMemo } from 'react'

import { Binoculars, User } from '@phosphor-icons/react'
import { ChartLineUp } from '@phosphor-icons/react/dist/ssr'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { NavigationContainer, NavItemContainer } from './styles'

export const Navigation = () => {
  const { status, data } = useSession()
  const { pathname } = useRouter()

  const menu = useMemo(
    () => [
      {
        title: 'Início',
        icon: <ChartLineUp />,
        href: '/',
        permission: 'public',
      },
      {
        title: 'Explorar',
        icon: <Binoculars />,
        href: '/explore',
        permission: 'public',
      },
      {
        title: 'Perfil',
        icon: <User />,
        href: `/profile/${data?.user.id}`,
        permission: 'private',
      },
    ],
    [data?.user],
  )

  const isAuthenticated = status === 'authenticated'

  return (
    <NavigationContainer>
      {menu.map((item) => {
        const isAccessible = item.permission === 'public' || isAuthenticated
        const isActive =
          pathname.startsWith(`/profile`) && item.href.startsWith('/profile')
            ? true
            : path.join('/', item.href) === pathname

        if (!isAccessible) {
          return null
        }

        return (
          <NavItemContainer key={item.href} href={item.href} active={isActive}>
            {item.icon}
            {item.title}
          </NavItemContainer>
        )
      })}
    </NavigationContainer>
  )
}
