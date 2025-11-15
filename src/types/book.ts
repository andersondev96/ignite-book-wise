import type { Book, Rating } from '@prisma/client'

export type BookWithRatings = Book & {
  ratings: Rating[]
}

export type PopularBook = {
  id: string
  name: string
  author: string
  cover_url: string
  total_pages: number
  avgRating: number
  totalRatings: number
}

export type PopularBookRating = {
  id: string
  rate: number
  book: {
    id: string
    name: string
    author: string
    cover_url: string
    total_pages: number
  }
}

export type PopularBooksApiResponse = {
  data: PopularBook[]
}

export type BookDetails = Book & {
  ratings: Array<Rating & {
    user: {
      id: string
      name: string
      avatar_url: string | null
    }
  }>
  categories: Array<{
    categoryId: string
    name: string
  }>
  avgRating: number
  totalRatings: number
}
