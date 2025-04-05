import { ChartLineUp } from '@phosphor-icons/react'
import { PageTitle } from '../ui/PageTitle'
import { LastRatingContainer, LatestRatingsContainer } from './styles'
import { LastReading } from '../LastReading'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/src/lib/axios'
import { ClipLoader } from 'react-spinners'
import { Card } from '../ui/Card'

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

export const LatestRatings = () => {
  const [ratings, setRatings] = useState<Rating[]>([])
  const [loading, setLoading] = useState<boolean>(true)

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

  if (loading) {
    return
  }

  if (!ratings) {
    return null
  }

  return (
    <LatestRatingsContainer>
      <PageTitle title="Início" icon={<ChartLineUp />} />
      <LastReading />
      <LastRatingContainer>
        <span>Avaliações mais recentes</span>
        {loading ? (
          <ClipLoader size={50} color="#4fa94d" loading={loading} />
        ) : (
          ratings.map((rating) => {
            return <Card key={rating.id} rating={rating} />
          })
        )}
      </LastRatingContainer>
    </LatestRatingsContainer>
  )
}
