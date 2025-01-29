import type { ReactNode } from 'react'
import { Container } from './styles'

type ButtonAuthProps = {
  icon?: ReactNode
  image_url?: string
  title: string
}

export const ButtonAuth = ({ icon, image_url, title }: ButtonAuthProps) => {
  return (
    <Container>
      {icon || <img src={image_url} alt="" />}
      <span>{title}</span>
    </Container>
  )
}
