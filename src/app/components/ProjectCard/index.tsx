import Image from 'next/image'

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
export function ProjectCard({ project }: Props) {
  return (
    <article className="w-full relative group aspect-square border border-neutral-700 rounded-xl overflow-hidden">
      <div className="absolute p-8 inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-between transition-opacity ease-in-out duration-300 bg-neutral-800/60">
        <header>
          <h2 className="font-bold mb-4">{project.title}</h2>
          {!!project?.description && (
            <p className="md:text-[1rem] text-[0.875rem]">
              {project.description}
            </p>
          )}
        </header>

        <footer className="flex items-center gap-8">
          <a href={project.repository}>Repository</a>
          {!!project?.demo && <a href={project.demo}>Demo</a>}
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
  )
}
