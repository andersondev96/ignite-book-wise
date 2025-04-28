import {
  TextareaHTMLAttributes,
  useCallback,
  useState,
  type ChangeEvent,
} from 'react'

import { Container, Counter } from './styles'

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

const MAX_CHARACTERS = 450

export const TextArea = ({ onChange, ...rest }: TextAreaProps) => {
  const [text, setText] = useState('')

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      let value = event.target.value

      if (value.length > MAX_CHARACTERS) {
        value = value.slice(0, MAX_CHARACTERS)
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
    [onChange],
  )

  return (
    <Container>
      <textarea {...rest} value={text} onChange={handleChange} />
      <Counter>
        {text.length}/{MAX_CHARACTERS}
      </Counter>
    </Container>
  )
}
