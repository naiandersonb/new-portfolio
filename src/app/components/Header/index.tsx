'use client'

import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Footer } from '../Footer'
import { LocaleSwitcher } from '../LocaleSwitcher'
import { Logo } from '../Logo'
import { ThemeToggle } from '../ThemeToggle'
import { LinkItem } from './LinkItem'
import { MenuMobile } from './MenuMobile'

export function Header() {
  const t = useTranslations('Header')
  const pathname = usePathname()

  const isAboutPage = pathname.includes('/about')
  const isHome = !isAboutPage

  return (
    <header
      data-id="header"
      className="left-0 top-0 dark:bg-neutral-950/90 bg-neutral-300/90 backdrop-blur-xl border-b dark:border-b-neutral-900 border-b-neutral-400 right-0 fixed z-10"
    >
      <div className="mx-auto h-[80px] md:px-8 px-4 max-w-[1200px] w-full flex items-center justify-between gap-3">
        <Logo />

        <nav className="md:flex hidden items-center gap-8">
          <LinkItem isSelected={isHome} href="/">
            {t('navigation.home')}
          </LinkItem>
          <LinkItem isSelected={isAboutPage} href="/about">
            {t('navigation.about')}
          </LinkItem>

          <LocaleSwitcher />

          <ThemeToggle />
        </nav>

        <MenuMobile>
          <nav className="flex h-[85vh] flex-col justify-between p-4 mt-[80px] border-t border-t-neutral-900">
            <section className="flex flex-col">
              <LinkItem className="text-5xl py-6" isSelected={isHome} href="/">
                {t('navigation.home')}
              </LinkItem>
              <LinkItem
                className="text-5xl py-6"
                isSelected={isAboutPage}
                href="/about"
              >
                {t('navigation.about')}
              </LinkItem>
            </section>

            <Footer align="items-start" />
          </nav>
        </MenuMobile>
      </div>
    </header>
  )
}
