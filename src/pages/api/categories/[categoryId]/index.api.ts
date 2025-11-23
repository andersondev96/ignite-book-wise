import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/src/lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const categoryId = req.query.categoryId as string

  if (!categoryId) {
    return res.status(400).json({ error: 'Missing categoryId parameter' })
  }

  try {
    const category = await prisma.category.findUnique({
      where: { id: categoryId },
    })

    if (!category) {
      return res.status(404).json({ error: 'Category not found' })
    }
    return res.status(201).json(category)
  } catch (err) {
    console.log('Error fetching category:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
