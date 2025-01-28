import { Container, Title } from './styles'
import { CaretRight } from '@phosphor-icons/react'
import { BookCard } from '../BookCard'

export const LastReading = () => {
  return (
    <Container>
      <Title>
        <span>Sua última leitura</span>
        <a href="#">
          Ver todas
          <CaretRight size={16} />
        </a>
      </Title>
      <BookCard />
    </Container>
  )
}
