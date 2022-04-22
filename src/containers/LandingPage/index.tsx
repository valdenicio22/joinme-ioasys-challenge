import Button from 'components/Button'
import { AppInfoCards } from 'components/AppInfoCards'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { withSSRGuest } from 'utils/withSSRGuest'
import * as S from './styles'
import { PlayCircle } from '@styled-icons/boxicons-regular'
import Link from 'next/link'
import { CurrentModal, EventData, Wellness } from 'types/types'
import axios from 'axios'
import { EventCard } from 'components/EventCard'
import BlogCard from 'components/BlogCard'
import { toast } from 'react-toastify'
import { UserDialog } from 'components/UserDialog'
import { useState } from 'react'
import { KeyboardArrowRight } from '@styled-icons/material'

type LandingPageProps = {
  eventsData: Array<EventData>
  wellnessData: Array<Wellness>
}

export default function LandingPage({
  eventsData,
  wellnessData
}: LandingPageProps) {
  const [currentModal, setCurrentModal] = useState<CurrentModal>('idle')

  return (
    <S.Wrapper>
      <Head>
        <title>joinMe</title>
      </Head>

      {currentModal === 'signup' && (
        <UserDialog
          currentModal={currentModal}
          setCurrentModal={setCurrentModal}
        />
      )}

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
                <Button
                  bgColor="primary"
                  onClick={() => setCurrentModal('signup')}
                >
                  Cadastra-se agora
                </Button>
                <Button
                  leftIcon={<PlayCircle width={15} height={15} />}
                  onClick={() => toast.info('Aguardando Link')}
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
            src="/img/freePreemium.svg"
            alt="Tabela explicando os plano, grátis e premium"
          />
          <Button
            bgColor="primary"
            onClick={() => setCurrentModal('signup')}
            className="freeButton"
          >
            Cadastra-se
          </Button>
          <Button
            bgColor="primary"
            className="premiumButton"
            onClick={() =>
              toast.info('Essa funcionalidade será liberade em breve')
            }
          >
            Cadastra-se
          </Button>
        </S.GroupsContainer>
      </S.GroupsWrapper>
      <S.AppCardsWrapper>
        <S.AppCardContainer>
          <S.SubTitleContainer>
            <S.SubTitle>Eventos Recomendados</S.SubTitle>
            <S.LinkContainer>
              <Link href={'/home'}>{'ver mais'}</Link>
              <KeyboardArrowRight width={22} height={22} fill={'#1E00FC'} />
            </S.LinkContainer>
          </S.SubTitleContainer>
          <S.CardsContainer>
            {eventsData.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </S.CardsContainer>
        </S.AppCardContainer>

        <S.AppCardContainer>
          <S.SubTitleContainer>
            <S.SubTitle>Dicas de bem-estar</S.SubTitle>
            <S.LinkContainer>
              <Link href={'/blog'}>{'ver mais'}</Link>
              <KeyboardArrowRight width={25} height={25} fill={'#1E00FC'} />
            </S.LinkContainer>
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
  const eventsResponse = await axios.get<EventData[]>(
    `ec2-54-89-248-27.compute-1.amazonaws.com/events/list?take=3&skip=0`
  )
  const wellnessResponse = await axios.get<Wellness[]>(
    `ec2-54-89-248-27.compute-1.amazonaws.com/wellness/list`
  )

  return {
    props: {
      eventsData: eventsResponse.data,
      wellnessData: wellnessResponse.data.slice(0, 3)
    }
  }
})
