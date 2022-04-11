import Button from '../../components/Button'
import { TextField } from '../../components/TextField'
import Fakelogo from '../../components/Fakelogo'
import { Dialog } from '../../components/Dialog'
import Arrow from '../../components/Arrow'

import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { withSSRAuth } from '../../utils/withSSRAuth'
import { useAuth } from '../../context/AuthContext'
import { ActivityData, User } from '../../types/types'

import * as S from './Dashboard.styles'

import { useForm, SubmitHandler } from 'react-hook-form'
import { api } from '../../service/api'

import { useEffect, useState } from 'react'
import { setCookie } from 'nookies'

import { toast } from 'react-toastify'
import Drawer from 'react-modern-drawer'
import Profile from 'components/Profile'

type SecurityContactData = Pick<User, 'emergencyName' | 'emergencyPhone'>

export type Activity = {
  name: string
  id: string
  isSelect: boolean
}

export default function Dashboard() {
  const { user, setUser } = useAuth()
  const [modalStep, setModalStep] = useState(1)
  const [activities, setActivities] = useState<Activity[]>([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState)
  }

  const [isModalOpen, setIsModalOpen] = useState(true)

  const onCloseModal = () => setIsModalOpen(false)

  const { register, handleSubmit } = useForm<SecurityContactData>()

  const onSubmit: SubmitHandler<SecurityContactData> = async (formData) => {
    if (formData) {
      const updatedUser = {
        ...user!,
        emergencyName: formData.emergencyName,
        emergencyPhone: formData.emergencyPhone
      }
      try {
        console.log({ updatedUser })
        const response = await api.patch<{ updatedUser: User }>('/users', {
          updatedUser
        })
        setUser(response.data.updatedUser)
        setCookie(undefined, 'joinMeUser', JSON.stringify(updatedUser), {
          maxAge: 60 * 60 * 24 * 30, //30 days
          path: '/'
        })
        setModalStep(2)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleSkipModalStep = () =>
    modalStep > 1 ? onCloseModal() : setModalStep(2)

  useEffect(() => {
    api
      .get<Array<ActivityData>>('/activities/list')
      .then((response) => {
        const activityData = response.data
        const updatedActivities = activityData.map((activity) => ({
          ...activity,
          isSelect: false
        }))
        setActivities(updatedActivities)
      })
      .catch((error) => console.log(error))
  }, [])

  const handleActivitySelected = (selectedActivity: Activity) => {
    const activitiesUpdated = activities.map((activity) =>
      activity.id === selectedActivity.id
        ? { ...activity, isSelect: !selectedActivity.isSelect }
        : activity
    )
    setActivities(activitiesUpdated)
  }

  const handleUserInterests = async () => {
    const activityIds = activities.reduce((acc, activity) => {
      return activity.isSelect === true ? [...acc, activity.id] : acc
    }, [] as Array<string>)
    try {
      await api.post('/users/interests', { activityIds })
      toast.success('Interesses cadastrado com sucesso')
    } catch (error) {
      console.log(error)
      toast.error('error')
    }
    onCloseModal()
  }

  return (
    <S.Wrapper>
      <Head>
        <title>Dashboard | joinMe</title>
      </Head>
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer}
        direction="right"
        className="react-drawer"
        size={'350px'}
      >
        <Profile />
      </Drawer>
      <Dialog isModalOpen={isModalOpen} onCloseModal={onCloseModal}>
        {modalStep === 1 && (
          <>
            <S.LogoContainer>
              <Fakelogo />
            </S.LogoContainer>
            <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
              <S.TitleContainer>
                <S.H2>
                  Gostaria de adiconar <br /> um contato de segurança ?
                </S.H2>
              </S.TitleContainer>
              <S.InputsContainer>
                <TextField
                  label="Qual o nome da pessoa?"
                  type="text"
                  {...register('emergencyName')}
                  placeholder="luma silva"
                  fullWidth={true}
                />
                <TextField
                  label="E o telefone?"
                  type="text"
                  placeholder="(xx) 9 9999-9999"
                  fullWidth={true}
                  {...register('emergencyPhone')}
                />
              </S.InputsContainer>
              <S.ButtonsContainer>
                <S.SkipStep onClick={handleSkipModalStep}>pular</S.SkipStep>
                <Button type="submit">proximo</Button>
              </S.ButtonsContainer>
            </S.FormContainer>
          </>
        )}
        {modalStep === 2 && (
          <>
            <S.ArrowContainer onClick={() => setModalStep(1)}>
              <Arrow />
            </S.ArrowContainer>
            <S.H2>Conta pra gente...quais são seus interesses</S.H2>
            <S.InterestsContainer>
              {activities.map((activity) => (
                <S.InterestContent
                  key={activity.id}
                  onClick={() => handleActivitySelected(activity)}
                >
                  <S.InterestIcon isSelect={activity.isSelect}></S.InterestIcon>
                  <p>{activity.name}</p>
                </S.InterestContent>
              ))}
            </S.InterestsContainer>
            <S.ButtonsContainer>
              <S.SkipStep onClick={handleSkipModalStep}>pular</S.SkipStep>
              <Button onClick={handleUserInterests}>Cadastrar</Button>
            </S.ButtonsContainer>
          </>
        )}
      </Dialog>
      <S.HeaderContainer>
        <S.WelcomeContainer>
          <S.ProfilePicture />
          <S.Welcome>Olá, Luma!</S.Welcome>
        </S.WelcomeContainer>
        <S.SettingsButton onClick={toggleDrawer}>Icon</S.SettingsButton>
      </S.HeaderContainer>
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {}
  }
})
