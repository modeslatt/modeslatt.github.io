import { create } from 'zustand'

export interface HistoryEntry {
  input: string
  output: string[]
}

interface TerminalState {
  isOpen: boolean
  history: HistoryEntry[]
  open: () => void
  close: () => void
  toggle: () => void
  pushHistory: (entry: HistoryEntry) => void
  clearHistory: () => void
}

export const useTerminalStore = create<TerminalState>((set) => ({
  isOpen: false,
  history: [],
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  pushHistory: (entry) => set((state) => ({ history: [...state.history, entry] })),
  clearHistory: () => set({ history: [] }),
}))
