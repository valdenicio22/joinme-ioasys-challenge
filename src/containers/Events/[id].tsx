import axios from 'axios'
import BookMark from 'components/BookMark'
import Button from 'components/Button'
import MeditationIcon from 'components/MeditationIcon'
import { GetStaticPaths, GetStaticProps } from 'next'
import { CurrentModal, EventData } from 'types/types'
import * as S from './EventDetails'
import { toast } from 'react-toastify'
import { useAuth } from 'context/AuthContext'
import React, { MouseEvent, useState } from 'react'
import { api } from 'service/api'
import Router from 'next/router'
import { UserDialog } from 'components/UserDialog'
import AccessibillyIcon from 'components/AccessibillyIcon'
import PetFriendlyIcon from 'components/PetFriendlyIcon'
import { CameraVideoFill } from '@styled-icons/bootstrap'
import { LocationOn } from '@styled-icons/material'
import { EventCard } from 'components/EventCard'
import ShareIcon from 'components/ShareIcon'

type EventsDetailsProps = {
  eventData: EventData
}

export default function EventsDetails({ eventData }: EventsDetailsProps) {
  const {
    description,
    name,
    isOnline,
    users,
    id,
    numParticipants,
    eventAccessibilities,
    addresses
  } = eventData
  const [currentModal, setCurrentModal] = useState<CurrentModal>('idle')

  const { user } = useAuth()

  const notLogged = (type: string) => {
    toast.info(
      `Faça login para ${type} ${type === 'compartilhar' ? 'o' : 'do'} evento`
    )
    setCurrentModal('signin')
  }

  const handleAttendButton = async (e: MouseEvent) => {
    e.preventDefault()
    if (!user) {
      notLogged('participar')
      return
    }
    try {
      await api.post('/events/attendees', {
        status: 'confirmed',
        eventId: id
      })
      toast.info('Participação confirmada')
      Router.push('/home')
    } catch {
      toast.info('Sua participação já está confirmada neste evento')
    }
  }

  // const handleShareButton = (e: MouseEvent) => {
  //   e.preventDefault()
  //   if (!user) {
  //     notLogged('compartilhar')
  //   } else {
  //     toast.info('Essa funcionalidade será liberada em breve')
  //   }
  // }

  // const handleSaveButton = (e: MouseEvent) => {
  //   e.preventDefault()
  //   if (!user) {
  //     notLogged('salvar')
  //   } else {
  //     toast.success('to do - salvar evento')
  //   }
  // }

  return (
    <S.Wrapper>
      {currentModal === 'signin' && (
        <UserDialog
          currentModal={currentModal}
          setCurrentModal={setCurrentModal}
        />
      )}

      <S.EventDetailContainer>
        <S.EventImgContainer>
          <img src="/img/eventDetail.png" alt="Default Img" />
          <BookMark />
        </S.EventImgContainer>

        <S.MainInfoContainer>
          {/* {Event Details} */}
          <S.EventInfoContainer>
            <S.EventName>{name}</S.EventName>
            <S.EventDescription>{description}</S.EventDescription>
            <S.EventAttendeesContainer>
              {numParticipants! > 1 && <MeditationIcon size="small" />}
              <S.Attendees>
                <strong>Participantes: </strong>
                {numParticipants! > 1
                  ? `${numParticipants} participantes confirmados`
                  : `${numParticipants} participante confirmado`}
              </S.Attendees>
            </S.EventAttendeesContainer>
            <S.EventListInfoContainer>
              <S.EventInfoItem>
                <S.InfoContainer>
                  <AccessibillyIcon />
                  <S.Item>Evento acessível a pessoas com deficiência?</S.Item>
                </S.InfoContainer>
                {eventAccessibilities ? (
                  <S.AnswerItem>Sim!</S.AnswerItem>
                ) : (
                  <S.AnswerItem>Infelizmente, não! :/</S.AnswerItem>
                )}
              </S.EventInfoItem>

              <S.EventInfoItem>
                <S.InfoContainer>
                  <PetFriendlyIcon />
                  <S.Item>Evento acessível a pessoas com deficiência?</S.Item>
                </S.InfoContainer>
                {eventAccessibilities ? (
                  <S.AnswerItem>Sim!</S.AnswerItem>
                ) : (
                  <S.AnswerItem>Infelizmente, não! :/</S.AnswerItem>
                )}
              </S.EventInfoItem>

              {!isOnline ? (
                <S.EventInfoItem>
                  <S.InfoContainer>
                    <LocationOn fill="#1E00FC" width={24} height={24} />
                    <S.Item>{addresses && addresses[0].street}</S.Item>
                  </S.InfoContainer>
                  {eventAccessibilities ? (
                    <S.AnswerItem>Sim!</S.AnswerItem>
                  ) : (
                    <S.AnswerItem>Infelizmente, não! :/</S.AnswerItem>
                  )}
                </S.EventInfoItem>
              ) : (
                <S.EventInfoItem>
                  <S.InfoContainer>
                    <CameraVideoFill width={24} height={24} />
                    <S.Item>Online Event</S.Item>
                  </S.InfoContainer>
                </S.EventInfoItem>
              )}
            </S.EventListInfoContainer>
          </S.EventInfoContainer>
          {/* {Side Info} */}
          <S.SideInfo>
            <S.SideCardContainer>
              <S.SideTitle>Organizador:</S.SideTitle>
              <S.Hoste>
                <MeditationIcon />
                <S.NameHoste>{users.name}</S.NameHoste>
              </S.Hoste>
              <S.SideEventInfo>
                <S.BoxInfo>
                  <S.TypeInfo>Modalidade:</S.TypeInfo>
                  <S.InfoData>Presencial</S.InfoData>
                </S.BoxInfo>
                <S.BoxInfo>
                  <S.TypeInfo>Categoria:</S.TypeInfo>
                  <S.InfoData>Arts</S.InfoData>
                </S.BoxInfo>
                <S.BoxInfo>
                  <S.TypeInfo>Data:</S.TypeInfo>
                  <S.InfoData>03 de maio</S.InfoData>
                </S.BoxInfo>
                <S.BoxInfo>
                  <S.TypeInfo>Horário:</S.TypeInfo>
                  <S.InfoData>18:30</S.InfoData>
                </S.BoxInfo>

                <S.TypeInfo>Valor:</S.TypeInfo>

                <S.InfoData>30tão</S.InfoData>
              </S.SideEventInfo>
            </S.SideCardContainer>
          </S.SideInfo>
          {/* {Similars Events} */}
          <S.EventSuggestionsContainer>
            <S.SuggestionsTitle>Eventos similares para você</S.SuggestionsTitle>
            <S.SuggestionsEventsList>
              <EventCard event={eventData} />
              <EventCard event={eventData} />
              <EventCard event={eventData} />
            </S.SuggestionsEventsList>
          </S.EventSuggestionsContainer>
        </S.MainInfoContainer>
      </S.EventDetailContainer>
      {/* {Flotting fotter} */}
      <S.FloatingInfoContainer>
        <S.ScheduleContainer>
          <S.DateTimeContainer>
            <S.DateTime>
              <S.DateHeader>Data</S.DateHeader>
              <S.DateTimeInfo>03 de maio 2022</S.DateTimeInfo>
            </S.DateTime>
            <S.DateTime>
              <S.DateHeader>Horário</S.DateHeader>
              <S.DateTimeInfo>19:30</S.DateTimeInfo>
            </S.DateTime>
            <S.DateTime>
              <S.DateHeader>Duração</S.DateHeader>
              <S.DateTimeInfo>60 min</S.DateTimeInfo>
            </S.DateTime>
            <S.DateTime>
              <S.DateHeader>Valor</S.DateHeader>
              <S.Price>R$ 30,00</S.Price>
            </S.DateTime>
          </S.DateTimeContainer>
          <S.AttendEventContainer>
            <S.ShareButton onClick={handleAttendButton}>
              <ShareIcon />
            </S.ShareButton>
            <Button
              bgColor="primary"
              colorText="white"
              size="large"
              onClick={handleAttendButton}
            >
              QUERO PARTICIPAR
            </Button>
          </S.AttendEventContainer>
        </S.ScheduleContainer>
      </S.FloatingInfoContainer>
    </S.Wrapper>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const response = await axios.get<EventData[]>(
  //   `https://thiagosgdev.com/events/list`
  // )
  // '91708714-1764-4096-81a5-524aa7ad1939'
  const paths = ['5af2d435-c4a4-4ec7-a8e6-85f05384e1cb'].map((id) => ({
    params: {
      id
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const eventId = ctx.params?.id
  const response = await axios.get<EventData[]>(
    `https://thiagosgdev.com/events/list?eventId=${eventId}`
  )

  return {
    props: {
      eventData: response.data[0]
    },
    revalidate: 1000
  }
}
