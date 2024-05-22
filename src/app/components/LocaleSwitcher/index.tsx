import { useLocale } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { Locale } from './useLocaleSwitcher'

export function LocaleSwitcher() {
  const locale = useLocale() as Locale
  const pathname = usePathname()

  const path = useMemo(() => {
    const pathSplit = pathname.split('/')
    if (pathSplit.length > 2) return pathSplit[2]

    return ''
  }, [pathname])

  return (
    <div className="grid grid-cols-2 divide-x dark:divide-stone-700 divide-stone-400">
      <Link
        className={`px-3 ${locale === 'pt' ? 'dark:text-stone-50 text-stone-950' : 'text-stone-500'}`}
        href={`/pt/${path}`}
        locale="pt"
      >
        BR
      </Link>

      <Link
        className={`px-3 ${locale === 'en' ? 'dark:text-stone-50 text-stone-950' : 'text-stone-500'}`}
        href={`/en/${path}`}
        locale="en"
      >
        EN
      </Link>
    </div>
  )
}
