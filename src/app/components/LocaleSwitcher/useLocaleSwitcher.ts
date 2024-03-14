import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

export type Locale = 'pt' | 'en'

interface Props {
  locale: Locale
}

export function useLocaleSwitcher({ locale }: Props) {
  const localeLabel = {
    en: 'EN',
    pt: 'BR',
  }

  const flag = {
    en: '/images/flags/usa.svg',
    pt: '/images/flags/brazil.svg',
  }

  const pathname = usePathname()

  const path = useMemo(() => {
    const pathSplit = pathname.split('/')
    if (pathSplit.length > 2) return pathSplit[2]
    return ''
  }, [pathname])

  return { path, localeLabel: localeLabel[locale], flag: flag[locale] }
}
