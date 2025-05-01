import { useCallback, useState } from 'react'

import { List, SignIn, SignOut, X } from '@phosphor-icons/react'
import { signOut, useSession } from 'next-auth/react'

import { useMediaQuery } from '@/src/hooks/useMediaQuery'

import { Navigation } from '../Navigation'
import {
  LogInButton,
  SideBarContainer,
  SignOutButton,
  MobileMenuButton,
  MobileOverlay,
  MobileHeader,
} from './styles'

export const SideBar = () => {
  const { data: session, status } = useSession()
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  const [isOpen, setIsOpen] = useState(false)

  const handleToggleMenu = () => setIsOpen(!isOpen)
  const handleSignOut = useCallback(() => {
    signOut({ callbackUrl: '/login' })
  }, [])

  const isAuthenticated = session && status === 'authenticated'
  const userFirstName = session?.user?.name?.split(' ')[0] ?? ''
  const userAvatar = session?.user?.avatar_url ?? '/images/user.png'

  return (
    <>
      {!isDesktop && !isOpen && (
        <MobileHeader>
          <MobileMenuButton onClick={handleToggleMenu}>
            <List size={24} />
          </MobileMenuButton>
        </MobileHeader>
      )}

      <SideBarContainer open={isOpen || isDesktop}>
        {!isDesktop && isOpen && (
          <div className="close-button">
            <MobileMenuButton onClick={handleToggleMenu}>
              <X size={24} />
            </MobileMenuButton>
          </div>
        )}

        <div>
          <img className="logo" src="/logo.png" alt="BookWise Logo" />
          <Navigation />
        </div>

        <footer>
          {isAuthenticated ? (
            <SignOutButton>
              <img src={userAvatar} alt={userFirstName} />
              <span>{userFirstName}</span>
              <SignOut size={20} onClick={handleSignOut} />
            </SignOutButton>
          ) : (
            <LogInButton href="/login">
              Fazer Login
              <SignIn size={20} />
            </LogInButton>
          )}
        </footer>
      </SideBarContainer>

      {!isDesktop && isOpen && <MobileOverlay onClick={handleToggleMenu} />}
    </>
  )
}
