import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('About')

  return (
    <main>
      <h1>About me</h1>
    </main>
  )
}
