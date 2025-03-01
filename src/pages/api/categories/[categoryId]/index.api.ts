import { prisma } from '@/src/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const categoryId = req.query.categoryId as string

  const category = await prisma.category.findUnique({
    where: {
      id: categoryId,
    },
  })

  return res.status(201).json(category)
}
