import { useState, memo } from 'react'
import {
  Container,
  StarContainer,
  StarBackground,
  StarForegroundWrapper,
  StarForeground,
} from './styles'

type StarsProps = {
  rate: number
  max?: number
  onChange?: (v: number) => void
  editable?: boolean
  'aria-label'?: string
  size?: number
  disabled?: boolean
}

export const Stars = memo(function Stars({
  rate,
  max = 5,
  onChange,
  editable = false,
  disabled = false,
  'aria-label': ariaLabel,
  size = 20,
}: StarsProps) {
  const [hovered, setHovered] = useState<number | null>(null)
  const [focused, setFocused] = useState<number | null>(null)

  const displayStars = editable && (hovered !== null ? hovered : focused !== null ? focused : rate) || rate

  const fullStars = Math.floor(displayStars)
  const hasHalfStar = !editable && displayStars % 1 >= 0.5

  function setValue(val: number) {
    if (!disabled && editable && onChange) onChange(val)
  }

  function handleKeyDown(idx: number, e: React.KeyboardEvent) {
    if (!editable || disabled) return
    if (e.key === 'Enter' || e.key === ' ') setValue(idx + 1)
    if (e.key === 'ArrowLeft' && idx > 0) setFocused(idx)
    if (e.key === 'ArrowRight' && idx < max - 1) setFocused(idx + 2)
    if (e.key === 'Home') setFocused(1)
    if (e.key === 'End') setFocused(max)
  }

  return (
    <Container
      aria-label={ariaLabel ?? (editable ? `Escolha de avaliação, ${displayStars} de ${max} estrelas` : `${displayStars} de ${max} estrelas`)}
      role="group"
      tabIndex={-1}
      data-testid="rating-stars"
      style={{ pointerEvents: disabled ? 'none' : undefined, opacity: disabled ? 0.7 : 1 }}
    >
      {[...Array(max)].map((_, i) => {
        let percent: number = 0
        if (i < fullStars) {
          percent = 100
        } else if (i === fullStars && hasHalfStar) {
          percent = 50
        }

        if (editable && (hovered !== null || focused !== null)) {
          percent = i < displayStars ? 100 : 0
        }
        return (
          <StarContainer
            key={i}
            tabIndex={editable && !disabled ? 0 : -1}
            aria-label={editable ? `Dar nota ${i + 1}` : undefined}
            aria-checked={editable ? (displayStars === i + 1) : undefined}
            role={editable ? 'radio' : undefined}
            editable={editable}
            isActive={displayStars >= i + 1}
            onMouseEnter={() => editable && !disabled && setHovered(i + 1)}
            onMouseLeave={() => editable && !disabled && setHovered(null)}
            onFocus={() => editable && !disabled && setFocused(i + 1)}
            onBlur={() => editable && !disabled && setFocused(null)}
            onClick={() => editable && !disabled && setValue(i + 1)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            style={{ width: size, height: size, cursor: editable && !disabled ? 'pointer' : undefined }}
          >
            <StarBackground weight="fill" />
            <StarForegroundWrapper style={{ width: `${percent}%` }}>
              <StarForeground weight="fill" />
            </StarForegroundWrapper>
          </StarContainer>
        )
      })}
    </Container>
  )
})

export default Stars
