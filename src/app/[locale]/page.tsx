import { useTranslations, useLocale } from 'next-intl'
import { Container } from '@/presentation/components/ui/Container'
import { Button } from '@/presentation/components/ui/Button'
import { Link } from '@/i18n/routing'
import {
  Users,
  Calendar,
  Code,
  Heart,
  Lightbulb,
  Zap,
  MessageCircle,
} from 'lucide-react'
import { communityMembers } from '@/data/members'
import Image from 'next/image'
import { EventCard } from '@/presentation/components/ui/EventCard'
import { siteConfig } from '@/config/site'

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
      title: 'Build with AI',
      date: new Date('2026-02-16'),
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
      title: 'DevFest Tacna 2025',
      date: new Date('2025-11-22'),
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
      <section className="from-gdg-blue/5 to-gdg-green/5 relative overflow-hidden bg-gradient-to-br via-white py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="animate-fade-in from-gdg-blue via-gdg-green to-gdg-blue mb-6 bg-gradient-to-r bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl">
              {t('hero.title')}
            </h1>
            <p className="animate-slide-up mb-3 text-xl font-semibold text-neutral-700 md:text-2xl">
              {t('hero.subtitle')}
            </p>
            <p className="animate-slide-up mx-auto mb-10 max-w-2xl text-base text-neutral-600 md:text-lg">
              {t('hero.description')}
            </p>
            <div className="animate-scale-in flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gdg-blue hover:bg-gdg-blue-dark text-white"
                >
                  {t('hero.primaryCta')}
                </Button>
              </Link>
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
            <h2 className="mb-4 text-center text-3xl font-bold text-neutral-900 md:text-4xl">
              {t('whatIsGdg.title')}
            </h2>
            <p className="mx-auto mb-6 max-w-3xl text-center text-lg text-neutral-700">
              {t('whatIsGdg.description')}
            </p>
            <div className="mb-12 text-center">
              <p className="text-neutral-600">{t('whatIsGdg.details')}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="group from-gdg-blue/5 to-gdg-blue/10 rounded-xl bg-gradient-to-br p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="mb-5 flex justify-center">
                  <Code className="text-gdg-blue animate-float h-14 w-14 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="group-hover:text-gdg-blue mb-3 text-xl font-semibold text-neutral-900 transition-colors duration-300">
                  {t('whatIsGdg.features.learning.title')}
                </h3>
                <p className="leading-relaxed text-neutral-600">
                  {t('whatIsGdg.features.learning.description')}
                </p>
              </div>

              <div className="group from-gdg-red/5 to-gdg-red/10 rounded-xl bg-gradient-to-br p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="mb-5 flex justify-center">
                  <Users
                    className="text-gdg-red animate-float h-14 w-14 transition-transform duration-300 group-hover:scale-110"
                    style={{ animationDelay: '0.5s' }}
                  />
                </div>
                <h3 className="group-hover:text-gdg-red mb-3 text-xl font-semibold text-neutral-900 transition-colors duration-300">
                  {t('whatIsGdg.features.networking.title')}
                </h3>
                <p className="leading-relaxed text-neutral-600">
                  {t('whatIsGdg.features.networking.description')}
                </p>
              </div>

              <div className="group from-gdg-yellow/5 to-gdg-yellow/10 rounded-xl bg-gradient-to-br p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="mb-5 flex justify-center">
                  <Lightbulb
                    className="text-gdg-yellow animate-float h-14 w-14 transition-transform duration-300 group-hover:scale-110"
                    style={{ animationDelay: '1s' }}
                  />
                </div>
                <h3 className="group-hover:text-gdg-yellow mb-3 text-xl font-semibold text-neutral-900 transition-colors duration-300">
                  {t('whatIsGdg.features.innovation.title')}
                </h3>
                <p className="leading-relaxed text-neutral-600">
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
            <h2 className="mb-4 text-center text-3xl font-bold text-neutral-900 md:text-4xl">
              {t('whyCommunity.title')}
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-neutral-700">
              {t('whyCommunity.subtitle')}
            </p>

            <div className="space-y-6">
              <div className="group flex gap-5 rounded-xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-x-2 hover:shadow-lg">
                <div className="flex-shrink-0">
                  <Zap className="text-gdg-blue h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="group-hover:text-gdg-blue mb-2 text-xl font-semibold text-neutral-900 transition-colors duration-300">
                    {t('whyCommunity.benefits.growth.title')}
                  </h3>
                  <p className="leading-relaxed text-neutral-600">
                    {t('whyCommunity.benefits.growth.description')}
                  </p>
                </div>
              </div>

              <div className="group flex gap-5 rounded-xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-x-2 hover:shadow-lg">
                <div className="flex-shrink-0">
                  <Heart className="text-gdg-red h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="group-hover:text-gdg-red mb-2 text-xl font-semibold text-neutral-900 transition-colors duration-300">
                    {t('whyCommunity.benefits.support.title')}
                  </h3>
                  <p className="leading-relaxed text-neutral-600">
                    {t('whyCommunity.benefits.support.description')}
                  </p>
                </div>
              </div>

              <div className="group flex gap-5 rounded-xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-x-2 hover:shadow-lg">
                <div className="flex-shrink-0">
                  <Calendar className="text-gdg-green h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="group-hover:text-gdg-green mb-2 text-xl font-semibold text-neutral-900 transition-colors duration-300">
                    {t('whyCommunity.benefits.opportunities.title')}
                  </h3>
                  <p className="leading-relaxed text-neutral-600">
                    {t('whyCommunity.benefits.opportunities.description')}
                  </p>
                </div>
              </div>

              <div className="group flex gap-5 rounded-xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-x-2 hover:shadow-lg">
                <div className="flex-shrink-0">
                  <Users className="text-gdg-yellow h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="group-hover:text-gdg-yellow mb-2 text-xl font-semibold text-neutral-900 transition-colors duration-300">
                    {t('whyCommunity.benefits.collaboration.title')}
                  </h3>
                  <p className="leading-relaxed text-neutral-600">
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
          <h2 className="mb-16 text-center text-3xl font-bold text-neutral-900 md:text-4xl">
            {t('stats.title')}
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="group text-center transition-transform duration-300 hover:scale-105">
              <div className="text-gdg-blue mb-3 text-6xl font-bold transition-all duration-300 group-hover:scale-110 md:text-7xl">
                150+
              </div>
              <div className="text-lg font-medium text-neutral-600">
                {t('stats.members')}
              </div>
            </div>
            <div className="group text-center transition-transform duration-300 hover:scale-105">
              <div className="text-gdg-red mb-3 text-6xl font-bold transition-all duration-300 group-hover:scale-110 md:text-7xl">
                50+
              </div>
              <div className="text-lg font-medium text-neutral-600">
                {t('stats.events')}
              </div>
            </div>
            <div className="group text-center transition-transform duration-300 hover:scale-105">
              <div className="text-gdg-green mb-3 text-6xl font-bold transition-all duration-300 group-hover:scale-110 md:text-7xl">
                5+
              </div>
              <div className="text-lg font-medium text-neutral-600">
                {t('stats.years')}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Members Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-neutral-100 py-20">
        <Container>
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-neutral-900 md:text-4xl">
              {t('members.title')}
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-neutral-700">
              {t('members.subtitle')}
            </p>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {communityMembers.map((member) => (
                <div
                  key={member.id}
                  className="group flex flex-col items-center gap-3"
                >
                  <div className="from-gdg-blue to-gdg-green relative h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br p-1 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl">
                    <div className="h-full w-full overflow-hidden rounded-full bg-white">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        unoptimized={true}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="text-center transition-transform duration-300 group-hover:-translate-y-1">
                    <p className="group-hover:text-gdg-blue text-sm font-semibold text-neutral-900 transition-colors duration-300">
                      {member.name}
                    </p>
                    {member.role && (
                      <p className="text-gdg-blue text-xs font-medium">
                        {member.role}
                      </p>
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
          <h2 className="mb-16 text-center text-3xl font-bold text-neutral-900 md:text-4xl">
            {t('eventsList.sectionTitle')}
          </h2>

          {/* Upcoming Events */}
          {upcomingEvents.length > 0 && (
            <div className="mb-16">
              <div className="mb-8 flex items-center gap-3">
                <h3 className="text-2xl font-semibold text-neutral-800">
                  {t('eventsList.upcoming')}
                </h3>
                <span className="bg-gdg-blue/10 text-gdg-blue inline-flex items-center rounded-full px-3 py-1 text-sm font-medium">
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

      {/* Join Community Section */}
      <section className="from-gdg-blue via-gdg-green to-gdg-blue relative overflow-hidden bg-gradient-to-br py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>

        <Container>
          <div className="relative mx-auto max-w-4xl">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="animate-float rounded-full bg-white/20 p-6 backdrop-blur-sm">
                  <MessageCircle className="h-16 w-16 text-white md:h-20 md:w-20" />
                </div>
              </div>

              <h2 className="animate-fade-in mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                {t('joinCommunity.title')}
              </h2>

              <p className="animate-slide-up mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/95 md:text-xl">
                {t('joinCommunity.description')}
              </p>

              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-scale-in inline-block"
              >
                <Button
                  size="lg"
                  className="text-gdg-blue hover:shadow-3xl group gap-3 bg-white px-8 py-6 text-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-neutral-50"
                >
                  <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
                  {t('joinCommunity.button')}
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
