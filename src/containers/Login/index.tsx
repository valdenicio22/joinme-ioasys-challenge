import { FormEvent, useState } from 'react'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import { useAuth } from '../../context/AuthContext'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { withSSRGuest } from '../../utils/withSSRGuest'
import * as S from './Login.styles'
import Logo from 'components/Logo'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const data = {
      email,
      password
    }

    await signIn(data)
  }

  return (
    <S.Wrapper>
      <Head>
        <title>Login | joinMe</title>
      </Head>

      <S.LogoContainer>
        <Logo color="black" />
      </S.LogoContainer>
      <S.FormContainer onSubmit={handleSubmit}>
        <S.TitleContainer>
          <S.H2>Acesse sua conta</S.H2>
        </S.TitleContainer>
        <TextField
          label="Seu e-mail:"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <TextField
          label="Digite uma senha:"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </S.FormContainer>
      <S.SwitchContainer>
        <input type="checkbox" />
        <p>Permanecer conectado</p>
      </S.SwitchContainer>
      <S.P>Esqueceu a senha?</S.P>
      <Button>entrar</Button>
      <S.LastInfo>
        Não tem uma conta?&nbsp;
        <Link href={'/singup'}>Cadastra-se aqui.</Link>
      </S.LastInfo>
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRGuest(async () => {
  return {
    props: {}
  }
})
