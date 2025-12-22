import {
  BookmarkSimple,
  BookOpen,
  Books,
  UserList,
} from "@phosphor-icons/react";
import { User as PrismaUser } from "@prisma/client";
import dayjs from "dayjs";
import { memo, useMemo } from "react";

import { ItemInfoProfile } from "../ItemInfoProfile";
import {
  Container,
  UserInfo,
  Divisor,
  BooksInfo,
  MembershipText,
} from "./styles";
import { Avatar } from "../ui/Avatar";

type UserSchema = PrismaUser & {
  totalPagesRead: number;
  totalBooksRates: number;
  totalAuthorRead: number;
  mostRatedCategory: string;
};

interface ProfileDetailsProps {
  user: UserSchema;
}

export const ProfileDetails = memo(({ user }: ProfileDetailsProps) => {
  const {
    name,
    avatar_url,
    created_at,
    totalPagesRead,
    totalBooksRates,
    totalAuthorRead,
    mostRatedCategory,
  } = user;

  const membershipYear = useMemo(
    () => dayjs(created_at).format("YYYY"),
    [created_at]
  );

  return (
    <Container aria-label={`Perfil de ${name}`}>
      <UserInfo>
        <Avatar src={avatar_url ?? null} alt={`Foto de ${name}`} size="lg" />
        <strong>{name}</strong>
        <MembershipText>membro desde {membershipYear}</MembershipText>
      </UserInfo>

      <Divisor aria-hidden="true" />

      <BooksInfo aria-label="Estatísticas de leitura">
        <ItemInfoProfile
          icon={<BookOpen size={24} />}
          title={totalPagesRead}
          description="Páginas lidas"
        />
        <ItemInfoProfile
          icon={<Books size={24} />}
          title={totalBooksRates}
          description="Livros avaliados"
        />
        <ItemInfoProfile
          icon={<UserList size={24} />}
          title={totalAuthorRead}
          description="Autores lidos"
        />
        <ItemInfoProfile
          icon={<BookmarkSimple size={24} />}
          title={mostRatedCategory}
          description="Categoria mais lida"
        />
      </BooksInfo>
    </Container>
  );
});

ProfileDetails.displayName = "ProfileDetails";
