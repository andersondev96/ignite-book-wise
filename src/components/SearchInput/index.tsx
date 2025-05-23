import { InputHTMLAttributes } from 'react'

import { MagnifyingGlass } from '@phosphor-icons/react'

import { Container, Input } from './styles'

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  placeholder: string
}

export const SearchInput = ({
  name,
  placeholder,
  ...rest
}: SearchInputProps) => {
  return (
    <Container>
      <Input name={name} type="text" placeholder={placeholder} {...rest} />
      <MagnifyingGlass size={20} />
    </Container>
  )
}
