import { RatingsProps } from '@/src/pages/profile/[profileId]/index.page'

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
import { Stars } from '../Stars'

dayjs.extend(relativeTime)

interface RatedBooksProfileInterface {
  rate: RatingsProps
}
export const RatedBooksProfile = ({ rate }: RatedBooksProfileInterface) => {
  return (
    <Container>
      <span>{dayjs().locale('pt-br').from(dayjs(rate.created_at))}</span>
      <BookCard>
        <BookInfo>
          <img
            src={rate.book.cover_url.replace('public', '')}
            alt={rate.book.name}
          />
          <DetailsBook>
            <TitleAndActorBook>
              <strong>{rate.book.name}</strong>
              <span>{rate.book.author}</span>
            </TitleAndActorBook>
            <Stars rate={rate.rate} />
          </DetailsBook>
        </BookInfo>
        <p>{rate.book.summary}</p>
      </BookCard>
    </Container>
  )
}
