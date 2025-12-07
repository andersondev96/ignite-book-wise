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
  description: z
    .string()
    .min(10, 'A avaliação deve ter pelo menos 10 caracteres')
    .max(450, 'A avaliação deve ter no máximo 450 caracteres'),
  rate: z.number().min(1, 'Informe uma nota de 1 a 5').max(5),
})

export type RateFormData = z.infer<typeof rateFormSchema>

interface RatingFormProps {
  onSubmit: (data: RateFormData) => Promise<any> | any
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
      rate: 0,
      description: '',
    },
  })

  const rateValue = useWatch({ control, name: 'rate' })

  const [submissionError, setSubmissionError] = useState<string | null>(null)

  const user = useMemo(
    () => (status === 'authenticated' ? session?.user ?? null : null),
    [session?.user, status],
  )

  const handleRateOnChange = useCallback(
    (value: number) => {
      setValue('rate', value, { shouldDirty: true, shouldValidate: true })
    },
    [setValue],
  )

  const handleFormSubmit = async (data: RateFormData) => {
    try {
      setSubmissionError(null)
      await onSubmit(data)
      reset({ description: '', rate: 0 })

    } catch (err: any) {
      const backendError =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        err?.message ||
        'Erro ao enviar avaliação. Tente novamente.'

      setSubmissionError(backendError)
    }
  }

  const handleClear = () => {
    setSubmissionError(null)
    reset({ description: '', rate: 0 })
  }

  return (
    <Container aria-label="Formulário de avaliação">
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Header>
          <UserInfo>
            <img
              src={user?.avatar_url ?? '/default-avatar.png'}
              alt={user?.name ?? 'Usuário'}
            />
            <span>{user?.name ?? 'Usuário'}</span>
          </UserInfo>

          <Stars
            rate={rateValue || 0}
            editable
            onChange={handleRateOnChange}
            aria-label={`Sua nota: ${rateValue || 0} de 5`}
            size={22}
          />
        </Header>

        <TextArea
          placeholder="Escreva a sua avaliação"
          maxLength={450}
          {...register('description')}
        />

        {errors.description && (
          <span className="error" role="alert">
            {errors.description.message}
          </span>
        )}

        {errors.rate && (
          <span className="error" role="alert">
            {errors.rate.message}
          </span>
        )}

        <Footer>
          {/* Estados de feedback */}
          {isSubmitting && (
            <span className="info" role="status">
              Salvando avaliação...
            </span>
          )}

          {!isSubmitting && submissionError && (
            <span className="error" role="alert">
              {submissionError}
            </span>
          )}

          <Button
            type="button"
            onClick={handleClear}
            aria-label="Limpar avaliação"
            disabled={isSubmitting}
          >
            <X size={24} color="#8381D9" />
          </Button>

          <Button
            type="submit"
            disabled={isSubmitting || rateValue === 0}
            aria-label="Enviar avaliação"
          >
            <Check size={24} color="#50B2C0" />
          </Button>
        </Footer>
      </Form>
    </Container>
  )
}
