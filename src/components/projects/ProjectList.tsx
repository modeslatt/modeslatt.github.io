import type { Project } from '@/types'
import { ProjectCard } from './ProjectCard'

interface ProjectListProps {
  projects: Project[]
}

export function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return <p className="text-sm text-term-gray-dim">No projects match that filter.</p>
  }

  return (
    <div className="flex flex-col gap-3">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  )
}
