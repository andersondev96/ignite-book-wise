import { ReactNode } from 'react'

import { Container, ItemInfo } from './styles'
import { IconWrapper } from '../ButtonAuth/styles'

interface ItemInfoProfileProps {
  icon: ReactNode
  title: string | number
  description: string
}

export const ItemInfoProfile = ({
  icon,
  title,
  description,
}: ItemInfoProfileProps) => (
  <Container>
    <IconWrapper>{icon}</IconWrapper>
    <ItemInfo>
      <strong>{title}</strong>
      <span>{description}</span>
    </ItemInfo>
  </Container>
)
