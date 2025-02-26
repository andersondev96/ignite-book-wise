import { prisma } from '@/src/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const ratings = await prisma.rating.findMany({
    orderBy: {
      rate: 'desc',
    },
    include: {
      book: true,
    },
    take: 5,
  })

  return res.status(201).json(ratings)
}
