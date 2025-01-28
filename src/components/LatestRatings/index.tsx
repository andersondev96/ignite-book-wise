import { ChartLineUp } from '@phosphor-icons/react'
import { BookCard } from '../BookCard'
import { PageTitle } from '../ui/PageTitle'
import { LastRatingContainer, LatestRatingsContainer } from './styles'
import { LastReading } from '../LastReading'

export const LatestRatings = () => {
  return (
    <LatestRatingsContainer>
      <PageTitle title="Início" icon={<ChartLineUp />} />
      <LastReading />
      <LastRatingContainer>
        <span>Avaliações mais recentes</span>
        <BookCard />
      </LastRatingContainer>
    </LatestRatingsContainer>
  )
}
