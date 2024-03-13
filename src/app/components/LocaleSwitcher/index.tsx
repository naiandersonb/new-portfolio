import { useLocale } from 'next-intl'
import Image from 'next/image'

export function LocaleSwitcher() {
  const locales = [
    {
      key: 'en',
      label: 'English',
      flag: '/images/flags/usa.svg',
    },
    {
      key: 'pt',
      label: 'Português',
      flag: '/images/flags/brazil.svg',
    },
  ]
  const currentLocale = useLocale()
  return (
    <div className="group relative flex flex-col items-end">
      <button className="capitalize">{currentLocale}</button>
      <div className="border border-stone-900 rounded-lg px-2 w-[max-content] group-hover:flex flex-col flex absolute top-[120%]">
        {locales.map((locale) => (
          <div key={locale.key} className="flex gap-2 py-2">
            <Image
              src={locale.flag}
              width={20}
              height={20}
              alt={locale.label}
            />
            <span className="text-sm">{locale.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
