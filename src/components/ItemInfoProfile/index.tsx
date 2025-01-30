import type { ReactNode } from 'react'
import { Container, ItemInfo } from './styles'

interface ItemInfoProfileProps {
  icon: ReactNode
  title: string
  description: string
}

export const ItemInfoProfile = ({
  icon,
  title,
  description,
}: ItemInfoProfileProps) => {
  return (
    <Container>
      {icon}
      <ItemInfo>
        <strong>{title}</strong>
        <span>{description}</span>
      </ItemInfo>
    </Container>
  )
}
