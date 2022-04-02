import { useReducer, FormEvent } from 'react'
import { api } from '../service/api'
import Button from 'components/Button'
import TextField from 'components/TextField'
import Head from 'next/head'
import Router from 'next/router'

import * as S from '../styles/SignUp.styles'
import { GetServerSideProps } from 'next'
import { withSSRGuest } from 'utils/withSSRGuest'

type State = {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
  phone: string
  emergencyPhone: string
  emergencyName: string
}

type Action =
  | { type: 'addFirstName'; firstName: State['firstName'] }
  | { type: 'addLastName'; lastName: State['lastName'] }
  | { type: 'addEmail'; email: State['email'] }
  | { type: 'addPhone'; phone: State['phone'] }
  | { type: 'addEmergencyPhone'; emergencyPhone: State['emergencyPhone'] }
  | { type: 'addEmergencyName'; emergencyName: State['emergencyName'] }
  | { type: 'addPassword'; password: State['password'] }
  | {
      type: 'addPasswordConfirmation'
      passwordConfirmation: State['passwordConfirmation']
    }
  | { type: 'resetState' }

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'addFirstName':
      return { ...state, firstName: action.firstName }
    case 'addLastName':
      return { ...state, lastName: action.lastName }
    case 'addEmail':
      return { ...state, email: action.email }
    case 'addPhone':
      return { ...state, phone: action.phone }
    case 'addEmergencyPhone':
      return { ...state, emergencyPhone: action.emergencyPhone }
    case 'addEmergencyName':
      return { ...state, emergencyName: action.emergencyName }
    case 'addPassword':
      return { ...state, password: action.password }
    case 'addPasswordConfirmation':
      return { ...state, passwordConfirmation: action.passwordConfirmation }
    case 'resetState':
      return initialState
    default:
      return state
  }
}

const initialState: State = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  phone: '',
  emergencyName: '',
  emergencyPhone: ''
}

export default function SignUp() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleNewUserSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const response = await api.post('users/signup', { ...state })
      console.log(response.data)

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
          label="Primeiro Nome"
          type="text"
          placeholder="Primeiro Nome"
          value={state.firstName}
          onChange={(event) =>
            dispatch({ type: 'addFirstName', firstName: event.target.value })
          }
          required
        />
        <TextField
          label="Sobrenome"
          type="text"
          placeholder="Sobrenome"
          value={state.lastName}
          onChange={(event) =>
            dispatch({ type: 'addLastName', lastName: event.target.value })
          }
          required
        />
        <TextField
          label="Email"
          type="email"
          placeholder="E-mail"
          value={state.email}
          onChange={(event) =>
            dispatch({ type: 'addEmail', email: event.target.value })
          }
          required
        />
        <TextField
          label="Telefone"
          type="text"
          placeholder="Telefone"
          value={state.phone}
          onChange={(event) =>
            dispatch({
              type: 'addPhone',
              phone: event.target.value
            })
          }
          required
        />
        <TextField
          label="Telefone de emergência"
          type="text"
          placeholder="Telefone de emergência"
          value={state.emergencyPhone}
          onChange={(event) =>
            dispatch({
              type: 'addEmergencyPhone',
              emergencyPhone: event.target.value
            })
          }
          required
        />
        <TextField
          label="Nome do contato de emergência"
          type="text"
          placeholder="Nome do contato de emergência"
          value={state.emergencyName}
          onChange={(event) =>
            dispatch({
              type: 'addEmergencyName',
              emergencyName: event.target.value
            })
          }
          required
        />
        <TextField
          label="Senha"
          type="password"
          placeholder="Senha"
          value={state.password}
          onChange={(event) =>
            dispatch({
              type: 'addPassword',
              password: event.target.value
            })
          }
        />
        <TextField
          label="Confirme a senha"
          type="password"
          placeholder="Confirme a senha"
          value={state.passwordConfirmation}
          onChange={(event) =>
            dispatch({
              type: 'addPasswordConfirmation',
              passwordConfirmation: event.target.value
            })
          }
          required
        />

        <Button>Cadastrar</Button>
      </form>
    </S.wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRGuest(async () => {
  return {
    props: {}
  }
})
