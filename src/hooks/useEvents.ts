import { useEffect, useState } from 'react'
import { api } from 'service/api'
import { EventData } from 'types/types'

type FilterName = 'activityId' | 'isOnline'

type Filters = Record<FilterName, string | undefined>

type Pagination = {
  skip: number
  take: number
}

type UseEventsPayload = {
  events: EventData[]
  filters: Filters
  setFilter: (filterName: FilterName, value?: string) => void
  page: number
  updatePage: (page: number) => void
}

type UseEventsParams = {
  onlyRecommended: boolean
  itemsPerPage: number
  fetchAll: boolean
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

const formatPaginationToQueryString = (pagination: Pagination): string => {
  const paginationFields = Object.keys(pagination) as (keyof Pagination)[]

  return paginationFields
    .reduce((queryString, fieldName) => {
      const fieldValue = pagination[fieldName]

      if (!fieldValue) {
        return queryString
      }

      return queryString + `${fieldName}=${fieldValue}&`
    }, '')
    .slice(0, -1)
}

export const useEvents = (
  params: UseEventsParams = {
    onlyRecommended: false,
    itemsPerPage: 12,
    fetchAll: false
  }
): UseEventsPayload => {
  const { onlyRecommended, itemsPerPage, fetchAll } = params
  const [events, setEvents] = useState<EventData[]>([])
  const [filters, setFilters] = useState<Filters>({
    activityId: undefined,
    isOnline: undefined
  })

  const [page, setPage] = useState<number>(1)

  const updatePage = (page: number) => {
    setPage(page)
  }

  useEffect(() => {
    try {
      const filtersQueryString = formatFiltersToQueryString(filters)
      const paginationQueryString = fetchAll
        ? ''
        : formatPaginationToQueryString({
            take: itemsPerPage,
            skip: itemsPerPage * (page - 1)
          })

      const endpoint = onlyRecommended
        ? 'events/list/user?' + paginationQueryString
        : 'events/list?' +
          filtersQueryString +
          (fetchAll ? '' : '&') +
          paginationQueryString
      api
        .get<Array<EventData>>(endpoint)
        .then((response) => setEvents(response.data))
    } catch (error) {
      console.log(error)
    }
  }, [filters, onlyRecommended, fetchAll, itemsPerPage, page])

  const setFilter = (filterName: FilterName, value?: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value
    }))
  }

  return { events, setFilter, filters, page, updatePage }
}
