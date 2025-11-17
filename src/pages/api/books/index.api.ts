import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/src/lib/prisma'
import type { ExploreBooksApiResponse } from '@/src/types/book'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<ExploreBooksApiResponse | { error: string }>,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const categoryId = req.query.category as string | undefined
  const name = req.query.name as string | undefined
  const page = parseInt(req.query.page as string) || 1
  const limit = parseInt(req.query.limit as string) || 20

  try {
    const where: any = {}

    if (name) {
      where.OR = [
        { name: { contains: name } },
        { author: { contains: name } },
      ]
    }

    if (categoryId && categoryId !== 'all') {
      where.categories = {
        some: {
          categoryId,
        },
      }
    }

    const total = await prisma.book.count({ where })

    const books = await prisma.book.findMany({
      where,
      include: {
        ratings: true,
        categories: {
          include: {
            category: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
      skip: (page - 1) * limit,
      take: limit,
    })

    const booksWithAvgRatings = books.map((book) => {
      const totalRatings = book.ratings.length
      const sumRatings = book.ratings.reduce((acc, { rate }) => acc + rate, 0)
      const avgRating = totalRatings > 0 ? sumRatings / totalRatings : 0

      return {
        ...book,
        avgRating: Number(avgRating.toFixed(1)),
        totalRatings,
      }
    })

    return res.status(200).json({
      data: booksWithAvgRatings,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Error fetching books:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}