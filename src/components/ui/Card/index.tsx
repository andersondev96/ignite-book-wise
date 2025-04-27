import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'

import {
  AuthorInfo,
  AuthorSection,
  BookCardContainer,
  BookInfoContent,
  BookInfoSection,
  Text,
} from './styles'
import { Stars } from '../Stars'
import { Avatar } from '../Avatar'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

interface Book {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  created_at: string
}

interface User {
  id: string
  name: string
  avatar_url: string
}

interface Rating {
  id: string
  rate: number
  description: string
  created_at: string
  book_id: string
  user_id: string
  book: Book
  user: User
}

interface BookCardProps {
  rating: Rating
}

export const Card = ({ rating }: BookCardProps) => {
  const router = useRouter()
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSelectedBook = useCallback(
    (bookId: string) => {
      router.push(`explore?bookId=${bookId}`)
    },
    [router],
  )

  const formattedDate = dayjs(rating.created_at).fromNow()

  const truncatedDescription = (text: string) =>
    text.length > 100 && !isExpanded ? `${text.slice(0, 100)}... ` : text

  return (
    <BookCardContainer>
      <AuthorSection>
        {rating.user && (
          <AuthorInfo href={`/profile/${rating.user.id}`}>
            <Avatar
              imageUrl={rating.user.avatar_url}
              imageName={rating.user.name}
              size="small"
            />

            <div>
              <span>{rating.user.name}</span>
              <p>{formattedDate}</p>
            </div>
          </AuthorInfo>
        )}
        <Stars rate={rating.rate} />
      </AuthorSection>

      <BookInfoSection>
        <img
          src={rating.book.cover_url.replace('public', '')}
          alt={rating.book.name}
          onClick={() => handleSelectedBook(rating.book.id)}
        />
        <BookInfoContent>
          <strong>{rating.book.name}</strong>
          <span>{rating.book.author}</span>

          <Text>
            {truncatedDescription(rating.description)}
            {!isExpanded && rating.description.length > 100 && (
              <span onClick={() => setIsExpanded(true)}>ver mais</span>
            )}
          </Text>
        </BookInfoContent>
      </BookInfoSection>
    </BookCardContainer>
  )
}
