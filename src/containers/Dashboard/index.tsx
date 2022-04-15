import { useState } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { Dialog } from '../../components/Dialog'
import { Interests } from '../../components/Interests'
import { EmergencyContact } from '../../components/EmergencyContact'

import { withSSRAuth } from '../../utils/withSSRAuth'

import * as S from './styles'

import { EventCard } from '../../components/EventCard'
import { EventData } from '../../types/types'
import Router from 'next/router'
import axios from 'axios'
import { parseCookies } from 'nookies'

type DashboardProps = {
  eventsCard: Array<EventData>
}

export default function Dashboard({ eventsCard }: DashboardProps) {
  const [modalStep, setModalStep] = useState(1)

  const [isModalOpen, setIsModalOpen] = useState(true)

  const onCloseModal = () => setIsModalOpen(false)

  return (
    <S.Wrapper>
      <Head>
        <title>Dashboard | joinMe</title>
      </Head>

      <Dialog isModalOpen={isModalOpen} onCloseModal={onCloseModal}>
        {modalStep === 1 && <EmergencyContact setModalStep={setModalStep} />}
        {modalStep === 2 && (
          <Interests
            setModalStep={setModalStep}
            onCloseModal={onCloseModal}
            modalStep={modalStep}
          />
        )}
      </Dialog>

      <S.HeaderContainer>
        <S.MainLinksContainer>
          <span>Events</span>
          <span>insights</span>
        </S.MainLinksContainer>

        <S.FiltersContainer>
          <button>Categoria</button>
          <button>Tipo</button>
          <button>Mais recentes</button>
        </S.FiltersContainer>
        <S.EventCardContainer>
          {eventsCard
            ? eventsCard.map((event) => (
                <S.CardButton
                  key={event.id}
                  onClick={() => Router.push(`/events/${event.id}`)}
                >
                  <EventCard
                    date={event.date}
                    name={event.name}
                    addresses={event.addresses}
                    numParticipants={event.numParticipants}
                    activities={event.activities}
                  />
                </S.CardButton>
              ))
            : 'Loading...'}
        </S.EventCardContainer>
      </S.HeaderContainer>
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async (ctx) => {
    const cookies = parseCookies(ctx)

    const response = await axios.get<Array<EventData>>(
      'https://thiagosgdev.com/events/list',
      {
        headers: {
          Authorization: `Bearer ${cookies.joinMeToken}`
        }
      }
    )
    return {
      props: {
        eventsCard: response.data
      }
    }
  }
)
