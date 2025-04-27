import { ReactElement, useCallback, useEffect, useState } from 'react'

import { CaretLeft, User } from '@phosphor-icons/react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { Book } from '@/src/@types'
import { ProfileDetails } from '@/src/components/ProfileDetails'
import { RatedBooksProfile } from '@/src/components/RatedBooksProfile'
import { SearchInput } from '@/src/components/SearchInput'
import { PageTitle } from '@/src/components/ui/PageTitle'
import { DefaultLayout } from '@/src/layouts'
import { api } from '@/src/lib/axios'
import { BackButton, Container, Main } from '@/src/styles/pages/profile'

import { NextPageWithLayout } from '../_app.page'


export interface RatingsProps {
  id: string
  rate: number
  description: string
  created_at: string
  book: Book
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
  const { id: userId } = router.query as { id: string }
  const { status, data: session } = useSession()

  const isOwnerProfile = session?.user.id === userId

  const [user, setUser] = useState<UserProps | null>(null)
  const [ratings, setRatings] = useState<RatingsProps[]>([])
  const [book, setBook] = useState('')

  const fetchUserProfile = useCallback(async () => {
    try {
      const { data } = await api.get(`profile/${userId}`)
      setUser(data)
    } catch (err) {
      console.error(`Erro ao carregar perfil: ${err}`)
    }
  }, [userId])

  const fetchRatings = useCallback(async () => {
    try {
      const { data } = await api.get<{ ratings: RatingsProps[] }>(
        `profile/${userId}/rates${book ? `?book=${book}` : ''}`,
      )
      setRatings(data.ratings || [])
    } catch (error) {
      console.error('Erro ao carregar as avaliações:', error)
    }
  }, [userId, book])

  useEffect(() => {
    if (userId) {
      fetchUserProfile()
      fetchRatings()
    }
  }, [userId, fetchUserProfile, fetchRatings])

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
        {ratings.length > 0 ? (
          ratings.map((rating) => (
            <RatedBooksProfile key={rating.id} rate={rating} />
          ))
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
