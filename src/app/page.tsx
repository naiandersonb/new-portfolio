'use client'

import { projects } from '@/data'
import { CardProject } from './components/home/CardProject'
import { Jumbotron } from './components/home/Jumbotron'

export default function Home() {
  return (
    <main className="container">
      <Jumbotron />

      <div data-id="projects">
        <h2 className="text-2xl font-bold">Meus Projetos</h2>

        <section className="grid gap-5 md:grid-cols-2 grid-cols-1 pb-4 md:divide-y-0 divide-y dark:divide-stone-800 divide-stone-300">
          {projects.map((project) => (
            <CardProject project={project} key={project.title} />
          ))}
        </section>
      </div>
    </main>
  )
}
