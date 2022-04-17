import Axios from 'axios'
import BookMark from 'components/BookMark'
import Button from 'components/Button'
import MeditationIcon from 'components/MeditationIcon'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { CurrentModal, EventData } from 'types/types'
import * as S from './EventDetails'
import { Share } from '@styled-icons/feather'
import { toast } from 'react-toastify'
import { useAuth } from 'context/AuthContext'
import React, { MouseEvent, useState } from 'react'
import { api } from 'service/api'
import Router from 'next/router'
import { UserDialog } from 'components/UserDialog'

type EventsDetailsProps = {
  eventData: EventData
}

export default function EventsDetails({ eventData }: EventsDetailsProps) {
  const { description, date, name, isOnline, users, id } = eventData
  const [currentModal, setCurrentModal] = useState<CurrentModal>('idle')

  const { user } = useAuth()

  const hasUSer = (type: string) => {
    toast.info(
      `Faça login para ${type} ${type === 'compartilhar' ? 'o' : 'do'} evento`
    )
    setCurrentModal('signin')
  }

  const handleAttendButton = async (e: MouseEvent) => {
    e.preventDefault()
    if (!user) {
      hasUSer('participar')
    } else {
      try {
        await api.post('/events/attendees', {
          status: 'confirmed',
          eventId: id
        })
        toast.info('Participação confirmada')
        Router.push('/home')
      } catch (err) {
        if (Axios.isAxiosError(err)) {
          if (err.response?.status === 409) {
            console.log('err', err)
            toast.info('Sua particição nesse evento já foi confirmada')
          }
        } else console.log(err)
      }
    }
  }

  const handleShareButton = (e: MouseEvent) => {
    e.preventDefault()
    if (!user) {
      hasUSer('compartilhar')
    } else {
      toast.info('Essa funcionalidade será liberada em breve')
    }
  }

  const handleSaveButton = (e: MouseEvent) => {
    e.preventDefault()
    if (!user) {
      hasUSer('salvar')
    } else {
      toast.success('to do - salvar evento')
    }
  }

  return (
    <S.Wrapper>
      {currentModal === 'signin' && (
        <UserDialog
          currentModal={currentModal}
          setCurrentModal={setCurrentModal}
        />
      )}
      <S.HeaderContainer>
        <S.DesktopContainer>
          <S.DateHeader>{date}</S.DateHeader>
          <S.EventTitle>{`${isOnline ? '[Online]' : ''} ${name}`}</S.EventTitle>
        </S.DesktopContainer>
      </S.HeaderContainer>
      <S.DesktopContainer>
        <S.MainInfoContainer>
          <S.EventInfoContainer>
            <S.EventImgContainer>
              <Image
                width={660}
                height={370}
                src="/img/eventFake.png"
                alt="Default Img"
              />
            </S.EventImgContainer>

            <S.EventDetailsContainer>
              <S.SubTitle>Esse evento inclui: </S.SubTitle>
              <S.EventDetailsItem>
                <S.EventDetailsIcon>👍🏻 </S.EventDetailsIcon>
                Direct interaction with the instructor
              </S.EventDetailsItem>
              <S.EventDetailsItem>
                <S.EventDetailsIcon>🖥 </S.EventDetailsIcon>
                Access on mobile and web
              </S.EventDetailsItem>
              <S.EventDetailsItem>
                <S.EventDetailsIcon>🎥 </S.EventDetailsIcon>
                Session recording after the workshop
              </S.EventDetailsItem>
              <S.EventDetailsItem>
                <S.EventDetailsIcon>⌛️ </S.EventDetailsIcon>1 hour live session
              </S.EventDetailsItem>
            </S.EventDetailsContainer>

            <S.DescriptionContainer>
              <S.SubTitle>Descrição</S.SubTitle>
              <S.PDetails>{description}</S.PDetails>
            </S.DescriptionContainer>
          </S.EventInfoContainer>

          <S.SideInfo>
            <S.SideCardContainer>
              <S.Hoste>
                <S.ImgHoste>
                  <MeditationIcon />
                </S.ImgHoste>
                <S.NameAndMedia>
                  <S.NameHoste>{users.name}</S.NameHoste>
                  <S.MediaHoste>@{users.name}</S.MediaHoste>
                </S.NameAndMedia>
              </S.Hoste>
              <S.AboutHoste>
                {users.aboutMe
                  ? users.aboutMe
                  : 'Modern Cubist abstract artist, NFT artist, Art educator & bridging the Contemporary with the Digital art realms'}
              </S.AboutHoste>
            </S.SideCardContainer>
          </S.SideInfo>
        </S.MainInfoContainer>
      </S.DesktopContainer>
      <S.FloatingInfo>
        <S.ScheduleContainer>
          <S.DateTimeContainer>
            <S.DateTime>
              <S.DateHeader>Data</S.DateHeader>
              <S.DateTimeInfo>25 Oct 2021</S.DateTimeInfo>
            </S.DateTime>
            <S.DateTime>
              <S.DateHeader>Horário</S.DateHeader>
              <S.DateTimeInfo>19:30</S.DateTimeInfo>
            </S.DateTime>
            <S.DateTime>
              <S.DateHeader>Duração</S.DateHeader>
              <S.DateTimeInfo>60 min</S.DateTimeInfo>
            </S.DateTime>
          </S.DateTimeContainer>
          <S.AttendEventContainer>
            <S.Price>
              <S.PriceTitle>Price</S.PriceTitle>
              <S.PriceValue>RS: 600</S.PriceValue>
            </S.Price>
            <S.SaveEvent onClick={handleSaveButton}>
              <BookMark />
            </S.SaveEvent>
            <Button
              icon={<Share size={24} />}
              bgColor="white"
              size="large"
              colorText="secondary"
              borderColor="secondary"
              onClick={handleShareButton}
            >
              Compartilhar
            </Button>
            <Button
              bgColor="primary"
              size="large"
              colorText="white"
              onClick={handleAttendButton}
            >
              Participar
            </Button>
          </S.AttendEventContainer>
        </S.ScheduleContainer>
      </S.FloatingInfo>
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const eventId = ctx.params?.id
  const response = await Axios.get<EventData[]>(
    `https://thiagosgdev.com/events/list?eventId=${eventId}`
  )

  return {
    props: {
      eventData: response.data[0]
    }
  }
}
