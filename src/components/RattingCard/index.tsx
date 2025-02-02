import { Stars } from '../Stars'
import { Container, Header } from './styles'

export const RattingCard = () => {
  return (
    <Container>
      <Header>
        <img src="" alt="" />
        <strong>Brandon Botosh</strong>
        <span>Há 2 dias</span>
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
