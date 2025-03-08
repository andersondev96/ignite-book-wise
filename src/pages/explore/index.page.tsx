import { useEffect, useState, type ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app.page'
import { DefaultLayout } from '@/src/layouts'
import { Container, Header, ListBooks } from '@/src/styles/pages/explore'
import { PageTitle } from '@/src/components/ui/PageTitle'
import { Binoculars } from '@phosphor-icons/react'
import { SearchInput } from '@/src/components/SearchInput'
import { Filters } from '@/src/components/Filters'
import { Book } from '@/src/components/Book'
import { api } from '@/src/lib/axios'
import { useCategory } from '@/src/contexts/CategoryContext'

export interface BookSchema {
  id: string
  name: string
  author: string
  cover_url: string
  ratings: {
    rate: number
  }
}

export const ExplorePage: NextPageWithLayout = () => {
  const [books, setBooks] = useState<BookSchema[]>([])
  const [name, setName] = useState('')
  const { selectedCategory } = useCategory()
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
      } catch (err) {
        console.log('Erro ao carregar os livros:', err)
      }
    }
    fetchBooks()
  }, [selectedCategory, name])

  return (
    <Container>
      <Header>
        <PageTitle title="Explorar" icon={<Binoculars size={32} />} />
        <SearchInput
          name="actor"
          placeholder="Buscar livro ou autor"
          onChange={(e) => setName(e.target.value)}
        />
      </Header>
      <Filters />
      <ListBooks>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ListBooks>
    </Container>
  )
}

ExplorePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Explorar">{page}</DefaultLayout>
}

export default ExplorePage
