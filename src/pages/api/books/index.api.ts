import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/src/lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const categoryId = req.query.category as string
  const name = req.query.name as string

  const filters: any = {}

  if (name) {
    filters.name = {
      contains: name,
    }
  }

  if (categoryId) {
    filters.categories = {
      some: {
        categoryId,
      },
    }
  }

  try {
    const books = await prisma.book.findMany({
      where: filters,
      include: {
        ratings: true,
      },
    })

    const booksWithAvgRatings = books.map((book) => {
      const totalRatings = book.ratings.length
      const sumRatings = book.ratings.reduce((acc, { rate }) => acc + rate, 0)
      const avgRating = totalRatings > 0 ? sumRatings / totalRatings : 0

      return {
        ...book,
        avgRating,
      }
    })

    return res.status(200).json(booksWithAvgRatings)
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
