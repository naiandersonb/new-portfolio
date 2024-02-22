import { Project } from '@/interfaces/home'
import { ArrowUpRight } from '@phosphor-icons/react'
import Image from 'next/image'

interface CardProjectProps {
  project: Project
}
export function CardProject({ project }: CardProjectProps) {
  return (
    <article className="pt-7 md:py-0">
      <div className="max-h-[313px] overflow-hidden rounded-md">
        <Image
          unoptimized
          width={558}
          height={313}
          alt=""
          src={project.banner}
        />
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <h2 className="font-bold">{project.title}</h2>
        {!!project?.description && (
          <p className="text-stone-500 md:text-base text-sm">
            {project.description}
          </p>
        )}

        <div className="flex items-center gap-6 mt-4">
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            Repositório
          </a>

          <a
            className="flex items-center gap-3"
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </article>
  )
}
