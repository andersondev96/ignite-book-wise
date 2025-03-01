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
  const { selectedCategory } = useCategory()

  useEffect(() => {
    api
      .get(`books${selectedCategory ? `?category=${selectedCategory}` : ''}`)
      .then((response) => setBooks(response.data))
      .catch((err) => console.log('Erro ao carregar os livros: ' + err))
  }, [selectedCategory])

  return (
    <Container>
      <Header>
        <PageTitle title="Explorar" icon={<Binoculars size={32} />} />
        <SearchInput name="actor" placeholder="Buscar livro ou autor" />
      </Header>
      <Filters />
      <ListBooks>
        {books.map((book) => {
          return <Book key={book.id} book={book} />
        })}
      </ListBooks>
    </Container>
  )
}

ExplorePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Explorar">{page}</DefaultLayout>
}

export default ExplorePage
