import { useEffect, useState } from 'react'
import { FilterItem } from '../FilterItem'
import { Container } from './styles'
import { api } from '@/src/lib/axios'

interface Category {
  id: string
  name: string
}

export const Filters = () => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    api
      .get('books/categories')
      .then((response) => setCategories(response.data))
      .catch((err) => console.log('Erro ao carregar as categorias: ' + err))
  }, [])

  return (
    <Container>
      <FilterItem title="Tudo" />
      {categories.map((category) => {
        return <FilterItem key={category.id} title={category.name} />
      })}
    </Container>
  )
}
