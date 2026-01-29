import { useTranslations } from 'next-intl'
import { Container } from '@/presentation/components/ui/Container'
import { Button } from '@/presentation/components/ui/Button'
import { Link } from '@/i18n/routing'

export default function HomePage() {
  const t = useTranslations('home')

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gdg-blue to-gdg-blue-dark py-20 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="mb-2 text-xl text-gdg-blue-light">
              {t('hero.subtitle')}
            </p>
            <p className="mb-8 text-lg text-white/90">
              {t('hero.description')}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white text-gdg-blue hover:bg-neutral-100"
              >
                {t('hero.primaryCta')}
              </Button>
              <Link href="/events">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gdg-blue"
                >
                  {t('hero.secondaryCta')}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold text-neutral-900">
            {t('stats.title')}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-gdg-blue">150+</div>
              <div className="text-neutral-600">{t('stats.members')}</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-gdg-red">50+</div>
              <div className="text-neutral-600">{t('stats.events')}</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-gdg-green">5+</div>
              <div className="text-neutral-600">{t('stats.years')}</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-gdg-yellow to-gdg-green py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              {t('callToAction.title')}
            </h2>
            <p className="mb-8 text-lg text-white/90">
              {t('callToAction.description')}
            </p>
            <Button
              size="lg"
              className="bg-white text-gdg-blue hover:bg-neutral-100"
            >
              {t('callToAction.button')}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
