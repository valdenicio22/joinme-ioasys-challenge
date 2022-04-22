import { Dispatch, MouseEvent, SetStateAction, useState } from 'react'
import Head from 'next/head'

import Button from 'components/Button'
import { TextField } from 'components/TextField'
import Switch from 'components/Switch'
import { Eye, EyeSlash } from '@styled-icons/bootstrap'
import IconLogo from 'components/IconLogo'

import { useAuth } from '../../context/AuthContext'

import * as S from './styles'

import { useForm, SubmitHandler } from 'react-hook-form'
import { isPasswordVisible } from 'utils/isPasswordVisible'
import GoogleIcon from 'components/GoogleIcon'
import { toast } from 'react-toastify'
import { CurrentModal } from 'types/types'

type SigninFormData = {
  email: string
  password: string
}

type SigninProps = {
  setCurrentModal: Dispatch<SetStateAction<CurrentModal>>
}

type isVisibleProps = 'text' | 'password'

export const Signin = ({ setCurrentModal }: SigninProps) => {
  const { signIn } = useAuth()
  const [isVisible, setIsVisible] = useState<isVisibleProps>('password')
  const [isConectedChecked, setIsConectedChecked] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SigninFormData>()

  const onSubmit: SubmitHandler<SigninFormData> = async (formData) => {
    await signIn(formData)
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
          <S.ForgotPasswordBtn
            onClick={() => setCurrentModal('forgotPassword')}
          >
            Esqueceu sua senha?
          </S.ForgotPasswordBtn>
        </S.SwitchAndForgotPassword>

        <S.SigninButtons>
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
            ENTRAR
          </Button>
        </S.SigninButtons>
      </S.FormContainer>

      <S.SignupInfo>
        Não tem uma conta?&nbsp;
        <S.SignupBtn onClick={() => setCurrentModal('signup')}>
          Cadastra-se aqui.
        </S.SignupBtn>
      </S.SignupInfo>
    </S.Wrapper>
  )
}
