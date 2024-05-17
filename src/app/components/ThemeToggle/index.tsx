'use client'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  console.log('🚀 ~ ThemeToggle ~ theme:', theme)

  return (
    <div className="flex items-center gap-2">
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('system')}>System</button>
    </div>
  )
}
