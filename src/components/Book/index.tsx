import { Book as PrismaBook } from '@prisma/client'
import * as Dialog from '@radix-ui/react-dialog'

import { ModalBookDetails } from '../ModalBookDetails'
import { BookInfo, BookName, Container } from './styles'
import { Stars } from '../ui/Stars'

type BookComponentProps = {
  book: PrismaBook & {
    avgRating: number
  }
}

export const Book = ({ book }: BookComponentProps) => {
  const imageUrl = book.cover_url.replace('public', '')

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Container>
          <img src={imageUrl} alt={book.name} />
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
