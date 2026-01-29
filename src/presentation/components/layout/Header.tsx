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
    <header className="sticky top-0 z-50 border-b border-neutral-200/50 bg-white/80 backdrop-blur-md transition-all duration-300 shadow-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
          >
            <span className="text-xl font-bold text-neutral-900 transition-colors duration-300 hover:text-gdg-blue">
              GDG Tacna
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="relative text-neutral-700 transition-colors duration-300 hover:text-gdg-blue
                           after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0
                           after:bg-gdg-blue after:transition-all after:duration-300
                           hover:after:left-0 hover:after:w-full"
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
