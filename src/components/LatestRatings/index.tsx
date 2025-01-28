import { ChartLineUp } from '@phosphor-icons/react'
import { BookCard } from '../BookCard'
import { PageTitle } from '../ui/PageTitle'
import { LatestRatingsContainer } from './styles'

export const LatestRatings = () => {
  return (
    <LatestRatingsContainer>
      <PageTitle title="Início" icon={<ChartLineUp />} />
      <span>Avaliações mais recentes</span>
      <div>
        <BookCard />
      </div>
    </LatestRatingsContainer>
  )
}
