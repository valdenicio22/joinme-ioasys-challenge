import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Button from '../Button'
import { TextField } from '../TextField'
import Switch from '../Switch'
import EyeIcon from '../EyeIcon'
import Fakelogo from '../Fakelogo'

import { useAuth } from '../../context/AuthContext'

import * as S from './styles'

import { useForm, SubmitHandler } from 'react-hook-form'
import { isPasswordVisible } from 'utils/isPasswordVisible'
import { Dialog } from 'components/Dialog'
import Signup from 'components/Signup'

type SigninFormData = {
  email: string
  password: string
}

type SigninProps = {
  setIsSigninModalOpen: (arg: boolean) => void
  setIsSignupModalOpen: (arg: boolean) => void
  isSignupModalOpen: boolean
}

type isVisibleProps = 'text' | 'password'

export const Signin = ({
  setIsSigninModalOpen,
  setIsSignupModalOpen,
  isSignupModalOpen
}: SigninProps) => {
  const { signIn } = useAuth()
  const [isVisible, setIsVisible] = useState<isVisibleProps>('password')

  const handleSignupModal = () => {
    setIsSignupModalOpen(!isSignupModalOpen)
    setIsSigninModalOpen(false)
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
      {isSignupModalOpen && (
        <Dialog
          isModalOpen={isSignupModalOpen}
          onCloseModal={() => setIsSignupModalOpen(false)}
        >
          <Signup />
        </Dialog>
      )}
      <S.LogoContainer>
        <Fakelogo />
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
          <Link href="/forgotPassword">Esqueceu a senha?</Link>
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
