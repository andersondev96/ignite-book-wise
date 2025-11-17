import { useRef, useState, MouseEvent } from 'react'

import { Category as PrismaCategory } from '@prisma/client'

import { Container, LoadingContainer } from './styles'
import { FilterItem } from '../../FilterItem'

interface TagsProps {
  categories: PrismaCategory[]
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  isLoading?: boolean
}

export const Tags = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  isLoading = false,
}: TagsProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return

    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 2
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => setIsDragging(false)

  if (isLoading) {
    return (
      <LoadingContainer role="status" aria-live="polite">
        <span>Carregando categorias...</span>
      </LoadingContainer>
    )
  }

  if (!Array.isArray(categories)) {
    console.error('Categories prop is not an array:', categories)
    return null
  }

  return (
    <Container
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
      className={isDragging ? 'dragging' : ''}
    >
      <FilterItem
        title="Tudo"
        active={selectedCategory === ''}
        onClick={() => setSelectedCategory('')}
      />
      {categories.map((category) => (
        <FilterItem
          key={category.id}
          title={category.name}
          active={selectedCategory === category.id}
          onClick={() => setSelectedCategory(category.id)}
        />
      ))}
    </Container>
  )
}
