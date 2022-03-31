import { useReducer, FormEvent } from 'react'
import Button from 'components/Button'
import TextField from 'components/TextField'
import Head from 'next/head'

import * as S from '../styles/SignUp.styles'

type State = {
  firstName: string
  surName: string
  email: string
  phoneNumber: string
  emergencyContact: string
  password: string
}

type Action =
  | { type: 'addFirstName'; firstName: State['firstName'] }
  | { type: 'addSurName'; surName: State['surName'] }
  | { type: 'addEmail'; email: State['email'] }
  | { type: 'addPhoneNumber'; phoneNumber: State['phoneNumber'] }
  | { type: 'addEmergencyContact'; emergencyContact: State['emergencyContact'] }
  | { type: 'addPassword'; password: State['password'] }

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'addFirstName':
      return { ...state, firstName: action.firstName }
    case 'addSurName':
      return { ...state, surName: action.surName }
    case 'addEmail':
      return { ...state, email: action.email }
    case 'addPhoneNumber':
      return { ...state, phoneNumber: action.phoneNumber }
    case 'addEmergencyContact':
      return { ...state, emergencyContact: action.emergencyContact }
    case 'addPassword':
      return { ...state, password: action.password }
    default:
      return state
  }
}

const initialState: State = {
  firstName: '',
  surName: '',
  email: '',
  phoneNumber: '',
  emergencyContact: '',
  password: ''
}

export default function SignUp() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleNewUserSubmit = (e: FormEvent) => {
    e.preventDefault()

    console.log(state)
  }

  return (
    <S.wrapper>
      <Head>
        <title>SignUp | joinMe</title>
      </Head>
      <form onSubmit={handleNewUserSubmit}>
        <TextField
          type="text"
          placeholder="Primeiro Nome"
          value={state.firstName}
          onChange={(event) =>
            dispatch({ type: 'addFirstName', firstName: event.target.value })
          }
        />
        <TextField
          type="text"
          placeholder="Sobrenome"
          value={state.surName}
          onChange={(event) =>
            dispatch({ type: 'addSurName', surName: event.target.value })
          }
        />
        <TextField
          type="email"
          placeholder="email"
          value={state.email}
          onChange={(event) =>
            dispatch({ type: 'addEmail', email: event.target.value })
          }
        />
        <TextField
          type="text"
          placeholder="telefone"
          value={state.phoneNumber}
          onChange={(event) =>
            dispatch({
              type: 'addPhoneNumber',
              phoneNumber: event.target.value
            })
          }
        />
        <TextField
          type="text"
          placeholder="contato de emergência"
          value={state.emergencyContact}
          onChange={(event) =>
            dispatch({
              type: 'addEmergencyContact',
              emergencyContact: event.target.value
            })
          }
        />
        <TextField
          type="password"
          placeholder="********"
          value={state.password}
          onChange={(event) =>
            dispatch({
              type: 'addPassword',
              password: event.target.value
            })
          }
        />

        <Button>Cadastrar</Button>
      </form>
    </S.wrapper>
  )
}
