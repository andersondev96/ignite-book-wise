import { useCallback, useMemo, useState } from 'react'
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
  const [currentRate, setCurrentRate] = useState(rate)
  const [hoveredRate, setHoveredRate] = useState<number | null>(null)

  const isEditable = mode === 'edit'

  const handleClick = useCallback(
    (value: number) => {
      if (!isEditable) return

      const newValue = value === currentRate ? 0 : value
      setCurrentRate(newValue)
      onRateChange?.(newValue)
    },
    [currentRate, isEditable, onRateChange],
  )

  const handleMouseEnter = useCallback(
    (value: number) => {
      if (isEditable) {
        setHoveredRate(value)
      }
    },
    [isEditable],
  )

  const handleMouseLeave = useCallback(() => {
    if (isEditable) {
      setHoveredRate(null)
    }
  }, [isEditable])

  const getStarStyle = useCallback(
    (index: number) => {
      if (hoveredRate !== null && isEditable) {
        return { width: hoveredRate >= index ? '100%' : '0%' }
      }

      if (currentRate >= index) {
        return { width: '100%' }
      }

      if (currentRate + 0.5 >= index) {
        return { width: '50%' }
      }

      return { width: '0%' }
    },
    [currentRate, hoveredRate, isEditable],
  )

  const stars = useMemo(() => Array.from({ length: 5 }, (_, i) => i + 1), [])

  return (
    <Container>
      {stars.map((starIndex) => (
        <StarContainer
          key={starIndex}
          onClick={() => handleClick(starIndex)}
          onMouseEnter={() => handleMouseEnter(starIndex)}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: isEditable ? 'pointer' : 'default' }}
        >
          <StarBackground size={16} weight="fill" />
          <StarForeground
            style={getStarStyle(starIndex)}
            size={16}
            weight="fill"
          />
        </StarContainer>
      ))}
    </Container>
  )
}
