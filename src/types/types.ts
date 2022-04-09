export type AuthenticatedUserData = {
  token: string
  refreshToken: string
  user: User
}

export type User = {
  email: string
  id: string
  name: string
  emergencyName?: string | null
  emergencyPhone?: string | null
  phone?: string | null
}
