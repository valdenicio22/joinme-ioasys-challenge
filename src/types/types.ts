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
  userId?: string
  eventId?: string
}

export type EventAcessibilities = {
  id?: string
  acessibilities: {
    id?: string
    name?: string
    description?: string
  }
}

export type EventData = {
  id?: string
  name?: string
  description?: string
  date?: Date
  isPetFriendly?: boolean
  maxParticipants?: number
  numParticipants?: number
  createdAt?: string
  startTime?: string
  activityId?: string
  userId?: string
  price?: number
  isPromoted?: boolean
  userIdentity?: string
  addresses?: Array<EventAddress>
  activities?: Activity
  eventAccessibilities?: EventAcessibilities
}
