import { locales } from '@/app/config'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Locale, useLocaleSwitcher } from './useLocaleSwitcher'

export function LocaleSwitcher() {
  const locale = useLocale() as Locale
  const { localeLabel, flag, path } = useLocaleSwitcher({ locale })
  const [isOpen, setIsOpen] = useState(false)

  const t = useTranslations('LocaleSwitcher')

  const toggleIsOpen = () => setIsOpen((prev) => !prev)

  return (
    <div className="group relative flex flex-col items-end">
      <button
        onClick={toggleIsOpen}
        className="capitalize flex items-center gap-2 text-xs py-2 px-4 rounded-full overflow-hidden dark:bg-stone-900 bg-stone-100"
      >
        <Image src={flag} width={20} height={20} alt="" />
        {localeLabel}
      </button>
      {isOpen && (
        <div className="dark:bg-stone-900 bg-stone-100 rounded-lg px-2 w-[max-content] group-hover:flex flex-col flex absolute top-[120%]">
          {locales.map((locale) => (
            <Link
              className="flex gap-2 py-2 cursor-pointer"
              href={`/${locale.key}/${path}`}
              locale={locale.key}
              key={locale.key}
            >
              <Image
                src={locale.flag}
                width={20}
                height={20}
                alt={locale.label}
              />
              <span className="text-sm">{t(locale.label)}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
