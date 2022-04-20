import BookMark from 'components/BookMark'
import Tag from 'components/Tag'
import { useState } from 'react'
import { EventData } from 'types/types'
import * as S from './styles'
import { LocationOn } from '@styled-icons/material'
type EventCardProps = {
  event: EventData
}

export const EventCard = ({ event }: EventCardProps) => {
  const [isBooked, setIsBooked] = useState(false)
  const { name, isOnline, numParticipants, addresses, activities } = event

  return (
    <S.Wrapper>
      <S.ImgContainer>
        <img width={360} height={304} src="/img/events.png" alt="Default Img" />
        <S.Schedule>28 abril</S.Schedule>
      </S.ImgContainer>
      <S.EventDetailsContainer>
        <S.EventTitle>{name}</S.EventTitle>

        {isOnline ? (
          <S.IsOnlineContainer>Online</S.IsOnlineContainer>
        ) : (
          <S.LocationContainer>
            <S.Location>
              <LocationOn fill="#1E00FC" width={22} height={22} />
              <S.Street>{addresses && addresses[0].street}</S.Street>
            </S.Location>
            <S.City>
              {addresses && `${addresses[0].city}, ${addresses[0].state}`}
            </S.City>
          </S.LocationContainer>
        )}

        <S.Participants>
          {numParticipants! > 1
            ? `${numParticipants} participantes confirmados`
            : `${numParticipants} participante confirmado`}
        </S.Participants>

        <S.Flags>
          <Tag colorText="darkGray" size="small">
            {activities?.name}
          </Tag>
          <S.IconButton onClick={() => setIsBooked(!isBooked)}>
            <BookMark isBooked={isBooked} />
          </S.IconButton>
        </S.Flags>
      </S.EventDetailsContainer>
    </S.Wrapper>
  )
}
