import Button from 'components/Button'
import { AppInfoCards } from 'components/AppInfoCards'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Router from 'next/router'
import { withSSRGuest } from 'utils/withSSRGuest'
import * as S from './styles'
import { PlayCircle } from '@styled-icons/boxicons-regular'
import Link from 'next/link'
import { EventData, Wellness } from 'types/types'
import axios from 'axios'
import { EventCard } from 'components/EventCard'
import BlogCard from 'components/BlogCard'

type LandingPageProps = {
  eventsData: Array<EventData>
  wellnessData: Array<Wellness>
}

export default function LandingPage({
  eventsData,
  wellnessData
}: LandingPageProps) {
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
      <S.GroupsWrapper>
        <S.GroupsContainer>
          <img
            src="/img/groupPlans.svg"
            alt="Tabela explicando os plano, grátis e premium"
          />
        </S.GroupsContainer>
      </S.GroupsWrapper>
      <S.AppCardsWrapper>
        <S.AppCardContainer>
          <S.SubTitleContainer>
            <S.SubTitle>Eventos Recomendados</S.SubTitle>
            <Link href={'/home'}>{'ver mais >'}</Link>
          </S.SubTitleContainer>
          <S.CardsContainer>
            {eventsData.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </S.CardsContainer>
        </S.AppCardContainer>

        <S.AppCardContainer>
          <S.SubTitleContainer>
            <S.SubTitle>Eventos Recomendados</S.SubTitle>
            <Link href={'/blog'}>{'ver mais >'}</Link>
          </S.SubTitleContainer>
          <S.CardsContainer>
            {wellnessData.map((card) => (
              <BlogCard key={card.id} card={card} />
            ))}
          </S.CardsContainer>
        </S.AppCardContainer>
      </S.AppCardsWrapper>
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRGuest(async () => {
  // const eventsResponse = await axios.get<EventData[]>(
  //   `https://thiagosgdev.com/events/list?take=3&skip=0`
  // )
  // const wellnessResponse = await axios.get<Wellness[]>(
  //   `https://thiagosgdev.com/wellness/list`
  // )

  return {
    props: {
      eventsData: [],
      wellnessData: []
    }
  }
})
