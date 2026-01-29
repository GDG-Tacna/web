import { useTranslations } from 'next-intl'
import { Container } from '@/presentation/components/ui/Container'
import { Button } from '@/presentation/components/ui/Button'
import { Link } from '@/i18n/routing'
import { Users, Calendar, Code, Heart, Lightbulb, Zap } from 'lucide-react'

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

      {/* What is GDG Section */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-neutral-900">
              {t('whatIsGdg.title')}
            </h2>
            <p className="mb-6 text-center text-lg text-neutral-700">
              {t('whatIsGdg.description')}
            </p>
            <div className="mb-8 text-center">
              <p className="text-neutral-600">{t('whatIsGdg.details')}</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-gdg-blue/5 p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Code className="h-12 w-12 text-gdg-blue" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                  {t('whatIsGdg.features.learning.title')}
                </h3>
                <p className="text-neutral-600">
                  {t('whatIsGdg.features.learning.description')}
                </p>
              </div>

              <div className="rounded-lg bg-gdg-red/5 p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Users className="h-12 w-12 text-gdg-red" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                  {t('whatIsGdg.features.networking.title')}
                </h3>
                <p className="text-neutral-600">
                  {t('whatIsGdg.features.networking.description')}
                </p>
              </div>

              <div className="rounded-lg bg-gdg-yellow/5 p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Lightbulb className="h-12 w-12 text-gdg-yellow" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                  {t('whatIsGdg.features.innovation.title')}
                </h3>
                <p className="text-neutral-600">
                  {t('whatIsGdg.features.innovation.description')}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Community Matters Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-neutral-100 py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-neutral-900">
              {t('whyCommunity.title')}
            </h2>
            <p className="mb-12 text-center text-lg text-neutral-700">
              {t('whyCommunity.subtitle')}
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 rounded-lg bg-white p-6 shadow-sm">
                <div className="flex-shrink-0">
                  <Zap className="h-8 w-8 text-gdg-blue" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                    {t('whyCommunity.benefits.growth.title')}
                  </h3>
                  <p className="text-neutral-600">
                    {t('whyCommunity.benefits.growth.description')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg bg-white p-6 shadow-sm">
                <div className="flex-shrink-0">
                  <Heart className="h-8 w-8 text-gdg-red" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                    {t('whyCommunity.benefits.support.title')}
                  </h3>
                  <p className="text-neutral-600">
                    {t('whyCommunity.benefits.support.description')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg bg-white p-6 shadow-sm">
                <div className="flex-shrink-0">
                  <Calendar className="h-8 w-8 text-gdg-green" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                    {t('whyCommunity.benefits.opportunities.title')}
                  </h3>
                  <p className="text-neutral-600">
                    {t('whyCommunity.benefits.opportunities.description')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg bg-white p-6 shadow-sm">
                <div className="flex-shrink-0">
                  <Users className="h-8 w-8 text-gdg-yellow" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                    {t('whyCommunity.benefits.collaboration.title')}
                  </h3>
                  <p className="text-neutral-600">
                    {t('whyCommunity.benefits.collaboration.description')}
                  </p>
                </div>
              </div>
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
