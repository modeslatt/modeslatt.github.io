import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/data/nav'
import { profile } from '@/data/profile'
import { useUIStore } from '@/stores/useUIStore'

export function Navbar() {
  const isMobileNavOpen = useUIStore((state) => state.isMobileNavOpen)
  const toggleMobileNav = useUIStore((state) => state.toggleMobileNav)

  return (
    <header className="sticky top-0 z-30 border-b border-term-border bg-term-bg/90 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 sm:px-6">
        <NavLink to="/" className="text-sm text-term-white hover:text-term-green" onClick={() => toggleMobileNav()}>
          <span className="text-term-green">~/</span>
          {profile.handle}
        </NavLink>

        <ul className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `block px-3 py-1.5 text-sm transition-colors ${
                    isActive ? 'text-term-green' : 'text-term-gray hover:text-term-white'
                  }`
                }
              >
                ./{item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleMobileNav}
          aria-label={isMobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileNavOpen}
          className="text-term-gray hover:text-term-white sm:hidden"
        >
          {isMobileNavOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
    </header>
  )
}
