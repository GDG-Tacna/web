import { useTranslations } from 'next-intl'
import { Container } from '@/presentation/components/ui/Container'

export default function ContactPage() {
  const t = useTranslations('contact')

  return (
    <Container className="py-12">
      <h1 className="mb-8 text-4xl font-bold text-neutral-900">{t('title')}</h1>
      <p className="text-neutral-600">{t('form.name')}</p>
    </Container>
  )
}
