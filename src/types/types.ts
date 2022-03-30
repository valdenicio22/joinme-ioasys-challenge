export type AuthenticatedUserData = {
  token: string
  refreshToken: string
  user: {
    email: string
    firstName: string
    id: string
    lastName: string
  }
}
