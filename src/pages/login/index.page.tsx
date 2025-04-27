import { useCallback } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ButtonAuth } from '@/src/components/ButtonAuth'
import { RocketLaunch } from '@phosphor-icons/react/dist/ssr'
import { AuthButtons, Container, LoginForm } from '@/src/styles/pages/login'

export default function Login() {
  const router = useRouter()

  const handleSignIn = useCallback(async (provider: string) => {
    await signIn(provider, { callbackUrl: '/' })
  }, [])

  const handleGuestAccess = useCallback(() => {
    router.push('/')
  }, [router])

  return (
    <Container>
      <title>Login</title>
      <img src="/images/background-login.png" alt="Plano de fundo do login" />

      <LoginForm>
        <h1>Boas vindas!</h1>
        <span>Faça seu login ou acesse como visitante</span>

        <AuthButtons>
          <ButtonAuth
            imageUrl="/images/icons/logo_google.svg"
            title="Entrar com Google"
            onClick={async () => await handleSignIn('google')}
          />

          <ButtonAuth
            imageUrl="/images/icons/logo_github.svg"
            title="Entrar com Github"
            onClick={async () => await handleSignIn('github')}
          />

          <ButtonAuth
            icon={<RocketLaunch size={32} />}
            title="Acessar como visitante"
            onClick={handleGuestAccess}
          />
        </AuthButtons>
      </LoginForm>
    </Container>
  )
}
