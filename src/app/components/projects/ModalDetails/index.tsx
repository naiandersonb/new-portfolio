import { useDisclosure } from '@/app/hooks/useDisclosure'
import { ReactNode } from 'react'

interface ModalDetailsProps {
  children: ReactNode
}

export function ModalDetails({ children }: ModalDetailsProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <div onClick={onOpen}>{children}</div>

      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-neutral-800/50 backdrop-blur-lg"
        >
          test modal
        </div>
      )}
    </>
  )
}
