import type { ComponentProps, ReactNode } from 'react'
import { Container } from './styles'

type PageTitleProps = ComponentProps<typeof Container> & {
  title: string
  icon: ReactNode
}

export const PageTitle = ({ title, icon, ...props }: PageTitleProps) => {
  return (
    <Container {...props}>
      {icon}
      <h1>{title}</h1>
    </Container>
  )
}
