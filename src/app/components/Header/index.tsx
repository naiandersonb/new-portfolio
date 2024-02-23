'use client'

import { changeAppTheme } from '@/utils'
import { List, Moon } from '@phosphor-icons/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { LinkItem } from './LinkItem'

export function Header() {
  const [currentTheme, setCurrentTheme] = useState('dark')

  useEffect(() => {
    const documentEl = document.getElementsByTagName('html')[0]
    const hasDarkClass = documentEl.classList.contains('dark')
    if (!hasDarkClass) {
      setCurrentTheme('light')
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
            className="p-2 rounded-full text-stone-200 dark:text-stone-950 bg-stone-950 dark:bg-stone-200"
          >
            <Moon size={18} />
          </button>
        </nav>

        <button className="text-zinc-950 dark:text-zinc-50 block  md:hidden">
          <List size={32} />
        </button>
      </div>
    </header>
  )
}
