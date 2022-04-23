import BookMark from 'components/BookMark'
import Tag from 'components/Tag'
import { MouseEvent, useState } from 'react'
import { EventData } from 'types/types'
import * as S from './styles'
import { LocationOn } from '@styled-icons/material'
import { useAuth } from '../../context/AuthContext'
import { toast } from 'react-toastify'
import { api } from '../../service/api'

type EventCardProps = {
  event: EventData
}

export const EventCard = ({ event }: EventCardProps) => {
  const [isBooked, setIsBooked] = useState(false)
  const { name, isOnline, numParticipants, addresses, activities, id, date } =
    event
  const { user } = useAuth()
  const myDate = new Date(date || '')

  const handleAttendButton = async (e: MouseEvent) => {
    e.preventDefault()

    if (!user) {
      toast.info(`Faça login para salvar o evento`)
      return
    }
    setIsBooked(!isBooked)
    await api.post('/events/attendees', {
      status: 'SAVED',
      eventId: id
    })
    toast.success('Evento Salvo com sucesso')
  }

  return (
    <S.Wrapper>
      <S.ImgContainer>
        <img
          width={360}
          height={304}
          src="/img/cardEventImg.svg"
          alt="Default Img"
        />
        <S.Schedule>{`${myDate.getDay()} / ${myDate.getMonth()}`}</S.Schedule>
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
          <S.IconButton onClick={handleAttendButton}>
            <BookMark isBooked={isBooked} />
          </S.IconButton>
        </S.Flags>
      </S.EventDetailsContainer>
    </S.Wrapper>
  )
}
