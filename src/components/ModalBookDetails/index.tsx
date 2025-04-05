import * as Dialog from '@radix-ui/react-dialog'
import {
  About,
  BookData,
  BookDataDescription,
  BookInfo,
  Category,
  CloseButton,
  Content,
  Overlay,
  Pages,
  RatingBook,
  RatingsSection,
  Title,
  TitleAndActorBook,
} from './styles'
import { BookmarkSimple, BookOpen, X } from '@phosphor-icons/react'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/src/lib/axios'
import { useSession } from 'next-auth/react'
import { LoginModal } from '../LoginModal'
import { RattingCard } from '../RattingCard'
import { RattingForm, type RateFormData } from '../RattingForm'
import { Stars } from '../ui/Stars'
interface ModalBookDetailsProps {
  id: string
}

interface Category {
  categoryId: string
  name: string
}

interface Book {
  id: string
  name: string
  author: string
  cover_url: string
  total_pages: string
  categories: Category[]
  ratings: {
    id: string
    rate: number
    description: string
    created_at: string
    user: {
      id: string
      name: string
      avatar_url: string
    }
  }[]
}

export const ModalBookDetails = ({ id }: ModalBookDetailsProps) => {
  const [showRatingForm, setShowRatingForm] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [book, setBook] = useState<Book | null>(null)
  const [categories, setCategories] = useState<Category[]>([])

  const { status } = useSession()

  const fetchBook = useCallback(async () => {
    await api
      .get(`books/details/${id}`)
      .then((response) => setBook(response.data))
      .catch((err) => `Erro ao carregar detalhes do livro: ${err}`)
  }, [id])

  useEffect(() => {
    fetchBook()
  }, [fetchBook])

  const fetchCategories = useCallback(async () => {
    if (!book) return

    try {
      const categoryIds = book.categories.map((category) => category.categoryId)

      const categoryRequests = categoryIds.map((categoryId) =>
        api.get(`/categories/${categoryId}`),
      )

      const categoryResponses = await Promise.all(categoryRequests)

      const categoryData = categoryResponses.map((response) => response.data)

      setCategories(categoryData)
    } catch (err) {
      console.error(`Ocorreu um erro ao carregar as categorias: ${err}`)
    }
  }, [book])

  const handleShowRatingsForm = useCallback(() => {
    if (status === 'authenticated') {
      setShowRatingForm(true)
    } else {
      setShowLoginModal(true)
    }
  }, [status])

  const onSubmit = useCallback(
    async (data: RateFormData) => {
      if (!book) {
        return
      }
      console.log('Enviando', data)
      try {
        const bookId = book.id
        const { description, rate } = data

        const response = await api.post(`/books/${bookId}/rate`, {
          description,
          rate,
        })

        if (response.status === 201) {
          setShowRatingForm(false)

          fetchBook()
        }
      } catch (err) {
        console.error(err)
      }
    },
    [book, fetchBook],
  )

  useEffect(() => {
    if (book) {
      fetchCategories()
    }
  }, [book, fetchCategories])

  if (!book) {
    return null
  }

  const categoryNames = categories.map((category) => category.name).join(', ')

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={21} />
        </CloseButton>
        <BookInfo>
          <BookData>
            <img src={book.cover_url.replace('public', '')} alt={book.name} />
            <BookDataDescription>
              <TitleAndActorBook>
                <strong>{book.name}</strong>
                <span>{book.author}</span>
              </TitleAndActorBook>
              <RatingBook>
                <Stars mode="view" rate={book.ratings[0].rate} />
                <span>3 avaliações</span>
              </RatingBook>
            </BookDataDescription>
          </BookData>
          <About>
            <Category>
              <BookmarkSimple size={24} />
              <div>
                <span>Categoria</span>
                <strong>{categoryNames}</strong>
              </div>
            </Category>

            <Pages>
              <BookOpen size={24} />
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
            <strong onClick={handleShowRatingsForm}>Avaliar</strong>
          </Title>

          {showRatingForm && <RattingForm onSubmit={onSubmit} />}
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
