import { useCallback, useEffect, useRef, useState, type ReactElement } from 'react'
import { Binoculars } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useRouter } from 'next/router'
import { ClipLoader } from 'react-spinners'
import { useQuery } from '@tanstack/react-query'

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
  InlineLoadingIndicator,
} from '@/src/styles/pages/explore'
import type { CategoriesApiResponse } from '@/src/types/category'
import type { ExploreBooksApiResponse } from '@/src/types/book'

import { NextPageWithLayout } from '../_app.page'

export const ExplorePage: NextPageWithLayout = () => {
  const router = useRouter()
  const { query, isReady } = router

  const debounceRef = useRef<NodeJS.Timeout | null>(null)
  const isInitialMount = useRef(true)

  const [name, setName] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [bookSelected, setBookSelected] = useState<string | null>(null)

  const { data: categoriesData, isLoading: categoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await api.get<CategoriesApiResponse>('/books/categories')
      return response.data
    },
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    retry: 2,
  })

  const {
    data: booksData,
    isLoading: booksLoading,
    isFetching: booksFetching,
  } = useQuery({
    queryKey: ['books', selectedCategory, name],
    queryFn: async () => {
      const params = new URLSearchParams()

      if (selectedCategory) {
        params.append('category', selectedCategory)
      }

      if (name) {
        params.append('name', name)
      }

      const response = await api.get<ExploreBooksApiResponse>(
        `/books?${params.toString()}`,
      )
      return response.data
    },
    enabled: true,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 15,
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    retry: 2,
  })

  useEffect(() => {
    const bookId = query.bookId as string
    if (bookId) {
      setBookSelected(bookId)
    }
  }, [query.bookId])

  useEffect(() => {
    if (isReady && isInitialMount.current && query.book) {
      const bookParam = query.book.toString()
      setName(bookParam)
      isInitialMount.current = false
    }
  }, [isReady, query.book])

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setName(value)

      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }

      debounceRef.current = setTimeout(() => {
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
      }, 400)
    },
    [router],
  )

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [])

  const books = booksData?.data ?? []
  const categories = categoriesData?.data ?? []
  const totalResults = books.length

  return (
    <>
      <Container id="main-content" role="main" aria-label="Exploração de livros">
        <Header role="banner">
          <PageTitle title="Explorar" icon={<Binoculars size={32} aria-hidden="true" />} />
          <SearchInput
            name="search"
            value={name}
            placeholder="Buscar livro ou autor"
            onChange={handleSearchChange}
            aria-label="Buscar livros por título ou autor"
          />
        </Header>

        <nav aria-label="Filtros por categoria">
          {categoriesLoading ? (
            <LoadingWrapper>
              <ClipLoader size={30} color="#8381D9" loading />
              <span className="sr-only">Carregando categorias...</span>
            </LoadingWrapper>
          ) : (
            <Tags
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              isLoading={false}
            />
          )}
        </nav>

        <section aria-labelledby="results-heading" aria-live="polite" aria-atomic="true">
          <h2 id="results-heading" className="sr-only">
            {totalResults > 0
              ? `${totalResults} ${totalResults === 1 ? 'livro encontrado' : 'livros encontrados'}`
              : 'Nenhum livro encontrado'}
          </h2>

          {booksLoading && !booksData ? (
            <LoadingWrapper role="status" aria-label="Carregando livros">
              <ClipLoader size={40} color="#8381D9" loading />
              <span className="sr-only">Buscando livros...</span>
            </LoadingWrapper>
          ) : (
            <>
              {booksFetching && (
                <InlineLoadingIndicator role="status" aria-live="polite">
                  <ClipLoader size={20} color="#8381D9" loading />
                  <span>Atualizando resultados...</span>
                </InlineLoadingIndicator>
              )}

              {books.length > 0 ? (
                <ListBooks role="list">
                  {books.map((book) => (
                    <Book key={book.id} book={book} />
                  ))}
                </ListBooks>
              ) : (
                <EmptyStateMessage role="status">
                  {name ? (
                    <>
                      Nenhum resultado encontrado para a busca de <strong>&quot;{name}&quot;</strong>
                    </>
                  ) : (
                    'Nenhum livro encontrado'
                  )}
                </EmptyStateMessage>
              )}
            </>
          )}
        </section>
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
