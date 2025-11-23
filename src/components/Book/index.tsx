import { Book as PrismaBook } from '@prisma/client'
import { BookImage, BookInfo, BookName, Container } from './styles'
import { Stars } from '../ui/Stars'

type BookComponentProps = {
  book: PrismaBook & { avgRating: number }
  onOpen?: (id: string) => void
}

export const Book = ({ book, onOpen }: BookComponentProps) => {
  const imageUrl = book.cover_url.replace('public', '')
  return (
    <Container
      tabIndex={0}
      role="button"
      aria-label={`Ver detalhes do livro ${book.name}`}
      title={`Ver detalhes do livro ${book.name}`}
      onClick={() => onOpen?.(book.id)}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') onOpen?.(book.id)
      }}
    >
      <BookImage
        src={imageUrl}
        alt={`Capa do livro: ${book.name}`}
        loading="lazy"
        width={108}
        height={152}
        draggable={false}
      />
      <BookInfo>
        <BookName>
          <strong>{book.name}</strong>
          <span>{book.author}</span>
        </BookName>
        <Stars rate={book.avgRating} aria-label={`Nota média: ${book.avgRating}`} />
      </BookInfo>
    </Container>
  )
}
