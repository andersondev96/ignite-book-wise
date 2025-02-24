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

interface BookCardProps {
  name: string
  avatar_url: string
  rating_date: string
  rate: number
  book_cover_url: string
  book_name: string
  book_author: string
  book_description: string
}

export const BookCard = ({
  name,
  avatar_url,
  rating_date,
  rate,
  book_cover_url,
  book_name,
  book_author,
  book_description,
}: BookCardProps) => {
  const [expanded, setExpanded] = useState(false)

  const safeDescription = book_description ?? ''

  return (
    <BookCardContainer>
      <AuthorSection>
        <AuthorInfo>
          <Avatar>
            <img src={avatar_url} alt={name} />
          </Avatar>
          <div>
            <span>{name}</span>
            <p>{dayjs().locale('pt-br').from(dayjs(rating_date))}</p>
          </div>
        </AuthorInfo>
        <Stars quantity={rate} />
      </AuthorSection>
      <BookInfoSection>
        <img src={book_cover_url} alt={book_name} />
        <BookInfoContent>
          <strong>{book_name}</strong>
          <span>{book_author}</span>

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
