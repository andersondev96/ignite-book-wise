import { useCallback, useEffect, useState } from 'react'
import { CaretRight } from '@phosphor-icons/react'
import Link from 'next/link'
import { ClipLoader } from 'react-spinners'
import { useSession } from 'next-auth/react'

import { api } from '@/src/lib/axios'

import { Container, Title } from './styles'
import { Card } from '../ui/Card'

interface Book {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  created_at: string
}

interface User {
  id: string
  name: string
  avatar_url: string
}

interface Rating {
  id: string
  rate: number
  description: string
  created_at: string
  book_id: string
  user_id: string
  book: Book
  user: User
}

export const LastReading = () => {
  const [rating, setRating] = useState<Rating>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { data: session } = useSession()

  const userId = session?.user.id

  const fetchLastReading = useCallback(async () => {
    if (!userId) return

    try {
      const { data } = await api.get<Rating>(
        `/ratings/user-latest?userId=${userId}`,
      )
      setRating(data)
    } catch (error) {
      console.error('Erro ao buscar a última leitura:', error)
    } finally {
      setIsLoading(false)
    }
  }, [userId])

  useEffect(() => {
    fetchLastReading()
  }, [fetchLastReading])

  if (isLoading) {
    return (
      <Container>
        <ClipLoader size={50} color="#4fa94d" />
      </Container>
    )
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
      {<Card rating={rating} />}
    </Container>
  )
}
