import { Container, Title } from './styles'
import { CaretRight } from '@phosphor-icons/react'
import { BookCard } from '../BookCard'
import { useEffect, useState } from 'react'
import { api } from '@/src/lib/axios'
import { useSession } from 'next-auth/react'

interface Book {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  ratings: Array<{
    id: string
    rate: number
    created_at: string
    user: {
      id: string
      name: string
      avatar_url: string
    }
  }>
}

export const LastReading = () => {
  const [book, setBook] = useState<Book>()
  const { data: session } = useSession()
  const userId = session ? session.user.id : null

  useEffect(() => {
    if (userId) {
      api
        .get(`/ratings/last-reading?userId=${userId}`)
        .then((response) => {
          setBook(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [userId])

  book ? (
    <Container>
      <Title>
        <span>Sua última leitura</span>
        <a href="#">
          Ver todas
          <CaretRight size={16} />
        </a>
      </Title>
      <BookCard
        name={book.ratings[0].user.name}
        avatar_url={book.ratings[0].user.avatar_url}
        rating_date={book.ratings[0].created_at}
        rate={book.ratings[0].rate}
        book_cover_url={book.cover_url.replace('public', '')}
        book_name={book.name}
        book_author={book.author}
        book_description={book.summary}
      />
    </Container>
  ) : (
    <></>
  )
}
