import { useCallback } from 'react'

import { RocketLaunch } from '@phosphor-icons/react/dist/ssr'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

import { ButtonAuth } from '@/src/components/ButtonAuth'
import { AuthButtons, Container, LoginForm } from '@/src/styles/pages/login'

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

export default function Login() {
  const router = useRouter()

  const handleSignIn = useCallback(async (provider: string) => {
    await signIn(provider, { callbackUrl: '/' })
  }, [])

  const handleGuestAccess = useCallback(() => {
    router.push('/')
  }, [router])

  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>
      <Container>
        <img src="/images/background-login.png" alt="Plano de fundo do login" />

        <LoginForm>
          <h1>Boas vindas!</h1>
          <span>Faça seu login ou acesse como visitante</span>

          <AuthButtons>
            {providers.map(({ provider, icon, title }) => (
              <ButtonAuth
                key={provider}
                imageUrl={icon}
                title={title}
                onClick={async () => await handleSignIn(provider)}
              />
            ))}

            <ButtonAuth
              icon={<RocketLaunch size={32} />}
              title="Acessar como visitante"
              onClick={handleGuestAccess}
            />
          </AuthButtons>
        </LoginForm>
      </Container>
    </>
  )
}
