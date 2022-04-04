import Button from 'components/Button'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './Home.styles'

export default function Home() {
  return (
    <S.Wrapper>
      <Head>
        <title>Home | joinMe</title>
      </Head>

      <S.MainContainer>
        <S.SectionContainer>
          <span>👏 Hey, Bem vindo!</span>
          <h1>JoinMe</h1>
          <p>Encontre eventos da sua preferencia</p>

          <Button>Inscreve-se aqui</Button>
        </S.SectionContainer>

        <Image src="/img/avatar.svg" width={334} height={520} />
      </S.MainContainer>

      <Link href="/login">
        <a>Login Page</a>
      </Link>
      <Link href="/signup">
        <a>SignUp Page</a>
      </Link>
    </S.Wrapper>
  )
}
