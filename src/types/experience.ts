export type ExperienceType = 'work' | 'education'

export interface ExperienceEntry {
  id: string
  type: ExperienceType
  organization: string
  role: string
  location: string
  startDate: string
  endDate: string | 'present'
  description: string
  technologies: string[]
}
