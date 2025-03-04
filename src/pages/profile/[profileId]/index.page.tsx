import { NextPageWithLayout } from '../../_app.page'
import { ReactElement, useCallback, useEffect, useState } from 'react'
import { DefaultLayout } from '@/src/layouts'
import { Container, Main } from '@/src/styles/pages/profile'
import { PageTitle } from '@/src/components/ui/PageTitle'
import { User } from '@phosphor-icons/react'
import { SearchInput } from '@/src/components/SearchInput'
import { RatedBooksProfile } from '@/src/components/RatedBooksProfile'
import { ProfileDetails } from '@/src/components/ProfileDetails'
import { GetStaticProps, GetStaticPaths } from 'next'
import { api } from '@/src/lib/axios'

export interface UserProps {
  id: string
  name: string
  avatar_url: string
  created_at: string
  ratings: {
    id: string
    rate: number
    description: string
    created_at: string
    book: {
      id: string
      name: string
      author: string
      summary: string
    }
  }[]
  totalPagesRead: number
  totalBooksRates: number
  totalAuthorRead: number
  mostRatedCategory: string
}

interface ProfileProps {
  profileId: string
  user: UserProps
}

const Profile: NextPageWithLayout<ProfileProps> = ({ profileId }) => {
  const [user, setUser] = useState<UserProps>()

  const fetchUser = useCallback(async () => {
    await api
      .get<UserProps>(`/profile/${profileId}`)
      .then((response) => setUser(response.data))
      .catch((err) =>
        console.error(`Erro ao carregar as informações do usuário: ${err}`),
      )
  }, [profileId])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  if (!user) {
    return null
  }

  return (
    <Container>
      <Main>
        <PageTitle title="Perfil" icon={<User />} />
        <SearchInput name="book" placeholder="Buscar livro avaliado" />
        <RatedBooksProfile />
        <RatedBooksProfile />
      </Main>
      <ProfileDetails user={user} />
    </Container>
  )
}

Profile.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Perfil">{page}</DefaultLayout>
}

export default Profile

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const profileId = String(params?.profileId)

  return {
    props: {
      profileId,
    },
  }
}
