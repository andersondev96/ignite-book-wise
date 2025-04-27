import {
  BookmarkSimple,
  BookOpen,
  Books,
  UserList,
} from '@phosphor-icons/react'
import dayjs from 'dayjs'

import { UserProps } from '@/src/pages/profile/[id].page'

import { ItemInfoProfile } from '../ItemInfoProfile'
import { BooksInfo, Container, Divisor, UserInfo } from './styles'
import { Avatar } from '../ui/Avatar'

interface ProfileDetailsProps {
  user: UserProps
}

export const ProfileDetails = ({ user }: ProfileDetailsProps) => {
  const {
    name,
    avatar_url,
    created_at,
    totalPagesRead,
    totalBooksRates,
    totalAuthorRead,
    mostRatedCategory,
  } = user

  const membershipYear = dayjs(new Date(created_at)).year()

  return (
    <Container>
      <UserInfo>
        <Avatar imageUrl={avatar_url} imageName={name} />
        <strong>{name}</strong>
        <span>membro desde {membershipYear}</span>
      </UserInfo>

      <Divisor />

      <BooksInfo>
        <ItemInfoProfile
          icon={<BookOpen size={32} />}
          title={totalPagesRead}
          description="Páginas lidas"
        />

        <ItemInfoProfile
          icon={<Books size={32} />}
          title={totalBooksRates}
          description="Livros avaliados"
        />

        <ItemInfoProfile
          icon={<UserList size={32} />}
          title={totalAuthorRead}
          description="Autores lidos"
        />

        <ItemInfoProfile
          icon={<BookmarkSimple size={32} />}
          title={mostRatedCategory}
          description="Categoria mais lida"
        />
      </BooksInfo>
    </Container>
  )
}
