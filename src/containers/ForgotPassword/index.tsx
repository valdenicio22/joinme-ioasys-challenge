import Arrow from 'components/Arrow'
import { TextField } from 'components/TextField'
import { GetServerSideProps } from 'next'
import { withSSRGuest } from 'utils/withSSRGuest'
import * as S from './ForgotPassword'
import { useForm, SubmitHandler } from 'react-hook-form'
import { api } from 'service/api'
import Button from 'components/Button'

import Router from 'next/router'

import { toast } from 'react-toastify'

type ForgotPasswordData = {
  email: string
}

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgotPasswordData>()

  const onSubmit: SubmitHandler<ForgotPasswordData> = async (formData) => {
    try {
      console.log(formData)
      await api.patch<ForgotPasswordData>('/users/resetpassword', {
        ...formData
      })
      toast.success('Uma nova senha foi enviada para seu e-mail')
      Router.push('/')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err.response.status === 404) {
        toast.error('Usuário não encontrado')
      }
    }
  }
  return (
    <S.Wrapper>
      <S.ArrowContainer onClick={() => Router.push('/login')}>
        <Arrow />
      </S.ArrowContainer>
      <S.InfoContainer>
        <S.H1>Esqueci minha senha</S.H1>
        <p>
          Enviaremos uma senha para o e-mail cadastra-do, para que você possa
          redefinir sua senha.
        </p>
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
        <S.ErrorMessageContainer>
          {errors.email?.type === 'pattern' && 'Email inválido'}
          {errors.email?.type === 'required' && 'Email é um campo obrigatório'}
        </S.ErrorMessageContainer>
        <S.BtnContainer>
          <Button>enviar para email</Button>
        </S.BtnContainer>
      </S.Form>
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRGuest(async () => {
  return {
    props: {}
  }
})
