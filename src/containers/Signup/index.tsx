import Button from '../../components/Button'
import { TextField } from '../../components/TextField'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import * as S from './Signup.styles'
import { useForm, SubmitHandler } from 'react-hook-form'
import Router from 'next/router'
import { api } from 'service/api'
import Fakelogo from 'components/Fakelogo'
import { withSSRGuest } from 'utils/withSSRGuest'

type SignupFormData = {
  name: 'string'
  email: 'string'
  password: 'string'
  passwordConfirmation: 'string'
  phone?: 'string'
  emergencyName?: 'string'
  emergencyPhone?: 'string'
}

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignupFormData>()

  const onSubmit: SubmitHandler<SignupFormData> = async (formData) => {
    try {
      const response = await api.post('users/signup', { ...formData })
      console.log(response)

      Router.push('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <S.Wrapper>
      <Head>
        <title>Signup | joinMe</title>
      </Head>

      <S.LogoContainer>
        <Fakelogo />
      </S.LogoContainer>
      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <S.TitleContainer>
          <S.H2>Cadastra-se</S.H2>
        </S.TitleContainer>
        <TextField
          label="Como podemos te chamar?*"
          type="text"
          {...register('name', {
            required: true
          })}
          placeholder="Luma"
        />
        <S.ErrorMessageContainer>
          {errors.email?.type === 'required' && 'Email é um campo obrigatório'}
        </S.ErrorMessageContainer>
        <TextField
          label="Seu e-mail:*"
          type="email"
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

        <TextField
          label="Digite uma senha:*"
          type="password"
          {...register('password', {
            required: true,
            minLength: 6
          })}
        />
        <S.ErrorMessageContainer>
          {errors.password && 'Senha é um campo obrigatório'}
        </S.ErrorMessageContainer>

        <TextField
          label="Confirme sua senha:*"
          type="password"
          {...register('passwordConfirmation', {
            required: true,
            minLength: 6
          })}
        />
        <S.ErrorMessageContainer>
          {errors.password && 'Confirmar senha é um campo obrigatório'}
        </S.ErrorMessageContainer>

        <S.SwitchContainer>
          <input type="checkbox" />
          <p>
            Li e concordo com os{' '}
            <span>Termos e Condições e Política de Privacidade.</span>
          </p>
        </S.SwitchContainer>

        <Button>criar conta</Button>
      </S.FormContainer>
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRGuest(async () => {
  return {
    props: {}
  }
})
