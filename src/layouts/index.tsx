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
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>

      <SideBar />
      <Content>{children}</Content>
    </Container>
  )
}
