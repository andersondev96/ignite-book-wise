import { ChartLineUp } from '@phosphor-icons/react'
import { BookCard } from '../BookCard'
import { PageTitle } from '../ui/PageTitle'
import { LastRatingContainer, LatestRatingsContainer } from './styles'
import { LastReading } from '../LastReading'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/src/lib/axios'

interface Rating {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  ratings: Array<{
    id: string
    rate: number
    created_at: string
    user: {
      id: string
      name: string
      avatar_url: string
    }
  }>
}

export const LatestRatings = () => {
  const [ratings, setRatings] = useState<Rating[]>([])

  const loadingRatings = useCallback(async () => {
    const response = await api.get<Rating[]>('/ratings/latest')

    setRatings(response.data)
  }, [])

  useEffect(() => {
    loadingRatings()
  }, [loadingRatings])

  return (
    <LatestRatingsContainer>
      <PageTitle title="Início" icon={<ChartLineUp />} />
      <LastReading />
      <LastRatingContainer>
        <span>Avaliações mais recentes</span>
        {ratings.map((rating) => {
          return (
            <BookCard
              key={rating.id}
              name={rating.ratings[0].user.name}
              avatar_url={rating.ratings[0].user.avatar_url}
              rating_date={rating.ratings[0].created_at}
              rate={rating.ratings[0].rate}
              book_cover_url={rating.cover_url.replace('public', '')}
              book_name={rating.name}
              book_author={rating.author}
              book_description={rating.summary}
            />
          )
        })}
      </LastRatingContainer>
    </LatestRatingsContainer>
  )
}
