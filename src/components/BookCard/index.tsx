import {
  AuthorSection,
  BookCardContainer,
  BookInfoContent,
  BookInfoSection,
  Text,
} from './styles'

interface BookCardProps {
  name: string
  avatar_url: string
  rating_date: string
  rate?: number
  book_cover_url: string
  book_name: string
  book_author: string
  book_description: string
}

export const BookCard = ({
  name,
  avatar_url,
  rating_date,
  rate = null,
  book_cover_url,
  book_name,
  book_author,
  book_description,
}: BookCardProps) => {
  console.log(book_cover_url)
  return (
    <BookCardContainer>
      <AuthorSection>
        <img src={avatar_url} alt={name} />
        <div>
          <span>{name}</span>
          <p>{rating_date}</p>
        </div>
      </AuthorSection>
      <BookInfoSection>
        <img src={book_cover_url} alt={book_name} />
        <BookInfoContent>
          <strong>{book_name}</strong>
          <span>{book_author}</span>

          <Text>{book_description}</Text>
        </BookInfoContent>
      </BookInfoSection>
    </BookCardContainer>
  )
}
