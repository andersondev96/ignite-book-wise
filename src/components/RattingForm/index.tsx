import { Check, X } from '@phosphor-icons/react'
import { Stars } from '../Stars'
import { TextArea } from '../TextArea'
import { Button, Container, Footer, Form, Header, UserInfo } from './styles'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

interface User {
  id: string
  name: string | null
  email: string | null
  avatar_url: string | null
}

export const RattingForm = () => {
  const { data, status } = useSession()
  const [user, setUser] = useState<User>()

  useEffect(() => {
    if (status === 'authenticated' && data.user) {
      setUser(data.user)
    }
  }, [data?.user, status])

  return (
    <Container>
      <Header>
        <UserInfo>
          <img src={user?.avatar_url ?? ''} alt={user?.name ?? ''} />
          <span>{user?.name}</span>
        </UserInfo>
        <Stars quantity={0} />
      </Header>
      <Form>
        <TextArea placeholder="Escreva a sua avaliação" />
      </Form>
      <Footer>
        <Button>
          <X size={24} color="#8381D9" />
        </Button>
        <Button>
          <Check size={24} color="#50B2C0" />
        </Button>
      </Footer>
    </Container>
  )
}
