import { useTranslations, useLocale } from 'next-intl'
import { Container } from '@/presentation/components/ui/Container'
import { Button } from '@/presentation/components/ui/Button'
import { Link } from '@/i18n/routing'
import { Users, Calendar, Code, Heart, Lightbulb, Zap } from 'lucide-react'
import { communityMembers } from '@/data/members'
import Image from 'next/image'
import { EventCard } from '@/presentation/components/ui/EventCard'

export default function HomePage() {
  const t = useTranslations('home')
  const locale = useLocale()

  const events = [
    {
      title: 'Google I/O Extended Tacna 2025',
      date: new Date('2025-07-15'),
      participants: 120,
      type: 'upcoming' as const,
    },
    {
      title: 'Android Study Jam',
      date: new Date('2025-08-20'),
      participants: 50,
      type: 'upcoming' as const,
    },
    {
      title: 'Cloud Hero: Kubernetes',
      date: new Date('2024-10-10'),
      participants: 80,
      type: 'past' as const,
    },
    {
      title: 'DevFest Tacna 2024',
      date: new Date('2024-11-25'),
      participants: 200,
      type: 'past' as const,
    },
  ]

  const upcomingEvents = events.filter((e) => e.type === 'upcoming')
  const pastEvents = events.filter((e) => e.type === 'past')

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="from-gdg-blue to-gdg-blue-dark bg-gradient-to-br py-20 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="text-gdg-blue-light mb-2 text-xl">
              {t('hero.subtitle')}
            </p>
            <p className="mb-8 text-lg text-white/90">
              {t('hero.description')}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="text-gdg-blue bg-white hover:bg-neutral-100"
              >
                {t('hero.primaryCta')}
              </Button>
              <Link href="/events">
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:text-gdg-blue border-white text-white hover:bg-white"
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
              <div className="bg-gdg-blue/5 rounded-lg p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Code className="text-gdg-blue h-12 w-12" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                  {t('whatIsGdg.features.learning.title')}
                </h3>
                <p className="text-neutral-600">
                  {t('whatIsGdg.features.learning.description')}
                </p>
              </div>

              <div className="bg-gdg-red/5 rounded-lg p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Users className="text-gdg-red h-12 w-12" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                  {t('whatIsGdg.features.networking.title')}
                </h3>
                <p className="text-neutral-600">
                  {t('whatIsGdg.features.networking.description')}
                </p>
              </div>

              <div className="bg-gdg-yellow/5 rounded-lg p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Lightbulb className="text-gdg-yellow h-12 w-12" />
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
                  <Zap className="text-gdg-blue h-8 w-8" />
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
                  <Heart className="text-gdg-red h-8 w-8" />
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
                  <Calendar className="text-gdg-green h-8 w-8" />
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
                  <Users className="text-gdg-yellow h-8 w-8" />
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
              <div className="text-gdg-blue mb-2 text-5xl font-bold">150+</div>
              <div className="text-neutral-600">{t('stats.members')}</div>
            </div>
            <div className="text-center">
              <div className="text-gdg-red mb-2 text-5xl font-bold">50+</div>
              <div className="text-neutral-600">{t('stats.events')}</div>
            </div>
            <div className="text-center">
              <div className="text-gdg-green mb-2 text-5xl font-bold">5+</div>
              <div className="text-neutral-600">{t('stats.years')}</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Members Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-neutral-100 py-16">
        <Container>
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-neutral-900">
              {t('members.title')}
            </h2>
            <p className="mb-12 text-center text-lg text-neutral-700">
              {t('members.subtitle')}
            </p>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {communityMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="from-gdg-blue to-gdg-green relative h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br p-1 shadow-lg transition-transform hover:scale-110">
                    <div className="h-full w-full overflow-hidden rounded-full bg-white">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-neutral-900">
                      {member.name}
                    </p>
                    {member.role && (
                      <p className="text-gdg-blue text-xs">{member.role}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Events Section */}
      <section className="bg-neutral-50 py-16">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold text-neutral-900">
            {t('eventsList.sectionTitle')}
          </h2>

          {/* Upcoming Events */}
          {upcomingEvents.length > 0 && (
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-semibold text-neutral-800">
                {t('eventsList.upcoming')}
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {upcomingEvents.map((event, index) => (
                  <EventCard
                    key={index}
                    title={event.title}
                    date={formatDate(event.date)}
                    count={event.participants}
                    participantsLabel={t('eventsList.participants')}
                    type="upcoming"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Past Events */}
          {pastEvents.length > 0 && (
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-neutral-800">
                {t('eventsList.past')}
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {pastEvents.map((event, index) => (
                  <EventCard
                    key={index}
                    title={event.title}
                    date={formatDate(event.date)}
                    count={event.participants}
                    participantsLabel={t('eventsList.participants')}
                    type="past"
                  />
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* Call to Action */}
      <section className="from-gdg-yellow to-gdg-green bg-gradient-to-r py-16">
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
              className="text-gdg-blue bg-white hover:bg-neutral-100"
            >
              {t('callToAction.button')}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
