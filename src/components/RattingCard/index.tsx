import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { Container, Header, User, UserInfo } from './styles'
import { Stars } from '../ui/Stars'
import 'dayjs/locale/pt-br'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

interface User {
  id: string
  name: string
  avatar_url: string
}

interface Rating {
  id: string
  rate: number
  description: string
  created_at: string
  user: User
}

interface RatingCardProps {
  rating: Rating
}

export const RattingCard = ({ rating }: RatingCardProps) => {
  const { user, description, rate } = rating
  const timeAgo = dayjs(rating.created_at).fromNow()

  return (
    <Container>
      <Header>
        <User href={`profile/${user.id}`}>
          <img src={user?.avatar_url} alt={user.name} />
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
