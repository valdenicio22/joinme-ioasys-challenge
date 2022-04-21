import { useEffect, useState } from 'react'
import Head from 'next/head'

import { Dialog } from '../../components/Dialog'
import { Interests } from '../../components/Interests'
import { EmergencyContact } from '../../components/EmergencyContact'

import { useAuth } from 'context/AuthContext'

import * as S from './styles'

import { EventCard } from '../../components/EventCard'
import Link from 'next/link'
import { useEvents } from 'hooks/useEvents'

export default function Home() {
  const { user } = useAuth()
  const [modalStep, setModalStep] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(true)
  const onCloseModal = () => setIsModalOpen(false)
  const { events, setFilter } = useEvents()

  useEffect(() => {
    setFilter('activityId', '76e56e1a-c5fb-451b-b49c-0019258383dc')
  }, [setFilter])

  return (
    <S.Wrapper>
      <Head>
        <title>Home | joinMe</title>
      </Head>

      {user && (
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

      <S.HomeContainer>
        <S.FiltersContainer>
          <select name="FIlter" id="pet-select">
            <option value="">--Please choose an option--</option>
            <option value="opt1">Opt1</option>
            <option value="opt2">Opt2</option>
          </select>

          <select name="FIlter" id="pet-selectw">
            <option value="">--Please choose an option--</option>
            <option value="opt1">Opt1</option>
            <option value="opt2">Opt2</option>
          </select>
        </S.FiltersContainer>

        <S.Title>Eventos impulsionados</S.Title>
        <S.Boosted>
          {events
            ? events
                .filter((event) => event.isPromoted)
                .map((event) => (
                  <Link href={`/events/${event.id}`} key={event.id} passHref>
                    <a>
                      <EventCard event={event} />
                    </a>
                  </Link>
                ))
            : 'Loading...'}
        </S.Boosted>
        <S.Title>Eventos Recomendados</S.Title>

        <S.Recommended>
          {events
            ? events
                .filter((event) => !event.isPromoted)
                .map((event) => (
                  <Link href={`/events/${event.id}`} key={event.id} passHref>
                    <a>
                      <EventCard event={event} />
                    </a>
                  </Link>
                ))
            : 'Loading...'}
        </S.Recommended>
      </S.HomeContainer>
    </S.Wrapper>
  )
}
