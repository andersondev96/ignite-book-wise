import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/src/lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const profileId = req.query.profileId as string

  const profile = await prisma.user.findUnique({
    where: {
      id: profileId,
    },
  })

  if (!profile) {
    return res.status(404).json({ error: 'Perfil não encontrado' })
  }

  const ratings = await prisma.rating.findMany({
    where: {
      user_id: profileId,
    },
    include: {
      book: {
        include: {
          categories: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  })

  if (!ratings) {
    return res.status(404).json({ error: 'Avaliações não encontradas' })
  }

  const totalPagesRead = ratings.reduce((sum, rating) => {
    return sum + (rating.book.total_pages || 0)
  }, 0)

  const totalBooksRates = ratings.length

  const authors = new Set(
    ratings.map((rating) => rating.book.author).filter(Boolean),
  )

  const categoryCount: Record<string, number> = {}

  ratings.forEach((rating) => {
    rating.book.categories.forEach((category) => {
      categoryCount[category.category.name] =
        (categoryCount[category.category.name] || 0) + 1
    })
  })

  const mostRatedCategory = Object.entries(categoryCount).reduce(
    (max, entry) => (entry[1] > max[1] ? entry : max),
    ['', 0],
  )[0]

  return res.status(201).json({
    ...profile,
    totalPagesRead,
    totalBooksRates,
    totalAuthorRead: authors.size,
    mostRatedCategory,
  })
}
