import { useState } from 'react'
import Head from 'next/head'

import Button from 'components/Button'
import { TextField } from 'components/TextField'
import Switch from 'components/Switch'
import EyeIcon from 'components/EyeIcon'
import Logo from 'components/Logo'

import { useAuth } from '../../context/AuthContext'

import * as S from './styles'

import { useForm, SubmitHandler } from 'react-hook-form'
import { isPasswordVisible } from 'utils/isPasswordVisible'

type SigninFormData = {
  email: string
  password: string
}

type SigninProps = {
  setIsSigninModalOpen: (arg: boolean) => void
  setIsSignupModalOpen: (arg: boolean) => void
  setIsForgotPasswordModalOpen: (arg: boolean) => void
}

type isVisibleProps = 'text' | 'password'

export const Signin = ({
  setIsSigninModalOpen,
  setIsSignupModalOpen,
  setIsForgotPasswordModalOpen
}: SigninProps) => {
  const { signIn } = useAuth()
  const [isVisible, setIsVisible] = useState<isVisibleProps>('password')

  const handleSignupModal = () => {
    setIsSigninModalOpen(false)
    setIsSignupModalOpen(true)
  }

  const handleForgotPasswordModal = () => {
    setIsSigninModalOpen(false)
    setIsForgotPasswordModalOpen(true)
  }

  const [isConectedChecked, setIsConectedChecked] = useState(true)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SigninFormData>()

  const onSubmit: SubmitHandler<SigninFormData> = async (formData) => {
    await signIn(formData)
    setIsSigninModalOpen(false)
  }

  return (
    <S.Wrapper>
      <Head>
        <title>Login | joinMe</title>
      </Head>

      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <S.H2>Acesse sua conta</S.H2>

        <S.TextFieldsContainer>
          <TextField
            label="Seu e-mail:*"
            type="email"
            {...register('email', {
              required: true,
              pattern: /\S+@\S+\.\S+/
            })}
            placeholder="lumasilva@email.com"
            fullWidth={true}
            error={errors.email?.type === 'pattern' ? 'Email inválido' : ''}
          />
          <TextField
            label="Digite uma senha:*"
            type={isVisible}
            icon={
              <EyeIcon
                onClick={(e) => setIsVisible(isPasswordVisible(e, isVisible))}
              />
            }
            {...register('password', {
              required: true,
              minLength: 6
            })}
            fullWidth={true}
            error={
              errors.password?.type === 'minLength' ? 'Email inválido' : ''
            }
          />
        </S.TextFieldsContainer>

        <S.SwitchContainer>
          <Switch
            onCheckedChange={() => setIsConectedChecked(!isConectedChecked)}
            checked={isConectedChecked}
          />
          <span>Permanecer conectado</span>
        </S.SwitchContainer>

        <S.SigninBtnAndForgotPassword>
          <S.ForgotPasswordBtn onClick={handleForgotPasswordModal}>
            Esqueceu sua senha?
          </S.ForgotPasswordBtn>
          <Button>entrar</Button>
        </S.SigninBtnAndForgotPassword>
      </S.FormContainer>

      <S.SignupInfo>
        Não tem uma conta?&nbsp;
        <S.SignupBtn onClick={handleSignupModal}>Cadastra-se aqui.</S.SignupBtn>
      </S.SignupInfo>
    </S.Wrapper>
  )
}
