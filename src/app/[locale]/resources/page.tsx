import { useTranslations } from 'next-intl'
import { Container } from '@/presentation/components/ui/Container'

export default function ResourcesPage() {
  const t = useTranslations('resources')

  return (
    <Container className="py-12">
      <h1 className="mb-8 text-4xl font-bold text-neutral-900">{t('title')}</h1>
      <p className="text-neutral-600">{t('articles')}</p>
    </Container>
  )
}
