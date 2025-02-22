import * as Dialog from '@radix-ui/react-dialog'
import {
  About,
  BookData,
  BookDataDescription,
  BookInfo,
  Category,
  CloseButton,
  Content,
  Overlay,
  Pages,
  RatingBook,
  RattingsSection,
  Title,
  TitleAndActorBook,
} from './styles'
import { Stars } from '../../Stars'
import { BookmarkSimple, BookOpen, X } from '@phosphor-icons/react'
import { RattingCard } from '../../RattingCard'
import { RattingForm } from '../../RattingForm'

export const Modal = () => {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={21} />
        </CloseButton>
        <BookInfo>
          <BookData>
            <img src="../images/books/arquitetura-limpa.png" alt="" />
            <BookDataDescription>
              <TitleAndActorBook>
                <strong>
                  14 Hábitos de Desenvolvedores Altamente Produtivos
                </strong>
                <span>Zeno Rocha</span>
              </TitleAndActorBook>
              <RatingBook>
                <Stars />
                <span>3 avaliações</span>
              </RatingBook>
            </BookDataDescription>
          </BookData>
          <About>
            <Category>
              <BookmarkSimple size={24} />
              <div>
                <span>Categoria</span>
                <strong>Computação, educação</strong>
              </div>
            </Category>

            <Pages>
              <BookOpen size={24} />
              <div>
                <span>Páginas</span>
                <strong>160</strong>
              </div>
            </Pages>
          </About>
        </BookInfo>

        <RattingsSection>
          <Title>
            <span>Avaliações</span>
            <strong>Avaliar</strong>
          </Title>
          <RattingForm />

          <RattingCard />
        </RattingsSection>
      </Content>
    </Dialog.Portal>
  )
}
