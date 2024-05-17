import { Project } from '@/interfaces/home'
import { Folders, Globe, LockSimple } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { ModalDetails } from '../ModalDetails'
import { CardLink } from './CardLink'

interface Props {
  project: Project
}

export function Card({ project }: Props) {
  const t = useTranslations('Project')

  return (
    <article className="p-4 group relative border border-neutral-800 rounded-md">
      <h2 className="font-bold my-2 md:text-lg">{project.title}</h2>
      <section className="relative w-full cursor-pointer aspect-video rounded-md overflow-hidden flex-1 group-hover:opacity-80">
        <Image src={project.image} alt={project.title} objectFit="cover" fill />

        {project?.isPrivate && (
          <div className="absolute p-2 top-3 right-3 bg-neutral-50 rounded-full text-neutral-500 shadow-sm">
            <LockSimple size={20} />
          </div>
        )}
      </section>

      <div className="flex items-center justify-between mt-3 gap-4 rounded-md">
        <div className="flex items-center gap-4">
          <CardLink
            href={project.repository}
            isDisabled={project?.isPrivate}
            icon={<Folders size={16} />}
          >
            {t('repository')}
          </CardLink>

          {!!project?.demo && (
            <CardLink href={project.demo} icon={<Globe size={16} />}>
              Demo
            </CardLink>
          )}
        </div>

        <ModalDetails project={project}>
          <button className="flex border uppercase text-xs font-bold p-2 rounded-full items-center gap-2 opacity-85 hover:opacity-100">
            {t('viewMore')}
          </button>
        </ModalDetails>
      </div>
    </article>
  )
}
