import { useRef, useState, MouseEvent } from 'react'

import { Category } from '@prisma/client'

import { Container } from './styles'
import { FilterItem } from '../../FilterItem'

interface TagsProps {
  categories: Category[]
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

export const Tags = ({
  categories,
  selectedCategory,
  setSelectedCategory,
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

  return (
    <Container
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
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
