import { ButtonHTMLAttributes, ReactNode } from 'react'

import { Container, IconWrapper } from './styles'

type ButtonAuthProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode
  imageUrl?: string
  title: string
}

export const ButtonAuth = ({
  icon,
  imageUrl,
  title,
  ...rest
}: ButtonAuthProps) => (
  <Container {...rest}>
    <IconWrapper>
      {icon || (imageUrl && <img src={imageUrl} alt="title" loading="lazy" />)}
    </IconWrapper>
    <span>{title}</span>
  </Container>
)
