import { Project } from '@/interfaces/home'
import { ArrowUpRight, Folders, Globe, LockSimple } from '@phosphor-icons/react'
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
    <article className="border-b border-stone-900 pb-4">
      <section className="relative w-full cursor-pointer aspect-video rounded-sm overflow-hidden flex-1 group-hover:opacity-80 group">
        <Image src={project.image} alt={project.title} objectFit="cover" fill />

        {project?.isPrivate ? (
          <div className="absolute p-2 top-3 right-3 bg-stone-50 rounded-full text-stone-950 shadow-sm">
            <LockSimple size={20} />
          </div>
        ) : (
          <ModalDetails project={project}>
            <div className="absolute md:invisible group-hover:visible p-2 top-3 right-3 bg-stone-50 rounded-full text-stone-950 shadow-sm">
              <ArrowUpRight size={20} />
            </div>
          </ModalDetails>
        )}
      </section>
      {project?.stacks && (
        <div className="py-2 divide-x divide-stone-400 flex items-center font-ibmPlexMono text-xs uppercase text-stone-400">
          {project?.stacks.map((stack) => (
            <span className="px-2" key={stack}>
              {stack}
            </span>
          ))}
        </div>
      )}
      <h2 className="font-bold md:text-lg px-2">{project.title}</h2>
      <div className="flex items-center justify-between mt-2 gap-4 rounded-md">
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
      </div>
    </article>
  )
}
