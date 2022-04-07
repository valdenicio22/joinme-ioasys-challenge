import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import Router from 'next/router'

import { setCookie, parseCookies, destroyCookie } from 'nookies'

import { AuthenticatedUserData } from '../types/types'
import { api } from 'service/api'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type User = {
  email: string
  firstName: string
  id: string
  name: string
  emergencyName?: string | null
  emergencyPhone?: string | null
  phone?: string | null
}

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>
  user?: User
  isAuthenticated: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

export const signOut = () => {
  destroyCookie(undefined, 'joinMeToken')
  destroyCookie(undefined, 'joinMeRefreshToken')
  destroyCookie(undefined, 'joinMeUser')

  Router.push('/')
}

const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user

  useEffect(() => {
    const { joinMeToken, joinMeUser } = parseCookies()
    try {
      if (!joinMeToken) throw Error
      const userData = JSON.parse(joinMeUser)
      setUser(userData)
    } catch {
      signOut()
    }
  }, [])

  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      const response = await api.post<AuthenticatedUserData>('users/signin', {
        email,
        password
      })
      if (!response) throw Error
      const { refreshToken, token, user: userData } = response.data
      console.log({ userData })

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

      setUser(userData)
      Router.push('/dashboard')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      switch (err.response.status) {
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

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext)
  return context
}
