import { Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Code2, ExternalLink } from 'lucide-react'
import { getProjectBySlug } from '@/data/projects'
import { Tag } from '@/components/ui/Tag'
import { LinkButton, AnchorButton } from '@/components/ui/LinkButton'
import { ProjectStatusBadge } from '@/components/projects/ProjectStatusBadge'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <div>
      <LinkButton to="/projects" className="mb-8">
        <ArrowLeft size={16} />
        ./projects
      </LinkButton>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl text-term-white">{project.name}</h1>
        <ProjectStatusBadge status={project.status} />
      </div>

      <p className="mt-1 text-sm text-term-gray-dim">{project.year}</p>

      <p className="mt-6 max-w-2xl text-term-gray">{project.longDescription}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      {(project.githubUrl || project.liveUrl) && (
        <div className="mt-8 flex flex-wrap gap-3">
          {project.githubUrl && (
            <AnchorButton href={project.githubUrl} target="_blank" rel="noreferrer" variant="primary">
              <Code2 size={16} />
              source
            </AnchorButton>
          )}
          {project.liveUrl && (
            <AnchorButton href={project.liveUrl} target="_blank" rel="noreferrer">
              <ExternalLink size={16} />
              live site
            </AnchorButton>
          )}
        </div>
      )}
    </div>
  )
}
