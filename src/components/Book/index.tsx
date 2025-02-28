import * as Dialog from '@radix-ui/react-dialog'
import { Stars } from '../Stars'
import { BookInfo, BookName, Container } from './styles'
import { Modal } from '../ui/Modal'

interface BookSchema {
  id: string
  name: string
  author: string
  cover_url: string
  ratings: {
    rate: number
  }
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
            <Stars quantity={book.ratings.rate} />
          </BookInfo>
        </Container>
      </Dialog.Trigger>
      <Modal />
    </Dialog.Root>
  )
}
