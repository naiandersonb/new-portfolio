import { Project } from '@/interfaces/home'
import { ArrowUpRight } from '@phosphor-icons/react'
import Image from 'next/image'
import { Stack } from '../Stack'

interface CardProjectProps {
  project: Project
}
export function CardProject({ project }: CardProjectProps) {
  return (
    <article className="cursor-pointer md:pb-6 md:grayscale md:hover:grayscale-0 transition">
      <div className="max-h-[313px] transition-all overflow-hidden rounded-md">
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

        {project.stacks && (
          <div
            data-id="stacks"
            className="flex mt-3 flex-wrap items-center gap-2"
          >
            {project.stacks.map((stack) => (
              <Stack stack={stack} key={stack} />
            ))}
          </div>
        )}

        <div className="flex items-center gap-6 mt-4 ">
          <a
            className="dark:hover:text-orange-300 hover:text-orange-400"
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repositório
          </a>

          <a
            className="flex items-center gap-3 dark:hover:text-orange-300 hover:text-orange-400"
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
