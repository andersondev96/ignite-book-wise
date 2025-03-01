import { createContext, useState, ReactNode, useContext } from 'react'

interface CategoryContextProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

const categoryContext = createContext<CategoryContextProps | undefined>(
  undefined,
)

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState('')

  return (
    <categoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </categoryContext.Provider>
  )
}

export const useCategory = () => {
  const context = useContext(categoryContext)

  if (!context) {
    throw new Error('UseCategory deve ser usado dentro de um categoryProvider')
  }

  return context
}
