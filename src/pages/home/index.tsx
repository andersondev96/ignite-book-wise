import { ReactElement } from 'react'
import { HomeContainer } from '@/src/styles/pages/home'
import { DefaultLayout } from '@/src/layouts'
import { LatestRatings } from '@/src/components/LatestRatings'
import { PopularBooks } from '@/src/components/PopularBooks'
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
