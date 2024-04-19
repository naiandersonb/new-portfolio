import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
interface Props {
  children: JSX.Element
  width?: 'fit-content' | '100%'
}
export function Reveal({ children, width = 'fit-content' }: Props) {
  const divRef = useRef<HTMLDivElement>(null)
  const isView = useInView(divRef, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isView) {
      mainControls.start('visible')
    }
  }, [isView, mainControls])

  return (
    <div
      ref={divRef}
      style={{ position: 'relative', width, overflow: 'hidden' }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
