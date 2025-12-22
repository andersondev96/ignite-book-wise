import { useCallback, memo, useMemo } from "react";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";
import { Book as PrismaBook, Rating as PrismaRating } from "@prisma/client";

import { Stars } from "../ui/Stars";
import {
  Container,
  BookCard,
  BookInfo,
  CoverImage,
  DetailsBook,
  TitleAndAuthor,
  Summary,
  TimeAgo,
} from "./styles";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

type RatingSchema = PrismaRating & {
  book: PrismaBook;
};

interface RatedBooksProfileProps {
  rate: RatingSchema;
}

export const RatedBooksProfile = memo(({ rate }: RatedBooksProfileProps) => {
  const router = useRouter();
  const { book, created_at } = rate;

  const timeAgo = useMemo(() => dayjs(created_at).fromNow(), [created_at]);

  const coverUrl = useMemo(
    () => book.cover_url.replace("public", ""),
    [book.cover_url]
  );

  const handleSelectedBook = useCallback(() => {
    router.push(`/explore?bookId=${book.id}`);
  }, [router, book.id]);

  return (
    <Container>
      <TimeAgo>{timeAgo}</TimeAgo>

      <BookCard
        role="button"
        tabIndex={0}
        onClick={handleSelectedBook}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleSelectedBook();
          }
        }}
        aria-label={`Ver detalhes do livro ${book.name}`}
      >
        <BookInfo>
          <CoverImage src={coverUrl} alt={`Capa do livro ${book.name}`} />
          <DetailsBook>
            <TitleAndAuthor>
              <strong>{book.name}</strong>
              <span>{book.author}</span>
            </TitleAndAuthor>
            <Stars rate={rate.rate} />
          </DetailsBook>
        </BookInfo>

        {book.summary && <Summary>{book.summary}</Summary>}
      </BookCard>
    </Container>
  );
});

RatedBooksProfile.displayName = "RatedBooksProfile";
