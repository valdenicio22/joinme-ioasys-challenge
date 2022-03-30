import Button from 'components/Button'
import TextField from 'components/TextField'
import Head from 'next/head'

import * as S from '../styles/SignUp.styles'

export default function signUp() {
  return (
    <S.wrapper>
      <Head>
        <title>SignUp | joinMe</title>
      </Head>
      <TextField type="text" placeholder="Primeiro Nome" />
      <TextField type="text" placeholder="Sobrenome" />
      <TextField type="email" placeholder="email" />
      <TextField type="text" placeholder="telefone" />
      <TextField type="text" placeholder="contato de emergencia" />
      <TextField type="password" placeholder="********" />

      <Button>Cadastrar</Button>
    </S.wrapper>
  )
}
