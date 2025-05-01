import { useCallback, useEffect, useState } from 'react'

import { ChartLineUp } from '@phosphor-icons/react'
import type {
  Book as PrismaBook,
  User as PrismaUser,
  Rating as PrismaRating,
} from '@prisma/client'
import { ClipLoader } from 'react-spinners'

import { api } from '@/src/lib/axios'

import { LastReading } from '../LastReading'
import { LastRatingContainer, LatestRatingsContainer } from './styles'
import { Card } from '../ui/Card'
import { PageTitle } from '../ui/PageTitle'

type RatingSchema = PrismaRating & {
  book: PrismaBook
  user: PrismaUser
}

export const LatestRatings = () => {
  const [ratings, setRatings] = useState<RatingSchema[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchLatestRatings = useCallback(async () => {
    try {
      const { data } = await api.get<RatingSchema[]>('/ratings/latest')
      setRatings(data)
    } catch (error) {
      console.error('Error fetching latest ratings:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchLatestRatings()
  }, [fetchLatestRatings])

  if (isLoading) {
    return (
      <LastRatingContainer>
        <ClipLoader size={50} color="#4fa94d" />
      </LastRatingContainer>
    )
  }

  return (
    <LatestRatingsContainer>
      <PageTitle title="Início" icon={<ChartLineUp />} />
      <LastReading />
      <LastRatingContainer>
        <span>Avaliações mais recentes</span>
        {ratings.map((rating) => {
          return <Card key={rating.id} rating={rating} />
        })}
      </LastRatingContainer>
    </LatestRatingsContainer>
  )
}
