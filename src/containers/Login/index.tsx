import { useState } from 'react'
import Button from '../../components/Button'
import { TextField } from '../../components/TextField'
import { useAuth } from '../../context/AuthContext'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { withSSRGuest } from '../../utils/withSSRGuest'
import * as S from './Login.styles'
import Link from 'next/link'
import Switch from 'components/Switch'
import { useForm, SubmitHandler } from 'react-hook-form'
import EyeIcon from 'components/EyeIcon'
import Fakelogo from 'components/Fakelogo'

type SignInFormData = {
  email: string
  password: string
}

export default function Login() {
  const { signIn } = useAuth()
  const [isConectedChecked, setIsConectedChecked] = useState(true)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInFormData>()

  const onSubmit: SubmitHandler<SignInFormData> = async (formData) => {
    await signIn(formData)
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
            minLength: 6 //'senha deve conter no mínimo 6 caracteres'
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

export const getServerSideProps: GetServerSideProps = withSSRGuest(async () => {
  return {
    props: {}
  }
})
