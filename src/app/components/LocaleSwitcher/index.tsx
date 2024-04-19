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
    <div className="grid grid-cols-2 divide-x divide-neutral-700">
      <Link
        className={`px-4 ${locale === 'pt' ? 'text-neutral-300' : 'text-neutral-500'}`}
        href={`/pt/${path}`}
        locale="pt"
      >
        BR
      </Link>

      <Link
        className={`px-4 ${locale === 'en' ? 'text-neutral-300' : 'text-neutral-500'}`}
        href={`/en/${path}`}
        locale="en"
      >
        EN
      </Link>
    </div>
  )
}
