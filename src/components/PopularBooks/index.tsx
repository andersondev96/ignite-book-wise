import { Books, CaretRight } from '@phosphor-icons/react'
import {
  Container,
  PopularBookCard,
  PopularsBooks,
  TitleBook,
  TitleSection,
} from './styles'
import { useEffect, useState } from 'react'
import { api } from '@/src/lib/axios'
import { Stars } from '../Stars'
import Link from 'next/link'
import { ClipLoader } from 'react-spinners'

interface Books {
  id: string
  rate: number
  book: {
    name: string
    cover_url: string
    author: string
  }
}
export const PopularBooks = () => {
  const [books, setBooks] = useState<Books[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    api
      .get('/books/populars')
      .then((response) => {
        setBooks(response.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [])

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
          {books.map((book) => {
            return (
              <PopularBookCard key={book.id}>
                <img
                  src={book.book.cover_url.replace('public', '')}
                  alt={book.book.name}
                />

                <div>
                  <TitleBook>
                    <span>{book.book.name}</span>
                    <p>{book.book.author}</p>
                  </TitleBook>
                  <Stars rate={book.rate} />
                </div>
              </PopularBookCard>
            )
          })}
        </PopularsBooks>
      )}
    </Container>
  )
}
