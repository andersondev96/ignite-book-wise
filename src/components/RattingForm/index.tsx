import { useForm } from 'react-hook-form'
import { Check, X } from '@phosphor-icons/react'
import { Stars } from '../ui/Stars'
import { TextArea } from '../ui/TextArea'
import { Button, Container, Footer, Form, Header, UserInfo } from './styles'
import { useSession } from 'next-auth/react'
import { useCallback, useEffect, useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface User {
  id: string
  name: string | null
  email: string | null
  avatar_url: string | null
}

const rateFormSchema = z.object({
  description: z.string().max(450),
  rate: z.number().min(1).max(5),
})

export type RateFormData = z.infer<typeof rateFormSchema>

interface RatingFormProps {
  onSubmit: (data: RateFormData) => void
}

export const RattingForm = ({ onSubmit }: RatingFormProps) => {
  const { data, status } = useSession()
  const [user, setUser] = useState<User>()
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

  useEffect(() => {
    if (status === 'authenticated' && data.user) {
      setUser(data.user)
    }
  }, [data?.user, status])

  const handleRateOnChange = useCallback(
    (value: number) => {
      setValue('rate', value)
    },
    [setValue],
  )

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
          {isSubmitted &&
            (!errors ? (
              <span>Avaliação salva com sucesso</span>
            ) : (
              <span>Erro ao enviar avaliação</span>
            ))}
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
