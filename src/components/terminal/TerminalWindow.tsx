import type { ReactNode } from 'react'

interface TerminalWindowProps {
  title: string
  children: ReactNode
  className?: string
}

export function TerminalWindow({ title, children, className = '' }: TerminalWindowProps) {
  return (
    <div className={`border border-term-border bg-term-surface ${className}`}>
      <div className="flex items-center gap-2 border-b border-term-border bg-term-bg-alt px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-term-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-term-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-term-border-strong" />
        <span className="ml-2 text-xs text-term-gray-dim">{title}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}
