import { Project } from '@/interfaces/home'
import { Folders, Globe } from '@phosphor-icons/react'
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
    <article className="border p-2 rounded-xl border-neutral-800 flex items-center md:flex-row flex-col gap-5">
      <section className="relative w-full cursor-pointer group aspect-video rounded-md overflow-hidden flex-1">
        <Image
          unoptimized
          src={project.image}
          alt={project.title}
          objectFit="cover"
          fill
        />
      </section>
      <section className="flex flex-col justify-between md:h-full md:py-6 py-3 md:pr-6 md:flex-1">
        <div className="flex flex-col justify-between transition-opacity ease-in-out duration-300">
          <h2 className="font-bold mb-4 md:text-lg">{project.title}</h2>
          {!!project?.description && (
            <p
              className="md:text-[1rem] text-[0.875rem] line-clamp-3"
              dangerouslySetInnerHTML={{
                __html: project.description,
              }}
            />
          )}
        </div>
        <footer className="flex items-center justify-between gap-4 md:mt-0 mt-4">
          <ModalDetails project={project}>
            <button className="flex border uppercase text-xs font-bold p-2 rounded-full items-center gap-2 opacity-85 hover:opacity-100">
              {t('viewMore')}
            </button>
          </ModalDetails>

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
        </footer>
      </section>
    </article>
  )
}
