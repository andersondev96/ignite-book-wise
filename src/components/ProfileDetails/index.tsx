import {
  BookmarkSimple,
  BookOpen,
  Books,
  UserList,
} from '@phosphor-icons/react'
import { BooksInfo, Container, Divisor, UserInfo } from './styles'
import { ItemInfoProfile } from '../ItemInfoProfile'

export const ProfileDetails = () => {
  return (
    <Container>
      <UserInfo>
        <img src="" alt="" />
        <strong>Cristofer Rosser</strong>
        <span>membro desde 2019</span>
      </UserInfo>
      <Divisor />
      <BooksInfo>
        <ItemInfoProfile
          icon={<BookOpen size={32} />}
          title="Páginas lidas"
          description="3853"
        />

        <ItemInfoProfile
          icon={<Books size={32} />}
          title="Livros avaliados"
          description="10"
        />

        <ItemInfoProfile
          icon={<UserList size={32} />}
          title="Autores lidos"
          description="8"
        />

        <ItemInfoProfile
          icon={<BookmarkSimple size={32} />}
          title="Categoria mais lida"
          description="Computação"
        />
      </BooksInfo>
    </Container>
  )
}
