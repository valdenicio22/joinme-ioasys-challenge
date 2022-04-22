import { useState } from 'react'
import Head from 'next/head'

import * as S from './styles'

import { EventCard } from '../../components/EventCard'
import Link from 'next/link'
import { useEvents } from 'hooks/useEvents'
import { CurrentModal, Activity } from 'types/types'

import { UserDialog } from 'components/UserDialog'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { parseCookies } from 'nookies'
import { useAuth } from '../../context/AuthContext'

type HomeProps = {
  userInterests: Array<Activity>
}

export default function Home({ userInterests }: HomeProps) {
  const { user } = useAuth()
  const { events } = useEvents()
  const [currentModal, setCurrentModal] = useState<CurrentModal>(
    user && userInterests.length === 0 ? 'emergencyContact' : 'idle'
  )

  return (
    <S.Wrapper>
      <Head>
        <title>Home | joinMe</title>
      </Head>

      {currentModal === 'emergencyContact' && (
        <UserDialog
          currentModal={currentModal}
          setCurrentModal={setCurrentModal}
        />
      )}
      {currentModal === 'interests' && (
        <UserDialog
          currentModal={currentModal}
          setCurrentModal={setCurrentModal}
        />
      )}
      {currentModal === 'disabilities' && (
        <UserDialog
          currentModal={currentModal}
          setCurrentModal={setCurrentModal}
        />
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx)
  if (cookies.joinMeToken) {
    const response = await axios.get<Activity[]>(
      `https://thiagosgdev.com/users/interests/list`,
      {
        headers: {
          Authorization: `Bearer ${cookies.joinMeToken}`
        }
      }
    )

    return {
      props: {
        userInterests: response.data
      }
    }
  } else {
    return {
      props: {
        userInterests: []
      }
    }
  }
}
