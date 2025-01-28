import { SignIn } from '@phosphor-icons/react'
import { Navigation } from '../Navigation'
import { LogInButton, SideBarContainer } from './styles'

export const SideBar = () => {
  return (
    <SideBarContainer>
      <div>
        <img className="logo" src="/logo.png" alt="BookWise Logo" />
        <Navigation />
      </div>

      <footer>
        <LogInButton href="/login">
          Fazer Login
          <SignIn size={20} />
        </LogInButton>
      </footer>
    </SideBarContainer>
  )
}
