import { Check, X } from '@phosphor-icons/react'
import { Stars } from '../Stars'
import { TextArea } from '../TextArea'
import { Button, Container, Footer, Form, Header, UserInfo } from './styles'

export const RattingForm = () => {
  return (
    <Container>
      <Header>
        <UserInfo>
          <img src="./images/user.jpg" alt="" />
          <span>Cristofer Rosser</span>
        </UserInfo>
        <Stars quantity={0} />
      </Header>
      <Form>
        <TextArea />
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
