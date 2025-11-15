import type { Book, User, Rating } from '@prisma/client'

export type CardProps = {
  rating: Rating & {
    book: Book
    user: User | null
  }
  type: 'latest' | 'popular'
  role?: string
}