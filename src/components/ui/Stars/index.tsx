import { useCallback, useMemo, useState } from 'react'

import {
  Container,
  StarContainer,
  StarBackground,
  StarForeground,
  StarForegroundWrapper,
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
      const activeRate = hoveredRate ?? currentRate
      const fill = activeRate >= index ? 1 : 0

      return { width: `${fill * 100}%` }
    },
    [currentRate, hoveredRate],
  )

  const stars = useMemo(() => [1, 2, 3, 4, 5], [])

  return (
    <Container>
      {stars.map((starValue, index) => (
        <StarContainer
          key={index}
          onClick={() => handleClick(starValue)}
          onMouseEnter={() => handleMouseEnter(starValue)}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: isEditable ? 'pointer' : 'default' }}
        >
          <StarBackground size={16} weight="fill" />
          <StarForegroundWrapper style={getStarStyle(starValue)}>
            <StarForeground size={16} weight="fill" />
          </StarForegroundWrapper>
        </StarContainer>
      ))}
    </Container>
  )
}
