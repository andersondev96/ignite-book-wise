import { Stars } from '../Stars'
import { Container, Header, User, UserInfo } from './styles'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'

dayjs.extend(relativeTime)

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

interface RatingCardProops {
  rating: Rating
}

export const RattingCard = ({ rating }: RatingCardProops) => {
  return (
    <Container>
      <Header>
        <User>
          <img src={rating.user?.avatar_url} alt={rating.user.name} />
          <UserInfo>
            <strong>{rating.user.name}</strong>
            <span>
              {dayjs().locale('pt-br').from(dayjs(rating.created_at))}
            </span>
          </UserInfo>
        </User>
        <Stars quantity={rating.rate} />
      </Header>

      <p>{rating.description}</p>
    </Container>
  )
}
