export type ProjectStatus = 'active' | 'completed' | 'archived'

export interface Project {
  slug: string
  name: string
  description: string
  longDescription: string
  technologies: string[]
  year: number
  status: ProjectStatus
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}
