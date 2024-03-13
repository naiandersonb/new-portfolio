'use client'

import { changeAppTheme, getPreferSchemeColor } from '@/utils'
import { Lightning, List } from '@phosphor-icons/react'
import Link from 'next/link'
import { useEffect } from 'react'
import { LinkItem } from './LinkItem'

export function Header() {
  useEffect(() => {
    const appTheme = localStorage.getItem('@nb:app-theme')
    if (!appTheme) getPreferSchemeColor()
    if (appTheme === 'dark') {
      const htmlElement = document.documentElement
      htmlElement.classList.add('dark')
    }
  }, [])

  return (
    <header className="fixed z-10 left-0 right-0 top-0 backdrop-blur-md dark:bg-stone-950/90 bg-stone-200/90">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl">
            NB <span className="dark:text-orange-300 text-orange-400">_</span>{' '}
          </h1>
        </Link>

        <nav className="md:flex items-center gap-8 hidden">
          <LinkItem href="/" isSelected>
            Home
          </LinkItem>
          <LinkItem href="/about">About me</LinkItem>
          <LinkItem href="/contact">Contact</LinkItem>

          <button
            onClick={changeAppTheme}
            className="p-2 rounded-full text-stone-950 dark:text-stone-200 bg-stone-50 dark:bg-stone-900"
          >
            <Lightning size={18} weight="fill" />
          </button>
        </nav>

        <button className="text-zinc-950 dark:text-zinc-50 block  md:hidden">
          <List size={32} />
        </button>
      </div>
    </header>
  )
}
