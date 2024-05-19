import { useLocale } from 'next-intl'
import Link from 'next/link'

export function Logo() {
  const locale = useLocale()

  return (
    <Link href={`/${locale}`} className="relative z-10 flex items-center gap-2">
      <h1 className="font-bold text-base md:block md:w-[11ch] md:text-base uppercase">
        <span className="md:hidden text-3xl">NB</span>
        <span className="md:inline-block w-[max-content] hidden">
          Naianderson Bruno
        </span>
      </h1>
    </Link>
  )
}
