'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'
import { routing } from '@/i18n/routing'

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as any })
  }

  return (
    <div className="flex gap-2">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleChange(loc)}
          className={`rounded px-3 py-1 ${
            locale === loc
              ? 'bg-gdg-blue text-white'
              : 'bg-neutral-200 text-neutral-700'
          }`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
