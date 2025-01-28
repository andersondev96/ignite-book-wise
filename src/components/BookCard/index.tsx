import {
  AuthorSection,
  BookCardContainer,
  BookInfoContent,
  BookInfoSection,
  Text,
} from './styles'

export const BookCard = () => {
  return (
    <BookCardContainer>
      <AuthorSection>
        <img src="" alt="" />
        <div>
          <span>Jaxson Dias</span>
          <p>Hoje</p>
        </div>
      </AuthorSection>
      <BookInfoSection>
        <img src="" alt="" />
        <BookInfoContent>
          <strong>O Hobbit</strong>
          <span>J.R.R Tolkein</span>

          <Text>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh... ver mais
          </Text>
        </BookInfoContent>
      </BookInfoSection>
    </BookCardContainer>
  )
}
