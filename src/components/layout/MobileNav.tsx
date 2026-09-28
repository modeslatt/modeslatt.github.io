import { NavLink } from 'react-router-dom'
import { navItems } from '@/data/nav'
import { useUIStore } from '@/stores/useUIStore'

export function MobileNav() {
  const isOpen = useUIStore((state) => state.isMobileNavOpen)
  const close = useUIStore((state) => state.closeMobileNav)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-20 bg-term-bg/95 pt-14 sm:hidden">
      <ul className="flex flex-col divide-y divide-term-border border-b border-term-border">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.path === '/'}
              onClick={close}
              className={({ isActive }) =>
                `block px-6 py-4 text-lg ${isActive ? 'text-term-green' : 'text-term-gray'}`
              }
            >
              <span className="text-term-gray-dim">$ cd</span> ./{item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
