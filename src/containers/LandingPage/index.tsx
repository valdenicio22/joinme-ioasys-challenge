import Button from 'components/Button'
import { AppInfoCards } from 'components/AppInfoCards'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Router from 'next/router'
import { withSSRGuest } from 'utils/withSSRGuest'
import * as S from './styles'
import { PlayCircle } from '@styled-icons/boxicons-regular'

export default function LandingPage() {
  return (
    <S.Wrapper>
      <Head>
        <title>joinMe</title>
      </Head>

      <S.WelcomeWrapper>
        <S.WelcomeContainer>
          <S.ImageContainer>
            <img
              src="img/landingPageSvg.svg"
              alt="Um grupo de pessoas sentadas em um lugar aberto estudando juntas"
            />

            <S.WelcomeInfo>
              <S.Title>Encontre os eventos ideias para você </S.Title>
              <S.Description>
                Conheça pessoas novas e participe de eventos com atividades do
                seu interesse. Aproveite seu tempo livre fazendo o que gosta!
              </S.Description>

              <S.ButtonsContainer>
                <Button bgColor="primary" onClick={() => Router.push('/home')}>
                  Cadastra-se agora
                </Button>
                <Button
                  icon={<PlayCircle width={15} height={15} />}
                  onClick={() => Router.push('/home')}
                >
                  Baixe o app
                </Button>
              </S.ButtonsContainer>
            </S.WelcomeInfo>
          </S.ImageContainer>
        </S.WelcomeContainer>
      </S.WelcomeWrapper>
      <S.CardsInfoWrapper>
        <S.CardsInfoContainer>
          <AppInfoCards />
        </S.CardsInfoContainer>
      </S.CardsInfoWrapper>
      <S.HowWorksWrapper>
        <S.HowWorksContainer>
          <S.HowWorksTitle>Como funciona?</S.HowWorksTitle>
          <img
            src="/img/howItWorks.svg"
            alt="Grafico explicando o funcionamento do app"
          />
        </S.HowWorksContainer>
      </S.HowWorksWrapper>
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRGuest(async () => {
  return {
    props: {}
  }
})
