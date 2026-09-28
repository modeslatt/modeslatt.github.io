export type AvailabilityStatus = 'available' | 'busy' | 'unavailable'

export interface Profile {
  name: string
  handle: string
  role: string
  location: string
  status: AvailabilityStatus
  bio: string
  email: string
  phone: string
  telegramUrl: string
  telegramHandle: string
  resumeUrl: string
}
