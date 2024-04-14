'use client'

import { useTranslations } from 'next-intl'
import { LinkItem } from './LinkItem'

export function Header() {
  const t = useTranslations('Header')

  return (
    <header
      data-id="header"
      className="left-0 top-0 backdrop-blur-sm right-0 fixed"
    >
      <div className="mx-auto h-[80px] px-4 max-w-[1200px] w-full flex items-center justify-between gap-3">
        <h1 className="font-bold italic text-4xl">NB</h1>

        <nav className="flex items-center gap-10">
          <LinkItem href="/">Home</LinkItem>
          <LinkItem href="/about-me">About Me</LinkItem>
        </nav>
      </div>
    </header>
  )
}
