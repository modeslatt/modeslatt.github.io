import { profile } from '@/data/profile'
import { skills } from '@/data/skills'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TerminalWindow } from '@/components/terminal/TerminalWindow'

export function About() {
  return (
    <div className="flex flex-col gap-10">
      <section>
        <SectionHeading command="cat about.md" />
        <p className="text-term-gray">{profile.bio}</p>
        <p className="mt-4 text-term-gray">
          Based in {profile.location}. Information Resource Management Major at the School of Business, BSU
          (2021–2025). Most of my recent work has been on frontend and Web3 features for GameFi products and
          Telegram Mini Apps.
        </p>
        <p className="mt-4 text-sm text-term-gray-dim">Languages: English (B1)</p>
      </section>

      <section id="skills">
        <SectionHeading command="cat skills.txt" />
        <TerminalWindow title="skills.txt">
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="text-xs tracking-wide text-term-gray-dim">{group.category}</p>
                <ul className="mt-2 space-y-1">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-sm text-term-white">
                      <span className="text-term-green">→</span> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </TerminalWindow>
      </section>
    </div>
  )
}
