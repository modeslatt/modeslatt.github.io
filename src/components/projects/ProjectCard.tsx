import { Link } from 'react-router-dom'
import type { Project } from '@/types'
import { ProjectStatusBadge } from './ProjectStatusBadge'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block border border-term-border bg-term-bg-alt/40 p-4 transition-colors hover:border-term-border-strong hover:bg-term-bg-alt"
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex items-baseline gap-3">
          <span className="text-term-gray-dim">{String(index + 1).padStart(2, '0')}</span>
          <span className="text-term-white group-hover:text-term-green">{project.name}</span>
        </div>
        <ProjectStatusBadge status={project.status} />
      </div>

      <p className="mt-2 pl-8 text-sm text-term-gray">{project.description}</p>

      <ul className="mt-3 pl-8 text-sm text-term-gray-dim">
        {project.technologies.map((tech, techIndex) => (
          <li key={tech}>
            <span className="text-term-border-strong">
              {techIndex === project.technologies.length - 1 ? '└── ' : '├── '}
            </span>
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-3 pl-8 text-xs text-term-gray-dim">{project.year}</div>
    </Link>
  )
}
