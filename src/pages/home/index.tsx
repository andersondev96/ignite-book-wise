import { ReactElement } from 'react'
import Head from 'next/head'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import type { GetStaticProps } from 'next'

import { LatestRatings } from '@/src/components/LatestRatings'
import { PopularBooks } from '@/src/components/PopularBooks'
import { DefaultLayout } from '@/src/layouts'
import { HomeContainer, MainContent, Sidebar, SkipLink } from '@/src/styles/pages/home'
import { NextPageWithLayout } from '../_app.page'
import { api } from '@/src/lib/axios'

interface HomePageProps {
  dehydratedState: unknown
}

const HomePage: NextPageWithLayout<HomePageProps> = ({ dehydratedState }) => {
  return (
    <>
      <Head>
        <title>BookWise | Descubra sua próxima leitura</title>
        <meta 
          name="description" 
          content="Plataforma de avaliação e descoberta de livros. Encontre recomendações, compartilhe suas leituras e conecte-se com outros leitores." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph */}
        <meta property="og:title" content="BookWise - Descubra sua próxima leitura" />
        <meta property="og:description" content="Avalie livros, compartilhe suas leituras e descubra novas recomendações" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://bookwise.com" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BookWise - Descubra sua próxima leitura" />
        <meta name="twitter:description" content="Avalie livros e descubra recomendações" />
        <meta name="twitter:image" content="/images/og-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://bookwise.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SkipLink href="#main-content">
        Pular para o conteúdo principal
      </SkipLink>

        <HomeContainer>
          <MainContent id="main-content" role="main" aria-label="Conteúdo principal">
            <LatestRatings />
          </MainContent>

          <Sidebar role="complementary" aria-label="Livros populares">
            <PopularBooks />
          </Sidebar>
        </HomeContainer>
    </>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        retry: 1,
      },
    },
  })

  try {
    await Promise.all([
      queryClient.prefetchQuery({
        queryKey: ['latest-ratings'],
        queryFn: async () => {
          const { data } = await api.get('/ratings/latest')
          return data
        },
      }),
      queryClient.prefetchQuery({
        queryKey: ['popular-books'],
        queryFn: async () => {
          const { data } = await api.get('/books/populars')
          return data
        },
      }),
    ])

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
      revalidate: 60 * 10, 
    }
  } catch (error) {
    console.error('Error prefetching data:', error)
    
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
      revalidate: 60, 
    }
  } finally {
    queryClient.clear()
  }
}

export default HomePage
