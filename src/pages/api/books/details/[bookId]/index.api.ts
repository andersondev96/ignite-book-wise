import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/src/lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const bookId = req.query.bookId as string

  try {
    const book = await prisma.book.findUnique({
      where: {
        id: bookId,
      },
      include: {
        ratings: {
          include: {
            user: true,
          },
          orderBy: {
            created_at: 'desc',
          },
        },
        categories: true,
      },
    })

    if (!book) {
      return res.status(404).json({ error: 'Book not found' })
    }

    const ratingsSum = book.ratings.reduce((acc, rating) => {
      return acc + rating.rate
    }, 0)

    const ratingsAvg =
      book.ratings.length > 0 ? ratingsSum / book.ratings.length : 0

    return res.status(201).json({ book, ratingsAvg })
  } catch (error) {
    console.error('Error fetching book details:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
