import { MagnifyingGlass } from '@phosphor-icons/react'
import { Container, Input } from './styles'
import type { ComponentProps } from 'react'

type SearchInputProps = ComponentProps<'input'> & {
  name: string
  placeholder: string
}

export const SearchInput = ({ name, placeholder }: SearchInputProps) => {
  return (
    <Container>
      <Input name={name} type="text" placeholder={placeholder} />
      <MagnifyingGlass size={20} />
    </Container>
  )
}
