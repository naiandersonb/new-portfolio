'use client'

import { projects } from '@/data/projects'
import { Hero } from '../components/Hero'
import { Reveal } from '../components/Revel'
import { Card } from '../components/projects/Card'

export default function Home() {
  return (
    <Reveal width="100%">
      <>
        <Hero />

        <div id="projects">
          <div className="grid grid-cols-1 gap-4">
            {projects.map((project) => (
              <Card key={project.id} project={project} />
            ))}
          </div>
        </div>
      </>
    </Reveal>
  )
}
