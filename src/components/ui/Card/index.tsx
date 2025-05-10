import { useCallback, useState } from 'react'

import {
  Book as PrismaBook,
  User as PrismaUser,
  Rating as PrismaRating,
} from '@prisma/client'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useRouter } from 'next/router'
import 'dayjs/locale/pt-br'

import {
  AuthorInfo,
  AuthorSection,
  BookCardContainer,
  BookInfoContent,
  BookInfoSection,
  Text,
} from './styles'
import { Avatar } from '../Avatar'
import { Stars } from '../Stars'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

type RatingComponentProps = {
  rating: PrismaRating & {
    book: PrismaBook
    user: PrismaUser
    book_id: string
    user_id: string
  }
}

export const Card = ({ rating }: RatingComponentProps) => {
  const router = useRouter()
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSelectedBook = useCallback(
    (bookId: string) => {
      router.push(`/explore?bookId=${bookId}`)
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
              imageUrl={rating.user.avatar_url ?? ''}
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
