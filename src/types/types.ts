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
  password?: string
  city?: string
  aboutMe: string
  isPremium?: boolean
}

export type Activity = {
  name: string
  id: string
  urlActive: string
  urlInactive: string
}

export type UserInterests = {
  id: string
  name: string
  active: boolean
  url_active: string
  url_inactive: string
}

export type EventAddress = {
  id?: string
  street?: string
  number?: number
  city?: string
  state?: string
  zipCode?: string
  referencePoint?: string
}

export type EventActivities = {
  id?: string
  name?: string
}

export type EventAccessibilities = {
  id?: string
  accessibilities?: {
    id?: string
    name?: string
    description?: string
    active?: boolean
  }
}

export type EventData = {
  id?: string
  name?: string
  description?: string
  isOnline?: boolean
  url: string
  date?: Date
  isPetFriendly?: boolean
  maxParticipants?: number
  startTime?: string
  activityId?: string
  userId?: string
  price?: number
  isPromoted?: boolean
  userIdentity?: string
  numParticipants?: number
  createdAt?: string
  users: Pick<User, 'name' | 'aboutMe' | 'isPremium'>
  activities?: EventActivities
  addresses?: Array<EventAddress>
  eventAccessibilities?: Array<EventAccessibilities>
}

export type CurrentModal =
  | 'signin'
  | 'signup'
  | 'forgotPassword'
  | 'userInterests'
  | 'idle'
  | 'successSignup'
  | 'successResetPassword'

export type Wellness = {
  id: string
  title: string
  description: string
  imageUrl: string
}
