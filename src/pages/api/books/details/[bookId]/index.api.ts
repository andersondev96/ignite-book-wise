import { prisma } from '@/src/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const bookId = req.query.bookId as string

  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
    include: {
      ratings: true,
      categories: true,
    },
  })

  return res.status(201).json(book)
}
