import { useReducer, FormEvent } from 'react'
import Button from 'components/Button'
import TextField from 'components/TextField'
import Head from 'next/head'

import * as S from '../styles/SignUp.styles'

type State = {
  name: string
  description: string
  isOnline: true
  date: string
  minimumAge: 0
  maxParticipants: 0
  startTime: string
  endTime: string
  activityId: string
  userId: string
  userIdentity: 0
  isAccessible: true
}

type Action =
  | { type: 'addName'; name: State['name'] }
  | { type: 'addDescription'; description: State['description'] }
  | { type: 'addIsOnline'; isOnline: State['isOnline'] }
  | { type: 'addDate'; date: State['date'] }
  | { type: 'addMinimumAge'; minimumAge: State['minimumAge'] }
  | { type: 'addMaxParticipants'; maxParticipants: State['maxParticipants'] }
  | { type: 'addStartTime'; startTime: State['startTime'] }
  | { type: 'addEndTime'; endTime: State['endTime'] }
  | { type: 'addActivityId'; activityId: State['activityId'] }
  | { type: 'addUserId'; userId: State['userId'] }
  | { type: 'addUserIdentity'; userIdentity: State['userIdentity'] }
  | { type: 'addIsAccessible'; isAccessible: State['isAccessible'] }
  | { type: 'resetState' }

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'addName':
      return { ...state, name: action.name }
    case 'addDescription':
      return { ...state, description: action.description }
    case 'addIsOnline':
      return { ...state, isOnline: action.isOnline }
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
    case 'addActivityId':
      return { ...state, activityId: action.activityId }
    case 'addUserId':
      return { ...state, userId: action.userId }
    case 'addUserIdentity':
      return { ...state, userIdentity: action.userIdentity }
    case 'addIsAccessible':
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
  minimumAge: 0,
  maxParticipants: 0,
  startTime: '',
  endTime: '',
  activityId: '',
  userId: '',
  userIdentity: 0,
  isAccessible: true
}

export default function Events() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleNewUserSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // const formattedData = formatStateData(state)

    // console.log({ state })
    // console.log({ formattedData })

    // try {
    //   const response = await api.post('users/signup', { ...formattedData })
    //   console.log(response)

    //   Router.push('/login')
    //   dispatch({ type: 'resetState' })
    // } catch (error) {
    //   console.log(error)
    // }
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
        <TextField
          label="Email"
          type="email"
          placeholder=""
          value={state.isOnline}
          onChange={(event) =>
            dispatch({ type: 'addIsOnline', isOnline: event.target.value })
          }
          required
        />
        <TextField
          label="Telefone"
          type="text"
          placeholder="Telefone"
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
          label="Telefone de emergência"
          type="text"
          placeholder="Telefone de emergência"
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
          label="Nome do contato de emergência"
          type="text"
          placeholder="Nome do contato de emergência"
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
          label="Senha"
          type="password"
          placeholder="Senha"
          value={state.startTime}
          onChange={(event) =>
            dispatch({
              type: 'addStartTime',
              startTime: event.target.value
            })
          }
        />
        <TextField
          label="Confirme a senha"
          type="password"
          placeholder="Confirme a senha"
          value={state.endTime}
          onChange={(event) =>
            dispatch({
              type: 'addEndTime',
              endTime: event.target.value
            })
          }
          required
        />
        <TextField
          label="Telefone de emergência"
          type="text"
          placeholder="Telefone de emergência"
          value={state.activityId}
          onChange={(event) =>
            dispatch({
              type: 'addActivityId',
              activityId: event.target.value
            })
          }
          required
        />
        <TextField
          label="Nome do contato de emergência"
          type="text"
          placeholder="Nome do contato de emergência"
          value={state.userId}
          onChange={(event) =>
            dispatch({
              type: 'addUserId',
              userId: event.target.value
            })
          }
          required
        />
        <TextField
          label="Senha"
          type="password"
          placeholder="Senha"
          value={state.userIdentity}
          onChange={(event) =>
            dispatch({
              type: 'addUserIdentity',
              userIdentity: event.target.value
            })
          }
        />
        <TextField
          label="Confirme a senha"
          type="password"
          placeholder="Confirme a senha"
          value={state.isAccessible}
          onChange={(event) =>
            dispatch({
              type: 'addIsAccessible',
              isAccessible: event.target.value
            })
          }
          required
        />
        <Button>Cadastrar</Button>
      </form>
    </S.wrapper>
  )
}
