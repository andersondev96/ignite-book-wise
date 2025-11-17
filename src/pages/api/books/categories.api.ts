import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/src/lib/prisma'
import type { CategoriesApiResponse } from '@/src/types/category'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<CategoriesApiResponse | { error: string }>,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        name: 'asc',
      },
    })

    return res.status(200).json({ data: categories })
  } catch (error) {
    console.error('Error fetching categories:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
