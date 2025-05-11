import { Rating as PrismaRating, User as PrismaUser } from '@prisma/client'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useSession } from 'next-auth/react'

import { Container, Header, User, UserInfo } from './styles'
import { Stars } from '../ui/Stars'

import 'dayjs/locale/pt-br'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

type RatingSchema = PrismaRating & {
  user: PrismaUser
}

interface RatingCardProps {
  rating: RatingSchema
}

export const RattingCard = ({ rating }: RatingCardProps) => {
  const { data: session } = useSession()
  const { user, description, rate } = rating
  const timeAgo = dayjs(rating.created_at).fromNow()

  const isOwner = session?.user?.id === user.id

  return (
    <Container isOwner={isOwner}>
      <Header>
        <User href={`profile/${user.id}`}>
          <img src={user.avatar_url ?? ''} alt={user.name} />
          <UserInfo>
            <strong>{user.name}</strong>
            <span>{timeAgo}</span>
          </UserInfo>
        </User>
        <Stars rate={rate} />
      </Header>

      <p>{description}</p>
    </Container>
  )
}
