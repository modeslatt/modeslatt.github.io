import type { ProjectStatus } from '@/types'

const STATUS_STYLES: Record<ProjectStatus, string> = {
  active: 'text-term-green border-term-green/40',
  completed: 'text-term-blue border-term-blue/40',
  archived: 'text-term-gray border-term-border-strong',
}

interface ProjectStatusBadgeProps {
  status: ProjectStatus
}

export function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
  return (
    <span className={`rounded-sm border px-2 py-0.5 text-xs uppercase tracking-wide ${STATUS_STYLES[status]}`}>
      {status}
    </span>
  )
}
