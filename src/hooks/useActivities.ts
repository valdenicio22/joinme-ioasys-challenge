import { useEffect, useState } from 'react'
import { api } from 'service/api'
import { Activity } from 'types/types'

export const useActivities = () => {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    try {
      api
        .get<Array<Activity>>('activities/list?')
        .then((response) => setActivities(response.data))
    } catch (error) {
      console.log(error)
    }
  }, [])

  return { activities }
}
