import { useState } from 'react'
import Head from 'next/head'

import * as S from './styles'

import { EventCard } from '../../components/EventCard'
import Link from 'next/link'
import { useEvents } from 'hooks/useEvents'
import { Activity, CurrentModal } from 'types/types'

import { UserDialog } from 'components/UserDialog'
import { GetServerSideProps } from 'next'
import { useAuth } from '../../context/AuthContext'
import { useActivities } from 'hooks/useActivities'
import { parseCookies } from 'nookies'
import axios from 'axios'

type HomeProps = {
  userInterests: Activity[]
}
export default function Home(props: HomeProps) {
  const { user } = useAuth()
  const { events, filters, setFilter, page, updatePage } = useEvents({
    onlyRecommended: !!user,
    itemsPerPage: 5,
    fetchAll: false
  })
  const { events: allEvents } = useEvents()
  const { activities } = useActivities()
  const [currentModal, setCurrentModal] = useState<CurrentModal>(
    user && props.userInterests?.length === 0 ? 'emergencyContact' : 'idle'
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
        <S.Title>{`${
          user ? 'Eventos Recomendados' : 'Todos os Eventos'
        }`}</S.Title>

        <S.Recommended>
          {events
            ? events.map((event) => (
                <Link href={`/events/${event.id}`} key={event.id} passHref>
                  <a>
                    <EventCard event={event} />
                  </a>
                </Link>
              ))
            : 'Loading...'}
        </S.Recommended>
        <div
          style={{
            width: '100%',
            marginLeft: 'auto'
          }}
        >
          <button disabled={page === 1} onClick={() => updatePage(page - 1)}>
            Anterior
          </button>
          {page}
          <button onClick={() => updatePage(page + 1)}>Próximo</button>
        </div>
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
      props: {}
    }
  }
}
