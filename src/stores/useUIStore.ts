import { create } from 'zustand'

export type Theme = 'dark' | 'light'

interface UIState {
  isMobileNavOpen: boolean
  theme: Theme
  openMobileNav: () => void
  closeMobileNav: () => void
  toggleMobileNav: () => void
  setTheme: (theme: Theme) => void
}

export const useUIStore = create<UIState>((set) => ({
  isMobileNavOpen: false,
  theme: 'dark',
  openMobileNav: () => set({ isMobileNavOpen: true }),
  closeMobileNav: () => set({ isMobileNavOpen: false }),
  toggleMobileNav: () => set((state) => ({ isMobileNavOpen: !state.isMobileNavOpen })),
  setTheme: (theme) => set({ theme }),
}))
