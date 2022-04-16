import Button from 'components/Button'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import { withSSRGuest } from 'utils/withSSRGuest'
import * as S from './styles'

export default function LandingPage() {
  return (
    <S.Wrapper>
      <Head>
        <title>joinMe</title>
      </Head>

      <S.MainContainer>
        <S.SectionContainer>
          <span>👏 Hey, Bem vindo!</span>
          <h1>JoinMe</h1>
          <p>Encontre eventos da sua preferência ...</p>

          <Button onClick={() => Router.push('/home')}>
            Conheça a plataforma
          </Button>
        </S.SectionContainer>

        <Image src="/img/avatar.svg" width={334} height={520} />
      </S.MainContainer>
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRGuest(async () => {
  return {
    props: {}
  }
})
