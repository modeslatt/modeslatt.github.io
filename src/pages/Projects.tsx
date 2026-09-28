import { useMemo, useState } from 'react'
import { projects } from '@/data/projects'
import { ProjectList } from '@/components/projects/ProjectList'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { ProjectStatus } from '@/types'

const FILTERS: Array<{ label: string; value: ProjectStatus | 'all' }> = [
  { label: 'all', value: 'all' },
  { label: 'active', value: 'active' },
  { label: 'completed', value: 'completed' },
  { label: 'archived', value: 'archived' },
]

export function Projects() {
  const [filter, setFilter] = useState<ProjectStatus | 'all'>('all')

  const filteredProjects = useMemo(
    () => (filter === 'all' ? projects : projects.filter((project) => project.status === filter)),
    [filter],
  )

  return (
    <div>
      <SectionHeading command="ls ./projects" comment={`${filteredProjects.length} entries`} />

      <div className="mb-6 flex flex-wrap gap-2">
        {FILTERS.map((item) => (
          <button
            key={item.value}
            onClick={() => setFilter(item.value)}
            aria-pressed={filter === item.value}
            className={`border px-3 py-1 text-xs uppercase tracking-wide transition-colors ${
              filter === item.value
                ? 'border-term-green text-term-green'
                : 'border-term-border text-term-gray hover:text-term-white'
            }`}
          >
            --{item.label}
          </button>
        ))}
      </div>

      <ProjectList projects={filteredProjects} />
    </div>
  )
}
