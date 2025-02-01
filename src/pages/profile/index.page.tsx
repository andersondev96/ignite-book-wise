import { NextPageWithLayout } from '../_app.page'
import { ReactElement } from 'react'
import { DefaultLayout } from '@/src/layouts'
import { Container, Main } from '@/src/styles/pages/profile'
import { PageTitle } from '@/src/components/ui/PageTitle'
import { User } from '@phosphor-icons/react'
import { SearchInput } from '@/src/components/SearchInput'
import { RatedBooksProfile } from '@/src/components/RatedBooksProfile'
import { ProfileDetails } from '@/src/components/ProfileDetails'

const Profile: NextPageWithLayout = () => {
  return (
    <Container>
      <Main>
        <PageTitle title="Perfil" icon={<User />} />
        <SearchInput name="book" placeholder="Buscar livro avaliado" />
        <RatedBooksProfile />
        <RatedBooksProfile />
      </Main>
      <ProfileDetails />
    </Container>
  )
}

Profile.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Perfil">{page}</DefaultLayout>
}

export default Profile
