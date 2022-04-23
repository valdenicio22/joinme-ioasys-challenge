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
import { useActivities } from 'hooks/useActivities'

type HomeProps = {
  userInterests: Array<Activity>
}

export default function Home({ userInterests }: HomeProps) {
  const { user } = useAuth()
  const { events, filters, setFilter } = useEvents({ onlyRecommended: !!user })
  const { events: allEvents } = useEvents()
  const { activities } = useActivities()
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
        {!user && (
          <S.FiltersContainer>
            <S.ActivitiesSelect>
              <label htmlFor="userInterests">Interesses:</label>
              <select
                name="interests"
                id="userInterests"
                value={filters?.activityId}
                onChange={(e) => setFilter('activityId', e.target.value)}
              >
                <option value="" selected>
                  Todos
                </option>
                {activities.map((activity) => (
                  <option key={activity.id} value={activity.id}>
                    {activity.name}
                  </option>
                ))}
              </select>
            </S.ActivitiesSelect>

            <S.ModalityContainer>
              <label htmlFor="modality">Modalidade:</label>
              <select
                name="modality"
                id="modality"
                value={filters.isOnline}
                onChange={(e) => setFilter('isOnline', e.target.value)}
              >
                <option value="" selected>
                  Todos
                </option>
                <option value="true">online</option>
                <option value="false">presencial</option>
              </select>
            </S.ModalityContainer>
          </S.FiltersContainer>
        )}

        <S.Title>Eventos impulsionados</S.Title>
        <S.Boosted>
          {allEvents
            ? allEvents
                .filter((event) => event.isPromoted)
                .slice(0, 3)
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
