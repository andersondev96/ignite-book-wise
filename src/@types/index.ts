export type User = {
  id: string
  name: string
  avatar_url: string
}

export type Book = {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  created_at: string
}

export type Rating = {
  id: string
  rate: number
  description: string
  created_at: string
  book_id: string
  user_id: string
  book: Book
  user: User
}
