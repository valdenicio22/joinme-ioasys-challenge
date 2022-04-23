import { useEffect, useState } from 'react'
import { api } from 'service/api'
import { EventData } from 'types/types'

type FilterName = 'activityId' | 'isOnline'

type Filters = Record<FilterName, string | undefined>

type UseEventsPayload = {
  events: EventData[]
  filters: Filters
  setFilter: (filterName: FilterName, value?: string) => void
}

const formatFiltersToQueryString = (filters: Filters): string => {
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

export const useEvents = (
  eventsRecommended: boolean | undefined
): UseEventsPayload => {
  const [events, setEvents] = useState<EventData[]>([])
  const [filters, setFilters] = useState<Filters>({
    activityId: undefined,
    isOnline: undefined
  })

  useEffect(() => {
    try {
      const filtersQueryString = formatFiltersToQueryString(filters)
      const endpoint = eventsRecommended
        ? 'events/list/user'
        : 'events/list?' + filtersQueryString
      api
        .get<Array<EventData>>(endpoint)
        .then((response) => setEvents(response.data))
    } catch (error) {
      console.log(error)
    }
  }, [filters, eventsRecommended])

  const setFilter = (filterName: FilterName, value?: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value
    }))
  }

  return { events, setFilter, filters }
}
