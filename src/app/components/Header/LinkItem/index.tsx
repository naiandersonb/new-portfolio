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
    <div
      className={`${isSelected ? 'text-[#1C7980] font-bold' : 'text-stone-100'}`}
    >
      <Link href={`/${locale}/${href}`}>{children}</Link>
    </div>
  )
}
