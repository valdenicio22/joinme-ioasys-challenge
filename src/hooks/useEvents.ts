import { useEffect, useState } from 'react'
import { api } from 'service/api'
import { EventData } from 'types/types'

type FilterName = 'activityId' | 'modality'

type Filters = Record<FilterName, string | undefined>

type UseEventsPayload = {
  events: EventData[]
  setFilter: (filterName: FilterName, value?: string) => void
}

const formatQueryString = (filters: Filters): string => {
  const filterNames = Object.keys(filters) as FilterName[]
  return filterNames
    .reduce((queryString, filterName) => {
      const filterValue = filters[filterName]

      if (!filterValue) {
        return queryString
      }

      return queryString + `${filterName}=${filterValue}&`
    }, '')
    .slice(0, -1)
}

export const useEvents = (): UseEventsPayload => {
  const [events, setEvents] = useState<EventData[]>([])
  const [filters, setFilters] = useState<Filters>({
    activityId: undefined,
    modality: undefined
  })

  useEffect(() => {
    try {
      const queryString = formatQueryString(filters)
      //TO DO: concatenar query string na URL
      console.log({ queryString })
      api
        .get<Array<EventData>>('events/list?' + queryString)
        .then((response) => setEvents(response.data))
    } catch (error) {
      console.log(error)
    }
  }, [filters])

  const setFilter = (filterName: FilterName, value?: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value
    }))
  }

  return { events, setFilter }
}
