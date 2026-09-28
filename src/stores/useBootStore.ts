import { create } from 'zustand'

const BOOT_SESSION_KEY = 'portfolio:booted'

function hasBootedThisSession(): boolean {
  try {
    return sessionStorage.getItem(BOOT_SESSION_KEY) === 'true'
  } catch {
    return false
  }
}

interface BootState {
  isBooting: boolean
  complete: () => void
}

export const useBootStore = create<BootState>((set) => ({
  isBooting: !hasBootedThisSession(),
  complete: () => {
    try {
      sessionStorage.setItem(BOOT_SESSION_KEY, 'true')
    } catch {
      // sessionStorage unavailable (e.g. private mode) — boot sequence will replay, which is fine
    }
    set({ isBooting: false })
  },
}))
