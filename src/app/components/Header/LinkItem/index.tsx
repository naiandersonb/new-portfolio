'use client'

import { useLocale } from 'next-intl'
import Link from 'next/link'
import { ReactNode } from 'react'

interface LinkItemProps {
  href: string
  children: ReactNode
  isSelected?: boolean
}

export function LinkItem({
  children,
  href,
  isSelected = false,
}: LinkItemProps) {
  const locale = useLocale()

  return (
    <div className={`${isSelected ? 'text-stone-100' : 'text-stone-500'}`}>
      <Link href={`/${locale}/${href}`}>{children}</Link>
    </div>
  )
}
