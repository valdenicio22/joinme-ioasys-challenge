import { useEffect, useState } from 'react'

import Arrow from 'components/Arrow'
import Button from 'components/Button'

import * as S from './styles'

import { Activity } from '../../types/types'

import { api } from '../../service/api'
import { toast } from 'react-toastify'

type InterestsProps = {
  setModalStep: (arg: number) => void
  onCloseModal: () => void
  modalStep: number
}

type ActivityData = {
  isSelect: boolean
} & Activity

export const Interests = ({
  setModalStep,
  onCloseModal,
  modalStep
}: InterestsProps) => {
  const [activities, setActivities] = useState<ActivityData[]>([])
  const handleSkipModalStep = () =>
    modalStep > 1 ? onCloseModal() : setModalStep(2)

  useEffect(() => {
    api
      .get<Array<ActivityData>>('/activities/list')
      .then((response) => setActivities(response.data))
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

  const handleActivitySelected = (selectedActivity: ActivityData) => {
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
      <S.H1>
        Agora conta pra gente, quais são os seus principais interesses?
      </S.H1>
      <S.InterestsContainer>
        {activities.map((activity) => (
          <S.InterestContent
            key={activity.id}
            onClick={() => handleActivitySelected(activity)}
          >
            <S.InterestsImg
              src={
                activity.isSelect ? activity.urlActive : activity.urlInactive
              }
              alt={activity.name}
            />

            <p>{activity.name}</p>
          </S.InterestContent>
        ))}
      </S.InterestsContainer>
      <S.FinalizarButton>
        <Button fullWidth={true} onClick={handleUserInterests}>
          FINALIZAR
        </Button>
        <S.SkipStep onClick={handleSkipModalStep}>PULAR</S.SkipStep>
      </S.FinalizarButton>
    </>
  )
}
