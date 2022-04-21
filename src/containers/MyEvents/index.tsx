import { withSSRAuth } from 'utils/withSSRAuth'
import { GetServerSideProps } from 'next'

import * as S from './style'
import { parseCookies } from 'nookies'
import axios from 'axios'
import { EventData } from 'types/types'
import { EventCard } from 'components/EventCard'

type MyEventsProps = {
  eventData: Array<EventData>
}

export default function MyEvents({ eventData }: MyEventsProps) {
  return (
    <S.Wrapper>
      <S.MyEventsContainer>
        <S.Welcome>Meus eventos</S.Welcome>
        {eventData ? (
          <S.MyCardList>
            {eventData.map((card) => (
              <EventCard key={card.id} event={card} />
            ))}
          </S.MyCardList>
        ) : (
          'Salve seu primeiro evento'
        )}
      </S.MyEventsContainer>
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async (ctx) => {
    const cookies = parseCookies(ctx)

    const response = await axios.get<Array<EventData>>(
      `https://thiagosgdev.com/events/organizer/list`,
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
