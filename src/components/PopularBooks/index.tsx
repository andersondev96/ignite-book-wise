import { CaretRight } from '@phosphor-icons/react'
import {
  Container,
  PopularBookCard,
  PopularsBooks,
  TitleBook,
  TitleSection,
} from './styles'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/src/lib/axios'
import { Stars } from '../ui/Stars'
import Link from 'next/link'
import { ClipLoader } from 'react-spinners'
import { useRouter } from 'next/router'

interface Rating {
  id: string
  rate: number
  book: {
    id: string
    name: string
    cover_url: string
    author: string
  }
}
export const PopularBooks = () => {
  const [ratings, setRatings] = useState<Rating[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const route = useRouter()

  useEffect(() => {
    api
      .get('/books/populars')
      .then((response) => {
        setRatings(response.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  const handleSelectedBook = useCallback(
    (bookId: string) => {
      localStorage.setItem('bookId', bookId)

      route.push('explore')
    },
    [route],
  )

  return (
    <Container>
      <TitleSection>
        <span>Livros populares</span>
        <Link href="/explore">
          Ver todos
          <CaretRight size={16} />
        </Link>
      </TitleSection>

      {loading ? (
        <ClipLoader size={50} color="#4fa94d" loading={loading} />
      ) : (
        <PopularsBooks>
          {ratings.map((rating) => {
            return (
              <PopularBookCard key={rating.id}>
                <img
                  src={rating.book.cover_url.replace('public', '')}
                  alt={rating.book.name}
                  onClick={() => handleSelectedBook(rating.book.id)}
                />

                <div>
                  <TitleBook>
                    <span>{rating.book.name}</span>
                    <p>{rating.book.author}</p>
                  </TitleBook>
                  <Stars rate={rating.rate} />
                </div>
              </PopularBookCard>
            )
          })}
        </PopularsBooks>
      )}
    </Container>
  )
}
