import { useCallback } from 'react'
import { Container } from './styles'
import { useCategory } from '@/src/contexts/CategoryContext'

type FilterItemProps = {
  id: string
  title: string
  handleCategory: () => void
}

export const FilterItem = ({ id, title, handleCategory }: FilterItemProps) => {
  const { selectedCategory } = useCategory()

  console.log(selectedCategory)

  const handleClick = useCallback(() => {
    handleCategory()
  }, [handleCategory])

  return (
    <Container onClick={handleClick} active={selectedCategory === id}>
      <span>{title}</span>
    </Container>
  )
}
