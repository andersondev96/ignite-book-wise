import * as Dialog from '@radix-ui/react-dialog'
import { Stars } from '../Stars'
import { BookInfo, BookName, Container } from './styles'
import { Modal } from '../ui/Modal'

export const Book = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Container>
          <img src="./images/books/arquitetura-limpa.png" alt="" />
          <BookInfo>
            <BookName>
              <strong>A revolução dos bichos</strong>
              <span>George Orwell</span>
            </BookName>
            <Stars quantity={4} />
          </BookInfo>
        </Container>
      </Dialog.Trigger>
      <Modal />
    </Dialog.Root>
  )
}
