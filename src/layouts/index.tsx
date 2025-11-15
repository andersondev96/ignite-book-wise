import { ReactNode } from 'react'

import Head from 'next/head'

import { Container, Content } from './styles'
import { SideBar } from '../components/ui/SideBar'

type DefaultLayoutProps = {
  children: ReactNode
  title: string
}

export const DefaultLayout = ({ title, children }: DefaultLayoutProps) => {
  return (
    <Container>
      <Head>
        <title>{`${title} | Bookwise`}</title>
        <meta name="description" content="Plataforma de avaliação e descoberta de livros" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>

      <SideBar />
      <Content>{children}</Content>
    </Container>
  )
}
