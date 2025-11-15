import { ChartLineUp } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { ClipLoader } from 'react-spinners'

import { api } from '@/src/lib/axios'
import { LastReading } from '../LastReading'
import { Card } from '../ui/Card'
import { PageTitle } from '../ui/PageTitle'
import { 
  LatestRatingsContainer, 
  LastRatingSection,
  RatingsGrid,
  LoaderWrapper,
  ErrorMessage,
  EmptyState 
} from './styles'

import type { RatingsApiResponse } from '@/src/types/rating'

export const LatestRatings = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['latest-ratings'],
    queryFn: async () => {
      const response = await api.get<RatingsApiResponse>('/ratings/latest', {
        params: { limit: 10 }
      })
      return response.data
    },
    staleTime: 1000 * 60 * 5,
    retry: 2,
  })

  if (isLoading) {
    return (
      <LoaderWrapper role="status" aria-live="polite" aria-label="Carregando avaliações">
        <ClipLoader color="#8257E5" size={40} />
        <span className="sr-only">Carregando avaliações mais recentes...</span>
      </LoaderWrapper>
    )
  }

  if (isError) {
    return (
      <ErrorMessage role="alert" aria-live="assertive">
        <p>
          Erro ao carregar avaliações: {error instanceof Error ? error.message : 'Erro desconhecido'}
        </p>
        <button onClick={() => window.location.reload()}>
          Tentar novamente
        </button>
      </ErrorMessage>
    )
  }

  if (!data?.data || data.data.length === 0) {
    return (
      <EmptyState role="status">
        <p>Ainda não há avaliações disponíveis.</p>
      </EmptyState>
    )
  }

  return (
    <LatestRatingsContainer>
      <LastReading />
      
      <LastRatingSection aria-labelledby="latest-ratings-title">
        <PageTitle 
          id="latest-ratings-title"
          title="Avaliações mais recentes" 
          icon={<ChartLineUp aria-hidden="true" />} 
        />
        
        <RatingsGrid role="list" aria-label="Lista de avaliações recentes">
          {data.data.map((rating) => (
            <Card 
              key={rating.id} 
              rating={rating} 
              type="latest"
              role="listitem"
            />
          ))}
        </RatingsGrid>
      </LastRatingSection>
    </LatestRatingsContainer>
  )
}
