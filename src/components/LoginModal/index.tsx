import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import {
  AuthButtons,
  CloseButton,
  Content,
  LoginContent,
  Overlay,
} from './styles'
import { useCallback } from 'react'
import { signIn } from 'next-auth/react'
import { ButtonAuth } from '../ButtonAuth'

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
            <ButtonAuth
              image_url="/images/icons/logo_google.svg"
              title="Entrar com Google"
              onClick={async () => await handleSignIn('google')}
            />

            <ButtonAuth
              image_url="/images/icons/logo_github.svg"
              title="Entrar com Github"
              onClick={async () => await handleSignIn('github')}
            />
          </AuthButtons>
        </LoginContent>
      </Content>
    </Dialog.Portal>
  )
}
