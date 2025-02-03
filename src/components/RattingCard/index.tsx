import { Stars } from '../Stars'
import { Container, Header, User } from './styles'

export const RattingCard = () => {
  return (
    <Container>
      <Header>
        <User>
          <img src="" alt="" />
          <div>
            <strong>Brandon Botosh</strong>
            <span>Há 2 dias</span>
          </div>
        </User>
        <Stars />
      </Header>

      <p>
        Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
        Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta
        eget nec vitae sit vulputate eget
      </p>
    </Container>
  )
}
