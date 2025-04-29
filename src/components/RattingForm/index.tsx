import { useCallback, useMemo, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Check, X } from '@phosphor-icons/react'
import { useSession } from 'next-auth/react'
import { useForm, useWatch } from 'react-hook-form'
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
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RateFormData>({
    resolver: zodResolver(rateFormSchema),
    defaultValues: {
      rate: 1,
    },
  })

  const rateValue = useWatch({
    control,
    name: 'rate',
  })

  const [submissionError, setSubmissionError] = useState<string | null>(null)
  const [submissionSuccess, setSubmissionSuccess] = useState(false)

  const user = useMemo(() => {
    if (status === 'authenticated') {
      return session?.user
    }
    return null
  }, [session?.user, status])

  const handleRateOnChange = useCallback(
    (value: number) => {
      setValue('rate', value, { shouldDirty: true })
    },
    [setValue],
  )

  const handleFormSubmit = async (data: RateFormData) => {
    try {
      await onSubmit(data)
      setSubmissionSuccess(true)
      setSubmissionError(null)
      reset({ description: '', rate: 1 })
    } catch (error) {
      setSubmissionError('Erro ao enviar avaliação.')
      setSubmissionSuccess(false)
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Header>
          <UserInfo>
            <img src={user?.avatar_url ?? ''} alt={user?.name ?? ''} />
            <span>{user?.name}</span>
          </UserInfo>
          <Stars
            rate={rateValue}
            mode="edit"
            onRateChange={handleRateOnChange}
            {...register('rate')}
          />
        </Header>
        <TextArea
          value={rateValue}
          placeholder="Escreva a sua avaliação"
          {...register('description')}
        />
        {errors.description && (
          <span className="error">{errors.description.message}</span>
        )}
        <Footer>
          {submissionError && <span className="error">{submissionError}</span>}
          {submissionSuccess && (
            <span className="success">Avaliação enviada com sucesso!</span>
          )}

          <Button
            type="button"
            onClick={() =>
              reset(
                { description: '', rate: 1 },
                {
                  keepDirty: false,
                  keepValues: false,
                  keepDefaultValues: false,
                },
              )
            }
          >
            <X size={24} color="#8381D9" />
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            <Check size={24} color="#50B2C0" />
          </Button>
        </Footer>
      </Form>
    </Container>
  )
}
