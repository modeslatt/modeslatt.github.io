interface BlinkingCursorProps {
  className?: string
}

export function BlinkingCursor({ className = '' }: BlinkingCursorProps) {
  return <span className={`inline-block h-[1em] w-[0.55em] translate-y-[0.15em] animate-blink bg-term-green ${className}`} />
}
