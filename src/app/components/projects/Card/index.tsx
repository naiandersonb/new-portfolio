import { Folders, Globe } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { ModalDetails } from '../ModalDetails'

interface Project {
  title: string
  description?: string
  repository: string
  demo?: string
  image: string
}
interface Props {
  project: Project
}

export function Card({ project }: Props) {
  const t = useTranslations('Project')

  /* return (
    <article className="w-full relative cursor-pointer group aspect-square border border-neutral-700 rounded-xl overflow-hidden">
      <div className="absolute p-8 inset-0 opacity-0 group-hover:opacity-100 hover:backdrop-blur-lg flex flex-col justify-between transition-opacity ease-in-out duration-300 bg-neutral-800/60">
        <header>
          <h2 className="font-bold mb-4 md:text-lg">{project.title}</h2>
          {!!project?.description && (
            <p className="md:text-[1rem] text-[0.875rem]">
              {project.description}
            </p>
          )}
        </header>

        <footer className="flex items-center gap-4">
          <ModalDetails>
            <button>Ver mais</button>
          </ModalDetails>
          <a
            className="border p-2 rounded-lg opacity-85 hover:opacity-100"
            href={project.repository}
          >
            {t('repository')}
          </a>
          {!!project?.demo && (
            <a
              className="flex border p-2 rounded-lg items-center gap-2 opacity-85 hover:opacity-100"
              href={project.demo}
            >
              Demo <ArrowUpRight size={16} />
            </a>
          )}
        </footer>
      </div>
      <div>
        <Image
          unoptimized
          src={project.image}
          alt={project.title}
          width={558}
          height={558}
        />
      </div>
    </article>
  ) */

  return (
    <article>
      <section className="relative w-full cursor-pointer group aspect-video border border-neutral-700 rounded-xl overflow-hidden">
        <Image
          unoptimized
          src={project.image}
          alt={project.title}
          width={558}
          height={558}
        />
        <header className="absolute p-8 inset-0 opacity-0 group-hover:opacity-100 hover:backdrop-blur-lg flex flex-col justify-between transition-opacity ease-in-out duration-300 bg-neutral-800/60">
          <h2 className="font-bold mb-4 md:text-lg">{project.title}</h2>
          {!!project?.description && (
            <p className="md:text-[1rem] text-[0.875rem]">
              {project.description}
            </p>
          )}
        </header>
      </section>
      <footer className="flex items-center mt-4 mb-8 justify-between gap-4">
        <ModalDetails>
          <button className="flex border uppercase text-xs font-bold p-2 rounded-full items-center gap-2 opacity-85 hover:opacity-100">
            Ver mais
          </button>
        </ModalDetails>

        <div className="flex items-center gap-2">
          <a
            className="flex uppercase text-xs font-bold p-2 rounded-full items-center gap-2 opacity-85 hover:opacity-100 hover:underline"
            href={project.repository}
          >
            <Folders size={16} />
            {t('repository')}
          </a>
          {!!project?.demo && (
            <a
              className="flex uppercase text-xs font-bold p-2 rounded-full items-center gap-2 opacity-85 hover:opacity-100 hover:underline"
              href={project.demo}
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
