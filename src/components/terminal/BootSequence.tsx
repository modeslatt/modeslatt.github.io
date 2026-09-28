import { useEffect, useState } from 'react'
import { useBootStore } from '@/stores/useBootStore'
import { BlinkingCursor } from './BlinkingCursor'

const BOOT_LINES = [
  'booting devos v2.1.0...',
  'mounting /home/acarter... [OK]',
  'loading shell profile... [OK]',
  'starting portfolio.tsx...',
]

const LINE_INTERVAL_MS = 320
const HOLD_AFTER_MS = 500

export function BootSequence() {
  const complete = useBootStore((state) => state.complete)
  const [visibleLines, setVisibleLines] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    if (visibleLines >= BOOT_LINES.length) {
      const holdTimeout = setTimeout(() => setIsExiting(true), HOLD_AFTER_MS)
      return () => clearTimeout(holdTimeout)
    }

    const lineTimeout = setTimeout(() => setVisibleLines((count) => count + 1), LINE_INTERVAL_MS)
    return () => clearTimeout(lineTimeout)
  }, [visibleLines])

  useEffect(() => {
    if (!isExiting) return
    const exitTimeout = setTimeout(complete, 250)
    return () => clearTimeout(exitTimeout)
  }, [isExiting, complete])

  function skip() {
    setVisibleLines(BOOT_LINES.length)
    setIsExiting(true)
  }

  useEffect(() => {
    window.addEventListener('keydown', skip)
    return () => window.removeEventListener('keydown', skip)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      onClick={skip}
      className={`fixed inset-0 z-50 flex cursor-pointer flex-col justify-center bg-term-bg px-6 font-mono text-sm text-term-gray outline-none transition-opacity duration-[250ms] sm:text-base ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="mx-auto w-full max-w-lg">
        {BOOT_LINES.slice(0, visibleLines).map((line) => (
          <p key={line} className="mb-1 animate-fade-in">
            <span className="text-term-green">$</span> {line}
          </p>
        ))}
        {visibleLines < BOOT_LINES.length && (
          <p className="mb-1">
            <BlinkingCursor />
          </p>
        )}
      </div>
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-term-gray-dim">
        press any key to skip
      </p>
    </div>
  )
}
