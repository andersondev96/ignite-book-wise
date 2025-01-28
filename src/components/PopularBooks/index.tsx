import { CaretRight } from '@phosphor-icons/react'
import { Container, PopularBookCard, TitleSection } from './styles'

export const PopularBooks = () => {
  return (
    <Container>
      <TitleSection>
        <span>Livros populares</span>
        <a href="">
          Ver todos
          <CaretRight size={16} />
        </a>
      </TitleSection>

      <PopularBookCard>
        <img src="" alt="" />

        <div>
          <span>A revolução dos bichos</span>
          <p>George Orwell</p>
        </div>
      </PopularBookCard>
    </Container>
  )
}
