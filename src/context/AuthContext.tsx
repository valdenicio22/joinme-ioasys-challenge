import { createContext, ReactNode, useContext, useState } from 'react'

import { api } from '../service/api'
import Router from 'next/router'

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
  const isAuthenticated = false
  const [user, setUser] = useState<User>()

  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      const response = await api.post<AuthenticatedUserData>('users/signin', {
        email,
        password
      })
      if (!response) return
      setUser(response.data.user)
      Router.push('dashboard')
      console.log(response.data.user)
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
