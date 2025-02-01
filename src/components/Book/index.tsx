import { Stars } from '../Stars'
import { BookInfo, BookName, Container } from './styles'

export const Book = () => {
  return (
    <Container>
      <img src="./images/books/arquitetura-limpa.png" alt="" />
      <BookInfo>
        <BookName>
          <strong>A revolução dos bichos</strong>
          <span>George Orwell</span>
        </BookName>
        <Stars quantity={4} />
      </BookInfo>
    </Container>
  )
}
