import { FilterItem } from '../FilterItem'
import { Container } from './styles'

export const Filters = () => {
  return (
    <Container>
      <FilterItem title="Tudo" />
      <FilterItem title="Computação" />
      <FilterItem title="Educação" />
      <FilterItem title="Fantasia" />
      <FilterItem title="Ficção científica" />
      <FilterItem title="Horror" />
      <FilterItem title="HQs" />
      <FilterItem title="Suspense" />
    </Container>
  )
}
