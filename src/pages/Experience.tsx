import { experience } from '@/data/experience'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/ui/Tag'

function formatRange(start: string, end: string): string {
  return `${start} → ${end === 'present' ? 'present' : end}`
}

export function Experience() {
  return (
    <div>
      <SectionHeading command="git log --author-timeline" />

      <ol className="relative space-y-8 border-l border-term-border pl-6">
        {experience.map((entry) => (
          <li key={entry.id} className="relative">
            <span className="absolute -left-7.25 top-1 h-2.5 w-2.5 rounded-full border border-term-green bg-term-bg" />

            <p className="text-xs uppercase tracking-wide text-term-gray-dim">
              {entry.type} · {formatRange(entry.startDate, entry.endDate)}
            </p>
            <h2 className="mt-1 text-lg text-term-white">{entry.role}</h2>
            <p className="text-sm text-term-green">
              {entry.organization} <span className="text-term-gray-dim">· {entry.location}</span>
            </p>
            <p className="mt-2 max-w-2xl text-sm text-term-gray">{entry.description}</p>

            {entry.technologies.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {entry.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}
