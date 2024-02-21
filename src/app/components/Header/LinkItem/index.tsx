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
  return (
    <div
      className={`font-overpassMono px-4 ${isSelected ? 'dark:text-stone-100 text-stone-950' : 'text-stone-500'}`}
    >
      <Link href={href}>{children}</Link>
    </div>
  )
}