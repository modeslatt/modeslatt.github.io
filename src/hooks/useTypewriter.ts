import { useEffect, useState } from 'react'

interface UseTypewriterOptions {
  speed?: number
  startDelay?: number
}

export function useTypewriter(text: string, { speed = 35, startDelay = 0 }: UseTypewriterOptions = {}) {
  const [output, setOutput] = useState('')
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    let index = 0
    let intervalId: ReturnType<typeof setInterval>

    const startTimeout = setTimeout(() => {
      intervalId = setInterval(() => {
        index += 1
        setOutput(text.slice(0, index))
        if (index >= text.length) {
          clearInterval(intervalId)
          setIsDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(startTimeout)
      clearInterval(intervalId)
    }
  }, [text, speed, startDelay])

  return { output, isDone }
}
