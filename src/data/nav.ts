export interface NavItem {
  label: string
  path: string
  command: string
}

export const navItems: NavItem[] = [
  { label: 'home', path: '/', command: 'home' },
  { label: 'about', path: '/about', command: 'about' },
  { label: 'projects', path: '/projects', command: 'projects' },
  { label: 'experience', path: '/experience', command: 'experience' },
  { label: 'contact', path: '/contact', command: 'contact' },
]
