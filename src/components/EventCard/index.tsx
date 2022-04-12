import BookMark from 'components/BookMark'
import LocationIcon from 'components/LocationIcon'
import Image from 'next/image'
import { useState } from 'react'
import { EventData } from 'types/types'
import * as S from './styles'

type EventCardProps = {
  date: EventData['date']
  name: EventData['name']
  city: EventData['city']
  description?: EventData['description']
  activity_id?: EventData['activity_id']
  max_participants: EventData['max_participants']
}

export const EventCard = ({
  city,
  date,
  max_participants,
  name,
  description
}: EventCardProps) => {
  const [isBooked, setIsBooked] = useState(false)

  return (
    <S.Wrapper>
      <S.ImgContainer>
        <Image width={160} height={100} src="/test.webp" alt="Teste" />
      </S.ImgContainer>
      <S.EventDetails>
        <S.Schedule>{date}</S.Schedule>
        <S.EventTitle>{name}</S.EventTitle>

        <S.Description>{description}</S.Description>

        <S.ExtraInfo>
          <S.Participants>
            {max_participants > 1
              ? `${max_participants} participantes`
              : `${max_participants} participante`}
          </S.Participants>
          <S.Location>
            <LocationIcon />
            <S.City>{city}</S.City>
          </S.Location>
        </S.ExtraInfo>
        <S.Flags>
          <S.IconButton onClick={() => setIsBooked(!isBooked)}>
            <BookMark isBooked={isBooked} />
          </S.IconButton>
        </S.Flags>
      </S.EventDetails>
    </S.Wrapper>
  )
}
