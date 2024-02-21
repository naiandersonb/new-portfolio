import { Project } from '@/interfaces/home'
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
          <p className="font-overpassMono text-stone-500 md:text-base text-sm">
            {project.description}
          </p>
        )}

        <div className="font-overpassMono flex items-center gap-6">
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            Repositório
          </a>

          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </div>
      </div>
    </article>
  )
}
