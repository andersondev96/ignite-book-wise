import { NextPageWithLayout } from '../_app.page'
import { ReactElement, useCallback, useEffect, useState } from 'react'
import { DefaultLayout } from '@/src/layouts'
import { BackButton, Container, Main } from '@/src/styles/pages/profile'
import { PageTitle } from '@/src/components/ui/PageTitle'
import { CaretLeft, User } from '@phosphor-icons/react'
import { SearchInput } from '@/src/components/SearchInput'
import { RatedBooksProfile } from '@/src/components/RatedBooksProfile'
import { ProfileDetails } from '@/src/components/ProfileDetails'
import { api } from '@/src/lib/axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export interface RatingsProps {
  id: string
  rate: number
  description: string
  created_at: string
  book: {
    id: string
    name: string
    author: string
    summary: string
    cover_url: string
  }
}

export interface UserProps {
  id: string
  name: string
  avatar_url: string
  created_at: string
  totalPagesRead: number
  totalBooksRates: number
  totalAuthorRead: number
  mostRatedCategory: string
}

interface ProfileProps {
  id: string
  user: UserProps
}

const Profile: NextPageWithLayout<ProfileProps> = () => {
  const router = useRouter()
  const userId = router.query.id as string
  const { status, data: session } = useSession()

  const isOwnerProfile = session?.user.id === userId

  const [user, setUser] = useState<UserProps>()
  const [rates, setRates] = useState<RatingsProps[]>([])
  const [book, setBook] = useState('')

  const fetchRates = useCallback(async () => {
    const url = `profile/${userId}/rates${book ? `?book=${book}` : ''}`

    try {
      const response = await api.get(url)
      setRates(response.data.ratings || [])
    } catch (err) {
      console.log(`Erro ao carregar as informações das avaliações: ${err}`)
    }
  }, [userId, book])

  const fetchUser = useCallback(async () => {
    const url = `profile/${userId}`

    try {
      const response = await api.get(url)
      setUser(response.data)
    } catch (err) {
      console.error(`Erro ao carregar as informações do usuário: ${err}`)
    }
  }, [userId])

  useEffect(() => {
    fetchUser()
    fetchRates()
  }, [fetchUser, fetchRates])

  if (!user) {
    return null
  }

  return (
    <Container>
      <Main>
        {status === 'authenticated' && isOwnerProfile ? (
          <PageTitle title="Perfil" icon={<User />} />
        ) : (
          <BackButton href="/">
            <CaretLeft size={20} />
            <span>Voltar</span>
          </BackButton>
        )}
        <SearchInput
          name="book"
          placeholder="Buscar livro avaliado"
          onChange={(e) => setBook(e.target.value)}
        />
        {rates.length > 0 ? (
          rates.map((rate) => {
            return <RatedBooksProfile key={rate.id} rate={rate} />
          })
        ) : (
          <span>
            Nenhum resultado encontrado para a buca de{' '}
            <strong>&quot;{book}&quot;</strong>
          </span>
        )}
      </Main>
      <ProfileDetails user={user} />
    </Container>
  )
}

Profile.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Perfil">{page}</DefaultLayout>
}

export default Profile
