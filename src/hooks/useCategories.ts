import { useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Category {
  id: string
  name: string
}

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    api
      .get('books/categories')
      .then((response) => setCategories(response.data))
      .catch((err) => console.error('Erro ao carregar as categorias:', err))
  }, [])

  return { categories }
}
