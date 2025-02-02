import * as Dialog from '@radix-ui/react-dialog'
import { BookInfo, Content, Divisor, Overlay, RattingsSection } from './styles'
import { Stars } from '../../Stars'
import { BookmarkSimple, BookOpen } from '@phosphor-icons/react'
import { RattingCard } from '../../RattingCard'

export const Modal = () => {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <BookInfo>
          <img src="" alt="" />
          <strong>14 Hábitos de Desenvolvedores Altamente Produtivos</strong>
          <span>Zeno Rocha</span>
          <Stars />
          <span>3 avaliações</span>
          <Divisor />
          <div>
            <BookmarkSimple size={32} />
            <span>Categoria</span>
            <strong>Computação, educação</strong>
          </div>
          <div>
            <BookOpen size={32} />
            <span>Páginas</span>
            <strong>160</strong>
          </div>
        </BookInfo>

        <RattingsSection>
          <span>Avaliações</span>
          <strong>Avaliar</strong>

          <RattingCard />
        </RattingsSection>
      </Content>
    </Dialog.Portal>
  )
}
