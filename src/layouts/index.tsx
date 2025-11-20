import React, { ReactNode } from 'react'

import Head from 'next/head'

import { Container, Content } from './styles'
import { SideBar } from '../components/ui/SideBar'

type DefaultLayoutProps = {
  children: ReactNode
  title: string
}

export const DefaultLayout = React.memo(function DefaultLayout({ title, children }: DefaultLayoutProps) {
  return (
    <Container>
      <Head>
        <title>{`${title} | Bookwise`}</title>
      </Head>

      <SideBar />
      <Content>{children}</Content>
    </Container>
  )
})
