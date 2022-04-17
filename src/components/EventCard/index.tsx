import BookMark from 'components/BookMark'
import LocationIcon from 'components/LocationIcon'
import Tag from 'components/Tag'
import { useState } from 'react'
import { EventData } from 'types/types'
import * as S from './styles'

type EventCardProps = Omit<EventData, 'eventAccessibilities'>

export const EventCard = ({
  addresses,
  name,
  numParticipants,
  activities
}: EventCardProps) => {
  const [isBooked, setIsBooked] = useState(false)

  return (
    <S.Wrapper>
      <S.ImgContainer>
        <img
          width={120}
          height={160}
          src="/img/defaultImg.png"
          alt="Default Img"
        />
        <S.Schedule>28 abril</S.Schedule>
      </S.ImgContainer>
      <S.EventDetailsContainer>
        <S.EventTitle>{name}</S.EventTitle>

        <S.LocationContainer>
          <S.Location>
            <LocationIcon />
            <S.Street>{addresses && 'Gramado do Centro'}</S.Street>
          </S.Location>
          <S.City>{addresses && 'Campus II, UFMG'}</S.City>
        </S.LocationContainer>

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
