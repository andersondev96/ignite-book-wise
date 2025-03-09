import { prisma } from '@/src/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const profileId = req.query.profileId as string
  const bookName = req.query.book as string

  const ratings = await prisma.rating.findMany({
    where: {
      user_id: profileId,
      ...(bookName && {
        book: {
          name: {
            contains: bookName,
          },
        },
      }),
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
  return res.status(201).json({
    ratings,
  })
}
