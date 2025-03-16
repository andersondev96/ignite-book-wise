import dayjs from 'dayjs'
import {
  BookmarkSimple,
  BookOpen,
  Books,
  UserList,
} from '@phosphor-icons/react'
import { BooksInfo, Container, Divisor, UserInfo } from './styles'
import { ItemInfoProfile } from '../ItemInfoProfile'
import { UserProps } from '@/src/pages/profile/[id].page'

interface ProfileDetailsProps {
  user: UserProps
}

export const ProfileDetails = ({ user }: ProfileDetailsProps) => {
  return (
    <Container>
      <UserInfo>
        <img src={user.avatar_url} alt={user.name} />
        <strong>{user.name}</strong>
        <span>membro desde {dayjs(new Date(user.created_at)).year()}</span>
      </UserInfo>
      <Divisor />
      <BooksInfo>
        <ItemInfoProfile
          icon={<BookOpen size={32} />}
          title={user.totalPagesRead}
          description="Páginas lidas"
        />

        <ItemInfoProfile
          icon={<Books size={32} />}
          title={user.totalBooksRates}
          description="Livros avaliados"
        />

        <ItemInfoProfile
          icon={<UserList size={32} />}
          title={user.totalAuthorRead}
          description="Autores lidos"
        />

        <ItemInfoProfile
          icon={<BookmarkSimple size={32} />}
          title={user.mostRatedCategory}
          description="Categoria mais lida"
        />
      </BooksInfo>
    </Container>
  )
}
