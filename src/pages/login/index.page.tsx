import { ButtonAuth } from '@/src/components/ButtonAuth'
import { AuthButtons, Container, LoginForm } from '@/src/styles/pages/login'
import { RocketLaunch } from '@phosphor-icons/react/dist/ssr'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

export default function Login() {
  const router = useRouter()

  const handleSignIn = useCallback(async (provider: string) => {
    await signIn(provider, { callbackUrl: '/' })
  }, [])

  return (
    <Container>
      <img src="/images/background-login.png" alt="" />
      <LoginForm>
        <h1>Boas vindas!</h1>
        <span>Faça seu login ou acesse como visitante</span>

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

          <ButtonAuth
            icon={<RocketLaunch size={32} />}
            title="Acessar como visitante"
            onClick={() => router.push('/')}
          />
        </AuthButtons>
      </LoginForm>
    </Container>
  )
}
