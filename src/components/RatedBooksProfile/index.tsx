import { RatingsProps } from '@/src/pages/profile/[id].page'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
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

interface RatedBooksProfileInterface {
  rate: RatingsProps
}
export const RatedBooksProfile = ({ rate }: RatedBooksProfileInterface) => {
  const { book, created_at } = rate
  const timeAgo = dayjs(created_at).fromNow()
  const coverUrl = book.cover_url.replace('public', '')

  return (
    <Container>
      <span>{timeAgo}</span>
      <BookCard>
        <BookInfo>
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
