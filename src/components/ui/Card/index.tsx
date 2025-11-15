import { memo, useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'

import { Avatar } from '../Avatar'
import { Stars } from '../Stars'
import {
  AuthorInfo,
  AuthorSection,
  BookCardContainer,
  BookDescription,
  BookImageWrapper,
  BookInfoContent,
  BookTitleSection,
  CardContentWrapper,
  ExpandButton,
  StarsWrapper,
  UserInfo,
} from './styles'

import type { CardProps } from './types'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

const DESCRIPTION_LIMIT = 200

export const Card = memo(({ rating, type, role }: CardProps) => {
  const router = useRouter()
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSelectedBook = useCallback(
    (bookId: string) => {
      router.push(`/explore?bookId=${bookId}`)
    },
    [router],
  )

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent, bookId: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleSelectedBook(bookId)
      }
    },
    [handleSelectedBook],
  )

  const toggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev)
  }, [])

  const formattedDate = dayjs(rating.created_at).fromNow()
  const isoDate = rating.created_at instanceof Date 
    ? rating.created_at.toISOString() 
    : new Date(rating.created_at).toISOString()

  const shouldTruncate = rating.description.length > DESCRIPTION_LIMIT && !isExpanded
  const displayText = shouldTruncate
    ? `${rating.description.slice(0, DESCRIPTION_LIMIT)}...`
    : rating.description

  return (
    <BookCardContainer
      role={role || 'article'}
      aria-label={`Avaliação de ${rating.book.name} por ${rating.user?.name || 'Usuário'}`}
    >
      {rating.user && (
        <AuthorSection>
          <AuthorInfo
            href={`/profile/${rating.user.id}`}
            aria-label={`Ver perfil de ${rating.user.name}`}
          >
            <Avatar
              src={rating.user.avatar_url}
              alt={`Foto de perfil de ${rating.user.name}`}
              size="sm"
            />
            <UserInfo>
              <span>{rating.user.name}</span>
              <time dateTime={isoDate}>{formattedDate}</time>
            </UserInfo>
          </AuthorInfo>

          <StarsWrapper>
            <Stars
              rate={rating.rate}
              mode="view"
              aria-label={`Avaliação: ${rating.rate} de 5 estrelas`}
            />
          </StarsWrapper>
        </AuthorSection>
      )}

      <CardContentWrapper>
        <BookImageWrapper
          onClick={() => handleSelectedBook(rating.book.id)}
          onKeyDown={(e) => handleKeyPress(e, rating.book.id)}
          tabIndex={0}
          role="button"
          aria-label={`Ver detalhes do livro ${rating.book.name}`}
        >
          <Image
            src={rating.book.cover_url.replace('public', '')}
            alt={`Capa do livro ${rating.book.name}`}
            width={108}
            height={152}
            loading="lazy"
            quality={85}
          />
        </BookImageWrapper>

        <BookInfoContent>
          <BookTitleSection>
            <strong>{rating.book.name}</strong>
            <span>{rating.book.author}</span>
          </BookTitleSection>

          <BookDescription>
            <p id={`description-${rating.id}`}>{displayText}</p>
            {rating.description.length > DESCRIPTION_LIMIT && (
              <ExpandButton
                onClick={toggleExpand}
                aria-expanded={isExpanded}
                aria-controls={`description-${rating.id}`}
              >
                {isExpanded ? 'ver menos' : 'ver mais'}
              </ExpandButton>
            )}
          </BookDescription>
        </BookInfoContent>
      </CardContentWrapper>
    </BookCardContainer>
  )
})

Card.displayName = 'Card'
