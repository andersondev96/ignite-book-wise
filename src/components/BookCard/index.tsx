import {
  AuthorSection,
  BookCardContainer,
  BookInfoSection,
  Text,
} from './styles'

export const BookCard = () => {
  return (
    <BookCardContainer>
      <AuthorSection>
        <div>
          <img src="" alt="" />
          <span>Jaxson Dias</span>
          <p>Hoje</p>
        </div>
      </AuthorSection>
      <BookInfoSection>
        <img src="" alt="" />
        <div>
          <span>O Hobbit</span>
          <p>J.R.R Tolkein</p>
          <Text>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh... ver mais
          </Text>
        </div>
      </BookInfoSection>
    </BookCardContainer>
  )
}
