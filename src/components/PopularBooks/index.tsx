import { useCallback, useEffect, useState } from 'react'

import { CaretRight } from '@phosphor-icons/react'
import type { Book as PrismaBook, Rating as PrismaRating } from '@prisma/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ClipLoader } from 'react-spinners'

import { api } from '@/src/lib/axios'

import {
  Container,
  PopularBookCard,
  PopularBooksContainer,
  TitleBook,
  TitleSection,
} from './styles'
import { Stars } from '../ui/Stars'

type RatingSchema = PrismaRating & {
  book: PrismaBook
}
export const PopularBooks = () => {
  const [ratings, setRatings] = useState<RatingSchema[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const router = useRouter()

  const fetchPopularBooks = useCallback(async () => {
    try {
      const { data } = await api.get<RatingSchema[]>('/books/populars')
      setRatings(data)
    } catch (error) {
      console.error('Erro ao buscar livros populares:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPopularBooks()
  }, [fetchPopularBooks])

  const handleSelectedBook = (bookId: string) => {
    router.push(`explore?bookId=${bookId}`)
  }

  if (loading) {
    return (
      <Container>
        <ClipLoader size={50} color="#4fa94d" />
      </Container>
    )
  }

  return (
    <Container>
      <TitleSection>
        <span>Livros populares</span>
        <Link href="/explore">
          Ver todos
          <CaretRight size={16} />
        </Link>
      </TitleSection>

      <PopularBooksContainer>
        {ratings.map(({ id, rate, book }) => (
          <PopularBookCard key={id}>
            <img
              src={book.cover_url.replace('public', '')}
              alt={book.name}
              onClick={() => handleSelectedBook(book.id)}
            />

            <div>
              <TitleBook>
                <span>{book.name}</span>
                <p>{book.author}</p>
              </TitleBook>
              <Stars rate={rate} />
            </div>
          </PopularBookCard>
        ))}
      </PopularBooksContainer>
    </Container>
  )
}
