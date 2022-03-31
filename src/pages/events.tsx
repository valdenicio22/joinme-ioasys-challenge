import { useReducer, FormEvent } from 'react'
import Button from 'components/Button'
import TextField from 'components/TextField'
import Head from 'next/head'

import * as S from '../styles/SignUp.styles'
import { api } from 'service/api'
import Router from 'next/router'

type State = {
  name: string
  description: string
  isOnline: boolean
  date: string
  minimumAge: string
  maxParticipants: string
  startTime: string
  endTime: string
  isAccessible: boolean
}

type Action =
  | { type: 'addName'; name: State['name'] }
  | { type: 'addDescription'; description: State['description'] }
  | { type: 'toggleIsOnline'; isOnline: State['isOnline'] }
  | { type: 'addDate'; date: State['date'] }
  | { type: 'addMinimumAge'; minimumAge: State['minimumAge'] }
  | { type: 'addMaxParticipants'; maxParticipants: State['maxParticipants'] }
  | { type: 'addStartTime'; startTime: State['startTime'] }
  | { type: 'addEndTime'; endTime: State['endTime'] }
  | { type: 'toggleIsAccessible'; isAccessible: State['isAccessible'] }
  | { type: 'resetState' }

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'addName':
      return { ...state, name: action.name }
    case 'addDescription':
      return { ...state, description: action.description }
    case 'toggleIsOnline':
      return { ...state, isOnline: !action.isOnline }
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
    case 'toggleIsAccessible':
      return { ...state, isAccessible: action.isAccessible }
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
  date: '',
  minimumAge: '',
  maxParticipants: '',
  startTime: '',
  endTime: '',
  isAccessible: true
}

export default function Events() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const formatStateData = (stateData: State) => {
    const formattedStateData = {
      ...stateData,
      minimumAge: +stateData.minimumAge,
      maxParticipants: +stateData.maxParticipants,
      activityId: 'default',
      userId: 'userDefault',
      userIdentity: 0
    }
    return formattedStateData
  }

  const handleNewUserSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const formattedData = formatStateData(state)

    console.log({ state })
    console.log({ formattedData })

    try {
      const response = await api.post('events', { ...formattedData })
      console.log(response)

      Router.push('/login')
      dispatch({ type: 'resetState' })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <S.wrapper>
      <Head>
        <title>SignUp | joinMe</title>
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
        <TextField
          label="Data do evento"
          type="text"
          placeholder="22/04/2022"
          value={state.date}
          onChange={(event) =>
            dispatch({
              type: 'addDate',
              date: event.target.value
            })
          }
          required
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
        <Button>Cadastrar</Button>
      </form>
    </S.wrapper>
  )
}
