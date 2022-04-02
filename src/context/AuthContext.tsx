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
import { toast } from 'react-toastify'
import { api } from 'service/api'

type User = {
  email: string
  firstName: string
  id: string
  lastName: string
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
      console.log(response)
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

      setUser(userData)
      Router.push('/dashboard')
    } catch (error) {
      toast('Usuario ou senha invalida, tente novamente')
      console.log(error)
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
