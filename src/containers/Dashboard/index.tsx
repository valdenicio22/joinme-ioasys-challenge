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
  const [eventsCard, setEventsCard] = useState<EventData[]>([])

  const [isModalOpen, setIsModalOpen] = useState(true)

  const onCloseModal = () => setIsModalOpen(false)

  useEffect(() => {
    try {
      api
        .get<Array<EventData>>('events/list')
        .then((response) => setEventsCard(response.data))
    } catch (error) {
      console.log(error)
    }
  }, [])

  console.log({ eventsCard })

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
                <EventCard
                  key={event.id}
                  date={event.date}
                  name={event.name}
                  addresses={event.addresses}
                  numParticipants={event.numParticipants}
                  activities={event.activities}
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
