import { Rating as PrismaRating, User as PrismaUser } from '@prisma/client'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useSession } from 'next-auth/react'

import { Container, Content, Header, StarsWrapper, Text, User, UserInfo } from './styles'
import { Stars } from '../ui/Stars'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

type RatingSchema = PrismaRating & { user: PrismaUser }

interface RatingCardProps {
  rating: RatingSchema
}

export const RattingCard = ({ rating }: RatingCardProps) => {
  const { data: session } = useSession()
  const isOwner = session?.user?.id === rating.user.id
  const timeAgo = dayjs(rating.created_at).fromNow()

  return (
    <Container
      role="article"
      aria-labelledby={`rating-${rating.id}-user`}
      isOwner={isOwner}
    >
      <Header>
        <User
          href={`/profile/${rating.user.id}`}
          className="user-link"
          aria-label={`Ver perfil de ${rating.user.name}`}
        >
          <img src={rating.user.avatar_url ?? ''} alt={rating.user.name} />
          <UserInfo id={`rating-${rating.id}-user`}>
            <strong>{rating.user.name}</strong>
            <span aria-label={`Há ${timeAgo}`}>{timeAgo}</span>
          </UserInfo>
        </User>
        <StarsWrapper aria-label={`Nota ${rating.rate} de 5 estrelas`}>
          <Stars rate={rating.rate} size={18} />
        </StarsWrapper>
      </Header>

      <Content>
        <Text>{rating.description}</Text>
      </Content>
    </Container>
  )
}
