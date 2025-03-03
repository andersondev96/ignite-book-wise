import { useState } from 'react'
import {
  Container,
  StarContainer,
  StarBackground,
  StarForeground,
} from './styles'

type StarsProps = {
  mode?: 'edit' | 'view'
  rate: number
  onRateChange?: (rate: number) => void
}

export const Stars = ({ mode = 'view', rate, onRateChange }: StarsProps) => {
  const [stars, setStars] = useState(rate)
  const [hovered, setHovered] = useState<number | null>(null)

  const handleClick = (value: number) => {
    if (mode === 'edit') {
      const newValue = value === stars ? 0 : value
      setStars(newValue)
      onRateChange?.(newValue)
    }
  }

  const handleMouseEnter = (index: number) => {
    if (mode === 'edit') setHovered(index)
  }

  const handleMouseLeave = () => {
    if (mode === 'edit') setHovered(null)
  }

  const getStarStyle = (i: number) => {
    if (hovered !== null && mode === 'edit') {
      return { width: hovered >= i ? '100%' : '0%' }
    } else if (stars >= i) {
      return { width: '100%' }
    } else if (stars + 0.5 >= i) {
      return { width: '50%' }
    }

    return { width: '0%' }
  }

  return (
    <Container>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarContainer
          key={i}
          onClick={() => handleClick(i + 1)}
          onMouseEnter={() => handleMouseEnter(i + 1)}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: mode === 'view' ? 'default' : 'pointer' }}
        >
          <StarBackground size={16} weight="fill" />
          <StarForeground style={getStarStyle(i + 1)} size={16} weight="fill" />
        </StarContainer>
      ))}
    </Container>
  )
}
