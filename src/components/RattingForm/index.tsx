import { useCallback, useMemo } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Check, X } from '@phosphor-icons/react'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, Container, Footer, Form, Header, UserInfo } from './styles'
import { Stars } from '../ui/Stars'
import { TextArea } from '../ui/TextArea'

const rateFormSchema = z.object({
  description: z.string().max(450),
  rate: z.number().min(1).max(5),
})

export type RateFormData = z.infer<typeof rateFormSchema>

interface RatingFormProps {
  onSubmit: (data: RateFormData) => void
}

export const RattingForm = ({ onSubmit }: RatingFormProps) => {
  const { data: session, status } = useSession()
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitted },
  } = useForm<RateFormData>({
    resolver: zodResolver(rateFormSchema),
    defaultValues: {
      rate: 1,
    },
  })

  const user = useMemo(() => {
    if (status === 'authenticated') {
      return session?.user
    }
    return null
  }, [session?.user, status])

  const handleRateOnChange = useCallback(
    (value: number) => {
      setValue('rate', value)
    },
    [setValue],
  )

  const submissionMessage = useMemo(() => {
    if (!isSubmitted) {
      return null
    }

    return Object.keys(errors).length === 0
      ? 'Avaliação salva com sucesso'
      : 'Erro ao enviar avaliação'
  }, [isSubmitted, errors])

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Header>
          <UserInfo>
            <img src={user?.avatar_url ?? ''} alt={user?.name ?? ''} />
            <span>{user?.name}</span>
          </UserInfo>
          <Stars
            rate={watch('rate')}
            mode="edit"
            onRateChange={handleRateOnChange}
          />
        </Header>
        <TextArea
          placeholder="Escreva a sua avaliação"
          {...register('description')}
        />
        <Footer>
          {submissionMessage && <span>{submissionMessage}</span>}

          <Button type="reset">
            <X size={24} color="#8381D9" />
          </Button>
          <Button type="submit">
            <Check size={24} color="#50B2C0" />
          </Button>
        </Footer>
      </Form>
    </Container>
  )
}
