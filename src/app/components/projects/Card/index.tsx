import { Project } from '@/interfaces/home'
import { ArrowRight, Folders, Globe, LockSimple } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { ModalDetails } from '../ModalDetails'
import { CardLink } from './CardLink'

interface Props {
  project: Project
  index: number
}

export function Card({ project, index }: Props) {
  const t = useTranslations('Project')

  return (
    <article
      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:gap-12 gap-4 pb-7`}
    >
      <section className="relative w-full cursor-pointer aspect-video rounded-sm overflow-hidden flex-1 group-hover:opacity-80 group">
        <Image src={project.image} alt={project.title} objectFit="cover" fill />

        {project?.isPrivate && (
          <div className="absolute p-2 top-3 right-3 bg-stone-50 rounded-full text-stone-950 shadow-sm">
            <LockSimple size={20} />
          </div>
        )}
        {/* {project?.isPrivate ? (
          <div className="absolute p-2 top-3 right-3 bg-stone-50 rounded-full text-stone-950 shadow-sm">
            <LockSimple size={20} />
          </div>
        ) : (
          <ModalDetails project={project}>
            <div className="absolute md:invisible group-hover:visible p-2 top-3 right-3 bg-stone-50 rounded-full text-stone-950 shadow-sm">
              <ArrowUpRight size={20} />
            </div>
          </ModalDetails>
        )} */}
      </section>
      <section className="flex flex-col gap-5 justify-end flex-1">
        {project?.stacks && (
          <div className="divide-x divide-primary flex items-center font-ibmPlexMono text-xs uppercase text-primary">
            {project?.stacks.map((stack) => (
              <span className="px-2 first:pl-0" key={stack}>
                {stack}
              </span>
            ))}
          </div>
        )}
        <h2 className="font-bold md:text-lg">{project.title}</h2>
        {!!project?.description && (
          <p
            className="line-clamp-2 font-light dark:text-stone-400 text-stone-600 max-w-[43ch]"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        )}

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
          <ModalDetails project={project}>
            <button className="uppercase text-xs flex items-center gap-2 hover:gap-4 transition-[gap] ease-in-out">
              <span>{t('viewMore')}</span>
              <ArrowRight size={16} />
            </button>
          </ModalDetails>
        </div>
      </section>
    </article>
  )

  /* return (
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
  ) */
}
