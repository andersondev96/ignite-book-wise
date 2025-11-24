import type { Book, Category, Rating, User, CategoriesOnBooks } from '@prisma/client'
import type { RatingWithUser } from '@/src/types/rating'

export type BookWithRatings = Book & {
  ratings: Rating[]
  avgRating: number
  totalRatings: number
}

export type BookWithCategories = Book & {
  categories: Array<CategoriesOnBooks & {
    category: Category
  }>
}

export type BookWithDetails = Book & {
  ratings: Array<Rating & {
    user: User
  }>
  categories: Array<CategoriesOnBooks & {
    category: Category
  }>
  avgRating: number
  totalRatings: number
}

export type ExploreBook = Book & {
  ratings: Rating[]
  avgRating: number
  totalRatings: number
  categories: Array<{
    categoryId: string
    category: {
      id: string
      name: string
    }
  }>
}

export type ExploreBooksApiResponse = {
  data: ExploreBook[]
  pagination?: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
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

export type CategoryOnBook = {
  categoryId: string
  category: {
    id: string
    name: string
  }
}

export type BookDetails = Book & {
  ratings: RatingWithUser[]
  categories: Array<CategoriesOnBooks & {
    category: Category
  }>
  avgRating: number
  totalRatings: number
}

export type BookDetailsApiResponse = {
  book: BookDetails
  ratingsAvg: number
  totalRatings: number
}
