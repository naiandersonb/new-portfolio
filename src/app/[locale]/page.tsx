'use client'

import { Hero } from '../components/Hero'
import { Card } from '../components/projects/Card'
import { Reveal } from '../components/Revel'

const project = {
  title: 'Project name',
  image:
    'https://i.pinimg.com/564x/64/e7/38/64e738ace8eac22010618a8ccef1cef5.jpg',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad aliquam sequi, qui deserunt, porro esse ipsam harum.',
  repository: '#',
  demo: '#',
}

export default function Home() {
  return (
    <Reveal width="100%">
      <>
        <Hero />

        <div id="projects">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <Card key={item} project={project} />
            ))}
          </div>
        </div>
      </>
    </Reveal>
  )
}
