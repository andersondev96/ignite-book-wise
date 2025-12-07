import {
  TextareaHTMLAttributes,
  useCallback,
  useState,
  type ChangeEvent,
} from 'react'
import { Container, Counter, StyledTextarea } from './styles'

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  maxLength?: number
}

const DEFAULT_MAX_CHARACTERS = 450

export const TextArea = ({
  onChange,
  maxLength = DEFAULT_MAX_CHARACTERS,
  ...rest
}: TextAreaProps) => {
  const [text, setText] = useState('')

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      let value = event.target.value

      if (value.length > maxLength) {
        value = value.slice(0, maxLength)
      }

      setText(value)

      if (onChange) {
        const customEvent = {
          ...event,
          target: {
            ...event.target,
            value,
          },
        }
        onChange(customEvent as ChangeEvent<HTMLTextAreaElement>)
      }
    },
    [onChange, maxLength],
  )

  return (
    <Container>
      <StyledTextarea
        {...rest}
        value={text}
        onChange={handleChange}
        aria-describedby={rest.id ? `${rest.id}-counter` : undefined}
      />
      <Counter id={rest.id ? `${rest.id}-counter` : undefined}>
        {text.length}/{maxLength}
      </Counter>
    </Container>
  )
}
