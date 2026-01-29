import { useTranslations } from 'next-intl'
import { Container } from '@/presentation/components/ui/Container'

export function Footer() {
  const t = useTranslations('footer')
  const currentYear = new Date().getFullYear()

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
            <ul className="space-y-2">
              <li>
                <a
                  href="https://twitter.com/gdgtacna"
                  className="text-neutral-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/gdgtacna"
                  className="text-neutral-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-800 pt-8 text-center text-neutral-400">
          <p>{t('copyright', { year: currentYear })}</p>
        </div>
      </Container>
    </footer>
  )
}
