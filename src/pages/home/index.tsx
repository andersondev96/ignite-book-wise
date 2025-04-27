import { ReactElement } from 'react'

import { LatestRatings } from '@/src/components/LatestRatings'
import { PopularBooks } from '@/src/components/PopularBooks'
import { DefaultLayout } from '@/src/layouts'
import { HomeContainer } from '@/src/styles/pages/home'

import { NextPageWithLayout } from '../_app.page'

const HomePage: NextPageWithLayout = () => (
  <HomeContainer>
    <LatestRatings />
    <PopularBooks />
  </HomeContainer>
)

HomePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>
}

export default HomePage
