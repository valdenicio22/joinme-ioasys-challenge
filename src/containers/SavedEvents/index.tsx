import { withSSRAuth } from 'utils/withSSRAuth'
import { GetServerSideProps } from 'next'

import * as S from './style'
import { parseCookies } from 'nookies'
import axios from 'axios'
import { EventData } from 'types/types'
import { EventCard } from 'components/EventCard'

type SavedEventsProps = {
  eventData: Array<EventData>
}

export default function SavedEvents({ eventData }: SavedEventsProps) {
  return (
    <S.Wrapper>
      <S.SavedEventsContainer>
        <S.Welcome>Eventos salvos</S.Welcome>
        {eventData ? (
          <S.EventCardList>
            {eventData.map((card) => (
              <EventCard key={card.id} event={card} />
            ))}
          </S.EventCardList>
        ) : (
          'Salve seu primeiro evento'
        )}
      </S.SavedEventsContainer>
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async (ctx) => {
    const cookies = parseCookies(ctx)

    const response = await axios.get<Array<EventData>>(
      `https://thiagosgdev.com/events/attendees/list/user?status=SAVED`,
      {
        headers: {
          Authorization: `Bearer ${cookies.joinMeToken}`
        }
      }
    )
    return {
      props: {
        eventData: response.data
      }
    }
  }
)
