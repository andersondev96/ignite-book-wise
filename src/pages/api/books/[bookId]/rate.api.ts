import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { z } from 'zod'

import { prisma } from '@/src/lib/prisma'

import { buildNextAuthOptions } from '../../auth/[...nextauth].api'

const rateBodySchema = z.object({
  description: z.string().max(450),
  rate: z.number().min(1).max(5),
})

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session) {
    return res.status(401).end()
  }

  try {
    const bookId = req.query.bookId as string
    const userId = session.user.id as string

    const userAlreadyRated = await prisma.rating.findFirst({
      where: {
        user_id: userId,
        book_id: bookId,
      },
    })

    if (userAlreadyRated) {
      return res.status(400).json({ error: 'You already rated this book' })
    }

    const { description, rate } = rateBodySchema.parse(req.body)

    await prisma.rating.create({
      data: {
        description,
        rate,
        book_id: bookId,
        user_id: userId,
      },
    })

    return res.status(201).end()
  } catch (err) {
    console.error(err)
    return res.status(400).end()
  }
}
