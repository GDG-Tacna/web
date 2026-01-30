import { useTranslations } from 'next-intl'
import { Container } from '@/presentation/components/ui/Container'
import { Instagram, Youtube } from 'lucide-react'

// TikTok icon component (lucide-react doesn't have TikTok, so we create a custom one)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export function Footer() {
  const t = useTranslations('common.footer')
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@gdgtacna',
      icon: TikTokIcon,
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/gdgtacna',
      icon: Instagram,
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@gdgtacna',
      icon: Youtube,
    },
  ]

  return (
    <footer className="bg-neutral-900 py-12 text-white">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-xl font-bold">GDG Tacna</span>
            </div>
            <p className="text-neutral-400">{t('description')}</p>
          </div>

          <div>
            <h3 className="mb-4 font-bold">{t('followUs')}</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="group flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition-all duration-300 hover:bg-white hover:text-neutral-900 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-800 pt-8 text-center text-neutral-400">
          <p>{t('copyright', { year: currentYear })}</p>
        </div>
      </Container>
    </footer>
  )
}
