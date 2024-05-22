'use client'

import { useDisclosure } from '@/app/hooks/useDisclosure'
import { Desktop, Moon, Sun } from '@phosphor-icons/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface CurrentTheme {
  theme: 'light' | 'dark' | 'system'
  icon: JSX.Element
}

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const { isOpen, onToggle, onClose } = useDisclosure()
  const [currentTheme, setCurrentTheme] = useState({
    theme: 'system',
    icon: <Desktop size={18} />,
  })

  const themesMode = [
    { theme: 'light', icon: <Sun size={18} /> },
    { theme: 'dark', icon: <Moon size={18} /> },
    { theme: 'system', icon: <Desktop size={18} /> },
  ] as const

  const handleSetTheme = (themeMode: CurrentTheme) => {
    setTheme(themeMode.theme)
    setCurrentTheme(themeMode)
    onClose()
  }

  useEffect(() => {
    switch (theme) {
      case 'dark':
        setCurrentTheme({ theme: 'dark', icon: <Moon size={18} /> })
        break
      case 'light':
        setCurrentTheme({ theme: 'light', icon: <Sun size={18} /> })
        break
      default:
        setCurrentTheme({ theme: 'system', icon: <Desktop size={18} /> })
    }
  }, [theme])

  return (
    <div className="flex items-center gap-2 relative">
      <button
        className="p-2 bg-amber-300 text-stone-950 rounded-md"
        onClick={onToggle}
      >
        {currentTheme.icon}
      </button>

      {isOpen && (
        <div className="flex flex-col absolute right-0 top-[110%] dark:bg-stone-950 bg-stone-100 border dark:border-stone-800 border-stone-200 rounded-md overflow-hidden">
          {themesMode.map((mode) => (
            <div
              className="flex items-center gap-2 cursor-pointer dark:hover:bg-stone-900 hover:bg-stone-300 px-2 py-1"
              key={mode.theme}
              onClick={() => handleSetTheme(mode)}
            >
              <span>{mode.icon}</span>
              <p>{mode.theme}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
