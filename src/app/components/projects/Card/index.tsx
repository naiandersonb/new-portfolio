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

  const isPrivateStyle = project?.isPrivate
    ? 'text-neutral-500 cursor-not-allowed'
    : 'opacity-85 hover:opacity-100 hover:underline'

  return (
    <article className="border p-2 rounded-xl border-neutral-800">
      <section className="relative w-full cursor-pointer group aspect-video rounded-md overflow-hidden">
        <Image
          unoptimized
          src={project.image}
          alt={project.title}
          objectFit="cover"
          fill
        />
        <div className="absolute p-6 inset-0 opacity-0 group-hover:opacity-100 hover:backdrop-blur-lg flex flex-col justify-between transition-opacity ease-in-out duration-300 bg-neutral-800/60">
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
      </section>
      <footer className="flex items-center mt-4 justify-between gap-4">
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
    </article>
  )
}
