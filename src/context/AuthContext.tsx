import { createContext, ReactNode, useContext } from 'react'
import { api } from 'service/api'

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  signIn: (creditials: SignInCredentials) => Promise<void>
  isAuthenticated: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const isAuthenticated = false

  const signIn = async ({ email, password }: SignInCredentials) => {
    const response = api.post('users/signin', { email, password })
    console.log(response)
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext)
  return context
}
