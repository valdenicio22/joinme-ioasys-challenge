import { useEffect, useState } from 'react'

import Arrow from 'components/Arrow'
import Button from 'components/Button'

import * as S from './styles'

import { ActivityData } from '../../types/types'

import { api } from '../../service/api'
import { toast } from 'react-toastify'

type InterestsProps = {
  setModalStep: (arg: number) => void
  onCloseModal: () => void
  modalStep: number
}

export type Activity = {
  name: string
  id: string
  isSelect: boolean
}

export const Interests = ({
  setModalStep,
  onCloseModal,
  modalStep
}: InterestsProps) => {
  const [activities, setActivities] = useState<Activity[]>([])
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

  const handleActivitySelected = (selectedActivity: Activity) => {
    const activitiesUpdated = activities.map((activity) =>
      activity.id === selectedActivity.id
        ? { ...activity, isSelect: !selectedActivity.isSelect }
        : activity
    )
    setActivities(activitiesUpdated)
  }

  return (
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
  )
}
