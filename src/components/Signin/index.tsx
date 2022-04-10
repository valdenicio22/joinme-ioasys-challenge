import { useState } from 'react'

import Button from '../Button'
import { TextField } from '../TextField'
import Switch from '../Switch'
import EyeIcon from '../EyeIcon'
import Fakelogo from '../Fakelogo'

import { useAuth } from '../../context/AuthContext'

import * as S from './styles'

import Head from 'next/head'
import Link from 'next/link'

import { useForm, SubmitHandler } from 'react-hook-form'

type SigninFormData = {
  email: string
  password: string
}

type SigninProps = {
  isModalOpen: (arg: boolean) => void
}

export const Signin = ({ isModalOpen }: SigninProps) => {
  const { signIn } = useAuth()
  const [isConectedChecked, setIsConectedChecked] = useState(true)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SigninFormData>()

  const onSubmit: SubmitHandler<SigninFormData> = async (formData) => {
    await signIn(formData)
    isModalOpen(false)
  }

  return (
    <S.Wrapper>
      <Head>
        <title>Login | joinMe</title>
      </Head>

      <S.LogoContainer>
        <Fakelogo />
      </S.LogoContainer>
      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <S.TitleContainer>
          <S.H2>Acesse sua conta</S.H2>
        </S.TitleContainer>
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
        <S.ErrorMessageContainer>
          {errors.email?.type === 'required' && 'Email é um campo obrigatório'}
        </S.ErrorMessageContainer>
        <TextField
          label="Digite uma senha:*"
          type="password"
          icon={<EyeIcon />}
          {...register('password', {
            required: true,
            minLength: 6
          })}
          fullWidth={true}
          error={errors.password?.type === 'minLength' ? 'Email inválido' : ''}
        />
        <S.SwitchContainer>
          <Switch
            onCheckedChange={() => setIsConectedChecked(!isConectedChecked)}
            checked={isConectedChecked}
          />
          <p>Permanecer conectado</p>
        </S.SwitchContainer>
        <S.SignUpLinkContainer>
          <Link href="/forgotPassword">Esqueceu a senha?</Link>
        </S.SignUpLinkContainer>
        <Button>entrar</Button>
      </S.FormContainer>
      <S.LastInfo>
        Não tem uma conta?&nbsp;
        <Link href="/signup">Cadastra-se aqui.</Link>
      </S.LastInfo>
    </S.Wrapper>
  )
}
