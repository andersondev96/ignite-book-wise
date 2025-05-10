import { useCallback } from 'react'

import { Book as PrismaBook, Rating as PrismaRating } from '@prisma/client'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useRouter } from 'next/router'
import 'dayjs/locale/pt-br'

import {
  BookInfo,
  Container,
  BookCard,
  DetailsBook,
  TitleAndActorBook,
} from './styles'
import { Stars } from '../ui/Stars'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

type RatingSchema = PrismaRating & {
  book: PrismaBook
}

interface RatedBooksProfileProps {
  rate: RatingSchema
}
export const RatedBooksProfile = ({ rate }: RatedBooksProfileProps) => {
  const { book, created_at } = rate
  const timeAgo = dayjs(created_at).fromNow()
  const coverUrl = book.cover_url.replace('public', '')

  const router = useRouter()

  const handleSelectedBook = useCallback(
    (bookId: string) => {
      router.push(`/explore?bookId=${bookId}`)
    },
    [router],
  )

  return (
    <Container>
      <span>{timeAgo}</span>
      <BookCard>
        <BookInfo onClick={() => handleSelectedBook(book.id)}>
          <img src={coverUrl} alt={book.name} />
          <DetailsBook>
            <TitleAndActorBook>
              <strong>{book.name}</strong>
              <span>{book.author}</span>
            </TitleAndActorBook>
            <Stars rate={rate.rate} />
          </DetailsBook>
        </BookInfo>
        <p>{book.summary}</p>
      </BookCard>
    </Container>
  )
}
