import { LinkButton } from '@/components/ui/LinkButton'
import { TerminalPrompt } from '@/components/terminal/TerminalPrompt'

export function NotFound() {
  return (
    <div className="flex flex-col items-start gap-4 py-10">
      <TerminalPrompt>cd /requested/page</TerminalPrompt>
      <p className="text-term-gray">bash: cd: /requested/page: No such file or directory (404)</p>
      <LinkButton to="/" variant="primary">
        cd ~
      </LinkButton>
    </div>
  )
}
