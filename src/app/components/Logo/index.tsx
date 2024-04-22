import { Lightning } from '@phosphor-icons/react'
import { useLocale } from 'next-intl'
import Link from 'next/link'

export function Logo() {
  const locale = useLocale()

  return (
    <Link href={`/${locale}`} className="relative z-10 flex items-center gap-2">
      <div className="bg-primary items-center justify-center p-2 rounded-full md:flex hidden">
        <Lightning className="text-neutral-100" size={16} />
      </div>
      <h1 className="font-bold text-base md:block md:w-[11ch] md:text-base uppercase">
        <span className="md:hidden text-3xl">NB</span>
        <span className="md:inline hidden">
          Naianderson <span className="font-light">Bruno</span>
        </span>
      </h1>
    </Link>
  )
}
