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
      className={`${isSelected ? 'md:text-[#1C7980] md:font-bold' : 'text-stone-100'} ${className}`}
    >
      <Link href={`/${locale}/${href}`}>{children}</Link>
    </div>
  )
}
