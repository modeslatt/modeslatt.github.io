import { Mail, Send } from 'lucide-react'
import { profile } from '@/data/profile'
import { StatusDot } from '@/components/ui/StatusDot'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-term-border">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 px-4 py-6 text-xs text-term-gray sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-4">
          <StatusDot status={profile.status} />
          <span>{profile.location}</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.telegramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            className="hover:text-term-green"
          >
            <Send size={16} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-term-green">
            <Mail size={16} />
          </a>
          <span className="text-term-gray-dim">© {currentYear} {profile.name}</span>
        </div>
      </div>
    </footer>
  )
}
