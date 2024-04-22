import { Project } from '@/interfaces/home'
import { Folders, Globe } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { ModalDetails } from '../ModalDetails'

interface Props {
  project: Project
}

export function Card({ project }: Props) {
  const t = useTranslations('Project')

  return (
    <article>
      <section className="relative w-full cursor-pointer group aspect-video rounded-xl overflow-hidden">
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
      <footer className="flex items-center mt-4 mb-8 justify-between gap-4">
        <ModalDetails project={project}>
          <button className="flex border uppercase text-xs font-bold p-2 rounded-full items-center gap-2 opacity-85 hover:opacity-100">
            {t('viewMore')}
          </button>
        </ModalDetails>

        <div className="flex items-center gap-4">
          <a
            className="flex uppercase text-xs font-bold rounded-full items-center gap-2 opacity-85 hover:opacity-100 hover:underline"
            href={project.repository}
            target="_blank"
          >
            <Folders size={16} />
            {t('repository')}
          </a>
          {!!project?.demo && (
            <a
              className="flex uppercase text-xs font-bold rounded-full items-center gap-2 opacity-85 hover:opacity-100 hover:underline"
              href={project.demo}
              target="_blank"
            >
              <Globe size={16} />
              Demo
            </a>
          )}
        </div>
      </footer>
    </article>
  )
}
