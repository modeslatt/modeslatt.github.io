import { Send, FileText, Mail, FolderGit2 } from 'lucide-react'
import { profile } from '@/data/profile'
import { StatusDot } from '@/components/ui/StatusDot'
import { BlinkingCursor } from '@/components/terminal/BlinkingCursor'
import { LinkButton, AnchorButton } from '@/components/ui/LinkButton'
import { useTypewriter } from '@/hooks/useTypewriter'

export function Home() {
  const { output, isDone } = useTypewriter('whoami', { speed: 150 })

  return (
    <section className="flex min-h-[70vh] flex-col justify-center">
      <p className="text-base text-term-gray sm:text-lg">
        <span className="text-term-green">$</span> <span className="text-term-white">{output}</span>
        {!isDone && <BlinkingCursor />}
      </p>

      {isDone && (
        <div className="mt-6 animate-fade-up">
          <h1 className="text-3xl font-semibold text-term-white sm:text-4xl">{profile.name}</h1>
          <p className="mt-1 text-lg text-term-green">{profile.role}</p>

          <dl className="mt-6 space-y-1 text-sm text-term-gray">
            <div className="flex gap-2">
              <dt className="text-term-gray-dim">LOCATION:</dt>
              <dd>{profile.location}</dd>
            </div>
            <div className="flex items-center gap-2">
              <dt className="text-term-gray-dim">STATUS:</dt>
              <dd>
                <StatusDot status={profile.status} />
              </dd>
            </div>
          </dl>

          <p className="mt-6 max-w-xl text-term-gray">
            <span className="text-term-green">&gt;</span> {profile.bio}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton to="/projects" variant="primary">
              <FolderGit2 size={16} />
              projects
            </LinkButton>
            <AnchorButton href={profile.telegramUrl} target="_blank" rel="noreferrer">
              <Send size={16} />
              telegram
            </AnchorButton>
            <AnchorButton href={profile.resumeUrl} target="_blank" rel="noreferrer">
              <FileText size={16} />
              resume
            </AnchorButton>
            <LinkButton to="/contact">
              <Mail size={16} />
              contact
            </LinkButton>
          </div>
        </div>
      )}
    </section>
  )
}
