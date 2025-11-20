// src/components/ui/Tags/index.tsx
import {
  useRef,
  useState,
  MouseEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
} from 'react'
import type { Category as PrismaCategory } from '@prisma/client'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

import { Container, LoadingContainer, TagsWrapper, ScrollButton } from './styles'
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
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScroll = useCallback(() => {
    if (!containerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }, [])

  useEffect(() => {
    checkScroll()
    const handleResize = () => checkScroll()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [checkScroll])

  useEffect(() => {
    checkScroll()
  }, [categories, checkScroll])

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.button !== 0) return

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
    checkScroll()
  }

  const handleMouseUp = () => setIsDragging(false)
  const handleMouseLeave = () => setIsDragging(false)

  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    e.preventDefault()
    containerRef.current.scrollLeft += e.deltaY > 0 ? 100 : -100
    checkScroll()
  }, [checkScroll])

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault()
        containerRef.current.scrollLeft -= 100
        checkScroll()
        break
      case 'ArrowRight':
        e.preventDefault()
        containerRef.current.scrollLeft += 100
        checkScroll()
        break
      case 'Home':
        e.preventDefault()
        containerRef.current.scrollLeft = 0
        checkScroll()
        break
      case 'End':
        e.preventDefault()
        containerRef.current.scrollLeft = containerRef.current.scrollWidth
        checkScroll()
        break
    }
  }, [checkScroll])

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return

    const scrollAmount = 200
    containerRef.current.scrollLeft += direction === 'right' ? scrollAmount : -scrollAmount

    setTimeout(() => checkScroll(), 50)
  }

  if (isLoading) {
    return (
      <LoadingContainer
        role="status"
        aria-live="polite"
        aria-label="Carregando categorias"
      >
        <span className="sr-only">Carregando categorias...</span>
        <div className="loading-skeleton" aria-hidden="true">
          <div className="skeleton-item" />
          <div className="skeleton-item" />
          <div className="skeleton-item" />
          <div className="skeleton-item" />
        </div>
      </LoadingContainer>
    )
  }

  if (!Array.isArray(categories)) {
    console.error('Categories prop is not an array:', categories)
    return (
      <Container role="alert">
        <span className="error-message">
          Erro ao carregar categorias
        </span>
      </Container>
    )
  }

  return (
    <TagsWrapper>
      {canScrollLeft && (
        <ScrollButton
          direction="left"
          onClick={() => scroll('left')}
          aria-label="Rolar categorias para esquerda"
          title="Voltar"
        >
          <CaretLeft size={20} weight="fill" aria-hidden="true" />
        </ScrollButton>
      )}

      <Container
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
        onKeyDown={handleKeyDown}
        className={isDragging ? 'dragging' : ''}
        role="tablist"
        aria-label="Filtros de categoria"
        aria-orientation="horizontal"
      >
        <FilterItem
          title="Tudo"
          active={selectedCategory === ''}
          onClick={() => setSelectedCategory('')}
          ariaPressed={selectedCategory === ''}
        />
        {categories.map((category) => (
          <FilterItem
            key={category.id}
            title={category.name}
            active={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
            ariaPressed={selectedCategory === category.id}
            ariaLabel={`Filtrar por ${category.name}`}
          />
        ))}
      </Container>

      {canScrollRight && (
        <ScrollButton
          direction="right"
          onClick={() => scroll('right')}
          aria-label="Rolar categorias para direita"
          title="Avançar"
        >
          <CaretRight size={20} weight="fill" aria-hidden="true" />
        </ScrollButton>
      )}

      {(canScrollLeft || canScrollRight) && (
        <div className="sr-only" role="status" aria-live="polite">
          Use as setas do teclado, mouse wheel ou clique nas setas de navegação para ver mais categorias
        </div>
      )}
    </TagsWrapper>
  )
}

export default Tags
