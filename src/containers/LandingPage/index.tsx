import Button from 'components/Button'
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
        <S.ImageContainer>
          <img
            src="img/landingPageImg.png"
            alt="Um grupo de pessoas sentadas em um lugar aberto estudando juntas"
          />

          <S.WelcomeContainer>
            <S.Title>Encontre os eventos ideias para você </S.Title>
            <S.Description>
              Conheça pessoas novas e participe de eventos com atividades do seu
              interesse. Aproveite seu tempo livre fazendo o que gosta!
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
          </S.WelcomeContainer>
        </S.ImageContainer>
      </S.WelcomeWrapper>
      <S.HowWorksWrapper>
        <S.HowWorksContent>
          <S.SubTitle>Como funciona?</S.SubTitle>

          <S.HowWorksCardContainer>
            <PlayCircle width={40} height={30} />
            <S.CardTitle>Participe de eventos</S.CardTitle>
            <S.CardDescription>
              A gente sabe que a rotina pode ser bem estressante e cansativa.
              Mas que tal aproveitar o seu tempo livre fazendo atividades do seu
              interesse e se conectando com pessoas novas? Um incentivo a mais
              pra cuidar da saúde em eventos voltados ao bem-estar.
            </S.CardDescription>
          </S.HowWorksCardContainer>
        </S.HowWorksContent>
      </S.HowWorksWrapper>
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRGuest(async () => {
  return {
    props: {}
  }
})
