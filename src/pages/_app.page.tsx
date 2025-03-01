import { Nunito } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import { CategoryProvider } from '../contexts/CategoryContext'

export const nunito = Nunito({ subsets: ['latin'] })

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <SessionProvider session={session}>
      <div className={`${nunito.className}`}>
        <CategoryProvider>
          {getLayout(<Component {...pageProps} />)}
        </CategoryProvider>
      </div>
    </SessionProvider>
  )
}
