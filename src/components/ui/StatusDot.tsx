import type { AvailabilityStatus } from '@/types'

const STATUS_STYLES: Record<AvailabilityStatus, { dot: string; label: string }> = {
  available: { dot: 'bg-term-green', label: 'AVAILABLE' },
  busy: { dot: 'bg-term-yellow', label: 'BUSY' },
  unavailable: { dot: 'bg-term-red', label: 'UNAVAILABLE' },
}

interface StatusDotProps {
  status: AvailabilityStatus
  showLabel?: boolean
}

export function StatusDot({ status, showLabel = true }: StatusDotProps) {
  const { dot, label } = STATUS_STYLES[status]

  return (
    <span className="inline-flex items-center gap-2 text-xs tracking-wide text-term-gray">
      <span className="relative flex h-2 w-2">
        <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${dot} opacity-60`} />
        <span className={`relative inline-flex h-2 w-2 rounded-full ${dot}`} />
      </span>
      {showLabel && <span>{label}</span>}
    </span>
  )
}
