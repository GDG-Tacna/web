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
      <section className="relative overflow-hidden bg-gradient-to-br from-gdg-blue/5 via-white to-gdg-green/5 py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 animate-fade-in text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl bg-gradient-to-r from-gdg-blue via-gdg-green to-gdg-blue bg-clip-text text-transparent">
              {t('hero.title')}
            </h1>
            <p className="mb-3 text-xl md:text-2xl font-semibold text-neutral-700 animate-slide-up">
              {t('hero.subtitle')}
            </p>
            <p className="mb-10 text-base md:text-lg text-neutral-600 max-w-2xl mx-auto animate-slide-up">
              {t('hero.description')}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row animate-scale-in">
              <Button
                size="lg"
                className="text-white bg-gdg-blue hover:bg-gdg-blue-dark"
              >
                {t('hero.primaryCta')}
              </Button>
              <Link href="/events">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gdg-blue text-gdg-blue hover:bg-gdg-blue hover:text-white"
                >
                  {t('hero.secondaryCta')}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* What is GDG Section */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl md:text-4xl font-bold text-neutral-900">
              {t('whatIsGdg.title')}
            </h2>
            <p className="mb-6 text-center text-lg text-neutral-700 max-w-3xl mx-auto">
              {t('whatIsGdg.description')}
            </p>
            <div className="mb-12 text-center">
              <p className="text-neutral-600">{t('whatIsGdg.details')}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="group bg-gradient-to-br from-gdg-blue/5 to-gdg-blue/10 rounded-xl p-8 text-center
                              transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="mb-5 flex justify-center">
                  <Code className="text-gdg-blue h-14 w-14 transition-transform duration-300 group-hover:scale-110 animate-float" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-gdg-blue">
                  {t('whatIsGdg.features.learning.title')}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {t('whatIsGdg.features.learning.description')}
                </p>
              </div>

              <div className="group bg-gradient-to-br from-gdg-red/5 to-gdg-red/10 rounded-xl p-8 text-center
                              transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="mb-5 flex justify-center">
                  <Users className="text-gdg-red h-14 w-14 transition-transform duration-300 group-hover:scale-110 animate-float" style={{ animationDelay: '0.5s' }} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-gdg-red">
                  {t('whatIsGdg.features.networking.title')}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {t('whatIsGdg.features.networking.description')}
                </p>
              </div>

              <div className="group bg-gradient-to-br from-gdg-yellow/5 to-gdg-yellow/10 rounded-xl p-8 text-center
                              transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="mb-5 flex justify-center">
                  <Lightbulb className="text-gdg-yellow h-14 w-14 transition-transform duration-300 group-hover:scale-110 animate-float" style={{ animationDelay: '1s' }} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-gdg-yellow">
                  {t('whatIsGdg.features.innovation.title')}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {t('whatIsGdg.features.innovation.description')}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Community Matters Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-neutral-100 py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl md:text-4xl font-bold text-neutral-900">
              {t('whyCommunity.title')}
            </h2>
            <p className="mb-16 text-center text-lg text-neutral-700 max-w-2xl mx-auto">
              {t('whyCommunity.subtitle')}
            </p>

            <div className="space-y-6">
              <div className="group flex gap-5 rounded-xl bg-white p-7 shadow-sm
                              transition-all duration-300 hover:shadow-lg hover:-translate-x-2">
                <div className="flex-shrink-0">
                  <Zap className="text-gdg-blue h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-gdg-blue">
                    {t('whyCommunity.benefits.growth.title')}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {t('whyCommunity.benefits.growth.description')}
                  </p>
                </div>
              </div>

              <div className="group flex gap-5 rounded-xl bg-white p-7 shadow-sm
                              transition-all duration-300 hover:shadow-lg hover:-translate-x-2">
                <div className="flex-shrink-0">
                  <Heart className="text-gdg-red h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-gdg-red">
                    {t('whyCommunity.benefits.support.title')}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {t('whyCommunity.benefits.support.description')}
                  </p>
                </div>
              </div>

              <div className="group flex gap-5 rounded-xl bg-white p-7 shadow-sm
                              transition-all duration-300 hover:shadow-lg hover:-translate-x-2">
                <div className="flex-shrink-0">
                  <Calendar className="text-gdg-green h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-gdg-green">
                    {t('whyCommunity.benefits.opportunities.title')}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {t('whyCommunity.benefits.opportunities.description')}
                  </p>
                </div>
              </div>

              <div className="group flex gap-5 rounded-xl bg-white p-7 shadow-sm
                              transition-all duration-300 hover:shadow-lg hover:-translate-x-2">
                <div className="flex-shrink-0">
                  <Users className="text-gdg-yellow h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-gdg-yellow">
                    {t('whyCommunity.benefits.collaboration.title')}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {t('whyCommunity.benefits.collaboration.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <Container>
          <h2 className="mb-16 text-center text-3xl md:text-4xl font-bold text-neutral-900">
            {t('stats.title')}
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="group text-center transition-transform duration-300 hover:scale-105">
              <div className="text-gdg-blue mb-3 text-6xl md:text-7xl font-bold transition-all duration-300 group-hover:scale-110">
                150+
              </div>
              <div className="text-neutral-600 text-lg font-medium">{t('stats.members')}</div>
            </div>
            <div className="group text-center transition-transform duration-300 hover:scale-105">
              <div className="text-gdg-red mb-3 text-6xl md:text-7xl font-bold transition-all duration-300 group-hover:scale-110">
                50+
              </div>
              <div className="text-neutral-600 text-lg font-medium">{t('stats.events')}</div>
            </div>
            <div className="group text-center transition-transform duration-300 hover:scale-105">
              <div className="text-gdg-green mb-3 text-6xl md:text-7xl font-bold transition-all duration-300 group-hover:scale-110">
                5+
              </div>
              <div className="text-neutral-600 text-lg font-medium">{t('stats.years')}</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Members Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-neutral-100 py-20">
        <Container>
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl md:text-4xl font-bold text-neutral-900">
              {t('members.title')}
            </h2>
            <p className="mb-16 text-center text-lg text-neutral-700 max-w-2xl mx-auto">
              {t('members.subtitle')}
            </p>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {communityMembers.map((member) => (
                <div
                  key={member.id}
                  className="group flex flex-col items-center gap-3"
                >
                  <div className="from-gdg-blue to-gdg-green relative h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br p-1 shadow-md
                                  transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-6">
                    <div className="h-full w-full overflow-hidden rounded-full bg-white">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="text-center transition-transform duration-300 group-hover:-translate-y-1">
                    <p className="text-sm font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-gdg-blue">
                      {member.name}
                    </p>
                    {member.role && (
                      <p className="text-gdg-blue text-xs font-medium">{member.role}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Events Section */}
      <section className="bg-white py-20">
        <Container>
          <h2 className="mb-16 text-center text-3xl md:text-4xl font-bold text-neutral-900">
            {t('eventsList.sectionTitle')}
          </h2>

          {/* Upcoming Events */}
          {upcomingEvents.length > 0 && (
            <div className="mb-16">
              <div className="mb-8 flex items-center gap-3">
                <h3 className="text-2xl font-semibold text-neutral-800">
                  {t('eventsList.upcoming')}
                </h3>
                <span className="inline-flex items-center rounded-full bg-gdg-blue/10 px-3 py-1 text-sm font-medium text-gdg-blue">
                  {upcomingEvents.length}
                </span>
              </div>
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
              <div className="mb-8 flex items-center gap-3">
                <h3 className="text-2xl font-semibold text-neutral-800">
                  {t('eventsList.past')}
                </h3>
                <span className="inline-flex items-center rounded-full bg-neutral-200 px-3 py-1 text-sm font-medium text-neutral-700">
                  {pastEvents.length}
                </span>
              </div>
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
      <section className="relative overflow-hidden bg-gradient-to-r from-gdg-blue via-gdg-green to-gdg-yellow py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-5 text-3xl md:text-4xl font-bold text-white animate-fade-in">
              {t('callToAction.title')}
            </h2>
            <p className="mb-10 text-lg md:text-xl text-white/95 max-w-2xl mx-auto animate-slide-up">
              {t('callToAction.description')}
            </p>
            <Button
              size="lg"
              className="bg-white text-gdg-blue hover:bg-neutral-50 shadow-lg hover:shadow-xl animate-scale-in"
            >
              {t('callToAction.button')}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
