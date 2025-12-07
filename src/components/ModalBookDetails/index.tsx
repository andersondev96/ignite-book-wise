import { useCallback, useEffect, useMemo, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useQuery } from '@tanstack/react-query'
import * as Dialog from '@radix-ui/react-dialog'
import { BookmarkSimple, BookOpen, X } from '@phosphor-icons/react'
import { api } from '@/src/lib/axios'

import {
  Book as PrismaBook,
  Rating as PrismaRating,
  User as PrismaUser,
} from '@prisma/client'

import type { BookDetailsApiResponse } from '@/src/types/book'
import type { RateFormData } from '@/src/types/rating'
import { LoginModal } from '../LoginModal'
import { RattingCard } from '../RattingCard'
import { RattingForm } from '../RattingForm'
import {
  About,
  BookData,
  BookDataDescription,
  BookInfo,
  CatSection,
  CloseButton,
  Content,
  Overlay,
  Pages,
  RatingBook,
  RatingsSection,
  Title,
  TitleAndActorBook,
} from './styles'
import { Stars } from '../ui/Stars'

interface ModalBookDetailsProps {
  id: string
}

type Category = {
  categoryId: string
  name: string
}

type RatingsSchema = PrismaRating & {
  user: PrismaUser
}

type BookSchema = PrismaBook & {
  categories: Category[]
  ratings: RatingsSchema[]
}

interface BookDetailsResponse {
  book: BookSchema
  ratingsAvg: number
}

export const ModalBookDetails = ({ id }: ModalBookDetailsProps) => {
  const [submitSuccessMessage, setSubmitSuccessMessage] = useState<string | null>(null)
  const [showRatingForm, setShowRatingForm] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])
  const { status, data: session } = useSession()

  const {
    data,
    isLoading,
    error,
    refetch
  } = useQuery<BookDetailsApiResponse>({
    queryKey: ['book-details', id],
    queryFn: async () => {
      const { data } = await api.get<BookDetailsApiResponse>(`/books/details/${id}`)
      return data
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 10,
    retry: 2,
  })

  const handleRateSubmit = useCallback(
    async (form: RateFormData) => {
      if (!data) return

      try {
        const response = await api.post(`/books/${data?.book?.id}/rate`, {
          description: form.description,
          rate: form.rate
        })

        await refetch()

        const message =
          response?.data?.message || 'Avaliação enviada com sucesso!'

        setSubmitSuccessMessage(message)
        setShowRatingForm(false)
      } catch (err) {
        throw err
      }
    },
    [data, refetch]
  )

  const handleShowRatingsForm = () => {
    status === 'authenticated'
      ? setShowRatingForm(true)
      : setShowLoginModal(true)
  }

  const categoryNames = useMemo(
    () =>
      (data?.book?.categories || [])
        .map(cat => cat.category?.name)
        .filter(Boolean)
        .join(', '),
    [data?.book?.categories]
  )

  if (isLoading) {
    return (
      <Dialog.Portal>
        <Overlay />
        <Content>
          <span>Carregando dados do livro...</span>
        </Content>
      </Dialog.Portal>
    )
  }
  if (error || !data) {
    return (
      <Dialog.Portal>
        <Overlay />
        <Content>
          <span>Não foi possível carregar os detalhes.</span>
        </Content>
      </Dialog.Portal>
    )
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content role="dialog" aria-mode="true" aria-labelledby="modal-book-title">
        <CloseButton aria-label="Fechar detalhes do livro">
          <X size={21} />
        </CloseButton>

        <BookInfo>
          <BookData>
            <img
              src={data?.book?.cover_url.replace('public', '')}
              alt={data?.book.name}
              loading="lazy"
              width={171}
              height={242}
              draggable={false}
            />

            <BookDataDescription>
              <Dialog.Title asChild>
                <TitleAndActorBook>
                  <strong id="modal-book-title">{data?.book?.name}</strong>
                  <span>{data?.book?.author}</span>
                </TitleAndActorBook>
              </Dialog.Title>

              <Dialog.Description asChild>
                <RatingBook>
                  <Stars rate={data?.book?.avgRating} aria-label={`Nota média: ${data?.book?.avgRating}`} size={22} />
                  <span>
                    {data?.book?.totalRatings ?? 0}{' '}
                    {data?.book?.totalRatings > 1
                      ? 'avaliações'
                      : data?.book?.totalRatings === 1
                        ? 'avaliação'
                        : 'nenhuma avaliação'}
                  </span>
                </RatingBook>
              </Dialog.Description>
            </BookDataDescription>
          </BookData>

          <About>
            <CatSection>
              <BookmarkSimple size={24} aria-hidden="true" />
              <div>
                <span>Categoria</span>
                <strong>{categoryNames}</strong>
              </div>
            </CatSection>

            <Pages>
              <BookOpen size={24} aria-hidden="true" />
              <div>
                <span>Páginas</span>
                <strong>{data?.book?.total_pages}</strong>
              </div>
            </Pages>
          </About>
        </BookInfo>

        <RatingsSection>
          <Title>
            <span>Avaliações</span>
            <strong onClick={handleShowRatingsForm} tabIndex={0} role="button" aria-label="Avaliar livro">
              Avaliar
            </strong>
          </Title>

          {submitSuccessMessage && (
            <span style={{ color: '#00B37E', fontSize: '0.875rem' }}>
              {submitSuccessMessage}
            </span>
          )}

          {showRatingForm && (
            <RattingForm onSubmit={handleRateSubmit} />
          )}
          {showLoginModal && (
            <Dialog.Root open={showLoginModal} onOpenChange={setShowLoginModal}>
              <Dialog.Portal>
                <LoginModal />
              </Dialog.Portal>
            </Dialog.Root>
          )}

          {data?.book?.ratings.map((rating) => {
            return <RattingCard key={rating.id} rating={rating} />
          })}
        </RatingsSection>
      </Content>
    </Dialog.Portal>
  )
}
