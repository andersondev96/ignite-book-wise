import { useCallback } from 'react'

import { Container } from './styles'

type FilterItemProps = {
  title: string
  active: boolean
  onClick: () => void
}

export const FilterItem = ({ title, active, onClick }: FilterItemProps) => {
  const handleClick = useCallback(() => {
    onClick()
  }, [onClick])

  return (
    <Container onClick={handleClick} isActive={active} tabIndex={0}>
      <span>{title}</span>
    </Container>
  )
}
