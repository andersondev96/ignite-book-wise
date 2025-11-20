import { InputHTMLAttributes, forwardRef } from 'react'
import { MagnifyingGlass, WarningCircle } from '@phosphor-icons/react'

import { Container, Label, Input, InputWrapper, ErrorMessage } from './styles'

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  placeholder: string
  label?: string
  errorMessage?: string
  variant?: 'default' | 'small'
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      name,
      placeholder,
      label,
      errorMessage,
      variant = 'default',
      'aria-describedby': ariaDescribedBy,
      disabled,
      ...rest
    },
    ref
  ) => {
    const descriptionId = errorMessage ? `${name}-error` : undefined
    const finalAriaDescribedBy = ariaDescribedBy || descriptionId

    return (
      <Container variant={variant} data-variant={variant}>
        {label && (
          <Label htmlFor={name} aria-disabled={disabled}>
            {label}
            {rest.required && (
              <span aria-label="obrigatório" title="Campo obrigatório">
                *
              </span>
            )}
          </Label>
        )}

        <InputWrapper data-error={!!errorMessage} data-disabled={disabled}>
          <Input
            ref={ref}
            id={name}
            name={name}
            type="search"
            placeholder={placeholder}
            autoComplete="off"
            disabled={disabled}
            aria-describedby={finalAriaDescribedBy}
            aria-invalid={!!errorMessage}
            {...rest}
          />
          <MagnifyingGlass
            size={variant === 'small' ? 16 : 20}
            aria-hidden="true"
            className="search-icon"
            weight="bold"
          />
        </InputWrapper>

        {errorMessage && (
          <ErrorMessage id={descriptionId} role="alert">
            <WarningCircle size={16} aria-hidden="true" />
            {errorMessage}
          </ErrorMessage>
        )}
      </Container>
    )
  }
)

SearchInput.displayName = 'SearchInput'

export default SearchInput
