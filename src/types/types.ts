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

export type EventData = {
  activity_id: string
  address_id?: string
  city?: string
  date: Date
  description: string
  end_time: string
  event_id: string
  id: string
  is_online: boolean
  is_pet_friendly: boolean
  is_promoted: boolean
  max_participants: number
  name: string
  number: number
  price?: number
  reference_point?: string
  startTime?: string
  state?: string
  street?: string
  url?: string
  userId?: string
  userIdentity: string
  zip_code?: string
  accessibilities?: Array<string>
}

export type InPersonEvent = {
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
