'use client'

import { useLocale } from 'next-intl'
import Link from 'next/link'
import { ReactNode } from 'react'

interface LinkItemProps {
  href: string
  children: ReactNode
  isSelected?: boolean
  className?: string
}

export function LinkItem({
  children,
  href,
  className = '',
  isSelected = false,
}: LinkItemProps) {
  const locale = useLocale()

  return (
    <div
      className={`${isSelected ? 'md:font-bold md:dark:bg-stone-900 md:bg-stone-200 rounded-lg md:no-underline underline p-2' : 'dark:text-stone-100 text-stone-950'} ${className}`}
    >
      <Link href={`/${locale}/${href}`}>{children}</Link>
    </div>
  )
}
