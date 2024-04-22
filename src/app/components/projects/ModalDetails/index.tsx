'use client'

import { useDisclosure } from '@/app/hooks/useDisclosure'
import { Project } from '@/interfaces/home'
import { Folders, Globe, X } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { ReactNode } from 'react'

interface ModalDetailsProps {
  children: ReactNode
  project: Project
}

export function ModalDetails({ children, project }: ModalDetailsProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const t = useTranslations('Project')

  const modalVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  }

  return (
    <>
      <div onClick={onOpen}>{children}</div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 flex md:items-center items-end justify-center bg-neutral-800/50 backdrop-blur-lg"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
          >
            <motion.div
              className="flex flex-col gap-6 max-w-[700px] w-full bg-neutral-950 rounded-md p-4 md:h-[max-content] h-[90vh]"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              exit={{ y: -50, opacity: 0, transition: { duration: 0.3 } }}
            >
              <header className="flex items-center gap-4 justify-between">
                <h2 className="font-bold md:text-2xl">{project.title}</h2>
                <button onClick={onClose}>
                  <X size={32} />
                </button>
              </header>

              <section className="relative w-full cursor-pointer group aspect-video rounded-xl overflow-hidden">
                <Image
                  unoptimized
                  fill
                  objectFit="cover"
                  src={project.image}
                  alt={project.title}
                />
              </section>

              {!!project?.description && (
                <p
                  className="text-base"
                  dangerouslySetInnerHTML={{
                    __html: project.description,
                  }}
                />
              )}

              <div className="flex items-center md:mt-0 mt-auto border-t border-t-neutral-700 pt-4 gap-4">
                <a
                  className="flex uppercase text-base font-bold rounded-full items-center gap-2 opacity-85 hover:opacity-100 hover:underline"
                  href={project.repository}
                >
                  <Folders size={16} />
                  {t('repository')}
                </a>
                {!!project?.demo && (
                  <a
                    className="flex uppercase text-base font-bold rounded-full items-center gap-2 opacity-85 hover:opacity-100 hover:underline"
                    href={project.demo}
                  >
                    <Globe size={16} />
                    Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
