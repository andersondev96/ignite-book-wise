import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

import { prisma } from '@/src/lib/prisma'

const querySchema = z.object({
  limit: z.coerce.number().int().positive().max(20).default(5),
})

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      message: 'Only GET requests are allowed' 
    })
  }

  try {
    const { limit } = querySchema.parse(req.query)

    // Buscar livros com maior média de avaliações
    const popularBooks = await prisma.book.findMany({
      select: {
        id: true,
        name: true,
        author: true,
        cover_url: true,
        total_pages: true,
        ratings: {
          select: {
            rate: true,
          },
        },
      },
      where: {
        ratings: {
          some: {}, // Apenas livros com pelo menos uma avaliação
        },
      },
    })

    // Calcular média de avaliações e ordenar
    const booksWithAvgRating = popularBooks
      .map((book) => {
        const totalRatings = book.ratings.length
        const sumRatings = book.ratings.reduce((acc, rating) => acc + rating.rate, 0)
        const avgRating = totalRatings > 0 ? sumRatings / totalRatings : 0

        return {
          id: book.id,
          name: book.name,
          author: book.author,
          cover_url: book.cover_url,
          total_pages: book.total_pages,
          avgRating: Number(avgRating.toFixed(1)),
          totalRatings,
        }
      })
      .sort((a, b) => {
        // Ordenar primeiro por média, depois por quantidade de avaliações
        if (b.avgRating !== a.avgRating) {
          return b.avgRating - a.avgRating
        }
        return b.totalRatings - a.totalRatings
      })
      .slice(0, limit)

    return res.status(200).json({
      data: booksWithAvgRating,
    })
  } catch (error) {
    console.error('Error fetching popular books:', error)
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Invalid query parameters',
        details: error.errors,
      })
    }

    return res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to fetch popular books',
    })
  }
}
