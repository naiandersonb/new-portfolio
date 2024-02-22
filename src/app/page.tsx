'use client'

import { projects } from '@/data'
import { CardProject } from './components/home/CardProject'
import { Jumbotron } from './components/home/Jumbotron'

export default function Home() {
  return (
    <main className="container">
      <Jumbotron />
      <div data-id="projects">
        <h2 className="text-2xl uppercase font-extrabold">Meus Projetos</h2>

        <section className="grid gap-5 md:grid-cols-2 grid-cols-1 mt-8 pb-4 md:divide-y-0 divide-y dark:divide-stone-800 divide-stone-300">
          {projects.map((project) => (
            <CardProject project={project} key={project.title} />
          ))}
        </section>
      </div>

      <div
        data-id="skills"
        className="py-6 flex flex-col items-center justify-center gap-4 dark:text-stone-700 text-stone-400"
      >
        <h3>Skills</h3>
        <div>
          html / css / javascript / typescript / styled-components / tailwind /
          react js / next js
        </div>
      </div>
    </main>
  )
}
