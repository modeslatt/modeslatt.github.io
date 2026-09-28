interface TagProps {
  children: string
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-block rounded-sm border border-term-border bg-term-bg-alt px-2 py-0.5 text-xs text-term-gray">
      {children}
    </span>
  )
}
