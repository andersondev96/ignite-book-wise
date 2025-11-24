import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/src/lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const bookId = req.query.bookId as string

  if (!bookId) {
    return res.status(400).json({ error: 'Missing bookId parameter' })
  }

  try {
    const book = await prisma.book.findUnique({
      where: {
        id: bookId,
      },
      include: {
        ratings: {
          include: { user: true },
          orderBy: { created_at: 'desc' },
        },
        categories: {
          include: {
            category: true,
          }
        },
      },
    })

    if (!book) {
      return res.status(404).json({ error: 'Book not found' })
    }

    const ratingsSum = book.ratings.reduce((acc, rating) => acc + rating.rate, 0)
    const ratingsAvg = book.ratings.length > 0 ? ratingsSum / book.ratings.length : 0
    const totalRatings = book.ratings.length

    const bookWithStats = {
      ...book,
      avgRating: ratingsAvg,
      totalRatings,
    }

    return res.status(200).json({ book: bookWithStats, ratingsAvg })
  } catch (error) {
    console.error('Error fetching book details:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
