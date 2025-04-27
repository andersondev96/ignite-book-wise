import { useCallback, useEffect, useState } from 'react'
import { ChartLineUp } from '@phosphor-icons/react'
import { ClipLoader } from 'react-spinners'

import { api } from '@/src/lib/axios'

import { PageTitle } from '../ui/PageTitle'
import { LastReading } from '../LastReading'
import { Card } from '../ui/Card'

import { LastRatingContainer, LatestRatingsContainer } from './styles'

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

export const LatestRatings = () => {
  const [ratings, setRatings] = useState<Rating[]>([])
  const [isLoading, setLoading] = useState<boolean>(true)

  const loadingRatings = useCallback(async () => {
    await api
      .get<Rating[]>('/ratings/latest')
      .then((response) => {
        setRatings(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    loadingRatings()
  }, [loadingRatings])

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
