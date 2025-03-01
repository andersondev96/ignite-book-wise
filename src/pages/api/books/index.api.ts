import { prisma } from '@/src/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const categoryId = req.query.category as string

  const books = await prisma.book.findMany({
    where: {
      categories: {
        some: {
          categoryId,
        },
      },
    },
    include: {
      ratings: true,
    },
  })

  return res.status(201).json(books)
}
