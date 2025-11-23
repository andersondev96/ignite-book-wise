import { useCallback, useEffect, useState } from 'react'
import { BookmarkSimple, BookOpen, X } from '@phosphor-icons/react'
import {
  Book as PrismaBook,
  Rating as PrismaRating,
  User as PrismaUser,
} from '@prisma/client'
import * as Dialog from '@radix-ui/react-dialog'
import { useSession } from 'next-auth/react'
import { api } from '@/src/lib/axios'

import { LoginModal } from '../LoginModal'
import { RattingCard } from '../RattingCard'
import { RattingForm, type RateFormData } from '../RattingForm'
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
  const [bookDetails, setBookDetails] = useState<BookDetailsResponse | null>(
    null,
  )
  const [showRatingForm, setShowRatingForm] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])

  const { status, data: session } = useSession()

  const fetchBookDetails = useCallback(async () => {
    try {
      const { data } = await api.get(`books/details/${id}`)
      setBookDetails(data)
    } catch (err) {
      console.error(`Erro ao carregar detalhes do livro: ${err}`)
    }
  }, [id])

  useEffect(() => {
    fetchBookDetails()
  }, [fetchBookDetails])

  const fetchCategories = useCallback(async () => {
    if (!bookDetails) return

    try {
      const categoryIds = bookDetails.book.categories.map(
        (category) => category.categoryId,
      )

      const categoryRequests = categoryIds.map((categoryId) =>
        api.get(`/categories/${categoryId}`),
      )

      const categoryResponses = await Promise.all(categoryRequests)

      const categoryData = categoryResponses.map((response) => response.data)

      setCategories(categoryData)
    } catch (err) {
      console.error(`Ocorreu um erro ao carregar as categorias: ${err}`)
    }
  }, [bookDetails])

  const handleShowRatingsForm = () => {
    status === 'authenticated'
      ? setShowRatingForm(true)
      : setShowLoginModal(true)
  }

  const handleRateSubmit = async (data: RateFormData) => {
    if (!bookDetails) {
      return
    }

    await api.post(`/books/${bookDetails.book.id}/rate`, {
      description: data.description,
      rate: data.rate,
    })

    setShowRatingForm(false)
    await fetchBookDetails()
  }

  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  if (!bookDetails) {
    return null
  }

  const { book, ratingsAvg } = bookDetails

  const categoryNames = categories.map(({ name }) => name).join(', ')

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
              src={book.cover_url.replace('public', '')}
              alt={book.name}
              loading="lazy"
              width={171}
              height={242}
              draggable={false}
            />

            <BookDataDescription>
              <Dialog.Title asChild>
                <TitleAndActorBook>
                  <strong id="modal-book-title">{book.name}</strong>
                  <span>{book.author}</span>
                </TitleAndActorBook>
              </Dialog.Title>

              <Dialog.Description asChild>
                <RatingBook>
                  <Stars rate={ratingsAvg} aria-label={`Nota média: ${ratingsAvg}`} size={22} />
                  <span>{book.ratings.length} avaliações</span>
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
                <strong>{book.total_pages}</strong>
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

          {book.ratings.map((rating) => {
            return <RattingCard key={rating.id} rating={rating} />
          })}
        </RatingsSection>
      </Content>
    </Dialog.Portal>
  )
}
