import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: {
      common: (await import(`@/i18n/locales/${locale}/common.json`)).default,
      home: (await import(`@/i18n/locales/${locale}/home.json`)).default,
      about: (await import(`@/i18n/locales/${locale}/about.json`)).default,
      contact: (await import(`@/i18n/locales/${locale}/contact.json`)).default,
      events: (await import(`@/i18n/locales/${locale}/events.json`)).default,
      members: (await import(`@/i18n/locales/${locale}/members.json`)).default,
      resources: (await import(`@/i18n/locales/${locale}/resources.json`)).default,
    },
  }
})
