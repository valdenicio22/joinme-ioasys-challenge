import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import Button from 'components/Button'

import * as S from './styles'

import { Activity, CurrentModal } from '../../types/types'

import { api } from '../../service/api'
import { toast } from 'react-toastify'

type InterestsProps = {
  setCurrentModal: Dispatch<SetStateAction<CurrentModal>>
}
type ActivityData = {
  isSelect: boolean
} & Activity

export const Interests = ({ setCurrentModal }: InterestsProps) => {
  const [activities, setActivities] = useState<ActivityData[]>([])

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
      setCurrentModal('disabilities')
    } catch (error) {
      console.log(error)
      toast.error('error')
      setCurrentModal('idle')
    }
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
        <Button
          fullWidth={true}
          bgColor="primary"
          onClick={handleUserInterests}
        >
          CONFIRMAR
        </Button>
        <S.SkipStep onClick={() => setCurrentModal('disabilities')}>
          PULAR
        </S.SkipStep>
      </S.FinalizarButton>
    </>
  )
}
