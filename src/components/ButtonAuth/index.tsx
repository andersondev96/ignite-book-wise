import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Container } from './styles'

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
}: ButtonAuthProps) => {
  return (
    <Container {...rest}>
      {icon || (imageUrl && <img src={imageUrl} alt="" />)}
      <span>{title}</span>
    </Container>
  )
}
