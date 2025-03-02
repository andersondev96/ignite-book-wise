import {
  TextareaHTMLAttributes,
  useCallback,
  useState,
  type ChangeEvent,
} from 'react'
import { Container, Counter } from './styles'

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {}

export const TextArea = ({ onChange, ...rest }: TextAreaProps) => {
  const maxCharacters = 450
  const [totalCharacters, setTotalCharacters] = useState(0)
  const [text, setText] = useState('')

  const contCharacters = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      let newValue = event.target.value

      if (newValue.length > 450) {
        newValue = newValue.slice(0, 450)
      }

      setTotalCharacters(newValue.length)

      setText(newValue)

      if (onChange) {
        event.target.value = newValue
        onChange(event)
      }
    },
    [onChange],
  )

  return (
    <Container>
      <textarea {...rest} value={text} onChange={contCharacters} />
      <Counter>
        {totalCharacters}/{maxCharacters}
      </Counter>
    </Container>
  )
}
