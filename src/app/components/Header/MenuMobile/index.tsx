import { List, X } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { LocaleSwitcher } from '../../LocaleSwitcher'

interface MenuMobileProps {
  children: JSX.Element
}
export function MenuMobile({ children }: MenuMobileProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleIsOpen = () => setIsOpen(!isOpen)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <div className="flex items-center gap-2 md:hidden relative z-10">
        <LocaleSwitcher />
        <button onClick={toggleIsOpen}>
          {isOpen ? <X size={32} /> : <List size={32} />}
        </button>
      </div>

      {isOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween' }}
            className="absolute top-0 bg-neutral-950 left-0 right-0 h-[100vh]"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )}
    </>
  )
}
