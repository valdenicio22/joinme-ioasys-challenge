import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { Dialog } from '../../components/Dialog'
import { Interests } from '../../components/Interests'
import { EmergencyContact } from '../../components/EmergencyContact'

import { withSSRAuth } from '../../utils/withSSRAuth'

import * as S from './styles'

import { EventCard } from '../../components/EventCard'
import { api } from '../../service/api'
import { EventData } from '../../types/types'

export default function Dashboard() {
  const [modalStep, setModalStep] = useState(1)
  const [events, setEvents] = useState<EventData[]>([])

  const [isModalOpen, setIsModalOpen] = useState(true)

  const onCloseModal = () => setIsModalOpen(false)

  useEffect(() => {
    try {
      api.get('events/list').then((response) => setEvents(response.data))
    } catch (error) {
      console.log(error)
    }
  }, [])

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
          {events
            ? events.map((event) => (
                <EventCard
                  key={event.event_id}
                  date={event.date}
                  name={event.name}
                  city={event.city}
                  description={event.description}
                  activity_id={event.activity_id}
                  max_participants={event.max_participants}
                />
              ))
            : 'Loading...'}
        </S.EventCardContainer>
      </S.HeaderContainer>
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {}
  }
})
