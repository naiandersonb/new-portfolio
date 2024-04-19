import { List, X } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

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
      <button onClick={toggleIsOpen} className="md:hidden flex relative z-10">
        {isOpen ? <X size={32} /> : <List size={32} />}
      </button>

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
