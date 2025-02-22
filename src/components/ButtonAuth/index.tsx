import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Container } from './styles'

type ButtonAuthProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode
  image_url?: string
  title: string
}

export const ButtonAuth = ({
  icon,
  image_url,
  title,
  ...rest
}: ButtonAuthProps) => {
  return (
    <Container {...rest}>
      {icon || <img src={image_url} alt="" />}
      <span>{title}</span>
    </Container>
  )
}
