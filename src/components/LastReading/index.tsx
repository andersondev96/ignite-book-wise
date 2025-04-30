import { useCallback, useEffect, useState } from 'react'

import { CaretRight } from '@phosphor-icons/react'
import {
  Book as PrismaBook,
  User as PrismaUser,
  Rating as PrismaRating,
} from '@prisma/client'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { ClipLoader } from 'react-spinners'

import { api } from '@/src/lib/axios'

import { Container, Title } from './styles'
import { Card } from '../ui/Card'

type Rating = PrismaRating & {
  book: PrismaBook
  user: PrismaUser
  book_id: string
  user_id: string
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
