'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Container } from '@/presentation/components/ui/Container'

export function Header() {
  const t = useTranslations('common.navigation')

  const navItems = [
    { key: 'events', href: '/events' },
    { key: 'members', href: '/members' },
    { key: 'about', href: '/about' },
    { key: 'resources', href: '/resources' },
    { key: 'contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-xl font-bold text-neutral-900">
              GDG Tacna
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-neutral-700 transition-colors hover:text-gdg-blue"
              >
                {t(item.key)}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>
        </nav>
      </Container>
    </header>
  )
}
