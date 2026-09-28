import { Outlet } from 'react-router-dom'
import { useBootStore } from '@/stores/useBootStore'
import { BootSequence } from '@/components/terminal/BootSequence'
import { CommandTerminal } from '@/components/terminal/CommandTerminal'
import { Navbar } from './Navbar'
import { MobileNav } from './MobileNav'
import { Footer } from './Footer'

export function Layout() {
  const isBooting = useBootStore((state) => state.isBooting)

  if (isBooting) return <BootSequence />

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <MobileNav />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10 sm:px-6">
        <Outlet />
      </main>
      <Footer />
      <CommandTerminal />
    </div>
  )
}
