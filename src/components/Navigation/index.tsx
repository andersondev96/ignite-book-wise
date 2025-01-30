import { ChartLineUp } from '@phosphor-icons/react/dist/ssr'
import { NavigationContainer, NavItemContainer } from './styles'
import { Binoculars, User } from '@phosphor-icons/react'

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavItemContainer href="/">
        <ChartLineUp size={20} />
        Início
      </NavItemContainer>
      <NavItemContainer href="/explore">
        <Binoculars size={20} />
        Explorar
      </NavItemContainer>
      <NavItemContainer href="/profile">
        <User size={20} />
        Perfil
      </NavItemContainer>
    </NavigationContainer>
  )
}
