import { withSSRAuth } from 'utils/withSSRAuth'
import { GetServerSideProps } from 'next'

import * as S from './style'
import { parseCookies } from 'nookies'
import axios from 'axios'
import { EventData } from 'types/types'

type SavedEventsProps = {
  eventData: EventData
}

export default function SavedEvents({ eventData }: SavedEventsProps) {
  console.log('retornou bixo', eventData)
  return <S.Wrapper>SavedEvents</S.Wrapper>
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
