import { Container, Title } from './styles'
import { CaretRight } from '@phosphor-icons/react'
import { BookCard } from '../BookCard'
import { useEffect, useState } from 'react'
import { api } from '@/src/lib/axios'
import { useSession } from 'next-auth/react'
import { ClipLoader } from 'react-spinners'
import Link from 'next/link'

interface Rating {
  id: string
  rate: number
  description: string
  created_at: string
  book_id: string
  user_id: string
  book: {
    id: string
    name: string
    author: string
    summary: string
    cover_url: string
    created_at: string
  }
  user: {
    id: string
    name: string
    avatar_url: string
  }
}

export const LastReading = () => {
  const [rating, setRating] = useState<Rating>()
  const { data: session } = useSession()
  const userId = session ? session.user.id : null
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (userId) {
      api
        .get(`/ratings/user-latest?userId=${userId}`)
        .then((response) => {
          setRating(response.data)
          setLoading(false)
        })
        .catch((error) => {
          console.log(error)
          setLoading(false)
        })
    }
  }, [userId])

  if (loading) {
    return
  }

  if (!rating) {
    return null
  }

  return (
    <Container>
      <Title>
        <span>Sua última leitura</span>
        <Link href={`/profile/${userId}`}>
          Ver todas
          <CaretRight size={16} />
        </Link>
      </Title>
      {loading ? (
        <ClipLoader size={50} color="#4fa94d" loading={loading} />
      ) : (
        <BookCard rating={rating} />
      )}
    </Container>
  )
}
