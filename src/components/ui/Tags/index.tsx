import { useRef, useState, MouseEvent } from 'react'
import { useCategory } from '@/src/contexts/CategoryContext'
import { FilterItem } from '../../FilterItem'
import { Container } from './styles'
import { useCategories } from '@/src/hooks/useCategories'

export const Tags = () => {
  const { categories } = useCategories()
  const { setSelectedCategory } = useCategory()
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
        id=""
        title="Tudo"
        handleCategory={() => setSelectedCategory('')}
      />
      {categories.map((category) => (
        <FilterItem
          key={category.id}
          id={category.id}
          title={category.name}
          handleCategory={() => setSelectedCategory(category.id)}
        />
      ))}
    </Container>
  )
}
