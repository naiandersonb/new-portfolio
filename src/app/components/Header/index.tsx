'use client'

import { changeAppTheme, getPreferSchemeColor } from '@/utils'
import { Lightning, List } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useEffect } from 'react'
import { LocaleSwitcher } from '../LocaleSwitcher'
import { LinkItem } from './LinkItem'

export function Header() {
  const t = useTranslations('Header')

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
          <h1 className="text-2xl font-extrabold italic dark:bg-stone-100 bg-stone-950  dark:text-stone-950 text-stone-100 p-2">
            NB
          </h1>
        </Link>

        <nav className="md:flex items-center gap-8 hidden">
          <LinkItem href="/" isSelected>
            {t('navigation.home')}
          </LinkItem>
          <LinkItem href="about">{t('navigation.about')}</LinkItem>
          <LinkItem href="contact">{t('navigation.contact')}</LinkItem>

          <div className="flex items-center gap-2">
            <LocaleSwitcher />

            <button
              onClick={changeAppTheme}
              className="p-2 rounded-full text-stone-950 dark:text-stone-200 bg-stone-50 dark:bg-stone-900"
            >
              <Lightning size={18} weight="fill" />
            </button>
          </div>
        </nav>

        <button className="text-zinc-950 dark:text-zinc-50 block  md:hidden">
          <List size={32} />
        </button>
      </div>
    </header>
  )
}
