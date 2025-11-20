import { useCallback, KeyboardEvent } from 'react'
import { Container } from './styles'

type FilterItemProps = {
  title: string
  active: boolean
  onClick: () => void
  ariaPressed?: boolean
  ariaLabel?: string
}

export const FilterItem = ({
  title,
  active,
  onClick,
  ariaPressed,
  ariaLabel,
}: FilterItemProps) => {
  const handleClick = useCallback(() => {
    onClick()
  }, [onClick])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        onClick()
      }
    },
    [onClick]
  )

  return (
    <Container
      isActive={active}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="tab"
      aria-selected={active}
      aria-pressed={ariaPressed ?? active}
      aria-label={ariaLabel || title}
      title={title}
    >
      <span>{title}</span>
    </Container>
  )
}

export default FilterItem
