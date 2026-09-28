interface SectionHeadingProps {
  command: string
  comment?: string
}

export function SectionHeading({ command, comment }: SectionHeadingProps) {
  return (
    <div className="mb-6 border-b border-term-border pb-3">
      <p className="text-sm text-term-gray sm:text-base">
        <span className="text-term-green">$</span> <span className="text-term-white">{command}</span>
      </p>
      {comment && <p className="mt-1 text-xs text-term-gray-dim"># {comment}</p>}
    </div>
  )
}
