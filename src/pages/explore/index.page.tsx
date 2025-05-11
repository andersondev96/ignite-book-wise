import { useCallback, useEffect, useState, type ReactElement } from 'react'

import { Binoculars } from '@phosphor-icons/react'
import { Book as PrismaBook, Category as PrismaCategory } from '@prisma/client'
import * as Dialog from '@radix-ui/react-dialog'
import { useRouter } from 'next/router'
import { ClipLoader } from 'react-spinners'

import { Book } from '@/src/components/Book'
import { ModalBookDetails } from '@/src/components/ModalBookDetails'
import { SearchInput } from '@/src/components/SearchInput'
import { PageTitle } from '@/src/components/ui/PageTitle'
import { Tags } from '@/src/components/ui/Tags'
import { DefaultLayout } from '@/src/layouts'
import { api } from '@/src/lib/axios'
import {
  Container,
  EmptyStateMessage,
  Header,
  ListBooks,
  LoadingWrapper,
} from '@/src/styles/pages/explore'

import { NextPageWithLayout } from '../_app.page'

type BookSchema = PrismaBook & {
  avgRating: number
}

export const ExplorePage: NextPageWithLayout = () => {
  const router = useRouter()
  const { query, isReady } = useRouter()
  const [books, setBooks] = useState<BookSchema[]>([])
  const [name, setName] = useState('')
  const [loading, setLoading] = useState<boolean>(true)
  const [categories, setCategories] = useState<PrismaCategory[]>([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [bookSelected, setBookSelected] = useState<string | null>(null)

  const route = useRouter()

  const loadingBookSelected = useCallback(() => {
    const bookId = route.query.bookId as string

    if (bookId) {
      setBookSelected(bookId)
    }
  }, [route.query.bookId])

  const loadingCategories = useCallback(() => {
    api
      .get('books/categories')
      .then((response) => setCategories(response.data))
      .catch((err) => console.error('Erro ao carregar as categorias:', err))
  }, [])

  const fetchBooks = useCallback(async () => {
    const params = new URLSearchParams()

    if (selectedCategory) {
      params.append('category', selectedCategory)
    }

    if (name) {
      params.append('name', name)
    }

    try {
      const response = await api.get(`books?${params.toString()}`)
      setBooks(response.data)
    } catch (err) {
      console.log('Erro ao carregar os livros:', err)
    } finally {
      setLoading(false)
    }
  }, [selectedCategory, name])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setName(value)

    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          book: value || undefined,
        },
      },
      undefined,
      { shallow: true },
    )
  }

  useEffect(() => {
    loadingBookSelected()
    loadingCategories()
  }, [fetchBooks, loadingBookSelected, loadingCategories])

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchBooks()
    }, 400)

    return () => clearTimeout(handler)
  }, [name, fetchBooks])

  useEffect(() => {
    if (isReady) {
      const bookParam = query.book?.toString() || ''
      setName(bookParam)
    }
  }, [isReady, query.book])

  if (loading) {
    return (
      <LoadingWrapper>
        <ClipLoader size={50} color="#4fa94d" loading={loading} />
      </LoadingWrapper>
    )
  }

  return (
    <>
      <Container>
        <Header>
          <PageTitle title="Explorar" icon={<Binoculars size={32} />} />
          <SearchInput
            name="actor"
            value={name}
            placeholder="Buscar livro ou autor"
            onChange={handleSearchChange}
          />
        </Header>

        <Tags
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {books.length > 0 ? (
          <ListBooks>
            {books.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </ListBooks>
        ) : (
          <EmptyStateMessage>
            Nenhum resultado encontrado para a buca de{' '}
            <strong>&quot;{name}&quot;</strong>
          </EmptyStateMessage>
        )}
      </Container>
      <Dialog.Root
        open={!!bookSelected}
        onOpenChange={() => setBookSelected(null)}
      >
        {bookSelected && <ModalBookDetails id={bookSelected} />}
      </Dialog.Root>
    </>
  )
}

ExplorePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Explorar">{page}</DefaultLayout>
}

export default ExplorePage
