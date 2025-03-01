import { useCategory } from '@/src/contexts/CategoryContext'
import { FilterItem } from '../FilterItem'
import { Container } from './styles'
import { useCategories } from '@/src/hooks/useCategories'

export const Filters = () => {
  const { categories } = useCategories()
  const { setSelectedCategory } = useCategory()

  return (
    <Container>
      <FilterItem
        id=""
        title="Tudo"
        handleCategory={() => setSelectedCategory('')}
      />
      {categories.map((category) => {
        return (
          <FilterItem
            key={category.id}
            id={category.id}
            title={category.name}
            handleCategory={() => setSelectedCategory(category.id)}
          />
        )
      })}
    </Container>
  )
}
