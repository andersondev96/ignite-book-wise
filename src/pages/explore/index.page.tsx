import * as Dialog from '@radix-ui/react-dialog'
import { useCallback, useEffect, useState, type ReactElement } from 'react'
import { NextPageWithLayout } from '../_app.page'
import { DefaultLayout } from '@/src/layouts'
import { Container, Header, ListBooks } from '@/src/styles/pages/explore'
import { PageTitle } from '@/src/components/ui/PageTitle'
import { Binoculars } from '@phosphor-icons/react'
import { SearchInput } from '@/src/components/SearchInput'
import { Book } from '@/src/components/Book'
import { api } from '@/src/lib/axios'
import { useCategory } from '@/src/contexts/CategoryContext'
import { ClipLoader } from 'react-spinners'
import { Tags } from '@/src/components/ui/Tags'
import { ModalBookDetails } from '@/src/components/ModalBookDetails'

export interface BookSchema {
  id: string
  name: string
  author: string
  cover_url: string
  avgRating: number
}

export const ExplorePage: NextPageWithLayout = () => {
  const [books, setBooks] = useState<BookSchema[]>([])
  const [name, setName] = useState('')
  const { selectedCategory } = useCategory()
  const [loading, setLoading] = useState<boolean>(true)

  const [bookSelected, setBookSelected] = useState<string | null>(null)

  const loadingBookSelected = useCallback(() => {
    const bookId = localStorage.getItem('bookId')

    if (bookId) {
      setBookSelected(bookId)
      localStorage.removeItem('bookId')
    }
  }, [])

  useEffect(() => {
    const fetchBooks = async () => {
      const queryParams = []

      if (selectedCategory) {
        queryParams.push(`category=${selectedCategory}`)
      }

      if (name) {
        queryParams.push(`name=${name}`)
      }

      const url = `books${queryParams.length > 0 ? `?${queryParams.join('&')}` : ''}`

      try {
        const response = await api.get(url)
        setBooks(response.data)
        setLoading(false)
      } catch (err) {
        console.log('Erro ao carregar os livros:', err)
        setLoading(false)
      }
    }
    fetchBooks()
    loadingBookSelected()
  }, [selectedCategory, name, loadingBookSelected])

  return (
    <>
      <Container>
        <Header>
          <PageTitle title="Explorar" icon={<Binoculars size={32} />} />
          <SearchInput
            name="actor"
            placeholder="Buscar livro ou autor"
            onChange={(e) => setName(e.target.value)}
          />
        </Header>
        <Tags />
        {loading ? (
          <ClipLoader size={50} color="#4fa94d" loading={loading} />
        ) : (
          <ListBooks>
            {books.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </ListBooks>
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
