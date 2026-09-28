import type { ExperienceEntry } from '@/types'

export const experience: ExperienceEntry[] = [
  {
    id: 'fawesome-games-frontend',
    type: 'work',
    organization: 'Fawesome Games',
    role: 'Junior Frontend Developer',
    location: 'Remote',
    startDate: '2024-09',
    endDate: '2025-09',
    description:
      'Built a Telegram Mini App crypto exchanger and a platform for topping up games and gaming services with Toncoin (Gram) for outsource clients. Worked on the Web3/GameFi ecosystem: an in-game shop supporting fiat (Stripe SDK), crypto (Crossmint SDK), and the native token through smart contract interactions, plus the user account area for the ecosystem. Took part in developing and launching the token TGE.',
    technologies: [
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Vite',
      'MobX',
      'Zustand',
      'Redux',
      'TanStack Query',
      'Shadcn/ui',
      'Wagmi',
      'Viem',
    ],
  },
  {
    id: 'fawesome-games-nodejs',
    type: 'work',
    organization: 'Fawesome Games',
    role: 'Node.js Developer',
    location: 'Remote',
    startDate: '2023-10',
    endDate: '2024-08',
    description:
      'Developed internal applications for automated data collection, and built Telegram bots and Mini Apps as part of outsource projects.',
    technologies: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'Telegraf.js', 'telegram-apps/sdk'],
  },
  {
    id: 'bsu-institute-of-business',
    type: 'education',
    organization: 'Institute of Business, BSU',
    role: "Bachelor's in Information Resource Management",
    location: 'Minsk, Belarus',
    startDate: '2021-09',
    endDate: '2025-06',
    description: 'Bachelor’s degree focused on information resource management.',
    technologies: [],
  },
]
