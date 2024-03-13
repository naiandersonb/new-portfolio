import { Project } from '@/interfaces/home'
import { ArrowUpRight } from '@phosphor-icons/react'
import Image from 'next/image'
import { useState } from 'react'
import { Stack } from '../Stack'

interface CardProjectProps {
  project: Project
}

export function NewCardProject({ project }: CardProjectProps) {
  const [isHover, setIsHover] = useState(false)

  return (
    <article
      className="cursor-pointer relative group md:h-[620px]"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="md:group-hover:max-h-[313px] md:max-h-[620px] max-h-[313px] transition-all overflow-hidden rounded-md">
        <Image
          unoptimized
          width={558}
          height={isHover ? 313 : 620}
          alt=""
          src={project.banner}
        />
      </div>

      <div className="md:absolute inset-0 p-4 md:bg-gradient-to-b md:from-slate-950/50 flex flex-col gap-3 hover:justify-end transition-all">
        <h2 className="font-bold backdrop-blur-md w-[max-content] px-4 py-2 group-hover:p-0 rounded-full overflow-hidden">
          {project.title}
        </h2>

        <div className="md:hidden group-hover:flex  flex-col gap-3">
          {!!project?.description && (
            <p className="text-stone-500 md:text-base text-sm">
              {project.description}
            </p>
          )}

          {project.stacks && (
            <div
              data-id="stacks"
              className="flex mt-3 flex-wrap items-center gap-4"
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
      </div>
    </article>
  )
}
