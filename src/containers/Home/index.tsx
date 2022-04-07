import Button from 'components/Button'
import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
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

          <Button onClick={() => Router.push('/signup')}>
            Inscreve-se aqui
          </Button>
        </S.SectionContainer>

        <Image src="/img/avatar.svg" width={334} height={520} />
      </S.MainContainer>
    </S.Wrapper>
  )
}
