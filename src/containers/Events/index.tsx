import { useReducer, FormEvent, useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { GetServerSideProps } from 'next'

import Button from 'components/Button'
import { TextField } from 'components/TextField'

import * as S from './styles'
import { api } from 'service/api'

import { useAuth } from 'context/AuthContext'

type State = {
  name: string
  description: string
  date: Date
  minimumAge: string
  maxParticipants: string
  startTime: string
  endTime: string
  userIdentity: string
  isOnline: boolean
  isAccessible: boolean
  activityList: ActivityList
}

type Action =
  | { type: 'addName'; name: State['name'] }
  | { type: 'addDescription'; description: State['description'] }
  | { type: 'addDate'; date: State['date'] }
  | { type: 'addMinimumAge'; minimumAge: State['minimumAge'] }
  | { type: 'addMaxParticipants'; maxParticipants: State['maxParticipants'] }
  | { type: 'addUserIdentity'; userIdentity: State['userIdentity'] }
  | { type: 'addActivityList'; activityList: State['activityList'] }
  | { type: 'addEndTime'; endTime: State['endTime'] }
  | { type: 'addStartTime'; startTime: State['startTime'] }
  | { type: 'toggleIsAccessible'; isAccessible: State['isAccessible'] }
  | { type: 'toggleIsOnline'; isOnline: State['isOnline'] }
  | { type: 'resetState' }

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'addName':
      return { ...state, name: action.name }
    case 'addDescription':
      return { ...state, description: action.description }
    case 'addDate':
      return { ...state, date: action.date }
    case 'addMinimumAge':
      return { ...state, minimumAge: action.minimumAge }
    case 'addMaxParticipants':
      return { ...state, maxParticipants: action.maxParticipants }
    case 'addStartTime':
      return { ...state, startTime: action.startTime }
    case 'addEndTime':
      return { ...state, endTime: action.endTime }
    case 'addUserIdentity':
      return { ...state, userIdentity: action.userIdentity }
    case 'addActivityList':
      return { ...state, activityList: action.activityList }
    case 'toggleIsAccessible':
      return { ...state, isAccessible: action.isAccessible }
    case 'toggleIsOnline':
      return { ...state, isOnline: !action.isOnline }
    case 'resetState':
      return initialState
    default:
      return state
  }
}

const initialState: State = {
  name: '',
  description: '',
  isOnline: true,
  date: new Date(),
  minimumAge: '',
  maxParticipants: '',
  startTime: '',
  endTime: '',
  userIdentity: '',
  activityList: [],
  isAccessible: true
}

type ActivityList = Array<{
  id: string
  name: string
}>

export default function Events() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { user } = useAuth()

  useEffect(() => {
    api
      .get<ActivityList>('activities/list')
      .then((response) =>
        dispatch({ type: 'addActivityList', activityList: response.data })
      )
  }, [])

  const formatStateData = (stateData: State) => {
    const formattedStateData = {
      ...stateData,
      minimumAge: +stateData.minimumAge,
      maxParticipants: +stateData.maxParticipants,
      date: stateData.date.toJSON(),
      activityId: user?.id ? user.id : '',
      userId: user?.id ? user.id : ''
    }
    return formattedStateData
  }

  const handleNewUserSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const formattedData = formatStateData(state)

    try {
      const response = await api.post('events', { ...formattedData })
      console.log(response)

      Router.push('/login')
      dispatch({ type: 'resetState' })
    } catch (error) {
      console.log(error)
    }
  }
  const today = new Date().toLocaleString('pt-Br').slice(0, 10)
  return (
    <S.Wrapper>
      <Head>
        <title>Events | joinMe</title>
      </Head>
      <form onSubmit={handleNewUserSubmit}>
        <TextField
          label="Nome do evento"
          type="text"
          placeholder="Basket and Beer"
          value={state.name}
          onChange={(event) =>
            dispatch({ type: 'addName', name: event.target.value })
          }
          required
        />
        <TextField
          label="Descrição do evento"
          type="text"
          placeholder="Evento para quem quer jogar basket e tomar uma cerveja depois"
          value={state.description}
          onChange={(event) =>
            dispatch({
              type: 'addDescription',
              description: event.target.value
            })
          }
          required
        />
        <input
          type="checkbox"
          checked={state.isOnline}
          onChange={() =>
            dispatch({ type: 'toggleIsOnline', isOnline: state.isOnline })
          }
          required
        />
        <label htmlFor="start">Data do evento</label>

        <input
          type="date"
          id="start"
          name="Data do evento"
          value={today}
          min={today}
          max="2025-12-31"
        />
        <TextField
          label="Idade minima"
          type="text"
          placeholder="Idade minima"
          value={state.minimumAge}
          onChange={(event) =>
            dispatch({
              type: 'addMinimumAge',
              minimumAge: event.target.value
            })
          }
          required
        />
        <TextField
          label="Maximo de participantes"
          type="text"
          placeholder="Maximo de participantes"
          value={state.maxParticipants}
          onChange={(event) =>
            dispatch({
              type: 'addMaxParticipants',
              maxParticipants: event.target.value
            })
          }
          required
        />
        <TextField
          label="Horario de inicio"
          type="text"
          placeholder="Horario de inicio"
          value={state.startTime}
          onChange={(event) =>
            dispatch({
              type: 'addStartTime',
              startTime: event.target.value
            })
          }
        />
        <TextField
          label="Horario de fim"
          type="text"
          placeholder="Horario de fim"
          value={state.endTime}
          onChange={(event) =>
            dispatch({
              type: 'addEndTime',
              endTime: event.target.value
            })
          }
          required
        />
        <input
          type="checkbox"
          checked={state.isAccessible}
          onChange={() =>
            dispatch({
              type: 'toggleIsAccessible',
              isAccessible: state.isAccessible
            })
          }
          required
        />
        <TextField
          label="CPF do responsavel pelo evento"
          type="text"
          placeholder="Horario de fim"
          value={state.userIdentity}
          onChange={(event) =>
            dispatch({
              type: 'addUserIdentity',
              userIdentity: event.target.value
            })
          }
          required
        />
        <Button>Cadastrar</Button>
        <select name="activities" id="activities">
          <label htmlFor="activities">Escolha </label>

          <option value=""> --Escolha uma opção-- </option>
          {state.activityList
            ? state.activityList.map((activity) => (
                <option key={activity.id} value={activity.name}>
                  {activity.name}
                </option>
              ))
            : ''}
        </select>
      </form>
    </S.Wrapper>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}
