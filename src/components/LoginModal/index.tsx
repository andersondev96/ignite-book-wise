import { useCallback } from 'react'

import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { signIn } from 'next-auth/react'

import { ButtonAuth } from '../ButtonAuth'
import {
  AuthButtons,
  CloseButton,
  Content,
  LoginContent,
  Overlay,
} from './styles'

const providers = [
  {
    provider: 'google',
    icon: '/images/icons/logo_google.svg',
    title: 'Entrar com Google',
  },
  {
    provider: 'github',
    icon: '/images/icons/logo_github.svg',
    title: 'Entrar com Github',
  },
]

export const LoginModal = () => {
  const handleSignIn = useCallback(async (provider: string) => {
    await signIn(provider, { callbackUrl: '/' })
  }, [])

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={21} />
        </CloseButton>

        <LoginContent>
          <span>Faça login para deixar sua avaliação</span>

          <AuthButtons>
            {providers.map(({ provider, icon, title }) => (
              <ButtonAuth
                key={provider}
                imageUrl={icon}
                title={title}
                onClick={async () => await handleSignIn(provider)}
              />
            ))}
          </AuthButtons>
        </LoginContent>
      </Content>
    </Dialog.Portal>
  )
}
