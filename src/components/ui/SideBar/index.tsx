import { useCallback } from 'react'

import { SignIn, SignOut } from '@phosphor-icons/react'
import { signOut, useSession } from 'next-auth/react'

import { Navigation } from '../Navigation'
import { LogInButton, SideBarContainer, SignOutButton } from './styles'

export const SideBar = () => {
  const { data: session, status } = useSession()

  const handleSignOut = useCallback(() => {
    signOut({ callbackUrl: '/login' })
  }, [])

  const isAuthenticated = session && status === 'authenticated'
  const userFirstName = session?.user?.name?.split(' ')[0] ?? ''
  const userAvatar = session?.user?.avatar_url ?? '/images/user.png'

  return (
    <SideBarContainer>
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
  )
}
