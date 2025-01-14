import { Nunito } from '@next/font/google'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

export const nunito = Nunito({ subsets: ['latin'] })

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <div className={`${nunito.className}`}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  )
}
