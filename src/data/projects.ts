import type { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'in-game-shop',
    name: 'in-game-shop',
    description: 'In-game shop for the Web3/GameFi ecosystem, supporting fiat, crypto, and a native token.',
    longDescription:
      'Worked on the in-game shop for a Web3/GameFi ecosystem, supporting fiat payments via Stripe SDK, crypto payments via Crossmint SDK, and the native token through direct smart contract interactions. Also worked on the user account area for interacting with the ecosystem, and took part in developing and launching the token TGE.',
    technologies: ['React', 'Next.js', 'TanStack Query', 'Zustand', 'Wagmi', 'Viem', 'Tailwind CSS'],
    year: 2025,
    status: 'completed',
    featured: true,
  },
  {
    slug: 'crypto-exchanger-tma',
    name: 'crypto-exchanger-tma',
    description: 'A Telegram Mini App crypto exchanger.',
    longDescription:
      'A Telegram Mini App (TMA) that lets users exchange cryptocurrency directly inside Telegram. Built on the telegram-apps SDK with a React frontend, handling wallet connections, live rates, and transaction flows.',
    technologies: ['TypeScript', 'React', 'Vite', 'MobX', 'Wagmi', 'Viem'],
    year: 2025,
    status: 'archived',
    featured: true,
  },
  {
    slug: 'terminal-portfolio',
    name: 'terminal-portfolio',
    description: 'This site. A terminal-inspired developer portfolio built with React, TypeScript, and Zustand.',
    longDescription:
      'The site you are looking at right now. Built around a small in-browser command terminal, filesystem-style project listings, and a boot sequence that only runs once per session.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand'],
    year: 2026,
    status: 'active',
    featured: false,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}
