import { useState } from 'react'
import Head from 'next/head'
import Router from 'next/router'

import Button from '../Button'
import { TextField } from '../TextField'
import EyeIcon from '../EyeIcon'
import Checkbox from '../Checkbox'
import GoogleIcon from '../GoogleIcon'

import * as S from './styles'

import { api } from 'service/api'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import { isPasswordVisible } from 'utils/isPasswordVisible'

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

type SignUpProps = {
  setIsSignupModalOpen: (arg: boolean) => void
  setIsSigninModalOpen: (arg: boolean) => void
}

export function Signup({
  setIsSignupModalOpen,
  setIsSigninModalOpen
}: SignUpProps) {
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
      setIsSignupModalOpen(false)
      Router.push('/login')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err.response.status === 409) {
        toast.error('E-mail já cadastrado!')
      }
    }
  }

  const handleFormError = (): string | undefined => {
    if (errors.email?.type === 'pattern') {
      return 'Email inválido'
    }
    if (errors.passwordConfirmation?.type === 'minLength') {
      return 'A senha deve ter pelo menos 6 caracteres'
    }
    if (errors.email?.type === 'required') {
      return 'Email é um campo obrigatório'
    }
    if (errors.name?.type === 'required') {
      return 'Name é um campo obrigatório'
    }
  }

  const handleSinginModal = () => {
    setIsSignupModalOpen(false)
    setIsSigninModalOpen(true)
  }

  return (
    <S.Wrapper>
      <Head>
        <title>Signup | joinMe</title>
      </Head>

      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <S.H3>Olá! Primeiro crie sua conta:</S.H3>
        <S.TextFieldsContainer>
          <TextField
            label="Como podemos te chamar?*"
            type="text"
            {...register('name', {
              required: true
            })}
            placeholder="Luma"
            fullWidth={true}
            error={handleFormError()}
          />
          <TextField
            label="Seu e-mail:*"
            type="email"
            {...register('email', {
              required: true,
              pattern: /\S+@\S+\.\S+/
            })}
            placeholder="lumasilva@email.com"
            fullWidth={true}
            error={handleFormError()}
          />
          <TextField
            label="Digite uma senha:*"
            type={isVisible}
            error={handleFormError()}
            {...register('password', {
              required: true,
              minLength: 6
            })}
            fullWidth={true}
            icon={
              <EyeIcon
                onClick={(e) => setIsVisible(isPasswordVisible(e, isVisible))}
              />
            }
          />

          <TextField
            label="Confirme sua senha:*"
            type={isVisible}
            error={handleFormError()}
            {...register('passwordConfirmation', {
              required: true,
              minLength: 6
            })}
            fullWidth={true}
            icon={
              <EyeIcon
                onClick={(e) => setIsVisible(isPasswordVisible(e, isVisible))}
              />
            }
          />
        </S.TextFieldsContainer>

        <S.TermsContainer>
          <Checkbox />
          <S.PTerms>
            Li e concordo com os{' '}
            <S.Span>Termos e Condições e Política de Privacidade.</S.Span>
          </S.PTerms>
        </S.TermsContainer>

        <S.SignupButtons>
          <Button icon={<GoogleIcon />} bgColor="darkGray" fullWidth={true}>
            CONTINUAR COM O GMAIL
          </Button>
          <Button fullWidth={true}>CRIAR MINHA CONTA</Button>
        </S.SignupButtons>

        <S.SigninInfo>
          <S.PSignIn>
            Já tem uma conta?{' '}
            <S.SpanSignin onClick={handleSinginModal}>Entre aqui</S.SpanSignin>
          </S.PSignIn>
        </S.SigninInfo>
      </S.FormContainer>
    </S.Wrapper>
  )
}