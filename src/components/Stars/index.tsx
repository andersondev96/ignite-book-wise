import { Star } from '@phosphor-icons/react'
import { Container } from './styles'

type StarsProps = {
  quantity?: number
}

export const Stars = ({ quantity = 5 }: StarsProps) => {
  const filledStars = quantity ?? 5
  const emptyStars = Math.max(0, 5 - filledStars)

  return (
    <Container>
      {Array.from({ length: filledStars }).map((_, i) => (
        <Star key={`filled-${i}`} size={16} weight="fill" />
      ))}

      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} size={16} />
      ))}
    </Container>
  )
}
