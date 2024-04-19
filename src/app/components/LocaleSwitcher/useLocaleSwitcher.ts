// @remove
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

export type Locale = 'pt' | 'en'

interface Props {
  locale: Locale
}

export function useLocaleSwitcher({ locale }: Props) {
  const pathname = usePathname()

  const path = useMemo(() => {
    const pathSplit = pathname.split('/')
    if (pathSplit.length > 2) return pathSplit[2]
    return ''
  }, [pathname])

  return { path }
}
