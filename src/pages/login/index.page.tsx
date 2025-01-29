import { ButtonAuth } from '@/src/components/ButtonAuth'
import { AuthButtons, Container, LoginForm } from '@/src/styles/pages/login'
import { RocketLaunch } from '@phosphor-icons/react/dist/ssr'

export default function Login() {
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
          />

          <ButtonAuth
            image_url="/images/icons/logo_github.svg"
            title="Entrar com Github"
          />

          <ButtonAuth
            icon={<RocketLaunch size={32} />}
            title="Acessar como visitante"
          />
        </AuthButtons>
      </LoginForm>
    </Container>
  )
}
