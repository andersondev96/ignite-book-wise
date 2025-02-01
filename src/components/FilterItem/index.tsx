import { Container } from './styles'

type FilterItemProps = {
  title: string
}

export const FilterItem = ({ title }: FilterItemProps) => {
  return (
    <Container>
      <span>{title}</span>
    </Container>
  )
}
