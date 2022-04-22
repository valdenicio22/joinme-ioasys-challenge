import { useState, MouseEvent } from 'react'
import Head from 'next/head'

import Button from '../Button'
import { TextField } from '../TextField'
import Checkbox from '../Checkbox'
import GoogleIcon from '../GoogleIcon'
import { Eye, EyeSlash } from '@styled-icons/bootstrap'

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
  termsConfirmation: boolean | undefined
}

type isVisibleProps = 'text' | 'password'

type SignUpProps = {
  setIsSignupModalOpen: (arg: boolean) => void
  setIsSigninModalOpen: (arg: boolean) => void
}

export const Signup = ({
  setIsSignupModalOpen,
  setIsSigninModalOpen
}: SignUpProps) => {
  const [isVisible, setIsVisible] = useState<isVisibleProps>('password')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<SignupFormData>()

  const onSubmit: SubmitHandler<SignupFormData> = async (formData) => {
    try {
      await api.post('users/signup', { ...formData })
      toast.success('Bem vindo! Sua conta foi criada!')
      setIsSignupModalOpen(false)
      setIsSigninModalOpen(true)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log({ err })
      console.log(err.response)
    }
  }

  const handleFormError = (
    fieldName: keyof typeof errors
  ): string | undefined => {
    return errors[fieldName]?.message
  }

  const handleSinginModal = () => {
    setIsSignupModalOpen(false)
    setIsSigninModalOpen(true)
  }

  const handleFakeButtonClick = (e: MouseEvent) => {
    e.preventDefault()
    toast.info('Essa funcionalidade será liberada em breve!')
  }

  return (
    <S.Wrapper>
      <Head>
        <title>Signup | joinMe</title>
      </Head>

      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <S.H1>Olá! Primeiro crie sua conta:</S.H1>
        <S.TextFieldsContainer>
          <TextField
            label="Como podemos te chamar?*"
            type="text"
            {...register('name', {
              required: {
                value: true,
                message: 'O campo nome é obrigatório'
              }
            })}
            placeholder="Luma"
            fullWidth={true}
            error={handleFormError('name')}
          />
          <TextField
            label="Seu e-mail:*"
            type="email"
            {...register('email', {
              required: {
                value: true,
                message: 'O campo e-mail é obrigatório'
              },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Email inválido'
              }
            })}
            placeholder="lumasilva@email.com"
            fullWidth={true}
            error={handleFormError('email')}
          />
          <TextField
            label="Digite uma senha:*"
            type={isVisible}
            {...register('password', {
              required: {
                value: true,
                message: 'O campo senha é obrigatório'
              },
              minLength: {
                value: 6,
                message: 'A senha deve conter pelo menos 6 caracteres'
              }
            })}
            error={handleFormError('password')}
            fullWidth={true}
            icon={
              isVisible === 'password' ? (
                <EyeSlash
                  onClick={(e) => setIsVisible(isPasswordVisible(e, isVisible))}
                />
              ) : (
                <Eye
                  onClick={(e) => setIsVisible(isPasswordVisible(e, isVisible))}
                />
              )
            }
          />

          <TextField
            label="Confirme sua senha:*"
            type={isVisible}
            {...register('passwordConfirmation', {
              required: {
                value: true,
                message: 'O campo confirmar a senha é obrigatório'
              },
              minLength: {
                value: 6,
                message: 'A senha deve conter pelo menos 6 caracteres'
              },
              validate: (value: string) => {
                if (watch('password') !== value) {
                  return 'Suas senhas não correspondem'
                }
              }
            })}
            error={handleFormError('passwordConfirmation')}
            fullWidth={true}
            icon={
              isVisible === 'password' ? (
                <EyeSlash
                  onClick={(e) => setIsVisible(isPasswordVisible(e, isVisible))}
                />
              ) : (
                <Eye
                  onClick={(e) => setIsVisible(isPasswordVisible(e, isVisible))}
                />
              )
            }
          />
        </S.TextFieldsContainer>

        <S.TermsContainer>
          <Checkbox />
          <S.PTerms>
            Li e concordo com os <S.Span>Termos e Condições</S.Span> e{' '}
            <S.Span>Política de Privacidade.</S.Span>
          </S.PTerms>
        </S.TermsContainer>

        <S.SignupButtons>
          <Button
            rightIcon={<GoogleIcon />}
            bgColor="lighterGray"
            fullWidth={true}
            colorText={'primary'}
            onClick={handleFakeButtonClick}
          >
            CONTINUAR COM O GMAIL
          </Button>
          <Button fullWidth={true} bgColor={'primary'}>
            CRIAR MINHA CONTA
          </Button>
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
