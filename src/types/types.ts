export type AuthenticatedUserData = {
  token: string
  refreshToken: string
  user: {
    email: string
    firstName: string
    id: string
    name: string
    emergencyName?: string | null
    emergencyPhone?: string | null
    phone?: string | null
  }
}
