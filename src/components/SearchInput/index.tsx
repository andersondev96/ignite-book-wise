import { MagnifyingGlass } from '@phosphor-icons/react'
import { Container, Input } from './styles'

export const SearchInput = () => {
  return (
    <Container>
      <Input type="text" placeholder="Buscar livro avaliado" />
      <MagnifyingGlass size={20} />
    </Container>
  )
}
