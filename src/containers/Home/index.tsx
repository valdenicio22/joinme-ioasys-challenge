import { useState } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { Dialog } from '../../components/Dialog'
import { Interests } from '../../components/Interests'
import { EmergencyContact } from '../../components/EmergencyContact'

import { useAuth } from 'context/AuthContext'

import * as S from './styles'

import { EventCard } from '../../components/EventCard'
import { EventData } from '../../types/types'
import axios from 'axios'
import Link from 'next/link'

type HomeProps = {
  eventsCard: Array<EventData>
}

export default function Home({ eventsCard }: HomeProps) {
  const { user } = useAuth()
  const [modalStep, setModalStep] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(true)
  const onCloseModal = () => setIsModalOpen(false)

  const hasUpdatedInfo = (): boolean => {
    if (user) {
      if (user.emergencyName === null && user.emergencyPhone === null)
        return true
      return false
    }
    return false
  }
  return (
    <S.Wrapper>
      <Head>
        <title>Home | joinMe</title>
      </Head>

      {hasUpdatedInfo() && (
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
      )}

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
      </S.HeaderContainer>
      <S.EventsCardsListContainer>
        {eventsCard
          ? eventsCard.map((event) => (
              <Link href={`/events/${event.id}`} key={event.id} passHref>
                <a>
                  <EventCard event={event} />
                </a>
              </Link>
            ))
          : 'Loading...'}
      </S.EventsCardsListContainer>
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get<Array<EventData>>(
    'https://thiagosgdev.com/events/list'
  )
  return {
    props: {
      eventsCard: response.data
    }
  }
}
