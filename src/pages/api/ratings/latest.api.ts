import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

import { prisma } from '@/src/lib/prisma'

const querySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(50).default(10),
})

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Permitir apenas GET
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      message: 'Only GET requests are allowed' 
    })
  }

  try {
    // Validar query params
    const { page, limit } = querySchema.parse(req.query)
    const skip = (page - 1) * limit

    // Buscar ratings com paginação
    const [ratings, totalCount] = await Promise.all([
      prisma.rating.findMany({
        orderBy: {
          created_at: 'desc',
        },
        include: {
          book: {
            select: {
              id: true,
              name: true,
              author: true,
              cover_url: true,
              total_pages: true,
            },
          },
          user: {
            select: {
              id: true,
              name: true,
              avatar_url: true,
            },
          },
        },
        skip,
        take: limit,
      }),
      prisma.rating.count(),
    ])

    // Retornar com metadados de paginação
    return res.status(200).json({
      data: ratings,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit),
        hasNextPage: skip + limit < totalCount,
        hasPrevPage: page > 1,
      },
    })
  } catch (error) {
    console.error('Error fetching latest ratings:', error)
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Invalid query parameters',
        details: error.errors,
      })
    }

    return res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to fetch latest ratings',
    })
  }
}
