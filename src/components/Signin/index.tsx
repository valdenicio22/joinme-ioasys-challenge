import { MouseEvent, useState } from 'react'
import Head from 'next/head'

import Button from 'components/Button'
import { TextField } from 'components/TextField'
import Switch from 'components/Switch'
import EyeIcon from 'components/EyeIcon'
import IconLogo from 'components/IconLogo'

import { useAuth } from '../../context/AuthContext'

import * as S from './styles'

import { useForm, SubmitHandler } from 'react-hook-form'
import { isPasswordVisible } from 'utils/isPasswordVisible'
import GoogleIcon from 'components/GoogleIcon'
import { toast } from 'react-toastify'

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

  const handleFakeButtonClick = (e: MouseEvent) => {
    e.preventDefault()
    toast.info('Essa funcionalidade será liberada em breve!')
  }

  return (
    <S.Wrapper>
      <Head>
        <title>Login | joinMe</title>
      </Head>

      <S.LogoContainer>
        <IconLogo />
      </S.LogoContainer>

      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <S.H2>Olá! Acesse sua conta:</S.H2>

        <S.TextFieldsContainer>
          <TextField
            label="Seu e-mail*"
            type="email"
            fullWidth={true}
            {...register('email', {
              required: true,
              pattern: /\S+@\S+\.\S+/
            })}
            placeholder="lumasilva@email.com"
            error={errors.email?.type === 'pattern' ? 'Email inválido' : ''}
          />
          <TextField
            label="Digite uma senha*"
            type={isVisible}
            fullWidth={true}
            placeholder="Digite sua senha"
            icon={
              <EyeIcon
                onClick={(e) => setIsVisible(isPasswordVisible(e, isVisible))}
              />
            }
            {...register('password', {
              required: true,
              minLength: 6
            })}
            error={
              errors.password?.type === 'minLength' ? 'Email inválido' : ''
            }
          />
        </S.TextFieldsContainer>

        <S.SwitchAndForgotPassword>
          <S.SwitchContainer>
            <Switch
              onCheckedChange={() => setIsConectedChecked(!isConectedChecked)}
              checked={isConectedChecked}
            />
            <span>Permanecer conectado</span>
          </S.SwitchContainer>
          <S.ForgotPasswordBtn onClick={handleForgotPasswordModal}>
            Esqueceu sua senha?
          </S.ForgotPasswordBtn>
        </S.SwitchAndForgotPassword>

        <S.SigninButtons>
          <Button
            icon={<GoogleIcon />}
            bgColor="lighterGray"
            fullWidth={true}
            colorText={'primary'}
            onClick={handleFakeButtonClick}
          >
            CONTINUAR COM O GMAIL
          </Button>
          <Button fullWidth={true}>ENTRAR</Button>
        </S.SigninButtons>
      </S.FormContainer>

      <S.SignupInfo>
        Não tem uma conta?&nbsp;
        <S.SignupBtn onClick={handleSignupModal}>Cadastra-se aqui.</S.SignupBtn>
      </S.SignupInfo>
    </S.Wrapper>
  )
}
