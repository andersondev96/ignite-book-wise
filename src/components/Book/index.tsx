import * as Dialog from '@radix-ui/react-dialog'
import { Stars } from '../Stars'
import { BookInfo, BookName, Container } from './styles'
import { ModalBookDetails } from '../ui/ModalBookDetails'

interface BookSchema {
  id: string
  name: string
  author: string
  cover_url: string
  avgRating: number
}

interface BookProps {
  book: BookSchema
}

export const Book = ({ book }: BookProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Container>
          <img src={book.cover_url.replace('public', '')} alt={book.name} />
          <BookInfo>
            <BookName>
              <strong>{book.name}</strong>
              <span>{book.author}</span>
            </BookName>
            <Stars rate={book.avgRating} />
          </BookInfo>
        </Container>
      </Dialog.Trigger>
      <ModalBookDetails id={book.id} />
    </Dialog.Root>
  )
}
