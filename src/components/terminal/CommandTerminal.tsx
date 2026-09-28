import { useEffect, useRef, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { TerminalSquare, X } from 'lucide-react'
import { useTerminalStore } from '@/stores/useTerminalStore'
import { useClickOutside } from '@/hooks/useClickOutside'
import { navItems } from '@/data/nav'
import { BlinkingCursor } from './BlinkingCursor'

const AVAILABLE_COMMANDS = [...navItems.map((item) => item.command), 'skills', 'help', 'clear']

function runCommand(command: string, navigate: (path: string) => void): string[] {
  const normalized = command.trim().toLowerCase()

  if (normalized === '') return []

  if (normalized === 'help') {
    return ['available commands:', ...AVAILABLE_COMMANDS.map((cmd) => `  ${cmd}`)]
  }

  if (normalized === 'skills') {
    navigate('/about')
    return ['opening ./about#skills ...']
  }

  const navItem = navItems.find((item) => item.command === normalized)
  if (navItem) {
    navigate(navItem.path)
    return [`opening ${navItem.path} ...`]
  }

  return [`command not found: ${normalized}`, 'type "help" to see available commands']
}

export function CommandTerminal() {
  const isOpen = useTerminalStore((state) => state.isOpen)
  const open = useTerminalStore((state) => state.open)
  const close = useTerminalStore((state) => state.close)
  const history = useTerminalStore((state) => state.history)
  const pushHistory = useTerminalStore((state) => state.pushHistory)
  const clearHistory = useTerminalStore((state) => state.clearHistory)

  const [input, setInput] = useState('')
  const navigate = useNavigate()
  const panelRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const historyEndRef = useRef<HTMLDivElement>(null)

  useClickOutside(panelRef, close)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') close()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [close])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ block: 'end' })
  }, [history])

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return

    if (trimmed.toLowerCase() === 'clear') {
      clearHistory()
      setInput('')
      return
    }

    const output = runCommand(trimmed, navigate)
    pushHistory({ input: trimmed, output })
    setInput('')
  }

  if (!isOpen) {
    return (
      <button
        onClick={open}
        aria-label="Open command terminal"
        className="fixed bottom-4 right-4 z-40 flex h-11 w-11 items-center justify-center border border-term-border bg-term-surface text-term-green shadow-lg transition-colors hover:border-term-green sm:bottom-6 sm:right-6"
      >
        <TerminalSquare size={18} />
      </button>
    )
  }

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-label="Command terminal"
      className="fixed inset-x-3 bottom-3 z-40 flex h-80 flex-col border border-term-border bg-term-surface shadow-2xl sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-96"
    >
      <div className="flex items-center justify-between border-b border-term-border bg-term-bg-alt px-3 py-2">
        <span className="text-xs text-term-gray-dim">~/terminal</span>
        <button onClick={close} aria-label="Close command terminal" className="text-term-gray hover:text-term-white">
          <X size={16} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-2 text-sm">
        <p className="mb-2 text-term-gray-dim">type "help" for a list of commands</p>
        {history.map((entry, entryIndex) => (
          <div key={entryIndex} className="mb-2">
            <p>
              <span className="text-term-green">$</span> <span className="text-term-white">{entry.input}</span>
            </p>
            {entry.output.map((line, lineIndex) => (
              <p key={lineIndex} className="pl-3 text-term-gray">
                {line}
              </p>
            ))}
          </div>
        ))}
        <div ref={historyEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-term-border px-3 py-2">
        <span className="text-term-green">$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          spellCheck={false}
          autoComplete="off"
          aria-label="Terminal command input"
          className="flex-1 bg-transparent text-sm text-term-white outline-none"
        />
        {input.length === 0 && <BlinkingCursor />}
      </form>
    </div>
  )
}
