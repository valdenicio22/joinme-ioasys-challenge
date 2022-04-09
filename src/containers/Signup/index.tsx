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
import Checkbox from 'components/Checkbox'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import EyeIcon from 'components/EyeIcon'
import { useState } from 'react'

type SignupFormData = {
  name: 'string'
  email: 'string'
  password: 'string'
  passwordConfirmation: 'string'
  phone?: 'string'
  emergencyName?: 'string'
  emergencyPhone?: 'string'
}

type isVisibleProps = 'text' | 'password'

export default function Signup() {
  const [isVisible, setIsVisible] = useState<isVisibleProps>('password')
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignupFormData>()

  const onSubmit: SubmitHandler<SignupFormData> = async (formData) => {
    try {
      await api.post('users/signup', { ...formData })
      toast.success('Bem vindo! Sua conta foi criada!')

      Router.push('/login')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err.response.status === 409) {
        toast.error('E-mail já cadastrado!')
      }
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
          fullWidth={true}
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
          fullWidth={true}
        />
        <S.ErrorMessageContainer>
          {errors.email?.type === 'pattern' && 'Email inválido'}
          {errors.email?.type === 'required' && 'Email é um campo obrigatório'}
        </S.ErrorMessageContainer>

        <TextField
          label="Digite uma senha:*"
          type={isVisible}
          {...register('password', {
            required: true,
            minLength: 6
          })}
          fullWidth={true}
          icon={
            <EyeIcon
              onClick={() =>
                setIsVisible(isVisible === 'password' ? 'text' : 'password')
              }
            />
          }
        />

        <S.ErrorMessageContainer>
          {errors.password && 'Senha é um campo obrigatório'}
        </S.ErrorMessageContainer>

        <TextField
          label="Confirme sua senha:*"
          type={isVisible}
          {...register('passwordConfirmation', {
            required: true,
            minLength: 6
          })}
          fullWidth={true}
          icon={
            <EyeIcon
              onClick={() =>
                setIsVisible(isVisible === 'password' ? 'text' : 'password')
              }
            />
          }
        />
        <S.ErrorMessageContainer>
          {errors.password && 'Confirmar senha é um campo obrigatório'}
        </S.ErrorMessageContainer>

        <S.SwitchContainer>
          <Checkbox />
          <S.PTerms>
            Li e concordo com os{' '}
            <S.Span>Termos e Condições e Política de Privacidade.</S.Span>
          </S.PTerms>
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
