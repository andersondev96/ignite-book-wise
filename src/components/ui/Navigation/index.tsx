import path from 'path'

import { Binoculars, User } from '@phosphor-icons/react'
import { ChartLineUp } from '@phosphor-icons/react/dist/ssr'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { NavigationContainer, NavItemContainer } from './styles'

export const Navigation = () => {
  const { status, data } = useSession()
  const { pathname } = useRouter()

  const menu = [
    { title: 'Início', icon: <ChartLineUp />, href: '/', permission: 'public' },
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
  ]

  console.log(pathname)

  return (
    <NavigationContainer>
      {menu.map((item, key) => {
        if (item.permission === 'public' || status === 'authenticated') {
          return (
            <NavItemContainer
              key={key}
              href={item.href}
              active={path.join('/', item.href) === pathname}
            >
              {item.icon}
              {item.title}
            </NavItemContainer>
          )
        }
        return null
      })}
    </NavigationContainer>
  )
}
