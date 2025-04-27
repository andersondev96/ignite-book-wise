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

  const where: any = {}

  if (categoryId) {
    where.categories = {
      some: categoryId,
    }
  }

  const books = await prisma.book.findMany({
    where: {
      ...(name && {
        name: {
          contains: name,
        },
      }),
      ...(categoryId && {
        categories: {
          some: {
            categoryId,
          },
        },
      }),
    },
    include: {
      ratings: true,
    },
  })

  const booksWithAvgRatings = books.map((book) => {
    const totalRatings = book.ratings.length
    const sumRatings = book.ratings.reduce(
      (acc, rating) => acc + rating.rate,
      0,
    )
    const avgRating = totalRatings > 0 ? sumRatings / totalRatings : 0

    return {
      ...book,
      avgRating,
    }
  })

  return res.status(201).json(booksWithAvgRatings)
}
