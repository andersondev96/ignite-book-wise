import { useCallback } from 'react'
import { CaretRight } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ClipLoader } from 'react-spinners'

import { api } from '@/src/lib/axios'
import { Stars } from '../ui/Stars'
import {
  BookInfo,
  Container,
  ImageWrapper,
  PopularBookCard,
  PopularBooksContainer,
  TitleBook,
  TitleSection,
  LoaderWrapper,
  ErrorMessage,
} from './styles'

import type { PopularBooksApiResponse } from '@/src/types/book'

export const PopularBooks = () => {
  const router = useRouter()

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['popular-books'],
    queryFn: async () => {
      const response = await api.get<PopularBooksApiResponse>('/books/populars', {
        params: { limit: 5 },
      })
      return response.data
    },
    staleTime: 1000 * 60 * 10,
    retry: 2,
  })

  const handleSelectedBook = useCallback(
    (bookId: string) => {
      router.push(`/explore?bookId=${bookId}`)
    },
    [router],
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, bookId: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleSelectedBook(bookId)
      }
    },
    [handleSelectedBook],
  )

  if (isLoading) {
    return (
      <Container>
        <LoaderWrapper role="status" aria-live="polite" aria-label="Carregando livros populares">
          <ClipLoader color="#8257E5" size={30} />
          <span className="sr-only">Carregando livros populares...</span>
        </LoaderWrapper>
      </Container>
    )
  }

  if (isError || !data?.data) {
    return (
      <Container>
        <ErrorMessage role="alert" aria-live="assertive">
          <p>Não foi possível carregar os livros populares.</p>
          <button onClick={() => refetch()}>Tentar novamente</button>
        </ErrorMessage>
      </Container>
    )
  }

  // ✅ CORREÇÃO: Verificar se data.data existe e é um array
  if (!Array.isArray(data.data) || data.data.length === 0) {
    return (
      <Container>
        <ErrorMessage role="status">
          <p>Nenhum livro popular disponível no momento.</p>
        </ErrorMessage>
      </Container>
    )
  }

  return (
    <Container>
      <TitleSection>
        <h2 id="popular-books-title">Livros populares</h2>
        <Link href="/explore" aria-label="Ver todos os livros populares">
          Ver todos
          <CaretRight size={16} aria-hidden="true" />
        </Link>
      </TitleSection>

      <PopularBooksContainer role="list" aria-labelledby="popular-books-title">
        {/* ✅ CORREÇÃO: Usar data.data ao invés de ratings */}
        {data.data.map((book) => (
          <PopularBookCard
            key={book.id}
            role="listitem"
            tabIndex={0}
            onClick={() => handleSelectedBook(book.id)}
            onKeyDown={(e) => handleKeyDown(e, book.id)}
            aria-label={`${book.name} por ${book.author}, avaliação ${book.avgRating} estrelas`}
          >
            <ImageWrapper>
              <img
                src={book.cover_url.replace('public', '')}
                alt={`Capa do livro ${book.name}`}
                loading="lazy"
                width={64}
                height={94}
              />
            </ImageWrapper>

            <BookInfo>
              <TitleBook>
                <span>{book.name}</span>
                <p>{book.author}</p>
              </TitleBook>
              <Stars
                rate={book.avgRating}
                mode="view"
                aria-label={`Avaliação: ${book.avgRating} de 5 estrelas`}
              />
            </BookInfo>
          </PopularBookCard>
        ))}
      </PopularBooksContainer>
    </Container>
  )
}
