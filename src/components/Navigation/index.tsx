import { ChartLineUp } from '@phosphor-icons/react/dist/ssr'
import { NavigationContainer, NavItemContainer } from './styles'
import { Binoculars, User } from '@phosphor-icons/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import path from 'path'

const menu = [
  { title: 'Início', icon: <ChartLineUp />, href: '/', permission: 'public' },
  {
    title: 'Explorar',
    icon: <Binoculars />,
    href: '/explore',
    permission: 'public',
  },
  { title: 'Perfil', icon: <User />, href: '/profile', permission: 'private' },
]

export const Navigation = () => {
  const { status } = useSession()
  const { pathname } = useRouter()

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
