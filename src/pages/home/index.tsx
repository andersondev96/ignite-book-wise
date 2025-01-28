import { HomeContainer } from '@/src/styles/pages/home'
import { NextPageWithLayout } from '../_app.page'
import { ReactElement } from 'react'
import { DefaultLayout } from '@/src/layouts'
import { LatestRatings } from '@/src/components/LatestRatings'
import { PopularBooks } from '@/src/components/PopularBooks'

const HomePage: NextPageWithLayout = () => {
  return (
    <HomeContainer>
      <LatestRatings />
      <PopularBooks />
    </HomeContainer>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>
}

export default HomePage
