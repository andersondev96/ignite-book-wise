import { BookCard } from '../BookCard'
import { MyBooksContainer } from './styles'

export const MyBooks = () => {
  return (
    <MyBooksContainer>
      <span>Avaliações mais recentes</span>
      <div>
        <BookCard />
      </div>
    </MyBooksContainer>
  )
}
