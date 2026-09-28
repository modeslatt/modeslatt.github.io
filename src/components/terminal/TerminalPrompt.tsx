import type { ReactNode } from 'react'

interface TerminalPromptProps {
  children: ReactNode
  prompt?: string
}

export function TerminalPrompt({ children, prompt = '$' }: TerminalPromptProps) {
  return (
    <p className="text-sm sm:text-base">
      <span className="text-term-green">{prompt}</span> <span className="text-term-white">{children}</span>
    </p>
  )
}
