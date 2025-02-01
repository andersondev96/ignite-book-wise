import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app.page'
import { DefaultLayout } from '@/src/layouts'
import { Container, Header, ListBooks } from '@/src/styles/pages/explore'
import { PageTitle } from '@/src/components/ui/PageTitle'
import { Binoculars } from '@phosphor-icons/react'
import { SearchInput } from '@/src/components/SearchInput'
import { Filters } from '@/src/components/Filters'
import { Book } from '@/src/components/Book'

export const ExplorePage: NextPageWithLayout = () => {
  return (
    <Container>
      <Header>
        <PageTitle title="Explorar" icon={<Binoculars size={32} />} />
        <SearchInput name="actor" placeholder="Buscar livro ou autor" />
      </Header>
      <Filters />
      <ListBooks>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </ListBooks>
    </Container>
  )
}

ExplorePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Explorar">{page}</DefaultLayout>
}

export default ExplorePage
