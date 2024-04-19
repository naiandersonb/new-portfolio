'use client'

import { List, X } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { LocaleSwitcher } from '../LocaleSwitcher'
import { LinkItem } from './LinkItem'

export function Header() {
  const t = useTranslations('Header')
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleIsOpen = () => setIsOpen(!isOpen)

  const isAboutPage = pathname.includes('/about')
  const isHome = !isAboutPage

  return (
    <header
      data-id="header"
      className="left-0 top-0 backdrop-blur-sm right-0 fixed z-10"
    >
      <div className="mx-auto h-[80px] md:px-8 px-4 max-w-[1200px] w-full flex items-center justify-between gap-3">
        <Link href="/">
          <h1 className="font-medium text-base uppercase">Naianderson Bruno</h1>
        </Link>

        <nav className="md:flex hidden items-center gap-8">
          <LinkItem isSelected={isHome} href="/">
            Home
          </LinkItem>
          <LinkItem isSelected={isAboutPage} href="/about">
            About Me
          </LinkItem>

          <LocaleSwitcher />
        </nav>
        <button onClick={toggleIsOpen} className="md:hidden block">
          {isOpen ? <X size={32} /> : <List size={32} />}
        </button>
      </div>
    </header>
  )
}
