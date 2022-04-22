import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import Router from 'next/router'

import { setCookie, destroyCookie, parseCookies } from 'nookies'

import { AuthenticatedUserData, User } from '../types/types'
import { api } from 'service/api'
import Axios from 'axios'

import { toast } from 'react-toastify'

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  signIn: (credentials: SignInParams) => Promise<void>
  setUser: (arg: User) => void
  signOut: () => void
  user?: User
  isAuthenticated: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

type SignInParams = SignInCredentials & {
  onLoginSucess?: () => void
}

export const logout = () => {
  destroyCookie(undefined, 'joinMeToken')
  destroyCookie(undefined, 'joinMeRefreshToken')
  destroyCookie(undefined, 'joinMeUser')

  Router.push('/')
}

const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user

  const signOut = () => {
    destroyCookie(undefined, 'joinMeToken')
    destroyCookie(undefined, 'joinMeRefreshToken')
    destroyCookie(undefined, 'joinMeUser')

    setUser(undefined)
    Router.push('/')
  }

  useEffect(() => {
    const { joinMeToken, joinMeUser } = parseCookies()

    if (joinMeToken) {
      const userData = JSON.parse(joinMeUser)
      setUser(userData)
    } else setUser(undefined)
  }, [])

  const signIn = async ({ email, password, onLoginSucess }: SignInParams) => {
    try {
      const response = await api.post<AuthenticatedUserData>('users/signin', {
        email,
        password
      })
      if (!response) throw Error
      const { refreshToken, token, user: userData } = response.data

      setCookie(undefined, 'joinMeToken', token, {
        maxAge: 60 * 60 * 24 * 30, //30 days
        path: '/'
      })
      setCookie(undefined, 'joinMeRefreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30, //30 days
        path: '/'
      })
      setCookie(undefined, 'joinMeUser', JSON.stringify(userData), {
        maxAge: 60 * 60 * 24 * 30, //30 days
        path: '/'
      })
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      onLoginSucess && onLoginSucess()
      setUser(userData)
      Router.push('/home')
    } catch (err) {
      console.log({ err })
      if (Axios.isAxiosError(err)) {
        console.log({ err })
        switch (err.response?.status) {
          case 401:
            toast.error('Email ou senha inválido')
            break
          case 404:
            toast.error('Usuário não encontrado')
            break
          case 409:
            toast.error('Email e/ou senha inválidos')
            break
          default:
            break
        }
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{ signIn, setUser, signOut, isAuthenticated, user }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext)
  return context
}
