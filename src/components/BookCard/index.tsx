import { useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'

import {
  AuthorInfo,
  AuthorSection,
  Avatar,
  BookCardContainer,
  BookInfoContent,
  BookInfoSection,
  Text,
} from './styles'
import { Stars } from '../Stars'

dayjs.extend(relativeTime)

interface Rating {
  id: string
  rate: number
  description: string
  created_at: string
  book_id: string
  user_id: string
  book: {
    id: string
    name: string
    author: string
    summary: string
    cover_url: string
    created_at: string
  }
  user: {
    id: string
    name: string
    avatar_url: string
  }
}

interface BookCardProps {
  rating: Rating
}

export const BookCard = ({ rating }: BookCardProps) => {
  const [expanded, setExpanded] = useState(false)

  const safeDescription = rating.description ?? ''

  return (
    <BookCardContainer>
      <AuthorSection>
        {rating.user && (
          <AuthorInfo href={`/profile/${rating.user.id}`}>
            <Avatar>
              <img src={rating.user.avatar_url} alt={rating.user.name} />
            </Avatar>
            <div>
              <span>{rating.user.name}</span>
              <p>{dayjs().locale('pt-br').from(dayjs(rating.created_at))}</p>
            </div>
          </AuthorInfo>
        )}
        <Stars rate={rating.rate} />
      </AuthorSection>
      <BookInfoSection>
        <img
          src={rating.book.cover_url.replace('public', '')}
          alt={rating.book.name}
        />
        <BookInfoContent>
          <strong>{rating.book.name}</strong>
          <span>{rating.book.author}</span>

          <Text>
            {safeDescription && typeof safeDescription === 'string' ? (
              expanded || safeDescription.length <= 100 ? (
                safeDescription
              ) : (
                <>
                  {safeDescription.slice(0, 100) + '...'}{' '}
                  <span onClick={() => setExpanded(true)}>ver mais</span>
                </>
              )
            ) : (
              ''
            )}
          </Text>
        </BookInfoContent>
      </BookInfoSection>
    </BookCardContainer>
  )
}
