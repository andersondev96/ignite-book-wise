import { SignIn, SignOut } from '@phosphor-icons/react'
import { Navigation } from '../Navigation'
import { LogInButton, SideBarContainer, SignOutButton } from './styles'
import { signOut, useSession } from 'next-auth/react'
import { useCallback } from 'react'

export const SideBar = () => {
  const { data: session, status } = useSession()

  const handleSignOut = useCallback(async () => {
    await signOut({ callbackUrl: '/login' })
  }, [])

  return (
    <SideBarContainer>
      <div>
        <img className="logo" src="/logo.png" alt="BookWise Logo" />
        <Navigation />
      </div>

      <footer>
        {session && status === 'authenticated' ? (
          <SignOutButton>
            <img src={session.user.avatar_url ?? '/images/user.png'} alt="" />
            <span>{session.user?.name?.split(' ')[0]}</span>
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
