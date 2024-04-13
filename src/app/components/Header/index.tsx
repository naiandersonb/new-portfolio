'use client'

import { getPreferSchemeColor } from '@/utils'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react'

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

  return <header></header>
}
