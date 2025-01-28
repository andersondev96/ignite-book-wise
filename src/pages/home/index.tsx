import { HomeContainer } from '@/src/styles/pages/home'
import { NextPageWithLayout } from '../_app.page'
import { ReactElement } from 'react'
import { DefaultLayout } from '@/src/layouts'
import { MyBooks } from '@/src/components/MyBooks'

const HomePage: NextPageWithLayout = () => {
  return (
    <HomeContainer>
      <MyBooks />
    </HomeContainer>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>
}

export default HomePage
