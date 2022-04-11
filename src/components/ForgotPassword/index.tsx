import Router from 'next/router'

import Arrow from 'components/Arrow'
import Button from 'components/Button'
import { TextField } from 'components/TextField'

import * as S from './styles'

import { useForm, SubmitHandler } from 'react-hook-form'
import { api } from 'service/api'
import { toast } from 'react-toastify'

type ForgotPasswordData = {
  email: string
}

type ForgotPasswordProps = {
  setIsForgotPasswordModalOpen: (arg: boolean) => void
  setIsSigninModalOpen: (arg: boolean) => void
}

export const ForgotPassword = ({
  setIsForgotPasswordModalOpen,
  setIsSigninModalOpen
}: ForgotPasswordProps) => {
  const { register, handleSubmit } = useForm<ForgotPasswordData>()

  const onSubmit: SubmitHandler<ForgotPasswordData> = async (formData) => {
    try {
      await api.patch<ForgotPasswordData>('/users/resetpassword', {
        ...formData
      })
      toast.success('Uma nova senha foi enviada para seu e-mail')
      Router.push('/')
      setIsForgotPasswordModalOpen(false)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err.response.status === 404) {
        toast.error('Usuário não encontrado')
      }
    }
  }

  const handleSingupModal = () => {
    setIsForgotPasswordModalOpen(false)
    setIsSigninModalOpen(true)
  }

  return (
    <S.Wrapper>
      <S.ArrowContainer onClick={handleSingupModal}>
        <Arrow />
      </S.ArrowContainer>

      <S.InfoContainer>
        <S.H1>Esqueci minha senha</S.H1>
        <S.PInfo>
          Enviaremos uma senha para o e-mail cadastra-do, para que você possa
          redefinir sua senha.
        </S.PInfo>
      </S.InfoContainer>

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Seu e-mail:*"
          type="email"
          fullWidth={true}
          {...register('email', {
            required: true,
            pattern: /\S+@\S+\.\S+/
          })}
          placeholder="lumasilva@email.com"
        />

        <S.BtnContainer>
          <Button>enviar para email</Button>
        </S.BtnContainer>
      </S.Form>
    </S.Wrapper>
  )
}