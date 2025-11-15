import type { Book, User, Rating } from '@prisma/client'

export type RatingWithRelations = Rating & {
  book: Book
  user: User
}

export type RatingWithBook = Rating & {
  book: Book
}

export type RatingWithUser = Rating & {
  user: User
}

export type RatingsApiResponse = {
  data: RatingWithRelations[]
  pagination: {
    page: number
    limit: number
    totalCount: number
    totalPages: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
}
