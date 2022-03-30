import { createContext, ReactNode, useContext, useState } from 'react'
import Router from 'next/router'

import { api } from '../service/api'
import { setCookie } from 'nookies'

import { AuthenticatedUserData } from '../types/types'

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

const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user

  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      const response = await api.post<AuthenticatedUserData>('users/signin', {
        email,
        password
      })
      if (!response) return
      const { refreshToken, token, user: userData } = response.data

      setCookie(undefined, 'joinMeToken', token, {
        maxAge: 60 * 60 * 24 * 30, //30 days
        path: '/'
      })
      setCookie(undefined, 'joinMeRefreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30, //30 days
        path: '/'
      })

      setUser(userData)
      Router.push('dashboard')
    } catch (error) {
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
