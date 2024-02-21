'use client'

import { projects } from '@/data'
import Image from 'next/image'
import { Jumbotron } from './components/home/Jumbotron'

export default function Home() {
  return (
    <main className="container">
      <Jumbotron />
      <div data-id="projects">
        <h2 className="text-2xl uppercase font-extrabold">Meus Projetos</h2>

        <section className="grid gap-5 md:grid-cols-2 grid-cols-1 pt-8 pb-4">
          {projects.map((project) => (
            <article key={project.title}>
              <div className="max-h-[313px] overflow-hidden rounded-md">
                <Image
                  unoptimized
                  width={558}
                  height={313}
                  alt=""
                  src={project.banner}
                />
              </div>

              <div>
                <h2>{project.title}</h2>
                {!!project?.description && <p>{project.description}</p>}

                <div>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repositório
                  </a>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}
